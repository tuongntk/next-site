import { featuredCategories } from '@lib/examples/sidebarData';
import examplesData from '@lib/examples/examplesData';

export function getRelatedExamples(pageSlug: string) {
  const category = featuredCategories.find(({ prefix }) => prefix === pageSlug.split('/')[0]);
  if (category) {
    return {
      categoryName: category.title,
      items: category.routes.map(({ slug }) => ({
        slug,
        sidebarLabel: examplesData[slug]?.sidebarLabel,
        description: examplesData[slug]?.description
      }))
    };
  }
  return null;
}
