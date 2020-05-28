export type ExamplesDataItem = {
  sidebarLabel: string;
  title: string;
  github: string;
  description?: string;
  mainContentStart?: string;
  demoUrl?: string;
};

export const introductionData = {
  title: 'Next.js Examples',
  description: 'TODO'
};

export const categoriesData: {
  [key: string]: {
    title: string;
    description: string;
  };
} = {
  'blog-headless-cms': { title: 'Blog & Headless CMS', description: 'TODO' },
  authentication: { title: 'Authentication', description: 'TODO' },
  'databases-graphql': { title: 'Databases & GraphQL', description: 'TODO' },
  'images-videos': { title: 'Images & Videos', description: 'TODO' },
  amp: { title: 'Amp', description: 'TODO' }
};

const examplesData: {
  [key: string]: ExamplesDataItem | undefined;
} = {
  'blog-headless-cms/blog-starter': {
    sidebarLabel: 'Markdown Blog',
    title: 'Build a Next.js Blog using Markdown',
    github: 'blog-starter',
    mainContentStart: '# Notes'
  },
  'blog-headless-cms/contentful': {
    sidebarLabel: 'Contentful',
    title: 'Build a Next.js Blog with Contentful',
    github: 'cms-contentful',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-contentful.now.sh/',
    description:
      'This example showcases Next.js’s Static Generation feature using Contentful as the data source.'
  },
  'blog-headless-cms/datocms': {
    sidebarLabel: 'DatoCMS',
    title: 'Build a Next.js Blog with DatoCMS',
    github: 'cms-datocms',
    mainContentStart: '## Configuration'
  },
  'blog-headless-cms/prismic': {
    sidebarLabel: 'Prismic',
    title: 'Build a Next.js Blog with Prismic',
    github: 'cms-prismic',
    mainContentStart: '## Configuration'
  },
  'blog-headless-cms/sanity': {
    sidebarLabel: 'Sanity',
    title: 'Build a Next.js Blog with Sanity',
    github: 'cms-sanity',
    mainContentStart: '## Configuration'
  },
  'blog-headless-cms/takeshape': {
    sidebarLabel: 'TakeShape',
    title: 'Build a Next.js Blog with TakeShape',
    github: 'cms-takeshape',
    mainContentStart: '## Configuration'
  },
  'authentication/auth0': {
    sidebarLabel: 'Auth0',
    title: 'Next.js Authentication with Auth0',
    github: 'auth0'
  },
  'databases-graphql/fauna': {
    sidebarLabel: 'Fauna',
    title: 'Connect a Next.js App with FaunaDB',
    github: 'with-graphql-faunadb'
  },
  'images-videos/mux': {
    sidebarLabel: 'Mux',
    title: 'Build a Video Uploader App with Next.js and Mux',
    github: 'with-mux-video'
  },
  'amp/amp-story': {
    sidebarLabel: 'Amp Story',
    title: 'AMP Story',
    github: 'amp-story'
  }
};

export default examplesData;
