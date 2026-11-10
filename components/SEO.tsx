import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME, type ResolvedSeo } from '../seo/config';

/**
 * Renders every SEO tag for the current page. Rendered exactly once, by
 * <DynamicRouteSEO />; pages must not render their own <SEO>.
 */
const SEO: React.FC<{ seo: ResolvedSeo }> = ({ seo }) => (
  <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="robots" content={seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
    {!seo.noindex && <link rel="canonical" href={seo.canonical} />}

    <meta property="og:type" content={seo.ogType} />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:url" content={seo.canonical} />
    <meta property="og:image" content={seo.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:description" content={seo.description} />
    <meta name="twitter:image" content={seo.ogImage} />

    {seo.jsonLd.map((data, i) => (
      <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
    ))}
  </Helmet>
);

export default SEO;
