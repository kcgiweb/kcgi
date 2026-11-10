import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import { resolveSeo } from '../seo/config';

/** Sets title, meta, canonical and JSON-LD for the current route (see seo/config.ts). */
export const DynamicRouteSEO: React.FC = () => {
  const { pathname } = useLocation();
  const seo = useMemo(() => resolveSeo(pathname), [pathname]);
  return <SEO seo={seo} />;
};
