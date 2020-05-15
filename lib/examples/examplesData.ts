export type ExamplesDataItem = {
  title: string;
  local?: string;
  category?: string;
  github?: string;
  description?: string;
};

const examplesData: {
  [key: string]: ExamplesDataItem | undefined;
} = {
  introduction: {
    title: 'Introduction',
    local: 'introduction'
  },
  'headless-cms/introduction': {
    title: 'Introduction',
    category: 'Category',
    local: 'headless-cms'
  },
  'headless-cms/contentful': {
    title: 'Contentful',
    category: 'Headless CMS',
    github: 'cms-contentful'
  },
  'headless-cms/datocms': {
    title: 'DatoCMS',
    category: 'Headless CMS',
    github: 'cms-datocms'
  },
  'headless-cms/prismic': {
    title: 'Prismic',
    category: 'Headless CMS',
    github: 'cms-prismic'
  },
  'headless-cms/sanity': {
    title: 'Sanity',
    category: 'Headless CMS',
    github: 'cms-sanity'
  },
  'headless-cms/takeshape': {
    title: 'TakeShape',
    category: 'Headless CMS',
    github: 'cms-takeshape'
  }
};

export default examplesData;
