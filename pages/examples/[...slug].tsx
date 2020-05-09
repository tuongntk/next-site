import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import {
  examplePaths,
  examplesData,
  ExamplesDataItem,
  getExampleMarkdown
} from '@lib/examples/examplesData';
// import PageContent from '../../components/page-content';
// import Container from '../../components/container';
// import SocialMeta from '../../components/social-meta';
// import { Sidebar, SidebarMobile, Post, Category, Heading } from '../../components/sidebar';
// import Page from '../../components/page';
// import Sticky from '../../components/sticky';
// import { useIsMobile } from '../../components/media-query';
// import FeedbackContext from '../../components/feedback-context';
import markdownToHtml from '../../lib/docs/markdown-to-html';
// import ExamplesPage from '../../components/examples/examples-page';
// import { getRawFileFromRepo } from '../../lib/github/raw';

// function getCategoryPath(routes) {
//   const route = routes.find(r => r.slug);
//   return route && route.slug;
// }

// function SidebarRoutes({ isMobile, pageSlug, routes: currentRoutes, level = 1 }) {
//   return currentRoutes.map(({ slug, title, routes, heading, open }) => {
//     if (routes) {
//       const pathname = getCategoryPath(routes);
//       const selected = title === examplesData[pageSlug].category; // TODO
//       const opened = selected || isMobile ? false : open;

//       if (heading) {
//         return (
//           <Heading key={pathname} title={title}>
//             <SidebarRoutes
//               pageSlug={pageSlug}
//               isMobile={isMobile}
//               routes={routes}
//               level={level + 1}
//             />
//           </Heading>
//         );
//       }

//       return (
//         <Category
//           key={pathname}
//           isMobile={isMobile}
//           level={level}
//           title={title}
//           selected={selected}
//           opened={opened}
//         >
//           <SidebarRoutes
//             pageSlug={pageSlug}
//             isMobile={isMobile}
//             routes={routes}
//             level={level + 1}
//           />
//         </Category>
//       );
//     }

//     const href = '/examples/[slug]';
//     const pagePath = slug;
//     const pathname = pagePath;
//     const selected = slug === pageSlug; // TODO
//     const route = { href, slug, title, pathname, selected };

//     return <Post key={title} isMobile={isMobile} level={level} route={route} />;
//   });
// }

type Props = {
  slug: string[];
  html: string;
  data: ExamplesDataItem;
};

const ExamplesSlug: React.FC<Props> = ({ slug, data, html }) => {
  // const isMobile = useIsMobile();

  return <>{JSON.stringify({ slug, data, html })}</>;
  // <FeedbackContext.Provider value={{ label: 'next-examples' }}>
  //   <Page title={data.title} description={false} sticky={!isMobile}>
  //     <PageContent>
  //       <Sticky shadow>
  //         <SidebarMobile>
  //           <SidebarRoutes pageSlug={slug} isMobile routes={sidebarData} />
  //         </SidebarMobile>
  //       </Sticky>
  //       <Container>
  //         <div className="content">
  //           <Sidebar fixed>
  //             <SidebarRoutes pageSlug={slug} routes={sidebarData} />
  //           </Sidebar>
  //           <ExamplesPage html={html} />
  //         </div>
  //         <style jsx>{`
  //           .content {
  //             position: relative;
  //             display: flex;
  //             margin-top: 2rem;
  //           }
  //           /* Remove the top margin of the first heading in the sidebar */
  //           :global(.heading:first-child > h4) {
  //             margin-top: 0;
  //           }
  //         `}</style>
  //       </Container>
  //       <SocialMeta
  //         title={data.title}
  //         url={`https://nextjs.org/examples/${slug}`}
  //         image="/static/twitter-cards/documentation.png"
  //         description={data.description}
  //       />
  //     </PageContent>
  //   </Page>
  // </FeedbackContext.Provider>
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log(examplePaths);
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
  const html = await markdownToHtml(params.slug.join('/'), '', content);
  return { props: { slug: params.slug, data, html } };
};

export default ExamplesSlug;
