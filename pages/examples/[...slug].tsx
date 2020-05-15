import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import { examplePaths, getExampleMarkdown } from '@lib/examples/helpers';
import examplesData, { ExamplesDataItem } from '@lib/examples/examplesData';
import sidebarData, { SidebarItem } from '@lib/examples/sidebarData';
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
  routes: SidebarItem[];
  level?: number;
}) {
  return (
    <>
      {currentRoutes.map(sidebarItem => {
        if (sidebarItem.type === 'heading') {
          return (
            <Heading key={sidebarItem.title} title={sidebarItem.title}>
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
          title: (examplesData[sidebarItem.slug] || {}).title,
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
};

const ExamplesSlug: React.FC<Props> = ({ pageSlug, data, html }) => {
  const isMobile = useIsMobile();

  return (
    <FeedbackContext.Provider value={{ label: 'next-examples' }}>
      <Page title={data.title} description={false} sticky={!isMobile} isOldDocs={false}>
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
              <ExamplesPage html={html} />
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
  const data = examplesData[params.slug.join('/')];
  if (!data) {
    throw new Error('Example Data Not Found');
  }
  const md = await getExampleMarkdown(data);
  const { content } = matter(md);
  const html = await markdownToHtml(content);
  return { props: { pageSlug: params.slug.join('/'), data, html } };
};

export default ExamplesSlug;
