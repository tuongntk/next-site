import React from 'react';
import Head from 'next/head';
import { TWITTER_USER_NAME } from '../lib/constants';

export default function SocialMeta({
  title,
  description,
  image,
  url,
  keywords
}: {
  title?: string;
  description: string | null;
  image?: string;
  url?: string;
  keywords?: string;
}) {
  return (
    <Head>
      <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      {title && <meta name="og:title" content={title} />}
      {url && <meta name="og:url" content={url} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {image && (
        <meta
          name="og:image"
          content={image.startsWith('https') ? image : `https://nextjs.org${image}`}
        />
      )}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
}
