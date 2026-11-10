/**
 * Vite build plugin: static SEO for a client-rendered React app.
 *
 * After `vite build`, for every indexable route in seo/config.ts it writes
 *   dist/<route>.html   (dist/index.html for "/")
 * containing the route's <title>, description, canonical, Open Graph tags and JSON-LD,
 * plus a plain-HTML version of the page's key content inside #root (H1, summary,
 * institution details and site links). Crawlers that don't run JavaScript (Bing,
 * social previews, most AI search bots) see real content; browsers replace it as soon
 * as React mounts. It also writes dist/404.html and dist/sitemap.xml.
 *
 * public/.htaccess maps /about -> about.html, /institution/pharmacy -> institution/pharmacy.html,
 * and serves 404.html with a real 404 status for unknown paths.
 */
import fs from 'node:fs';
import path from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';
import { INSTITUTIONS } from '../constants';
import {
  SITE_NAME, SITE_URL, ORG, ROUTES, HOME_FAQ, indexablePaths, resolveSeo, sitemapEntry,
  type ResolvedSeo,
} from './config';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** JSON for a <script> block: prevent "</script>" from closing the tag. */
const jsonForScript = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c');

const headTags = (seo: ResolvedSeo): string => {
  const t = [
    `<title data-prerender>${esc(seo.title)}</title>`,
    `<meta data-prerender name="description" content="${esc(seo.description)}">`,
    `<meta data-prerender name="robots" content="${seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">`,
  ];
  if (!seo.noindex) t.push(`<link data-prerender rel="canonical" href="${esc(seo.canonical)}">`);
  t.push(
    `<meta data-prerender property="og:type" content="${seo.ogType}">`,
    `<meta data-prerender property="og:site_name" content="${esc(SITE_NAME)}">`,
    `<meta data-prerender property="og:locale" content="en_IN">`,
    `<meta data-prerender property="og:title" content="${esc(seo.title)}">`,
    `<meta data-prerender property="og:description" content="${esc(seo.description)}">`,
    `<meta data-prerender property="og:url" content="${esc(seo.canonical)}">`,
    `<meta data-prerender property="og:image" content="${esc(seo.ogImage)}">`,
    `<meta data-prerender property="og:image:width" content="1200">`,
    `<meta data-prerender property="og:image:height" content="630">`,
    `<meta data-prerender name="twitter:card" content="summary_large_image">`,
    `<meta data-prerender name="twitter:title" content="${esc(seo.title)}">`,
    `<meta data-prerender name="twitter:description" content="${esc(seo.description)}">`,
    `<meta data-prerender name="twitter:image" content="${esc(seo.ogImage)}">`,
  );
  for (const data of seo.jsonLd) {
    t.push(`<script data-prerender type="application/ld+json">${jsonForScript(data)}</script>`);
  }
  return t.join('\n    ');
};

const link = (href: string, text: string) => `<a href="${esc(href)}">${esc(text)}</a>`;

const siteNav = (): string => {
  const main: [string, string][] = [
    ['/', 'Home'], ['/about', 'About'], ['/academics', 'Academics'], ['/admissions', 'Admissions 2026-27'],
    ['/facilities', 'Facilities'], ['/placements', 'Placements'], ['/contact', 'Contact'],
  ];
  return `<nav aria-label="Site"><ul>${main.map(([h, t]) => `<li>${link(h, t)}</li>`).join('')}</ul></nav>`;
};

const institutionsList = () =>
  `<ul>${INSTITUTIONS.map(i =>
    `<li>${link(`/institution/${i.id}`, i.name)}: ${esc(i.courses.map(c => c.name).join(', '))}</li>`,
  ).join('')}</ul>`;

const contactBlock = () =>
  `<p>${esc(SITE_NAME)}, ${esc(ORG.address.streetAddress)}, ${esc(ORG.address.addressLocality)}, ` +
  `${esc(ORG.address.addressRegion)} ${esc(ORG.address.postalCode)}. Phone: ` +
  `<a href="tel:${ORG.telephone.replace(/-/g, '')}">${esc(ORG.telephoneDisplay)}</a>. Email: ` +
  `<a href="mailto:${ORG.email}">${esc(ORG.email)}</a>.</p>`;

const bodyContent = (seo: ResolvedSeo): string => {
  const parts: string[] = [siteNav()];
  if (seo.breadcrumbs.length > 1) {
    parts.push(`<nav aria-label="Breadcrumb"><ul>${seo.breadcrumbs
      .map(c => `<li>${link(c.path, c.name)}</li>`).join('')}</ul></nav>`);
  }
  parts.push(`<h1>${esc(seo.h1)}</h1>`, `<p>${esc(seo.description)}</p>`);

  const inst = seo.institution;
  if (inst) {
    parts.push(`<p>${esc(inst.overview)}</p>`);
    parts.push(`<h2>Courses offered</h2><ul>${inst.courses.map(c => `<li>${esc(c.name)}</li>`).join('')}</ul>`);
    if (inst.whyChoose.length) {
      parts.push(`<h2>Why choose ${esc(inst.name)}?</h2><ul>${inst.whyChoose.map(w => `<li>${esc(w)}</li>`).join('')}</ul>`);
    }
    if (inst.admissions) parts.push(`<h2>Admissions</h2><p>${esc(inst.admissions)}</p>`);
    parts.push(`<p>${link('/admissions', 'Admissions 2026-27')} · ${link('/apply', 'Apply online')}</p>`);
  } else if (seo.path === '/' || seo.path === '/academics' || seo.path === '/admissions') {
    parts.push('<h2>Our institutions</h2>', institutionsList());
  }
  if (!seo.found) {
    parts.push('<h2>Our institutions</h2>', institutionsList());
  }
  if (seo.path === '/') {
    parts.push('<h2>Frequently asked questions about KCGI</h2>',
      HOME_FAQ.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join(''));
  }
  parts.push('<h2>Contact</h2>', contactBlock());
  return `<div class="prerender-fallback">${parts.join('\n')}</div>`;
};

const render = (template: string, seo: ResolvedSeo) =>
  template
    .replace('<!--seo-head-->', headTags(seo))
    .replace('<!--seo-body-->', bodyContent(seo));

const outFileFor = (outDir: string, routePath: string) =>
  routePath === '/' ? path.join(outDir, 'index.html') : path.join(outDir, `${routePath.slice(1)}.html`);

const buildSitemap = (paths: string[]) => {
  const urls = paths
    .filter(p => !resolveSeo(p).noindex)
    .map(p => {
      const e = sitemapEntry(p);
      return [
        '  <url>',
        `    <loc>${SITE_URL}${p === '/' ? '/' : p}</loc>`,
        e?.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : '',
        `    <priority>${(e?.priority ?? 0.5).toFixed(1)}</priority>`,
        '  </url>',
      ].filter(Boolean).join('\n');
    });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
};

export const seoPrerender = (): Plugin => {
  let config: ResolvedConfig;
  return {
    name: 'kcgi-seo-prerender',
    apply: 'build',
    configResolved(c) { config = c; },
    closeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const indexFile = path.join(outDir, 'index.html');
      const template = fs.readFileSync(indexFile, 'utf8');
      if (!template.includes('<!--seo-head-->') || !template.includes('<!--seo-body-->')) {
        throw new Error('[seo-prerender] index.html is missing the <!--seo-head--> / <!--seo-body--> markers');
      }

      const paths = indexablePaths();
      for (const p of paths) {
        const file = outFileFor(outDir, p);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, render(template, resolveSeo(p)));
      }
      // Real 404 page (served with status 404 by .htaccess); also the SPA shell for /admin etc.
      fs.writeFileSync(path.join(outDir, '404.html'), render(template, resolveSeo('/__not-found__')));
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), buildSitemap(paths));

      // Sanity check: each prerendered file has exactly one title and one canonical.
      for (const p of paths) {
        const html = fs.readFileSync(outFileFor(outDir, p), 'utf8');
        const titles = (html.match(/<title/g) || []).length;
        const canon = (html.match(/rel="canonical"/g) || []).length;
        if (titles !== 1 || canon !== 1) throw new Error(`[seo-prerender] ${p}: ${titles} titles, ${canon} canonicals`);
      }
      config.logger.info(`[seo-prerender] wrote ${paths.length} pages, 404.html and sitemap.xml (${Object.keys(ROUTES).length} static routes + ${INSTITUTIONS.length} institutions)`);
    },
  };
};
