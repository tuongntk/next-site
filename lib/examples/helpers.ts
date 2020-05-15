import { readFile } from '@lib/fs-utils';
import path from 'path';
import { ExamplesDataItem } from '@lib/examples/examplesData';
import sidebarData, { SidebarItem } from '@lib/examples/sidebarData';

export const getExampleMarkdown = async (data: ExamplesDataItem): Promise<string> => {
  if (data.local) {
    return readFile(path.join(process.cwd(), `examples/${data.local}.md`), 'utf8');
  }
  // TODO: Fetch from GitHub after updating README.md over there
  return readFile(path.join(process.cwd(), `examples/${data.github}.md`), 'utf8');
};

function getAllPaths(items: SidebarItem[]): string[] {
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
