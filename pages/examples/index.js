import PageContent from '../../components/page-content';
import Container from '../../components/container';
import SocialMeta from '../../components/social-meta';
import { Sidebar, SidebarMobile } from '../../components/sidebar';
import Page from '../../components/page';
import Sticky from '../../components/sticky';
import { useIsMobile } from '../../components/media-query';
import FeedbackContext from '../../components/feedback-context';
import { ORG_NAME } from '../../lib/constants';

const ExamplesIndex = () => {
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
            url="https://nextjs.org/examples"
            image="/static/twitter-cards/documentation.png"
            description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build pre-rendered applications, static websites, and more.`}
          />
        </PageContent>
      </Page>
    </FeedbackContext.Provider>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default ExamplesIndex;
