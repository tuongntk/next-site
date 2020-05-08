export const sidebarData = [
  {
    title: 'Featured Examples',
    heading: true,
    routes: [
      {
        title: 'Headless CMS',
        open: true,
        // TODO: Make this just a list of slugs and move title to examplesData
        routes: [
          {
            title: 'Introduction',
            slug: 'foobar'
          },
          {
            title: 'Contentful',
            slug: 'cms-contentful'
          },
          {
            title: 'DatoCMS',
            slug: 'cms-datocms'
          },
          {
            title: 'Prismic',
            slug: 'cms-prismic'
          },
          {
            title: 'Sanity',
            slug: 'cms-sanity'
          },
          {
            title: 'TakeShape',
            slug: 'cms-takeshape'
          }
        ]
      },
      {
        title: 'Authentication',
        routes: [
          {
            title: 'Auth0',
            slug: 'auth0'
          }
        ]
      },
      {
        title: 'API Routes and Middleware',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      },
      {
        title: 'Realtime',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      },
      {
        title: 'Databases',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      },
      {
        title: 'Emails',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      },
      {
        title: 'Caching',
        routes: [
          {
            titlle: '?',
            slug: '?'
          }
        ]
      },
      {
        title: 'CSS and Styling',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      }
    ]
  },
  {
    title: 'More Examples',
    heading: true,
    routes: [
      {
        title: 'Routing',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      },
      {
        title: 'Amp',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      },
      {
        title: 'Configuration and Plugins',
        routes: [
          {
            title: '?',
            slug: '?'
          }
        ]
      }
    ]
  }
];

export const examplesData = {
  'cms-contentful': {
    title: 'Build a Next.js Blog with Contentful',
    // TODO: Allow multiple
    category: 'Headless CMS'
  },
  'cms-datocms': {
    title: 'Build a Next.js Blog with DatoCMS',
    category: 'Headless CMS'
  },
  'cms-prismic': {
    title: 'Build a Next.js Blog with Prismic',
    category: 'Headless CMS'
  },
  'cms-sanity': {
    title: 'Build a Next.js Blog with Sanity',
    category: 'Headless CMS'
  },
  'cms-takeshape': {
    title: 'Build a Next.js Blog with TakeShape',
    category: 'Headless CMS'
  }
};

export const examplePaths = sidebarData[0].routes[0].routes.map(({ slug }) => ({
  params: {
    slug
  }
}));
