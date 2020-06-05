import { readFile } from '@lib/fs-utils';
import path from 'path';
import sidebarData, { HeadingItem, ExampleItem, CategoryItem } from '@lib/examples/sidebarData';
import { getRawFileFromRepo } from '@lib/github/raw';

export async function getExampleMarkdown(exampleDirectoryName: string): Promise<string> {
  return getRawFileFromRepo(`canary/examples/${exampleDirectoryName}/README.md`, '');
}

export async function getLocalMarkdown(fileName: string): Promise<string> {
  return readFile(path.join(process.cwd(), `examples/${fileName}.md`), 'utf8');
}

export function instructionsMarkdown(exampleName: string) {
  return `Run [\`create-next-app\`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) to bootstrap the example:

\`\`\`bash
npx create-next-app --example ${exampleName} ${exampleName}-app
\`\`\``;
}

function getAllPaths(items: (HeadingItem | ExampleItem | CategoryItem)[]): string[] {
  const result: string[] = [];
  items.forEach(item => {
    if (item.type === 'example') {
      result.push(`/examples/${item.slug}`);
    } else if (item.type === 'category') {
      if (item.hasIntroduction) {
        result.push(`/examples/${item.prefix}/introduction`);
      }
      result.push(...getAllPaths(item.routes));
    } else {
      if (item.hasIntroduction) {
        result.push(`/examples/introduction`);
      }
      if (item.routes) {
        result.push(...getAllPaths(item.routes));
      }
    }
  });
  return result;
}

export const examplePaths = getAllPaths(sidebarData);
