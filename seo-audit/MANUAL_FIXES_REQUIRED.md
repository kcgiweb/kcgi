# Manual actions required after deployment

The website code no longer publishes unsupported accreditation, placement, testimonial or stale-news claims. The following items require access outside this repository and cannot be safely completed in code here.

## 1. Redirect the legacy pharmacy domain

Configure a permanent `301` redirect on `karnatakacollegeofpharmacy.com` to the canonical KCGI pharmacy page:

```apache
RewriteEngine On
RewriteRule ^(.*)$ https://kcgiedu.org/institution/pharmacy [R=301,L]
```

Apply this only after confirming that KCGI owns and controls the legacy domain. Verify with:

```text
curl -I https://karnatakacollegeofpharmacy.com/
```

The response should be `301` with `Location: https://kcgiedu.org/institution/pharmacy`.

## 2. Refresh Google’s old title and email snippet

After uploading the new `dist/` folder, use the verified Google Search Console property for `https://kcgiedu.org` to:

1. Submit `https://kcgiedu.org/sitemap.xml`.
2. Inspect the homepage and select **Request indexing**.
3. Inspect `/institution/pharmacy` and select **Request indexing**.

Google controls snippet refresh timing; a code change cannot force an immediate update.

## 3. Publish verified programme data

Provide Admissions with approved source documents for each programme's fees, duration, eligibility, intake, affiliation and approval status. Publish only information that the relevant KCGI institution has verified and dated. Do not restore generic NAAC, NMC, recruiter, ranking, placement-rate or alumni claims without evidence.

## 4. Check the live deployment

After deployment, confirm the pages below contain no old claims and return `200`:

- `/`
- `/placements`
- `/news`
- `/naac`
- `/about/history`
- `/about/quality`

Then run the URL Inspection tool in Search Console for the homepage and pharmacy page.
