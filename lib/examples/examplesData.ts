type SidebarItem =
  | {
      title: string;
      routes: SidebarItem[];
    }
  | { path: string };

export const sidebarData: SidebarItem[] = [
  {
    title: 'Featured Examples',
    routes: [
      {
        path: 'introduction'
      },
      {
        title: 'Headless CMS',
        routes: [
          {
            path: 'headless-cms/introduction'
          },
          {
            path: 'headless-cms/contentful'
          },
          {
            path: 'headless-cms/datocms'
          },
          {
            path: 'headless-cms/prismic'
          },
          {
            path: 'headless-cms/sanity'
          },
          {
            path: 'headless-cms/takeshape'
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

export const examplesData = {
  introduction: {
    title: 'Introduction'
  },
  'headless-cms/introduction': {
    title: 'Introduction',
    category: 'Category'
  },
  'headless-cms/contentful': {
    title: 'Build a Next.js Blog with Contentful',
    category: 'Headless CMS',
    github: 'cms-contentful'
  },
  'headless-cms/datocms': {
    title: 'Build a Next.js Blog with DatoCMS',
    category: 'Headless CMS',
    github: 'cms-datocms'
  },
  'headless-cms/prismic': {
    title: 'Build a Next.js Blog with Prismic',
    category: 'Headless CMS',
    github: 'cms-prismic'
  },
  'headless-cms/sanity': {
    title: 'Build a Next.js Blog with Sanity',
    category: 'Headless CMS',
    github: 'cms-sanity'
  },
  'headless-cms/takeshape': {
    title: 'Build a Next.js Blog with TakeShape',
    category: 'Headless CMS',
    github: 'cms-takeshape'
  }
};

function getAllPaths(items: SidebarItem[]): string[] {
  const result: string[] = [];
  items.forEach(item => {
    if ('routes' in item) {
      result.push(...getAllPaths(item.routes));
    } else {
      result.push(item.path);
    }
  });
  return result;
}

export const examplePaths = getAllPaths(sidebarData);
