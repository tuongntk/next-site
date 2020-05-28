import { memo } from 'react';
import Button from '@components/button';
import FooterFeedback from '@components/footer-feedback';
import DocsLayout from '@components/docs/docs-layout';
import { PermalinkIcon } from '@components/docs/heading';
import Link from 'next/link';
import { getRelatedExamples } from '@lib/examples/getRelatedExamples';

type Props = {
  title: string;
  html: string;
  demoUrl: string | null;
  sourceUrl: string | null;
  instructions: string | null;
  pageSlug: string;
  description: string | null;
  categoryPage: boolean;
  introHtml: string | null;
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

function ExamplesPage({
  demoUrl,
  title,
  html,
  instructions,
  pageSlug,
  description,
  categoryPage,
  sourceUrl,
  introHtml
}: Props) {
  const relatedExamples = categoryPage ? null : getRelatedExamples(pageSlug);
  return (
    <DocsLayout>
      <div className="main">
        <h1>{title}</h1>
        {/* eslint-disable-next-line */}
        {introHtml ? <div dangerouslySetInnerHTML={{ __html: introHtml }} /> : <p>{description}</p>}
        {(demoUrl || sourceUrl) && (
          <div className="buttons">
            {demoUrl && (
              <span className="demo-button">
                <Button invert medium href={demoUrl} target="_blank" rel="noopener noreferrer">
                  View Demo
                </Button>
              </span>
            )}
            {sourceUrl && (
              <Button
                invert
                outline={!!demoUrl}
                medium
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </Button>
            )}
          </div>
        )}
        {instructions && (
          <>
            <H2 id="create-a-project-locally">Create a Project Locally</H2>
            {/* eslint-disable-next-line */}
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </>
        )}
        {/* eslint-disable-next-line */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {relatedExamples && relatedExamples.items.length > 0 && (
          <>
            <H2 id="related">Related {relatedExamples.categoryName} Examples</H2>
            {relatedExamples.items.map(({ slug, sidebarLabel, description: itemDescription }) => (
              <div key={sidebarLabel} className="card">
                <Link href="/examples/[...slug]" as={`/examples/${slug}`}>
                  <a>
                    <h4>{sidebarLabel}</h4>
                    <small>{itemDescription}</small>
                  </a>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
      <hr />
      <FooterFeedback />
      <style jsx>{`
        .main {
          margin-bottom: 3.5rem;
        }

        .buttons {
          margin-top: 2rem;
        }

        .demo-button {
          margin-right: 1rem;
        }
      `}</style>
    </DocsLayout>
  );
}

export default memo(ExamplesPage);
