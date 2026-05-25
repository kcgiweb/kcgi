import React from 'react';

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    
    // Check if meta description exists
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
};

export default SEO;
