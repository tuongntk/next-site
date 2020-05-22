export type ExamplesDataItem = {
  sidebarLabel: string;
  title: string;
  local?: string;
  category?: string;
  github?: string;
  description?: string;
  topPage?: boolean;
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
    category: 'Headless CMS',
    local: 'headless-cms'
  },
  'headless-cms/contentful': {
    sidebarLabel: 'Contentful',
    title: 'Build a Next.js Blog with Contentful',
    category: 'Headless CMS',
    github: 'cms-contentful'
  },
  'headless-cms/datocms': {
    sidebarLabel: 'DatoCMS',
    title: 'Build a Next.js Blog with DatoCMS',
    category: 'Headless CMS',
    github: 'cms-datocms'
  },
  'headless-cms/prismic': {
    sidebarLabel: 'Prismic',
    title: 'Build a Next.js Blog with Prismic',
    category: 'Headless CMS',
    github: 'cms-prismic'
  },
  'headless-cms/sanity': {
    sidebarLabel: 'Sanity',
    title: 'Build a Next.js Blog with Sanity',
    category: 'Headless CMS',
    github: 'cms-sanity'
  },
  'headless-cms/takeshape': {
    sidebarLabel: 'TakeShape',
    title: 'Build a Next.js Blog with TakeShape',
    category: 'Headless CMS',
    github: 'cms-takeshape'
  },
  'authentication/introduction': {
    sidebarLabel: 'Introduction',
    title: 'Authentication',
    category: 'Authentication',
    local: 'authentication'
  },
  'authentication/auth0': {
    sidebarLabel: 'Auth0',
    title: '',
    category: 'Authentication',
    local: 'authentication'
  },
  'databases/introduction': {
    sidebarLabel: 'Introduction',
    title: '',
    category: 'Databases',
    local: 'databases'
  },
  'databases/fauna': {
    sidebarLabel: 'Fauna',
    title: '',
    category: 'Databases',
    local: 'fauna'
  }
};

export default examplesData;
