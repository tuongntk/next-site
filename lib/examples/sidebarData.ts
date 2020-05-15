export type SidebarItem =
  | {
      type: 'heading';
      title: string;
      routes: SidebarItem[];
    }
  | { type: 'example'; slug: string }
  | {
      type: 'category';
      prefix: 'headless-cms';
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
      }
      // {
      //   title: 'Authentication',
      //   routes: [
      //     {
      //       path: 'authentication/introduction'
      //     },
      //     {
      //       path: 'authentication/auth0'
      //     }
      //   ]
      // }
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
      //   title: 'Databases',
      //   routes: [
      //     {
      //       title: '?',
      //       slug: '?'
      //     }
      //   ]
      // },
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
  }
  // {
  //   title: 'More Examples',
  //   heading: true,
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
