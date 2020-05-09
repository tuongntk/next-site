import unified from 'unified';
import markdown from 'remark-parse';
import remarkToRehype from 'remark-rehype';
import raw from 'rehype-raw';
import sanitize from 'rehype-sanitize';
import prism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';
import githubSchema from 'hast-util-sanitize/lib/github.json';

// Allow className for all elements
githubSchema.attributes['*'].push('className');

const handlers = {
  // Add a className to inlineCode so we can differentiate between it and code fragments
  inlineCode(_: any, node: { value: any }): object {
    return {
      ...node,
      type: 'element',
      tagName: 'code',
      properties: { className: 'inline' },
      children: [
        {
          type: 'text',
          value: node.value
        }
      ]
    };
  }
};

// Create the processor, the order of the plugins is important
const getProcessor = unified()
  .use(markdown)
  .use(remarkToRehype, { handlers, allowDangerousHTML: true })
  // Add custom HTML found in the markdown file to the AST
  .use(raw)
  // Sanitize the HTML
  .use(sanitize, githubSchema)
  // Add syntax highlighting to the sanitized HTML
  .use(prism)
  .use(html)
  .freeze();

export default async function markdownToHtml(md: string): Promise<string> {
  try {
    // Init the processor with our custom plugin
    const processor = getProcessor();
    const file = await processor.process(md);

    // Replace non-breaking spaces (char code 160) with normal spaces to avoid style issues
    return (file.contents as string).replace(/\xA0/g, ' ');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Markdown to HTML error: ${error}`);
    throw error;
  }
}
