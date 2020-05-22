import { memo } from 'react';
import FooterFeedback from '../footer-feedback';
import DocsLayout from '../docs/docs-layout';

type Props = {
  title: string;
  html: string;
};

function ExamplesPage({ title, html }: Props) {
  return (
    <DocsLayout>
      <h1>{title}</h1>
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <FooterFeedback />
    </DocsLayout>
  );
}

export default memo(ExamplesPage);
