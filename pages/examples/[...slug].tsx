import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import { GITHUB_URL, REPO_NAME } from 'lib/github/constants';
import {
  examplePaths,
  getExampleMarkdown,
  instructionsMarkdown,
  getLocalMarkdown
} from '@lib/examples/helpers';
import examplesData, { introductionData, categoriesData } from '@lib/examples/examplesData';
import sidebarData, { CategoryItem, HeadingItem, ExampleItem } from '@lib/examples/sidebarData';
import PageContent from '@components/page-content';
import Container from '@components/container';
import SocialMeta from '@components/social-meta';
import { Sidebar, SidebarMobile, Post, Category, Heading } from '@components/sidebar';
import Page from '@components/page';
import Sticky from '@components/sticky';
import { useIsMobile } from '@components/media-query';
import FeedbackContext from '@components/feedback-context';
import markdownToHtml from '@lib/examples/markdown-to-html';
import ExamplesPage from '@components/examples/examples-page';

function SidebarRoutes({
  isMobile,
  pageSlug,
  routes: currentRoutes,
  level = 1
}: {
  isMobile?: boolean;
  pageSlug: string;
  routes: (HeadingItem | CategoryItem | ExampleItem)[];
  level?: number;
}) {
  return (
    <>
      {currentRoutes.map(sidebarItem => {
        if (sidebarItem.type === 'heading') {
          return (
            <Heading key={sidebarItem.title} title={sidebarItem.title}>
              {sidebarItem.hasIntroduction && (
                <Post
                  isMobile={isMobile}
                  level={level}
                  route={{
                    href: '/examples/[...slug]',
                    slug: 'introduction',
                    title: 'Introduction',
                    pathname: `/examples/introduction`,
                    selected: pageSlug === 'introduction'
                  }}
                />
              )}
              <SidebarRoutes
                pageSlug={pageSlug}
                isMobile={isMobile}
                routes={sidebarItem.routes}
                level={level + 1}
              />
            </Heading>
          );
        }
        if (sidebarItem.type === 'category') {
          const selected = pageSlug.startsWith(sidebarItem.prefix);
          return (
            <Category
              key={sidebarItem.prefix}
              isMobile={isMobile}
              level={level}
              title={categoriesData[sidebarItem.prefix].title}
              selected={selected}
              opened={selected}
            >
              {sidebarItem.hasIntroduction && (
                <Post
                  isMobile={isMobile}
                  level={level}
                  route={{
                    href: '/examples/[...slug]',
                    slug: `/examples/${sidebarItem.prefix}/introduction`,
                    title: 'Introduction',
                    pathname: `/examples/${sidebarItem.prefix}/introduction`,
                    selected: pageSlug === `${sidebarItem.prefix}/introduction`
                  }}
                />
              )}
              <SidebarRoutes
                pageSlug={pageSlug}
                isMobile={isMobile}
                routes={sidebarItem.routes}
                level={level + 1}
              />
            </Category>
          );
        }
        const selected = sidebarItem.slug === pageSlug;
        const route = {
          href: '/examples/[...slug]',
          slug: sidebarItem.slug,
          title: (examplesData[sidebarItem.slug] || {}).sidebarLabel,
          pathname: `/examples/${sidebarItem.slug}`,
          selected
        };

        return <Post key={sidebarItem.slug} isMobile={isMobile} level={level} route={route} />;
      })}
    </>
  );
}

type Props = {
  pageSlug: string;
  html: string;
  topPage: boolean;
  categoryPage: boolean;
  description: string | null;
  demoUrl: string | null;
  title: string;
  instructions: string | null;
};

const ExamplesSlug: React.FC<Props> = ({
  pageSlug,
  html,
  title,
  topPage,
  categoryPage,
  description,
  demoUrl,
  sourceUrl,
  instructions
}) => {
  const isMobile = useIsMobile();
  const titleTag = topPage ? title : `${title} | Next.js Examples`;

  return (
    <FeedbackContext.Provider value={{ label: 'next-examples' }}>
      <Page title={titleTag} description={description} sticky={!isMobile} isOldDocs={false}>
        <PageContent>
          <Sticky shadow offset={null}>
            <SidebarMobile>
              <SidebarRoutes pageSlug={pageSlug} isMobile routes={sidebarData} />
            </SidebarMobile>
          </Sticky>
          <Container>
            <div className="content">
              <Sidebar fixed>
                <SidebarRoutes pageSlug={pageSlug} routes={sidebarData} />
              </Sidebar>
              <ExamplesPage
                title={title}
                html={html}
                demoUrl={demoUrl}
                instructions={instructions}
                pageSlug={pageSlug}
                description={description}
                categoryPage={categoryPage}
                sourceUrl={sourceUrl}
              />
            </div>
            <style jsx>{`
              .content {
                position: relative;
                display: flex;
                margin-top: 2rem;
              }
              /* Remove the top margin of the first heading in the sidebar */
              :global(.heading:first-child > h4) {
                margin-top: 0;
              }
            `}</style>
          </Container>
          <SocialMeta
            title={title}
            url={`https://nextjs.org/examples/${pageSlug}`}
            image="/static/twitter-cards/documentation.png"
            description={description}
          />
        </PageContent>
      </Page>
    </FeedbackContext.Provider>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: examplePaths,
    fallback: false
  });
};

export const getStaticProps: GetStaticProps<Props, { slug: string[] }> = async ({ params }) => {
  if (!params) {
    throw new Error('Params don’t exist');
  }
  let markdown: string;
  let content: string;
  let html: string;
  if (params.slug.includes('introduction')) {
    const topPage = params.slug[0] === 'introduction';
    const { title, description } = topPage ? introductionData : categoriesData[params.slug[0]];
    markdown = topPage
      ? await getLocalMarkdown('introduction')
      : await getLocalMarkdown(params.slug[0]);
    content = matter(markdown).content;
    html = await markdownToHtml(markdown);
    return {
      props: {
        pageSlug: params.slug.join('/'),
        html,
        topPage,
        categoryPage: !topPage,
        title,
        description,
        demoUrl: null,
        instructions: null
      }
    };
  }
  const data = examplesData[params.slug.join('/')];
  if (!data) {
    throw new Error('Example Data Not Found');
  }
  markdown = await getExampleMarkdown(data.github);
  content = matter(markdown).content;
  if (data.markdownAfter && content.includes(data.markdownAfter)) {
    // eslint-disable-next-line prefer-destructuring
    content = `${data.markdownAfter}${content.split(data.markdownAfter)[1]}`;
  }
  html = await markdownToHtml(content, { exampleName: data.github });
  const instructions = await markdownToHtml(instructionsMarkdown(data.github));
  const sourceUrl = `${GITHUB_URL}/${REPO_NAME}/tree/canary/examples/${data.github}`;
  return {
    props: {
      pageSlug: params.slug.join('/'),
      html,
      instructions,
      description: data.description || null,
      demoUrl: data.demoUrl || null,
      title: data.title,
      topPage: false,
      categoryPage: false,
      sourceUrl
    }
  };
};

export default ExamplesSlug;
