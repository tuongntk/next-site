export type ExamplesDataItem = {
  sidebarLabel: string;
  title: string;
  local?: string;
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
    local: 'headless-cms'
  },
  'headless-cms/contentful': {
    sidebarLabel: 'Contentful',
    title: 'Build a Next.js Blog with Contentful',
    github: 'cms-contentful'
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
    title: '',
    local: 'authentication'
  },
  'databases/introduction': {
    sidebarLabel: 'Introduction',
    title: '',
    local: 'databases'
  },
  'databases/fauna': {
    sidebarLabel: 'Fauna',
    title: '',
    local: 'fauna'
  },
  'images-videos/introduction': {
    sidebarLabel: 'Introduction',
    title: 'Images & Videos',
    local: 'images-videos'
  },
  'images-videos/mux': {
    sidebarLabel: 'Mux',
    title: 'Build a Video Uploader App with Mux',
    github: 'with-mux-video'
  }
};

export default examplesData;
