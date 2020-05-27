import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import { examplePaths, getExampleMarkdown, instructionsMarkdown } from '@lib/examples/helpers';
import examplesData, {
  ExamplesDataItem,
  introductionData,
  categoriesData
} from '@lib/examples/examplesData';
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
              key={sidebarItem.title}
              isMobile={isMobile}
              level={level}
              title={sidebarItem.title}
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
  data: ExamplesDataItem;
  instructions: string | null;
};

const ExamplesSlug: React.FC<Props> = ({ pageSlug, data, html, instructions }) => {
  const isMobile = useIsMobile();
  const titleTag = data.topPage ? data.title : `${data.title} | Next.js Examples`;

  return (
    <FeedbackContext.Provider value={{ label: 'next-examples' }}>
      <Page title={titleTag} description={data.description} sticky={!isMobile} isOldDocs={false}>
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
                title={data.title}
                html={html}
                demoUrl={data.demoUrl}
                instructions={instructions}
                pageSlug={pageSlug}
                description={data.description}
                introduction={!!data.local}
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
            title={data.title}
            url={`https://nextjs.org/examples/${pageSlug}`}
            image="/static/twitter-cards/documentation.png"
            description={data.description}
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
  const data =
    params.slug[0] === 'introduction'
      ? introductionData
      : params.slug[1] === 'introduction'
      ? categoriesData[params.slug[0]]
      : examplesData[params.slug.join('/')];
  if (!data) {
    throw new Error('Example Data Not Found');
  }
  const md = await getExampleMarkdown(data);
  let { content } = matter(md);
  if (data.markdownAfter && content.includes(data.markdownAfter)) {
    // eslint-disable-next-line prefer-destructuring
    content = `${data.markdownAfter}${content.split(data.markdownAfter)[1]}`;
  }
  const html = await markdownToHtml(content, { exampleName: data.github });
  const instructions = data.github ? await markdownToHtml(instructionsMarkdown(data.github)) : null;

  return { props: { pageSlug: params.slug.join('/'), data, html, instructions } };
};

export default ExamplesSlug;
