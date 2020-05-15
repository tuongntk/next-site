import { memo } from 'react';
import FooterFeedback from '../footer-feedback';
import DocsLayout from '../docs/docs-layout';

type Props = {
  html: string;
};

function ExamplesPage({ html }: Props) {
  return (
    <DocsLayout>
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <FooterFeedback />
    </DocsLayout>
  );
}

export default memo(ExamplesPage);
