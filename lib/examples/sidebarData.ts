export type HeadingItem = {
  type: 'heading';
  title: string;
  hasIntroduction?: boolean;
  hasLinkToGitHub?: boolean;
  routes?: CategoryItem[];
};

export type CategoryItem = {
  type: 'category';
  prefix: string;
  hasIntroduction?: boolean;
  routes: ExampleItem[];
  open?: boolean;
};

export type ExampleItem = { type: 'example'; slug: string };

export const featuredCategories: CategoryItem[] = [
  {
    type: 'category',
    prefix: 'blog-headless-cms',
    hasIntroduction: true,
    open: true,
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
        slug: 'blog-headless-cms/cosmic'
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
  }
];

const sidebarData: HeadingItem[] = [
  {
    type: 'heading',
    title: 'Featured Categories',
    hasIntroduction: true,
    routes: featuredCategories
  },
  {
    type: 'heading',
    title: 'More Examples',
    hasLinkToGitHub: true
  }
];

export default sidebarData;
