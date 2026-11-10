/**
 * Single source of truth for SEO: page titles and descriptions, canonical URLs,
 * structured data (JSON-LD) and the list of indexable routes.
 *
 * Used in two places:
 *  - at runtime by <DynamicRouteSEO /> (React, react-helmet-async)
 *  - at build time by seo/prerender.ts, which writes a static HTML file per route
 *    with the right <head> and a crawlable content fallback, plus sitemap.xml.
 *
 * Keep this file free of browser-only APIs: it also runs in Node during the build.
 */
import { INSTITUTIONS } from '../constants';
import type { Institution } from '../types';

export const SITE_URL = 'https://kcgiedu.org';
export const SITE_NAME = 'Karnataka College Group of Institutions';
export const SITE_SHORT_NAME = 'KCGI';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/og/kcgi-og.jpg`;
export const LOGO_URL = `${SITE_URL}/assets/images/logo.png`;

export const ORG = {
  legalName: 'Karnataka Educational Trust',
  foundingDate: '1997',
  telephone: '+91-8080833000',
  telephoneDisplay: '080808 33000',
  email: 'info@kcgiedu.org',
  admissionsEmail: 'admissions@kcgiedu.org',
  address: {
    streetAddress: '33/2, Hegde Nagar Main Rd, Thirumenahalli, Yelahanka',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560064',
    addressCountry: 'IN',
  },
  geo: { latitude: 13.0860698, longitude: 77.6355606 },
  mapUrl: 'https://maps.app.goo.gl/?q=Karnataka+College+Group+of+Institutions',
  sameAs: [
    'https://facebook.com/Kcgiedu',
    'https://instagram.com/Kcgiedu',
    'https://twitter.com/Kcgiedu',
    'https://linkedin.com/company/kcgiedu',
    'https://youtube.com/@kcgiedu',
  ],
};

/**
 * Questions people search for about KCGI ("KCGI contact number", "KCGI courses"...).
 * Shown on the homepage and emitted as FAQPage JSON-LD. Facts only, no claims
 * that are not stated elsewhere on the site.
 */
export const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: 'What is KCGI?',
    a: 'KCGI is Karnataka College Group of Institutions, a group of 11 colleges and schools run by the Karnataka Educational Trust on one campus in Yelahanka, Bengaluru, since 1997.',
  },
  {
    q: 'Where is KCGI located?',
    a: 'KCGI is at 33/2, Hegde Nagar Main Road, Thirumenahalli, Yelahanka, Bengaluru, Karnataka 560064, in North Bengaluru.',
  },
  {
    q: 'What is the KCGI contact number?',
    a: 'You can call KCGI on 080808 33000 (+91 80808 33000) or email info@kcgiedu.org. Admission questions can also go to admissions@kcgiedu.org.',
  },
  {
    q: 'What courses does KCGI offer?',
    a: 'KCGI offers Pharmacy (D.Pharm, B.Pharm, Pharm D, M.Pharm), Nursing (GNM, B.Sc, M.Sc), Physiotherapy (BPT, MPT), Allied Health and paramedical courses, Law (LL.B), Management (MBA, BBA, BCA, B.Com), B.Ed, PU Science and Commerce, and CBSE schooling.',
  },
  {
    q: 'Which universities and boards are KCGI institutions affiliated to?',
    a: 'Depending on the course, KCGI institutions are affiliated to Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka State Law University (KSLU), Bengaluru City University, the Karnataka PU Board and CBSE. Pharmacy is PCI approved and Nursing is INC and KNC recognised.',
  },
  {
    q: 'How do I apply for admission at KCGI?',
    a: 'Apply online at kcgiedu.org/apply, send an admission enquiry at kcgiedu.org/admissions/enquiry, or call 080808 33000. Admissions for 2026-27 are open.',
  },
  {
    q: 'What is the official website of KCGI?',
    a: 'The official website of Karnataka College Group of Institutions is kcgiedu.org.',
  },
];

export interface PageSeo {
  title: string;
  description: string;
  /** Visible H1 used in the prerendered fallback (defaults to the title's first part). */
  h1?: string;
  /** Short label for breadcrumbs. */
  label?: string;
  noindex?: boolean;
  /** Sitemap priority, 0.0 – 1.0 */
  priority?: number;
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

/** Static (non-institution) pages. Order matters for the sitemap only. */
export const ROUTES: Record<string, PageSeo> = {
  '/': {
    title: 'KCGI | Karnataka College Group of Institutions, Bangalore',
    description: 'Official website of KCGI (Karnataka College Group of Institutions), Yelahanka, Bengaluru. 11 institutions since 1997: Pharmacy, Nursing, Physiotherapy, Law, MBA, B.Ed, PU & CBSE.',
    h1: 'KCGI – Karnataka College Group of Institutions, Yelahanka, Bengaluru',
    label: 'Home',
    priority: 1.0,
    changefreq: 'weekly',
  },

  // About
  '/about': { title: 'About KCGI | Karnataka College Group of Institutions, Bengaluru', description: 'Managed by the Karnataka Educational Trust since 1997, KCGI runs 11 institutions in healthcare, law, management, education and schooling on one Yelahanka campus.', label: 'About', h1: 'About the Group', priority: 0.8 },
  '/about/overview': { title: 'Overview of KCGI Campus, Yelahanka | About KCGI', description: 'An overview of the Karnataka College Group of Institutions campus in Yelahanka, Bengaluru: institutions, infrastructure and educational philosophy.', label: 'Overview', priority: 0.5 },
  '/about/history': { title: 'Our History Since 1997 | Karnataka College Group of Institutions', description: 'Milestones of the Karnataka Educational Trust and KCGI, from its founding in 1997 to 11 institutions in North Bengaluru.', label: 'History', priority: 0.5 },
  '/about/vision': { title: 'Vision & Mission | KCGI Bengaluru', description: 'The vision and mission of Karnataka College Group of Institutions: shaping skilled, ethical professionals in healthcare, law, management and education.', label: 'Vision & Mission', priority: 0.4 },
  '/about/core-values': { title: 'Core Values | KCGI Bengaluru', description: 'The core values that guide Karnataka College Group of Institutions: excellence, integrity and innovation.', label: 'Core Values', priority: 0.3 },
  '/about/chairman-message': { title: "Chairman's Message | KCGI Bengaluru", description: 'A message from the Chairman of the Karnataka Educational Trust and Karnataka College Group of Institutions.', label: "Chairman's Message", priority: 0.4 },
  '/about/governing-body': { title: 'Governing Body | KCGI Bengaluru', description: 'Members of the governing body of the Karnataka Educational Trust that steer Karnataka College Group of Institutions.', label: 'Governing Body', priority: 0.4 },
  '/about/quality': { title: 'Quality Policy | KCGI Bengaluru', description: 'The KCGI quality policy: our commitment to academic standards and continuous improvement across all 11 institutions.', label: 'Quality Policy', priority: 0.3 },
  '/about/social-responsibility': { title: 'Social Responsibility & Outreach | KCGI Bengaluru', description: 'Community outreach, health camps, NSS and social responsibility programmes run by KCGI students and staff.', label: 'Social Responsibility', priority: 0.3 },
  '/about/future-vision': { title: 'Future Vision 2030 | KCGI Bengaluru', description: 'The KCGI roadmap to 2030: new programmes, infrastructure and partnerships planned for our Yelahanka campus.', label: 'Future Vision', priority: 0.3 },

  // Academics
  '/academics': { title: 'KCGI Courses | Pharmacy, Nursing, Law, MBA & Physiotherapy, Bangalore', description: 'All programmes at KCGI: D.Pharm, B.Pharm, Pharm D, M.Pharm, GNM, B.Sc and M.Sc Nursing, BPT, MPT, B.Sc MLT, LL.B, MBA, BBA, BCA, B.Com, B.Ed, PU and CBSE schooling.', label: 'Academics', h1: 'KCGI Academics & Courses', priority: 0.8 },
  '/academics/ug-programs': { title: 'UG Courses in Bangalore | B.Pharm, B.Sc Nursing, BPT, BBA, BCA | KCGI', description: 'Undergraduate degrees at KCGI Yelahanka: B.Pharm, B.Sc Nursing, BPT, B.Sc MLT/MIT/AT, LL.B, BBA, BCA and B.Com. Eligibility, duration and admissions 2026.', label: 'UG Programs', priority: 0.8 },
  '/academics/pg-programs': { title: 'PG Courses in Bangalore | M.Pharm, Pharm D, M.Sc Nursing, MPT, MBA | KCGI', description: 'Postgraduate programmes at KCGI Bengaluru: M.Pharm, Pharm D, M.Sc Nursing, MPT and MBA. Eligibility, duration and admissions 2026.', label: 'PG Programs', priority: 0.8 },
  '/academics/diploma-pu-programs': { title: 'Diploma & PU Courses in Bangalore | D.Pharm, GNM, Paramedical, PUC | KCGI', description: 'D.Pharm, GNM nursing, paramedical diplomas and PU Science & Commerce at KCGI, Yelahanka, Bengaluru.', label: 'Diploma & PU', priority: 0.7 },
  '/academics/teaching-methodology': { title: 'Teaching Methodology | KCGI Bengaluru', description: 'How we teach at KCGI: practical, clinical and case-based learning with digital classrooms and modern labs.', label: 'Teaching Methodology', priority: 0.3 },
  '/academics/academic-calendar': { title: 'Academic Calendar 2026-27 | KCGI Bengaluru', description: 'Term dates, examination schedules and holidays for all KCGI institutions for the 2026-27 academic year.', label: 'Academic Calendar', priority: 0.4, changefreq: 'monthly' },
  '/academics/evaluation-system': { title: 'Evaluation & Examination System | KCGI Bengaluru', description: 'Internal assessment, university examinations and grading followed across KCGI institutions.', label: 'Evaluation System', priority: 0.3 },
  '/academics/research': { title: 'Research & Innovation | KCGI Bengaluru', description: 'Research labs, projects and publications in pharmacy, nursing and allied health sciences at KCGI.', label: 'Research', priority: 0.4 },
  '/academics/rules-regulations': { title: 'Rules & Regulations | KCGI Bengaluru', description: 'Attendance policy, code of conduct and anti-ragging rules for students at KCGI.', label: 'Rules & Regulations', priority: 0.3 },
  '/academics/the-edge': { title: 'Why Choose KCGI? | The KCGI Edge', description: 'What sets Karnataka College Group of Institutions apart: one campus, 11 institutions, clinical training and placement support in North Bengaluru.', label: 'The KCGI Edge', priority: 0.5 },

  // Admissions
  '/admissions': { title: 'KCGI Admissions 2026-27 Open | Apply Online, Bengaluru', description: 'Apply for 2026-27 admission to Pharmacy, Nursing, Physiotherapy, Allied Health, Law, MBA, BBA, BCA, B.Ed, PU and CBSE school at KCGI, Yelahanka.', label: 'Admissions', h1: 'KCGI Admissions 2026-27', priority: 0.9, changefreq: 'weekly' },
  '/admissions/process': { title: 'Admission Process 2026 | KCGI Bengaluru', description: 'Step-by-step admission process at KCGI: enquiry, application, document verification, fee payment and enrolment.', label: 'Admission Process', priority: 0.7 },
  '/admissions/eligibility': { title: 'Eligibility Criteria for All Courses | KCGI Admissions', description: 'Eligibility for B.Pharm, D.Pharm, B.Sc Nursing, GNM, BPT, LL.B, MBA, BBA, BCA, B.Ed and PU admission at KCGI Bengaluru.', label: 'Eligibility', priority: 0.7 },
  '/admissions/documents': { title: 'Documents Required for Admission | KCGI Bengaluru', description: 'Checklist of documents needed for admission at KCGI, including RGUHS, BCU and KSLU course requirements.', label: 'Documents Required', priority: 0.6 },
  '/admissions/enquiry': { title: 'Admission Enquiry | KCGI Bengaluru', description: 'Send an admission enquiry to Karnataka College Group of Institutions. Our counsellors will call you back about courses, fees and eligibility.', label: 'Enquiry', priority: 0.7 },
  '/admissions/prospectus': { title: 'Download Prospectus 2026-27 | KCGI Bengaluru', description: 'Download the KCGI prospectus for 2026-27 with programmes, facilities and admission details for all 11 institutions.', label: 'Prospectus', priority: 0.6 },
  '/admissions/international': { title: 'International & Out-of-State Admissions | KCGI Bengaluru', description: 'Admission guidance for international students and students from Kerala, Andhra Pradesh, Telangana and other states at KCGI Bengaluru.', label: 'International Admissions', priority: 0.6 },
  '/admissions/fees': { title: 'KCGI Fees Structure 2026-27 | Course-wise Fee Enquiry', description: 'How fees work at Karnataka College Group of Institutions (KCGI), Bengaluru: tuition, lab, library and exam fees by course and quota. Request a course-wise fee breakup.', label: 'Fees Structure', priority: 0.7 },
  '/admissions/scholarships': { title: 'Scholarships & Financial Aid | KCGI Bengaluru', description: 'Merit, need-based and government scholarships available to students at Karnataka College Group of Institutions.', label: 'Scholarships', priority: 0.6 },
  '/apply': { title: 'Apply Online | KCGI Admissions 2026-27', description: 'Apply online for 2026-27 admission to Karnataka College Group of Institutions, Bengaluru.', label: 'Apply Online', priority: 0.6 },

  // Other
  '/placements': { title: 'KCGI Placements & Recruiters | Karnataka College Group, Bengaluru', description: 'Training and placements at KCGI: hospital, pharma and corporate recruiters, internships and career support.', label: 'Placements', priority: 0.7 },
  '/facilities': { title: 'KCGI Campus Facilities, Hostel & Transport | Yelahanka', description: 'Labs, library, separate hostels, transport, medical and sports facilities on the KCGI campus in Yelahanka, Bengaluru.', label: 'Facilities', priority: 0.7 },
  '/naac': { title: 'NAAC Accreditation | KCGI Bengaluru', description: 'NAAC accreditation details, IQAC and quality documents for Karnataka College Group of Institutions.', label: 'NAAC', priority: 0.4 },
  '/news': { title: 'KCGI News & Events | Karnataka College Group of Institutions', description: 'Latest news, events, fests, seminars and achievements from Karnataka College Group of Institutions.', label: 'News & Events', priority: 0.5, changefreq: 'weekly' },
  '/contact': { title: 'KCGI Contact Number & Address | Yelahanka, Bengaluru', description: 'Contact Karnataka College Group of Institutions: 33/2 Hegde Nagar Main Rd, Yelahanka, Bengaluru 560064. Call 080808 33000 or email info@kcgiedu.org.', label: 'Contact', h1: 'Contact KCGI', priority: 0.8 },
  '/privacy-policy': { title: 'Privacy Policy | KCGI Bengaluru', description: 'How Karnataka College Group of Institutions collects, uses and protects personal data from enquiries, applications and payments.', label: 'Privacy Policy', priority: 0.2, changefreq: 'yearly' },
  '/terms': { title: 'Terms & Conditions | KCGI Bengaluru', description: 'Terms for using the KCGI website, submitting admission enquiries and applications, and paying application fees online.', label: 'Terms & Conditions', priority: 0.2, changefreq: 'yearly' },
};

/** Routes that exist in the app but must never be indexed. */
export const NOINDEX_PREFIXES = ['/admin'];

/** Paths whose content duplicates another page: path -> canonical path. */
export const CANONICAL_ALIASES: Record<string, string> = {
  '/institutions': '/',
};

const SECTION_LABELS: Record<string, string> = {
  about: 'About',
  academics: 'Academics',
  admissions: 'Admissions',
  institution: 'Institutions',
};

const approvalsFor = (inst: Institution): string => {
  switch (inst.id) {
    case 'pharmacy': return 'PCI approved, RGUHS affiliated';
    case 'nursing': return 'INC & KNC recognised, RGUHS affiliated';
    case 'physiotherapy':
    case 'allied-health':
    case 'paramedical': return 'RGUHS affiliated';
    case 'law': return 'KSLU affiliated';
    case 'management':
    case 'management-science':
    case 'education': return 'Bengaluru City University affiliated';
    case 'public-school': return 'CBSE affiliated';
    case 'pu-college': return 'Karnataka PU Board';
    default: return '';
  }
};

const courseList = (inst: Institution, max = 5) =>
  inst.courses.slice(0, max).map(c => c.name).join(', ');

export const institutionSeo = (inst: Institution): PageSeo => {
  const approvals = approvalsFor(inst);
  // Fit as many course names as possible into ~70 characters.
  const title = [3, 2, 1]
    .map(n => `${inst.name}, Bangalore | ${courseList(inst, n)} Admissions 2026`)
    .find(t => t.length <= 75) ?? `${inst.name}, Bangalore | Admissions 2026`;
  const description =
    `${inst.name}, a KCGI institution in Yelahanka, Bengaluru${approvals ? ` (${approvals})` : ''}. ` +
    `Courses: ${courseList(inst, 6)}. Admissions open for 2026-27. Call 080808 33000.`;
  return {
    title: title.length > 75 ? `${inst.name}, Bangalore | Admissions 2026` : title,
    description: description.length > 170 ? description.slice(0, 167).replace(/[ ,.]+\S*$/, '') + '…' : description,
    h1: inst.name,
    label: inst.name,
    priority: 0.9,
    changefreq: 'monthly',
  };
};

export const normalizePath = (pathname: string): string => {
  const p = pathname.split(/[?#]/)[0].replace(/\/{2,}/g, '/');
  return p.length > 1 ? p.replace(/\/+$/, '') : '/';
};

export const canonicalUrl = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;

/** 1200x630 JPG generated per institution (public/assets/images/og/<id>.jpg). */
export const institutionImage = (inst: Institution) => `${SITE_URL}/assets/images/og/${inst.id}.jpg`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = { '@type': 'PostalAddress', ...ORG.address };

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'CollegeOrUniversity'],
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: [SITE_SHORT_NAME, 'KCGI Bangalore', 'KCGI Bengaluru', 'KCGI Yelahanka', 'Karnataka College Bangalore'],
  description: ROUTES['/'].description,
  legalName: ORG.legalName,
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: LOGO_URL, width: 1200, height: 318 },
  image: DEFAULT_OG_IMAGE,
  foundingDate: ORG.foundingDate,
  telephone: ORG.telephone,
  email: ORG.email,
  address: postalAddress,
  geo: { '@type': 'GeoCoordinates', ...ORG.geo },
  hasMap: 'https://www.google.com/maps/place/Karnataka+College+Group+of+Institutions/@13.0860698,77.6355606,17z',
  areaServed: ['Bengaluru', 'Karnataka', 'India'],
  sameAs: ORG.sameAs,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: ORG.telephone,
      email: ORG.admissionsEmail,
      contactType: 'admissions',
      areaServed: 'IN',
      availableLanguage: ['en', 'kn', 'hi', 'ml'],
    },
  ],
  subOrganization: INSTITUTIONS.map(i => ({ '@id': `${SITE_URL}/institution/${i.id}#org` })),
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: [SITE_SHORT_NAME, 'KCGI Bangalore'],
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-IN',
});

export const institutionSchema = (inst: Institution) => {
  const url = canonicalUrl(`/institution/${inst.id}`);
  const isSchool = inst.id === 'public-school' || inst.id === 'pu-college';
  return {
    '@context': 'https://schema.org',
    '@type': isSchool ? (inst.id === 'pu-college' ? 'HighSchool' : 'School') : 'CollegeOrUniversity',
    '@id': `${url}#org`,
    name: inst.name,
    url,
    description: inst.overview,
    image: institutionImage(inst),
    telephone: ORG.telephone,
    email: inst.contact.email,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', ...ORG.geo },
    parentOrganization: { '@id': ORG_ID, name: SITE_NAME, alternateName: SITE_SHORT_NAME },
    hasCourse: inst.courses.map(c => ({
      '@type': 'Course',
      name: c.name,
      description: `${c.name} at ${inst.name}, Bengaluru.`,
      provider: { '@id': `${url}#org` },
      ...(c.duration ? { timeRequired: c.duration } : {}),
    })),
  };
};

export const faqSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: canonicalUrl(c.path),
  })),
});

/* ------------------------------------------------------------------ */
/* Resolver                                                            */
/* ------------------------------------------------------------------ */

export interface ResolvedSeo {
  path: string;
  title: string;
  description: string;
  h1: string;
  canonical: string;
  noindex: boolean;
  ogImage: string;
  ogType: 'website' | 'article';
  jsonLd: object[];
  breadcrumbs: { name: string; path: string }[];
  institution?: Institution;
  found: boolean;
}

const findInstitution = (path: string) => {
  const m = path.match(/^\/institution\/([^/]+)$/);
  return m ? INSTITUTIONS.find(i => i.id === m[1]) : undefined;
};

const labelFor = (path: string): string => {
  if (ROUTES[path]?.label) return ROUTES[path].label!;
  const seg = path.split('/').filter(Boolean).pop() || '';
  return SECTION_LABELS[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

const buildCrumbs = (path: string, inst?: Institution) => {
  if (path === '/') return [];
  const crumbs = [{ name: 'Home', path: '/' }];
  if (inst) {
    crumbs.push({ name: 'Institutions', path: '/institutions' });
    crumbs.push({ name: inst.name, path });
    return crumbs;
  }
  const segs = path.split('/').filter(Boolean);
  segs.forEach((_, i) => {
    const p = '/' + segs.slice(0, i + 1).join('/');
    if (ROUTES[p] || i === segs.length - 1) crumbs.push({ name: labelFor(p), path: p });
  });
  return crumbs;
};

export const NOT_FOUND_SEO: PageSeo = {
  title: 'Page Not Found | KCGI Bengaluru',
  description: 'The page you are looking for does not exist. Explore our institutions, courses and admissions at Karnataka College Group of Institutions.',
  h1: 'Page not found',
};

/** Wildcard routes in App.tsx whose sub-paths render the base page. */
const WILDCARD_BASES = ['/placements', '/naac', '/news'];

export const resolveSeo = (rawPath: string): ResolvedSeo => {
  const path = normalizePath(rawPath);
  const inst = findInstitution(path);
  const wildcardBase = WILDCARD_BASES.find(b => path.startsWith(b + '/'));
  const aliasTarget = CANONICAL_ALIASES[path];
  const page: PageSeo | undefined =
    inst ? institutionSeo(inst)
      : ROUTES[path] ?? (aliasTarget ? ROUTES[aliasTarget] : undefined)
      ?? (wildcardBase ? ROUTES[wildcardBase] : undefined);
  const noindexPrefix = NOINDEX_PREFIXES.some(p => path === p || path.startsWith(p + '/'));
  const found = !!page || noindexPrefix;
  const seo = page ?? NOT_FOUND_SEO;
  const canonicalPath = aliasTarget ?? wildcardBase ?? path;
  const crumbs = found ? buildCrumbs(canonicalPath, inst) : [];

  const jsonLd: object[] = [];
  if (canonicalPath === '/') jsonLd.push(organizationSchema(), websiteSchema(), faqSchema());
  if (inst) jsonLd.push(institutionSchema(inst));
  if (crumbs.length > 1) jsonLd.push(breadcrumbSchema(crumbs));

  return {
    path,
    title: seo.title,
    description: seo.description,
    h1: seo.h1 ?? seo.title.split('|')[0].trim(),
    canonical: canonicalUrl(canonicalPath),
    noindex: !found || noindexPrefix || !!seo.noindex,
    ogImage: inst
      ? institutionImage(inst)
      : DEFAULT_OG_IMAGE,
    ogType: 'website',
    jsonLd,
    breadcrumbs: crumbs,
    institution: inst,
    found,
  };
};

/** Every indexable path, for the prerenderer and sitemap. */
export const indexablePaths = (): string[] => [
  ...Object.keys(ROUTES),
  ...INSTITUTIONS.map(i => `/institution/${i.id}`),
];

export const sitemapEntry = (path: string): PageSeo =>
  findInstitution(path) ? institutionSeo(findInstitution(path)!) : ROUTES[path];
