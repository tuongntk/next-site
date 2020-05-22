export type SidebarItem =
  | {
      type: 'heading';
      title: string;
      routes: SidebarItem[];
    }
  | { type: 'example'; slug: string }
  | {
      type: 'category';
      prefix: string;
      title: string;
      routes: SidebarItem[];
    };

const sidebarData: SidebarItem[] = [
  {
    type: 'heading',
    title: 'Featured Examples',
    routes: [
      {
        slug: 'introduction',
        type: 'example'
      },
      {
        title: 'Headless CMS',
        type: 'category',
        prefix: 'headless-cms',
        routes: [
          {
            type: 'example',
            slug: 'headless-cms/introduction'
          },
          {
            type: 'example',
            slug: 'headless-cms/contentful'
          },
          {
            type: 'example',
            slug: 'headless-cms/datocms'
          },
          {
            type: 'example',
            slug: 'headless-cms/prismic'
          },
          {
            type: 'example',
            slug: 'headless-cms/sanity'
          },
          {
            type: 'example',
            slug: 'headless-cms/takeshape'
          }
        ]
      },
      {
        title: 'Authentication',
        type: 'category',
        prefix: 'authentication',
        routes: [
          {
            type: 'example',
            slug: 'authentication/introduction'
          },
          {
            type: 'example',
            slug: 'authentication/auth0'
          }
        ]
      },
      {
        title: 'Databases',
        type: 'category',
        prefix: 'databases',
        routes: [
          {
            type: 'example',
            slug: 'databases/introduction'
          },
          {
            type: 'example',
            slug: 'databases/fauna'
          }
        ]
      },
      {
        title: 'Images & Videos',
        type: 'category',
        prefix: 'images-videos',
        routes: [
          {
            type: 'example',
            slug: 'images-videos/introduction'
          },
          {
            type: 'example',
            slug: 'images-videos/mux'
          }
        ]
      }
      // {
      //   title: 'Emails',
      //   routes: [
      //     {
      //       title: '?',
      //       slug: '?'
      //     }
      //   ]
      // },
      // {
      //   title: 'API Routes and Middleware',
      //   routes: [
      //     {
      //       title: '?',
      //       slug: '?'
      //     }
      //   ]
      // },
      // {
      //   title: 'Realtime',
      //   routes: [
      //     {
      //       title: '?',
      //       slug: '?'
      //     }
      //   ]
      // },
      // {
      //   title: 'Caching',
      //   routes: [
      //     {
      //       titlle: '?',
      //       slug: '?'
      //     }
      //   ]
      // },
      // {
      //   title: 'CSS and Styling',
      //   routes: [
      //     {
      //       title: '?',
      //       slug: '?'
      //     }
      //   ]
      // }
    ]
  },
  {
    title: 'More Examples',
    type: 'heading',
    routes: [
      {
        title: 'Amp',
        type: 'category',
        prefix: 'amp',
        routes: [
          {
            type: 'example',
            slug: 'amp'
          }
        ]
      }
    ]
  }
  //   routes: [
  //     {
  //       title: 'Routing',
  //       routes: [
  //         {
  //           title: '?',
  //           slug: '?'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Amp',
  //       routes: [
  //         {
  //           title: '?',
  //           slug: '?'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Configuration and Plugins',
  //       routes: [
  //         {
  //           title: '?',
  //           slug: '?'
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default sidebarData;
