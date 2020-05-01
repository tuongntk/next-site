export const sidebarData = [
  {
    title: 'Examples',
    heading: true,
    routes: [
      {
        title: 'Headless CMS',
        open: true,
        // TODO: Make this just a list of slugs and move title to examplesData
        routes: [
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
