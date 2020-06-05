export type HeadingItem = {
  type: 'heading';
  title: string;
  hasIntroduction?: boolean;
  routes: (ExampleItem | CategoryItem)[];
};

export type CategoryItem = {
  type: 'category';
  prefix: string;
  hasIntroduction?: boolean;
  routes: ExampleItem[];
};

export type ExampleItem = { type: 'example'; slug: string };

export const featuredCategories: CategoryItem[] = [
  {
    type: 'category',
    prefix: 'blog-headless-cms',
    hasIntroduction: true,
    routes: [
      {
        type: 'example',
        slug: 'blog-headless-cms/blog-starter'
      },
      {
        type: 'example',
        slug: 'blog-headless-cms/wordpress'
      },
      // Headless CMS platforms, sorted alphabetically
      {
        type: 'example',
        slug: 'blog-headless-cms/agility-cms'
      },
      {
        type: 'example',
        slug: 'blog-headless-cms/contentful'
      },
      {
        type: 'example',
        slug: 'blog-headless-cms/datocms'
      },
      {
        type: 'example',
        slug: 'blog-headless-cms/prismic'
      },
      {
        type: 'example',
        slug: 'blog-headless-cms/sanity'
      },
      {
        type: 'example',
        slug: 'blog-headless-cms/strapi'
      },
      {
        type: 'example',
        slug: 'blog-headless-cms/takeshape'
      }
    ]
  },
  {
    type: 'category',
    prefix: 'authentication',
    hasIntroduction: true,
    routes: [
      {
        type: 'example',
        slug: 'authentication/auth0'
      }
    ]
  },
  // {
  //   type: 'category',
  //   prefix: 'databases-graphql',
  //   hasIntroduction: true,
  //   routes: [
  //     {
  //       type: 'example',
  //       slug: 'databases-graphql/fauna'
  //     }
  //   ]
  // },
  {
    type: 'category',
    prefix: 'images-videos',
    hasIntroduction: true,
    routes: [
      {
        type: 'example',
        slug: 'images-videos/mux'
      }
    ]
  }
  // {
  //   title: 'Emails',
  //   hasIntroduction: true,
  //   routes: [
  //     {
  //       title: '?',
  //       slug: '?'
  //     }
  //   ]
  // },
  // {
  //   title: 'API Routes and Middleware',
  //   hasIntroduction: true,
  //   routes: [
  //     {
  //       title: '?',
  //       slug: '?'
  //     }
  //   ]
  // },
  // {
  //   title: 'Realtime',
  //   hasIntroduction: true,
  //   routes: [
  //     {
  //       title: '?',
  //       slug: '?'
  //     }
  //   ]
  // },
  // {
  //   title: 'Caching',
  //   hasIntroduction: true,
  //   routes: [
  //     {
  //       titlle: '?',
  //       slug: '?'
  //     }
  //   ]
  // },
  // {
  //   title: 'CSS and Styling',
  //   hasIntroduction: true,
  //   routes: [
  //     {
  //       title: '?',
  //       slug: '?'
  //     }
  //   ]
  // }
];

const sidebarData: HeadingItem[] = [
  {
    type: 'heading',
    title: 'Featured Examples',
    hasIntroduction: true,
    routes: featuredCategories
  }
  // {
  //   title: 'More Examples',
  //   type: 'heading',
  //   routes: [
  //     {
  //       type: 'category',
  //       prefix: 'amp',
  //       routes: [
  //         {
  //           type: 'example',
  //           slug: 'amp/amp-story'
  //         }
  //       ]
  //     }
  //   ]
  // }
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
