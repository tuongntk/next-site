import unified from 'unified';
import { Element } from 'hast';
import visit from 'unist-util-visit';
import { GITHUB_URL, REPO_NAME } from 'lib/github/constants';

type Image = Element & { tagName: 'img' };
function isImage(e: unknown): e is Image {
  return (e as Element).tagName === 'img';
}

export default function rehypeExamples({ exampleName }: { exampleName?: string }) {
  const visitImage: visit.Visitor<Element> = (node, _index, _parent) => {
    if (node.properties && node.properties.src && exampleName) {
      const src = node.properties.src as string;
      if (!src.startsWith('http')) {
        node.properties.src = `${GITHUB_URL}/${REPO_NAME}/raw/canary/examples/${exampleName}/${src.replace(
          /^\.\//,
          ''
        )}`;
      }
    }
  };
  const transformer: unified.Transformer = (tree, _file) => {
    visit<Element>(tree, isImage, visitImage);
  };
  return transformer;
}
