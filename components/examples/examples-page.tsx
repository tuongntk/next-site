import { memo } from 'react';
import Button from '@components/button';
import FooterFeedback from '@components/footer-feedback';
import DocsLayout from '@components/docs/docs-layout';
import { PermalinkIcon } from '@components/docs/heading';
import { getRelatedExamples } from '@lib/examples/getRelatedExamples';

type Props = {
  title: string;
  html: string;
  demoUrl?: string;
  instructions?: string;
  pageSlug: string;
};

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 className="heading">
      <span id={id} />
      <a href={`#${id}`}>{children}</a>
      <span className="permalink">
        <PermalinkIcon />
      </span>
    </h2>
  );
}

function ExamplesPage({ demoUrl, title, html, instructions, pageSlug }: Props) {
  const relatedExamples = getRelatedExamples(pageSlug);
  return (
    <DocsLayout>
      <h1>{title}</h1>
      {demoUrl && (
        <div className="demo">
          <Button invert href={demoUrl}>
            View Demo
          </Button>
        </div>
      )}
      {instructions && (
        <>
          <H2 id="instruction">Instruction</H2>
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={{ __html: instructions }} />
        </>
      )}
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {relatedExamples && (
        <>
          <H2 id="related">Related {relatedExamples.categoryName} Examples</H2>
          <ul>
            {relatedExamples.items.map(({ sidebarLabel }) => (
              <li key={sidebarLabel}>{sidebarLabel}</li>
            ))}
          </ul>
        </>
      )}
      <hr />
      <FooterFeedback />
      <style jsx>{`
        .demo {
          margin-top: 40px;
        }
      `}</style>
    </DocsLayout>
  );
}

export default memo(ExamplesPage);
