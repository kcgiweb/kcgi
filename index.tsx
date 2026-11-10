
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// The build writes route-specific SEO tags into each page's <head> for crawlers
// (seo/prerender.ts). React renders its own copies from seo/config.ts, so remove the
// static ones first to avoid duplicate titles, descriptions and canonicals.
document.head.querySelectorAll('[data-prerender]').forEach(node => node.remove());

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
