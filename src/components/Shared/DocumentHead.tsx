import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import { MetaTag, populateMetaTagsList } from '../../utils/seo';
import { MAIN_URL, META_DESCRIPTION, TITLE_TAG } from '../../config/seo';

export enum MetaTagKeys {
  TITLE = 'title',
  META_TITLE = 'meta_title',
  DESCRIPTION = 'description',
  OG_TYPE = 'og:type',
  OG_TITLE = 'og:title',
  OG_URL = 'og:url',
  OG_DESC = 'og:description',
  OG_IMG = 'og:image',
  TWITTER_CARD = 'twitter:card',
  TWITTER_URL = 'twitter:url',
  TWITTER_TITLE = 'twitter:title',
  TWITTER_DESC = 'twitter:description',
  TWITTER_IMG = 'twitter:image',
}

const metaTagsList = populateMetaTagsList(
  { title: TITLE_TAG, description: META_DESCRIPTION, imageUrl: null, fallbackImageUrl: null },
  MAIN_URL
);

metaTagsList.unshift({
  property: 'viewport',
  key: 'viewport',
  content:
    'width=device-width, initial-scale=1, maximum-scale=2.0, user-scalable=no',
});
metaTagsList.unshift({
  property: MetaTagKeys.OG_TYPE,
  key: MetaTagKeys.OG_TYPE,
  content: 'website',
});

const DocumentHead = () => (
  <>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <Script
      strategy="lazyOnload"
      src="https://www.googletagmanager.com/gtag/js?id=G-RJWMS5T360"
    />
    <Head>
      {/*why title is added here (and removed from _document.tsx (or instead in _app.js)*/}
      {/*ref: https://nextjs.org/docs/messages/no-document-title*/}
      <title key={MetaTagKeys.TITLE}>{TITLE_TAG}</title>
      {metaTagsList &&
        metaTagsList.map((entry: MetaTag) => (
          <meta
            property={entry.property}
            key={entry.key ? entry.key : entry.property}
            content={entry.content}
          />
        ))}
      <link
        rel="icon"
        type="image/png"
        href="https://freehunter-s3-hk-admin.s3.ap-northeast-2.amazonaws.com/jupitrr/website/favicon.png"
      />
    </Head>
  </>
);

export default DocumentHead;
