export type SidebarItem = {
  type: 'heading';
  title: string;
  routes: (ExampleItem | CategoryItem)[];
};

export type CategoryItem = {
  type: 'category';
  prefix: string;
  title: string;
  routes: ExampleItem[];
};

export type ExampleItem = { type: 'example'; slug: string };

export const featuredCategories: CategoryItem[] = [
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
    title: 'Databases & GraphQL',
    type: 'category',
    prefix: 'databases-graphql',
    routes: [
      {
        type: 'example',
        slug: 'databases-graphql/introduction'
      },
      {
        type: 'example',
        slug: 'databases-graphql/fauna'
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
];

const sidebarData: SidebarItem[] = [
  {
    type: 'heading',
    title: 'Featured Examples',
    routes: [
      {
        slug: 'introduction',
        type: 'example'
      },
      ...featuredCategories
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
            slug: 'amp/amp-story'
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
