export type ExamplesDataItem = {
  sidebarLabel: string;
  title: string;
  local?: string;
  github?: string;
  description?: string;
  topPage?: boolean;
  markdownAfter?: string;
};

const examplesData: {
  [key: string]: ExamplesDataItem | undefined;
} = {
  introduction: {
    sidebarLabel: 'Introduction',
    topPage: true,
    title: 'Next.js Examples',
    local: 'introduction'
  },
  'headless-cms/introduction': {
    sidebarLabel: 'Introduction',
    title: 'Headless CMS',
    local: 'headless-cms'
  },
  'headless-cms/contentful': {
    sidebarLabel: 'Contentful',
    title: 'Build a Next.js Blog with Contentful',
    github: 'cms-contentful',
    markdownAfter: '## Configuration'
  },
  'headless-cms/datocms': {
    sidebarLabel: 'DatoCMS',
    title: 'Build a Next.js Blog with DatoCMS',
    github: 'cms-datocms'
  },
  'headless-cms/prismic': {
    sidebarLabel: 'Prismic',
    title: 'Build a Next.js Blog with Prismic',
    github: 'cms-prismic'
  },
  'headless-cms/sanity': {
    sidebarLabel: 'Sanity',
    title: 'Build a Next.js Blog with Sanity',
    github: 'cms-sanity'
  },
  'headless-cms/takeshape': {
    sidebarLabel: 'TakeShape',
    title: 'Build a Next.js Blog with TakeShape',
    github: 'cms-takeshape'
  },
  'authentication/introduction': {
    sidebarLabel: 'Introduction',
    title: 'Authentication',
    local: 'authentication'
  },
  'authentication/auth0': {
    sidebarLabel: 'Auth0',
    title: 'Next.js Authentication with Auth0',
    github: 'auth0'
  },
  'databases-graphql/introduction': {
    sidebarLabel: 'Introduction',
    title: 'Databases & GraphQL',
    local: 'databases-graphql'
  },
  'databases-graphql/fauna': {
    sidebarLabel: 'Fauna',
    title: 'Connect a Next.js App with FaunaDB',
    github: 'with-graphql-faunadb'
  },
  'images-videos/introduction': {
    sidebarLabel: 'Introduction',
    title: 'Images & Videos',
    local: 'images-videos'
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
