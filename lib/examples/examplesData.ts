export type ExamplesDataItem = {
  sidebarLabel: string;
  title: string;
  github: string;
  description?: string;
  mainContentStart?: string;
  demoUrl?: string;
  introContentEnd?: string;
  showDemo?: boolean;
};

export const introductionData = {
  title: 'Next.js Examples',
  description: 'Description TODO'
};

export const categoriesData: {
  [key: string]: {
    title: string;
    description: string;
  };
} = {
  'blog-headless-cms': { title: 'Blog & Headless CMS', description: 'Description TODO' },
  authentication: { title: 'Authentication', description: 'Description TODO' },
  'databases-graphql': { title: 'Databases & GraphQL', description: 'Description TODO' },
  'images-videos': { title: 'Images & Videos', description: 'Description TODO' },
  amp: { title: 'Amp', description: 'Description TODO' }
};

const examplesData: {
  [key: string]: ExamplesDataItem | undefined;
} = {
  'blog-headless-cms/blog-starter': {
    sidebarLabel: 'Markdown Blog',
    title: 'Build a Next.js Blog using Markdown',
    github: 'blog-starter',
    introContentEnd: '## Demo',
    mainContentStart: '# Notes',
    demoUrl: 'https://next-blog-starter.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using markdown files as the data source.`
  },
  'blog-headless-cms/contentful': {
    sidebarLabel: 'Contentful',
    title: 'Build a Next.js Blog with Contentful',
    github: 'cms-contentful',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-contentful.now.sh/',
    description:
      'This example showcases Next.js’s Static Generation feature using Contentful as the data source.'
  },
  'blog-headless-cms/datocms': {
    sidebarLabel: 'DatoCMS',
    title: 'Build a Next.js Blog with DatoCMS',
    github: 'cms-datocms',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-datocms.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using DatoCMS as the data source.`
  },
  'blog-headless-cms/prismic': {
    sidebarLabel: 'Prismic',
    title: 'Build a Next.js Blog with Prismic',
    github: 'cms-prismic',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-prismic.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using Prismic as the data source.`
  },
  'blog-headless-cms/sanity': {
    sidebarLabel: 'Sanity',
    title: 'Build a Next.js Blog with Sanity',
    github: 'cms-sanity',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-sanity.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using Sanity as the data source.`
  },
  'blog-headless-cms/takeshape': {
    sidebarLabel: 'TakeShape',
    title: 'Build a Next.js Blog with TakeShape',
    github: 'cms-takeshape',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-takeshape.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using TakeShape as the data source.`
  },
  'authentication/auth0': {
    sidebarLabel: 'Auth0',
    title: 'Next.js Authentication with Auth0',
    github: 'auth0',
    introContentEnd: '### Using',
    mainContentStart: '## Configuring Auth0',
    showDemo: true,
    description:
      'This example shows how you can use @auth0/nextjs-auth to easily add authentication support to your Next.js application.'
  },
  'databases-graphql/fauna': {
    sidebarLabel: 'Fauna',
    title: 'Connect a Next.js App with FaunaDB',
    github: 'with-graphql-faunadb'
  },
  'images-videos/mux': {
    sidebarLabel: 'Mux',
    title: 'Build a Video Uploader App with Next.js and Mux',
    github: 'with-mux-video',
    introContentEnd: '## Demo',
    mainContentStart: '## Note',
    demoUrl: 'https://with-mux-video.now.sh/',
    description:
      'This example uses Mux Video, an API-first platform for video. The example features video uploading and playback in a Next.js application.'
  },
  'amp/amp-story': {
    sidebarLabel: 'Amp Story',
    title: 'AMP Story',
    github: 'amp-story'
  }
};

export default examplesData;
