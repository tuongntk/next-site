import matter from 'gray-matter';
import PageContent from '../../components/page-content';
import Container from '../../components/container';
import SocialMeta from '../../components/social-meta';
import { Sidebar, SidebarMobile, Post, Category, Heading } from '../../components/sidebar';
import Page from '../../components/page';
import Sticky from '../../components/sticky';
import { useIsMobile } from '../../components/media-query';
import FeedbackContext from '../../components/feedback-context';
import { examplePaths, examplesData, sidebarData } from '../../lib/examples/examplesData';
import markdownToHtml from '../../lib/docs/markdown-to-html';
import ExamplesPage from '../../components/examples/examples-page';
import { getRawFileFromRepo } from '../../lib/github/raw';

function getCategoryPath(routes) {
  const route = routes.find(r => r.slug);
  return route && route.slug;
}

function SidebarRoutes({ isMobile, pageSlug, routes: currentRoutes, level = 1 }) {
  return currentRoutes.map(({ slug, title, routes, heading, open }) => {
    if (routes) {
      const pathname = getCategoryPath(routes);
      const selected = title === examplesData[pageSlug].category; // TODO
      const opened = selected || isMobile ? false : open;

      if (heading) {
        return (
          <Heading key={pathname} title={title}>
            <SidebarRoutes
              pageSlug={pageSlug}
              isMobile={isMobile}
              routes={routes}
              level={level + 1}
            />
          </Heading>
        );
      }

      return (
        <Category
          key={pathname}
          isMobile={isMobile}
          level={level}
          title={title}
          selected={selected}
          opened={opened}
        >
          <SidebarRoutes
            pageSlug={pageSlug}
            isMobile={isMobile}
            routes={routes}
            level={level + 1}
          />
        </Category>
      );
    }

    const href = '/examples/[slug]';
    const pagePath = slug;
    const pathname = pagePath;
    const selected = slug === pageSlug; // TODO
    const route = { href, slug, title, pathname, selected };

    return <Post key={title} isMobile={isMobile} level={level} route={route} />;
  });
}

const ExamplesSlug = ({ slug, data, html }) => {
  const isMobile = useIsMobile();

  return (
    <FeedbackContext.Provider value={{ label: 'next-examples' }}>
      <Page title={data.title} description={false} sticky={!isMobile}>
        <PageContent>
          <Sticky shadow>
            <SidebarMobile>
              <SidebarRoutes pageSlug={slug} isMobile routes={sidebarData} />
            </SidebarMobile>
          </Sticky>
          <Container>
            <div className="content">
              <Sidebar fixed>
                <SidebarRoutes pageSlug={slug} routes={sidebarData} />
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
            url={`https://nextjs.org/examples/${slug}`}
            image="/static/twitter-cards/documentation.png"
            description={data.description}
          />
        </PageContent>
      </Page>
    </FeedbackContext.Provider>
  );
};

export async function getStaticPaths() {
  return {
    paths: examplePaths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log(`canary/examples/${params.slug.join('/')}/README.md`);
  const md = await getRawFileFromRepo(`canary/examples/${params.slug.join('/')}/README.md`, '');
  const { content } = matter(md);
  const html = await markdownToHtml(params.slug.join('/'), '', content);
  return { props: { slug: params.slug, data: examplesData[params.slug.join('/')], html } };
}

export default ExamplesSlug;
