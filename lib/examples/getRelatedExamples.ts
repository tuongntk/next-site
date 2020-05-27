import { featuredCategories } from '@lib/examples/sidebarData';
import examplesData, { categoriesData } from '@lib/examples/examplesData';

export function getRelatedExamples(pageSlug: string) {
  const category = featuredCategories.find(({ prefix }) => prefix === pageSlug.split('/')[0]);
  if (category) {
    return {
      categoryName: categoriesData[pageSlug.split('/')[0]].title,
      items: category.routes
        .filter(({ slug }) => slug !== pageSlug)
        .map(({ slug }) => ({
          slug,
          sidebarLabel: examplesData[slug]?.sidebarLabel,
          description: examplesData[slug]?.description
        }))
    };
  }
  return null;
}
