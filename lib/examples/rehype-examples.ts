import unified from 'unified';
import { Element } from 'hast';
import visit from 'unist-util-visit';
import toString from 'mdast-util-to-string';
import GithubSlugger from 'github-slugger';
import { GITHUB_URL, REPO_NAME } from 'lib/github/constants';
import permalinkIcon from '../docs/permalink-icon-ast';

type Image = Element & { tagName: 'img' };
function isImage(e: unknown): e is Image {
  return (e as Element).tagName === 'img';
}
type Heading = Element & { tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' };

function isHeading(e: unknown): e is Heading {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes((e as Element).tagName);
}

export default function rehypeExamples({ exampleName }: { exampleName?: string }) {
  const slugger = new GithubSlugger();
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
  const visitHeading: visit.Visitor<Element> = (node, _index, _parent) => {
    const text = toString(node);

    if (!text) return;

    const id = slugger.slug(text);

    console.log(node);
    if (node.tagName === 'h1') {
      node.tagName = 'h2';
    }

    if (node.properties) {
      node.properties.className = 'heading';
      node.children = [
        {
          type: 'element',
          tagName: 'span',
          properties: { id },
          children: [{ type: 'text', value: '' }]
        },
        {
          type: 'element',
          tagName: 'a',
          properties: {
            href: `#${id}`
          },
          children: node.children
        },
        {
          type: 'element',
          tagName: 'span',
          properties: { className: 'permalink' },
          children: [permalinkIcon as Element]
        }
      ];
    }
  };

  const transformer: unified.Transformer = (tree, _file) => {
    visit<Element>(tree, isImage, visitImage);
    visit<Element>(tree, isHeading, visitHeading);
  };
  return transformer;
}
