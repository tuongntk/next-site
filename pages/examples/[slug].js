import PageContent from '../../components/page-content';
import Container from '../../components/container';
import SocialMeta from '../../components/social-meta';
import { Sidebar, SidebarMobile } from '../../components/sidebar';
import Page from '../../components/page';
import Sticky from '../../components/sticky';
import { useIsMobile } from '../../components/media-query';
import FeedbackContext from '../../components/feedback-context';

const ExamplesSlug = ({ slug, data }) => {
  const isMobile = useIsMobile();
  const title = 'TODO';

  return (
    <FeedbackContext.Provider value={{ label: 'next-examples' }}>
      <Page title={title} description={false} sticky={!isMobile}>
        <PageContent>
          <Sticky shadow>
            <SidebarMobile></SidebarMobile>
          </Sticky>
          <Container>
            <div className="content">
              <Sidebar fixed></Sidebar>
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
    paths: [
      {
        params: { slug: 'foo' }
      }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug, data: { params } } };
}

export default ExamplesSlug;
