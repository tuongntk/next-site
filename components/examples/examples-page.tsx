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
  showDemo: boolean;
  topPage: boolean;
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
  introHtml,
  showDemo,
  topPage
}: Props) {
  const relatedExamples = getRelatedExamples(pageSlug);
  return (
    <DocsLayout>
      <div className="main">
        <h1>{title}</h1>
        {!categoryPage &&
          !topPage &&
          (introHtml ? (
            // eslint-disable-next-line
            <div dangerouslySetInnerHTML={{ __html: introHtml }} />
          ) : (
            <p>{description}</p>
          ))}
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
        {showDemo && (
          <>
            <H2 id="deploy-your-own">Deploy your own</H2>
            <p>
              Deploy the example using{' '}
              <a href="" target="_blank" rel="noopener noreferrer">
                Vercel
              </a>
              .
            </p>
            <div className="button">
              <a
                href={`https://vercel.com/import/project?template=${sourceUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://vercel.com/button" alt="Deploy with Vercel" />
              </a>
            </div>
          </>
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
            <H2 id="related">
              {!categoryPage && <>Related {relatedExamples.categoryName} </>}Examples
            </H2>
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
