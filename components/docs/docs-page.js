import { memo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getSlug, removeFromLast, addTagToSlug } from '../../lib/docs/utils';
import { GITHUB_URL, REPO_NAME } from '../../lib/github/constants';
import addLinkListener from '../../lib/add-link-listener';
import Notification from './notification';
import FooterFeedback from '../footer-feedback';
import Button from '../button';
import ArrowIcon from '../arrow-icon';
import RightArrow from '../icons/arrow-right';
import LeftArrow from '../icons/arrow-left';
import DocsLayout from './docs-layout';

function areEqual(prevProps, props) {
  return prevProps.route.path === props.route.path;
}

function DocsPage({ route, html, prevRoute, nextRoute }) {
  const { query } = useRouter();
  const { tag, slug } = getSlug(query);
  const href = '/docs/[...slug]';
  const editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/canary${route.path}`;

  useEffect(() => {
    const listeners = [];

    document.querySelectorAll('.docs-content a.relative').forEach(node => {
      const nodeHref = node.getAttribute('href');
      // Exclude paths like #setup and hashes that have the same current path
      if (nodeHref && nodeHref[0] !== '#' && !nodeHref.startsWith(slug)) {
        if (nodeHref.startsWith('/docs')) {
          // Handle relative documentation paths
          const as = addTagToSlug(nodeHref, tag);
          listeners.push(addLinkListener(node, { href, as }));
        } else {
          // Handle any other relative path
          listeners.push(addLinkListener(node, { href: nodeHref }));
        }
      }
    });

    return () => {
      listeners.forEach(cleanUpListener => cleanUpListener());
    };
  }, [slug]);

  return (
    <DocsLayout>
      <Notification>
        <strong>Note:</strong> You are viewing the new Next.js documentation. The old docs are still
        available <a href="/docs/old">here</a>.
      </Notification>

      {/* eslint-disable-next-line */}
      <div className="docs-content" dangerouslySetInnerHTML={{ __html: html }} />

      <div className="page-nav">
        {prevRoute ? (
          <Button href={href} as={addTagToSlug(removeFromLast(prevRoute.path, '.'), tag)}>
            <ArrowIcon left flex>
              <LeftArrow color="#0070f3" />
            </ArrowIcon>
            {prevRoute.title}
          </Button>
        ) : (
          <span />
        )}
        {nextRoute && (
          <Button href={href} as={addTagToSlug(removeFromLast(nextRoute.path, '.'), tag)}>
            {nextRoute.title}
            <ArrowIcon right flex>
              <RightArrow color="#0070f3" />
            </ArrowIcon>
          </Button>
        )}
      </div>

      <hr />

      <FooterFeedback />

      <footer>
        {tag ? (
          <Link href="/docs/[...slug]" as={slug}>
            <a>Go to the live version of this page</a>
          </Link>
        ) : (
          <a href={editUrl} target="_blank" rel="noopener noreferrer">
            Edit this page on GitHub
          </a>
        )}
      </footer>
    </DocsLayout>
  );
}

export default memo(DocsPage, areEqual);
