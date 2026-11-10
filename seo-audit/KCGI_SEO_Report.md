# KCGI SEO Audit & Implementation Report

**Site:** https://kcgiedu.org · **Prepared by:** KCGI Web Team · **Date:** 10 November 2026
**Goal:** Rank for the brand keyword **"KCGI"** and its variants (KCGI college, KCGI admissions, KCGI courses, KCGI contact number, KCGI Bangalore / Yelahanka).

> No ranking position is guaranteed. Nothing in this report claims a page is indexed: check that in Google Search Console (section 8).

---

## 1. Summary

| Area | Before the audit | Now |
|---|---|---|
| Homepage | Fell back to the app shell; titles were duplicated | Its own prerendered HTML, 1 title, 1 canonical |
| Unknown URLs | Returned 200 (soft 404) | Return a real 404 status |
| Canonical / redirects | None; `www`, `http`, `.html` and trailing-slash variants were all live | One canonical host and clean URLs, all via 301 |
| Sitemap | Hand-written and stale | Generated at every build: 49 URLs |
| Page titles | Duplicated, generic | Unique per page; brand pages lead with **"KCGI"** |
| Structured data | Partial, injected only by JavaScript | Organization/College, WebSite, FAQPage, BreadcrumbList and 11 institution schemas; 0 parse errors |
| Content without JavaScript | Empty `<div id="root">` | Each page has an H1, summary, links, courses and contact details |
| Tailwind | CDN build (about 300 KB, blocks rendering) | Compiled CSS, 9.6 KB gzipped |
| Main JavaScript | 1.08 MB | 330 KB (routes are code-split) |
| Images | About 146 MB of originals | WebP versions (`public/assets/images` is 5.4 MB in total) |
| Built site | 205 MB | 67 MB (the two videos account for about 60 MB) |
| Hero video | 54 MB, loaded on every device | Desktop only, and skipped when Data Saver is on |
| Email addresses | Non-existent domain | @kcgiedu.org |
| Legal pages | Missing | `/privacy-policy` and `/terms` (drafts, need review) |
| Brand entity "KCGI" | Not in the homepage title or H1 | In the title, H1, intro, FAQ, schema `alternateName`, every institution's description and the footer |

## 2. Issues found

**Blockers (fixed)**
- The homepage returned a 404, or the shell without SEO tags.
- Soft 404s: every unknown URL returned 200 with homepage content.
- `vercel.json` rewrites are ignored on Hostinger, so the deep routes had no server mapping.
- Email addresses used a domain that doesn't exist.
- Privacy policy and terms were missing, although the site takes payments and personal data.

**High (fixed)**
- Duplicate `<title>` and `<meta description>` tags (the static ones in `index.html` plus Helmet's).
- No canonical tags; duplicate host and URL variants.
- The sitemap listed URLs that don't exist and missed the institution pages.
- The homepage title and H1 didn't contain "KCGI".
- Render-blocking Tailwind CDN and Google Fonts; 1 MB JavaScript bundle; very large images and video.
- The Razorpay script loaded on every page.
- Admission form data (personal information) was written to `console.log` and `localStorage`.

**Medium (fixed)**
- Layout components overwrote `document.title`.
- Missing or generic image alt text (Facilities, News).
- Phone numbers and emails weren't clickable `tel:` / `mailto:` links.
- Inconsistent age claims ("over three decades" vs. founded in 1997).
- Placeholder phone numbers on some pages.
- The PWA manifest was missing and had no PNG icons.

**Open: needs real information from KCGI (not fixed, nothing invented)** — see section 9.

## 3. Files modified

**SEO system (new):** `seo/config.ts`, `seo/prerender.ts`, `public/.htaccess`, `public/robots.txt`, `public/manifest.json`, `components/SEO.tsx`, `components/DynamicRouteSEO.tsx`

**Pages and components:**
- `index.html`, `index.tsx`, `index.css`, `App.tsx`
- `pages/Home.tsx`, `pages/InstitutionDetail.tsx`, `pages/NotFound.tsx` (new)
- `pages/legal/PrivacyPolicy.tsx` (new), `pages/legal/Terms.tsx` (new), `components/LegalPage.tsx` (new)
- `pages/admissions/Apply.tsx`, `pages/admissions/Enquiry.tsx`, `pages/ContactUs.tsx`, `pages/admin/AdminDashboard.tsx`
- `components/Header.tsx`, `components/Footer.tsx`
- `components/AboutLayout.tsx`, `components/AcademicsLayout.tsx`, `components/AdmissionsLayout.tsx`
- `pages/academics/TheEdge.tsx`, `pages/Facilities.tsx`, `pages/NewsEvents.tsx`, `constants.ts`
- Image paths in `AdmissionPopup`, `AboutUsMain`, `AboutChairman`, `AboutGoverning`, `DiplomaPU` and `Research`

**Build:** `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `package.json`

**Assets:**
- `public/assets/images/opt/*.webp` and `public/assets/images/og/*.jpg`
- Favicons and logo PNGs
- 50 unused original images removed

## 4. Changes in this round (brand keyword "KCGI")

| Page | Old title | New title |
|---|---|---|
| `/` | Karnataka College Group of Institutions \| Colleges in Yelahanka, Bangalore | **KCGI \| Karnataka College Group of Institutions, Bangalore** |
| `/contact` | Contact KCGI \| Address, Phone & Directions… | **KCGI Contact Number & Address \| Yelahanka, Bengaluru** |
| `/admissions` | Admissions 2026-27 Open \| Apply to KCGI Bengaluru | **KCGI Admissions 2026-27 Open \| Apply Online, Bengaluru** |
| `/academics` | Courses at KCGI Bengaluru \| … | **KCGI Courses \| Pharmacy, Nursing, Law, MBA & Physiotherapy, Bangalore** |
| `/placements`, `/facilities`, `/news` | "… \| KCGI Bengaluru" | Now start with "KCGI …" |

Other changes:
- **Homepage H1:** "KCGI – Karnataka College Group of Institutions · Yelahanka, Bengaluru". The intro now reads "Since 1997, KCGI has been…".
- **Homepage FAQ (new, visible, 7 questions):**
  - What is KCGI?
  - Where is it?
  - What is the contact number?
  - What courses does it offer?
  - Which universities and boards is it affiliated to?
  - How do I apply?
  - What is the official website?
  - The same answers are output as `FAQPage` JSON-LD and appear in the prerendered HTML. Every answer uses facts already published on the site.
- **Schema:**
  - The organization's `alternateName` is now KCGI, KCGI Bangalore, KCGI Bengaluru, KCGI Yelahanka and Karnataka College Bangalore.
  - The WebSite `alternateName` includes KCGI; Google uses it to choose the site name it shows in results.
  - Each institution's `parentOrganization` now names KCGI.
- **Institution descriptions** now say "…, a KCGI institution in Yelahanka, Bengaluru".
- **Footer:** "© 2026 Karnataka College Group of Institutions (KCGI)".
- **Fonts:** Google Fonts now load without blocking rendering (preload with a `<noscript>` fallback).
- **Alt text:** added to the Facilities campus image; the decorative News gallery images now have an empty alt.

## 5. Sitemap and robots.txt

- Sitemap: **https://kcgiedu.org/sitemap.xml**. It is regenerated at every build from `seo/config.ts` and has 49 URLs: 38 pages and 11 institutions.
- robots.txt: **https://kcgiedu.org/robots.txt**. It allows everything except `/admin` and links to the sitemap.
- No important page is noindexed or blocked. Only `/admin` and unknown URLs are noindex.

## 6. Schema validation status

I parsed every prerendered page's JSON-LD at build time: **49 files, 0 parse errors.**

| Type | Pages |
|---|---|
| EducationalOrganization + CollegeOrUniversity (main entity) | Homepage |
| WebSite | Homepage |
| FAQPage | Homepage |
| CollegeOrUniversity / School / HighSchool, with `hasCourse` | 11 institution pages |
| BreadcrumbList | 47 pages |

`LocalBusiness` was **not** added on purpose: a college is an `EducationalOrganization`, and the schema already includes the address, geo coordinates, phone and map link. No ratings, reviews or opening hours were added, because I have no verified data for them.

> Google currently shows FAQ rich results mainly for government and health sites. The FAQPage markup is still valid and helps Google understand the page, but don't expect FAQ dropdowns in search results.

Validate after deploying:
- https://search.google.com/test/rich-results?url=https://kcgiedu.org/
- https://validator.schema.org/#url=https%3A%2F%2Fkcgiedu.org%2F

## 7. Verified on the live site (10 Nov 2026, before this round's deploy)

| Check | Result |
|---|---|
| `/` | 200 |
| `/about`, `/institution/pharmacy`, `/privacy-policy` | 200, each with its own title and canonical |
| `http://`, `www.`, `/about/`, `/about.html`, `/index.html` | 301 to the clean HTTPS URL |
| Unknown URL | 404 |
| `/admin` | noindex |

**Core Web Vitals were not measured:** the PageSpeed API quota was exhausted and Hostinger's bot protection blocked Lighthouse. Measure them after deploying at https://pagespeed.web.dev/?url=https://kcgiedu.org/.

## 8. Google Search Console setup

1. Go to https://search.google.com/search-console and add a **Domain property** for `kcgiedu.org`, verified by a DNS TXT record in Hostinger hPanel → DNS. A URL-prefix property for `https://kcgiedu.org/` also verifies through the existing `google-site-verification` meta tag.
2. **Sitemaps:** submit `sitemap.xml`. Status should become "Success" with 49 discovered URLs.
3. **URL Inspection:** inspect `https://kcgiedu.org/`, then click **Test live URL**, then **Request indexing**. Repeat for `/contact`, `/admissions`, `/academics` and the 11 `/institution/...` pages; there is a quota of about 10 per day.
4. **Pages report:** after 1–2 weeks, check "Not indexed" reasons. "Page with redirect" and "Excluded by noindex (/admin)" are expected.
5. **Settings:** link the property to **Google Analytics 4** (G-JR6X0VS7C5 is already installed on every page).
6. **Performance report:** filter by queries containing "kcgi" and track clicks, impressions and average position every week.
7. Also add the site to **Bing Webmaster Tools** (it can import from Search Console in one click).

## 9. Remaining manual actions (need KCGI's input; nothing invented)

1. **Google Business Profile.** This matters most for "KCGI", "KCGI Bangalore" and map results.
   - Claim or verify "Karnataka College Group of Institutions".
   - Name, address and phone must exactly match the site: *33/2, Hegde Nagar Main Rd, Thirumenahalli, Yelahanka, Bengaluru 560064 · 080808 33000*.
   - Category: College; website: https://kcgiedu.org/.
   - Add real photos, and ask students and parents for honest reviews. Never buy reviews.
2. **Create the @kcgiedu.org mailboxes** the site now lists: info, admissions, pharmacy, nursing, mba, bed, school, pu, law, alliedhealth, kaveri, physio.
3. **Verify these claims, then correct them or provide evidence.**
   - The footer says "**NAAC Accredited Grade 'A'**" and "**NMC Recognized**". NMC regulates medical colleges, and KCGI lists none. Keep only accreditations you can document, ideally with the certificate number and year.
   - The Placements page shows a testimonial ("…excel at Pfizer…") with a **stock photo**. Replace it with a real alumna's name, photo and consent, or remove it.
   - The News & Events page uses **placeholder stock images and sample items**. Replace them with real dated news.
4. **Social profiles in schema `sameAs`:** confirm that facebook.com/Kcgiedu, instagram.com/Kcgiedu, twitter.com/Kcgiedu, linkedin.com/company/kcgiedu and youtube.com/@kcgiedu are KCGI's own accounts. Also link back to https://kcgiedu.org/ from each profile's bio.
5. **Legal review:** have the Privacy Policy and Terms reviewed, especially the refund wording, which is an assumption.
6. **Hero video (54 MB):** compress it to 5–8 MB with ffmpeg or HandBrake (720p, H.264, CRF 28), or host it on YouTube. This is the biggest remaining weight on desktop.
7. **Deploy:** run `npm run build`, then upload all of `dist/`, including `.htaccess`, to `public_html`.

## 10. Content recommendations (real information only)

| Page | What to add |
|---|---|
| About | Founder or trust history with real dates; a photo timeline; registration details of the Karnataka Educational Trust |
| Courses / institution pages | Per course: duration, eligibility, intake (seats), affiliating university, approval letter or year, fee range or "contact for fees" |
| Admissions | Important dates for 2026-27; the documents checklist per course; the counselling process (KEA, NEET or management quota, where applicable) |
| Contact | Admissions office hours (once confirmed); a phone and email for each institution; directions from Yelahanka New Town, the airport and Majestic |
| Faculty | A page per institution listing faculty name, qualification and designation (also expected by PCI, INC and RGUHS) |
| Infrastructure | Real photos with descriptive alt text: labs, library, hospital tie-ups, hostel, transport routes |
| Placements | Year-wise numbers you can verify (students placed, recruiters, highest and median package) and real recruiter logos with permission |
| News | One post per real event (fests, NSS camps, seminars, results), each with its own URL, date and photos |

## 11. 90-day roadmap

**Days 1–14: foundation**
- Deploy this build.
- Set up Search Console and Bing, submit the sitemap and request indexing for the key URLs.
- Claim and complete the Google Business Profile with matching NAP.
- Fix or remove the unverified claims and stock content (section 9.3).
- Compress the hero video. Measure PageSpeed (mobile and desktop) and record the baseline.

**Days 15–45: entity and content**
- Publish Faculty pages and complete per-course details (eligibility, intake, approvals) for all 11 institutions.
- Add real campus photos with descriptive alt text.
- Make every social profile bio and link say "KCGI – Karnataka College Group of Institutions" and point to https://kcgiedu.org/.
- Get listed with the same NAP on the affiliating universities' college lists (RGUHS, KSLU, BCU), PCI/INC approval lists, Shiksha, CollegeDunia, Careers360, JustDial and Sulekha. Correct any wrong phone numbers or addresses there.
- Start News: 2–4 real posts a month.

**Days 46–90: authority and measurement**
- Earn links from real relationships: hospital and industry partners, alumni, local news coverage of events, and seminar or conference pages.
- Ask for genuine Google reviews after admission and graduation events, and reply to every review.
- Review the Search Console queries containing "kcgi". Improve the pages with impressions but a low click-through rate, starting with their titles and descriptions.
- Watch Core Web Vitals in Search Console and fix any URL group marked "Poor".
- Re-run this audit at day 90.

**KPIs to track:**
- Average position and click-through rate for queries containing "kcgi" (Search Console)
- Indexed pages out of 49
- Google Business Profile views, calls and direction requests
- Organic sessions and application starts (GA4)

---

## 12. PDF audit (KCGI_SEO_Audit.pdf): status of every finding

| # | Finding (severity) | Status |
|---|---|---|
| 1 | All inner URLs return 404 (blocker) | ✅ Fixed (`.htaccess` plus prerendered pages); verified live |
| 2 | Email domain does not exist (blocker) | ✅ Changed to @kcgiedu.org; the mailboxes still need to be created |
| 3 | Privacy Policy and Terms link to `#` (blocker) | ✅ Pages published (drafts, need legal review) |
| 4 | Duplicate title and description (high) | ✅ Fixed; exactly 1 of each per page |
| 5 | `www` not redirected (high) | ✅ 301 to `https://kcgiedu.org`; verified live |
| 6 | Canonical copies the full URL (medium) | ✅ Origin plus path only, with no query string |
| 7 | Homepage has no H1 (medium) | ✅ H1 contains "KCGI" |
| 8 | Thin institution pages (medium) | 🟡 Partly. Prerendered content, schema and courses added; still needs real fees, intake, faculty and photos from KCGI |
| 9 | Inconsistent brand name and facts (medium) | ✅ One name, "Karnataka College Group of Institutions (KCGI)", and "since 1997". ⚠ The footer's NAAC/NMC claims still need verifying |
| 10 | Broken assets in head and schema (low) | ✅ Logo, og:image, manifest and favicon fixed |
| 11 | Phone number not tappable (low) | ✅ `tel:` links everywhere |
| — | Sitemap had 17 URLs, 16 of them 404 | ✅ 49 valid URLs, generated at every build |
| — | Soft 404 catch-all | ✅ Real 404 page and status |
| — | 600-character meta keywords list | ✅ Removed |
| — | JS-only rendering (empty HTML) | ✅ Every route prerendered |
| — | 2.9 MB homepage, 652 KB logo, Tailwind CDN | ✅ WebP images, 61 KB WebP logo, compiled CSS, 330 KB JS |
| — | No institution / Course schema | ✅ Added to all 11 institution pages |
| — | `/admissions/fees` exists but has no route | ✅ Routed, in the sitemap, linked from Admissions |
| — | Core Web Vitals not measured | ⏳ Measure with PageSpeed Insights after deploying |
| — | 10 suggested articles (content strategy) | ⏳ Not written: they need KCGI's real fees, intake and dates |
| — | Course pages `/courses/[course]` | ⏳ Not built: the data has only course names, so the pages would be thin. Build them once each course has eligibility, duration, intake, fees and approval |
| — | Aggregator profiles (Shiksha, Careers360, Collegedunia, CollegeDekho) | ⏳ Off-site; must be done by KCGI |

**All 13 quick wins in the PDF are done.** What remains needs real information or work off the website.

## 13. Competitor comparison: before and after

Competitor data comes from the audit research (10 Nov 2026). "Before" is KCGI's live site at the time of the audit; "After" is this build, once deployed.

| Feature | KCGI before | **KCGI after** | Acharya | Nitte | Krupanidhi | Sambhram |
|---|---|---|---|---|---|---|
| Indexable pages (real HTML) | ❌ | ✅ 49 | ✅ | ✅ | 🟡 | ✅ |
| H1 in raw HTML | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Schema (JSON-LD) | 🟡 | ✅ Org, College, Course, FAQ, Breadcrumb | ❌ | ✅ | ❌ | ❌ |
| Valid sitemap | ❌ | ✅ | ❌ (redirects) | ✅ | ? | ? |
| Fees page | ❌ | 🟡 (policy only, no amounts) | ✅ | ✅ | 🟡 | ❌ |
| Per-course pages | 🟡 | 🟡 | ✅ | ✅ | ✅ | 🟡 |
| News / blog | 🟡 | 🟡 (placeholders) | ✅ | ✅ | 🟡 | 🟡 |
| Aggregator presence | 🟡 | 🟡 | ✅ | ✅ | ✅ | 🟡 |
| Brand FAQ ("What is KCGI") | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |

**Where KCGI now leads:** technical SEO and structured data. None of the five competitors has KCGI's combination of prerendered pages, a full schema graph, FAQ markup and a clean sitemap.

**Where competitors still win, and what closes each gap:**
1. **Fees with real amounts** (Acharya, Nitte). Publish course-wise fee ranges, or at least "from ₹X", on `/admissions/fees`. Searches like "pharmacy college Yelahanka fees" go to whoever publishes numbers.
2. **Course pages** (Acharya, Nitte, Krupanidhi). Give each flagship course (B.Pharm, Pharm D, B.Sc Nursing, GNM, BPT, LL.B, MBA) its own page with eligibility, duration, intake, approval and fees. The code is ready to generate these as soon as the data is in `constants.ts`.
3. **Active news and blog** (Acharya, Nitte). Post 2–4 real items a month, then the 10 articles from the PDF's content plan.
4. **Aggregators and Wikipedia** (Krupanidhi has a Wikipedia article; Aditya, in the same pincode, has full aggregator listings). Claim the Shiksha, Careers360, Collegedunia and CollegeDekho profiles with identical NAP and links to kcgiedu.org. A Wikipedia article only becomes realistic once independent press coverage exists.
5. **Reviews.** Aggregator ratings are fragmented (3.6–4.7). A Google Business Profile with genuine reviews is the fastest local trust signal.
