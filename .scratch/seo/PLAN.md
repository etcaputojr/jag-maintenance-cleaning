# JAG Maintenance Contact and SEO Execution Plan

Status: Approved on 2026-07-11; scope is Workstream A plus Phases 1–4

## Outcome

Make JAG Maintenance discoverable in search, establish trustworthy local-business signals, and convert search visitors into delivered proposal requests.

## Working rules

- Keep `https://www.jagmaintenance.com/` as the canonical site URL.
- Use only accurate business facts, real project proof, and authorized testimonials.
- Do not publish thin borough pages or buy backlinks.
- Deploy each phase only after its local build, lint, and focused checks pass.
- Keep account credentials and API keys in Vercel environment variables, never in Git.

## Workstream A: Wire the contact form properly

### Recommended architecture

Use a Next.js Route Handler at `src/app/api/contact/route.ts` to validate the submission server-side and send it through Resend. Deliver proposals to the confirmed JAG inbox, send from a verified `jagmaintenance.com` sender, and set `replyTo` to the visitor's email.

Start with a hidden honeypot and strict server-side validation. Add Cloudflare Turnstile only if spam appears; if added, its token must be validated server-side.

### Ed provides or approves

- Recipient inbox confirmed: `jwren859@aol.com`.
- Create or authorize a Resend account and API key.
- Add the Resend SPF and DKIM DNS records for a sending subdomain such as `mail.jagmaintenance.com`.
- Approve the sender identity, for example `JAG Website <proposals@mail.jagmaintenance.com>`.

### Codex implements

1. Add the Resend dependency and typed server-side payload validation.
2. Add `POST /api/contact` with normalized fields, length limits, safe error responses, and no sensitive logging.
3. Add a plain, readable notification email containing name, organization, email, service, and message.
4. Replace the simulated timeout in `Contact.tsx` with a real `fetch` request.
5. Add distinct idle, sending, success, and failure states while preserving entered values on failure.
6. Add a honeypot field and accessible status messaging.
7. Document `RESEND_API_KEY`, sender, and recipient environment variables in `.env.example` without values.
8. Test validation failures, provider failures, successful delivery, double-submit prevention, and keyboard/screen-reader behavior.
9. Configure the same required variables in Vercel Preview and Production, then verify one real delivered proposal from the deployed site.

### Acceptance criteria

- A valid deployed submission arrives at the confirmed inbox with the visitor as `replyTo`.
- Invalid or bot-like submissions do not send email.
- Provider/network errors show a retryable error and never show false success.
- Secrets are absent from the repository and browser bundle.

## Phase 1: Technical SEO foundation

### Codex

1. Add `src/app/robots.ts` allowing public crawling and referencing the sitemap.
2. Add `src/app/sitemap.ts` with every canonical, indexable route.
3. Expand Next.js metadata with `metadataBase`, canonical alternates, site name, Open Graph URL/image, and Twitter card data.
4. Add accurate `Organization` JSON-LD. Add `LocalBusiness` only after the required address and hours are confirmed.
5. Create or add an approved 1200 x 630 social-sharing image.
6. Add focused automated checks for status codes, robots, sitemap, canonical metadata, and JSON-LD.
7. Run lint and a production build, deploy through the existing GitHub-to-Vercel flow, and verify the live outputs.

### Ed

- Provide the legal business address, public-address preference, hours, service-area rules, approved logo, and real representative photo.

### Done when

The live homepage, `/robots.txt`, and `/sitemap.xml` return `200`; the homepage declares the preferred canonical URL; structured data validates without critical errors.

## Phase 2: Google and Bing indexing

### Ed with Codex guidance

1. Create a Google Search Console Domain property for `jagmaintenance.com`.
2. Add Google's DNS TXT verification record.
3. Submit `https://www.jagmaintenance.com/sitemap.xml`.
4. Inspect the homepage, run the live test, and request indexing.
5. Add or import the property in Bing Webmaster Tools and submit the same sitemap.

### Codex

- Verify public DNS and deployed verification artifacts without exposing secrets.
- Review Search Console and Bing crawl/index reports after data appears.
- Implement IndexNow later if publishing frequency makes it useful.

### Done when

Both tools verify ownership, accept the sitemap, and report the canonical homepage as discoverable. Indexing itself may take time and is not guaranteed.

## Phase 3: Useful service pages

### Initial routes

- `/services/street-cleaning`
- `/services/power-washing`
- `/services/window-cleaning`
- `/business-improvement-district-cleaning`
- `/about`
- `/contact`

### Ed

- Supply accurate service scope, equipment/process details, service frequency, qualifications, insurance/safety facts, real photos, and approved project examples.

### Codex

1. Build a keyword-to-page map using Search Console data when available plus current result-page research.
2. Draft each page around a distinct buyer need rather than word-count or keyword targets.
3. Add unique titles, descriptions, H1s, internal links, calls to action, proof, and helpful FAQs.
4. Include each route in navigation and the sitemap.
5. Add borough pages only when Ed can provide materially distinct local proof and content.

### Done when

Every page answers a distinct search intent, contains original JAG evidence, is internally linked, and passes the technical checks.

## Phase 4: Local search profiles

### Ed with Codex guidance

1. Claim or create Google Business Profile as the accurate storefront or service-area business type.
2. Claim Bing Places for Business.
3. Claim Apple Business Connect.
4. Align the exact business name, phone, website, hours, categories, service areas, and address-display rules across all profiles.
5. Upload real project, crew, vehicle, equipment, and before/after photos.
6. Establish a policy-compliant process for requesting and responding to genuine reviews without incentives.

### Codex

- Prepare the consistent business-information sheet, profile descriptions, service list, photo checklist, and review-request copy.
- Audit the published profiles for discrepancies.

### Done when

All three profiles are verified, complete, consistent with the website, and controlled by a JAG-owned account.

## Measurement cadence

- Weekly during launch: indexing status, crawl errors, form delivery, and profile verification.
- Monthly after launch: non-branded impressions, clicks, CTR, indexed pages, landing pages, calls, emails, proposal submissions, and qualified leads.
- Use Search Console query data to choose the next content improvement; do not judge success only by a small hand-picked keyword list.

## Approved execution order

1. Implement Workstream A and Phase 1 together.
2. Deploy and complete Phase 2 account verification.
3. Gather real proof while building Phase 3 pages.
4. Complete Phase 4 profiles and the cross-profile consistency audit.
