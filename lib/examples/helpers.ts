import { readFile } from '@lib/fs-utils';
import path from 'path';
import { ExamplesDataItem } from '@lib/examples/examplesData';
import sidebarData, { SidebarItem, ExampleItem, CategoryItem } from '@lib/examples/sidebarData';

export async function getExampleMarkdown(data: ExamplesDataItem): Promise<string> {
  if (data.local) {
    return readFile(path.join(process.cwd(), `examples/${data.local}.md`), 'utf8');
  }
  // TODO: Fetch from GitHub after updating README.md over there
  return readFile(path.join(process.cwd(), `examples/${data.github}.md`), 'utf8');
}

export function instructionsMarkdown(exampleName: string) {
  return `Run [\`create-next-app\`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) to bootstrap the example:

\`\`\`bash
npx create-next-app --example ${exampleName} ${exampleName}-app
\`\`\``;
}

function getAllPaths(items: (SidebarItem | ExampleItem | CategoryItem)[]): string[] {
  const result: string[] = [];
  items.forEach(item => {
    if (item.type === 'example') {
      result.push(`/examples/${item.slug}`);
    } else {
      result.push(...getAllPaths(item.routes));
    }
  });
  return result;
}

export const examplePaths = getAllPaths(sidebarData);
