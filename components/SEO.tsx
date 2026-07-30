import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, ogImage = '/assets/images/logo.svg', url = window.location.href }) => {
  React.useEffect(() => {
    document.title = title;
    
    const setMetaTag = (selector: string, attribute: string, value: string, contentAttribute = 'content') => {
      let metaTag = document.querySelector(selector);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (selector.includes('name=')) {
          metaTag.setAttribute('name', attribute);
        } else if (selector.includes('property=')) {
          metaTag.setAttribute('property', attribute);
        }
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute(contentAttribute, value);
    };

    setMetaTag('meta[name="description"]', 'description', description);
    
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'keywords', keywords);
    }

    const setLinkTag = (rel: string, href: string) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', href);
    };

    setLinkTag('canonical', url);

    // Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'og:image', ogImage);
    setMetaTag('meta[property="og:url"]', 'og:url', url);
    setMetaTag('meta[property="og:type"]', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'og:site_name', 'Karnataka College Group of Institutions (KCM)');

    // Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'twitter:image', ogImage);

  }, [title, description, keywords, ogImage, url]);

  return null;
};

export default SEO;
