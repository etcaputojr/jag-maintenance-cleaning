# Design QA — JAG Maintenance redesign

## Comparison target

- Source visual truth: `/var/folders/_0/d5rxh21n6zsgtlc2y0wm4vdr0000gn/T/codex-clipboard-20eac642-83c2-4c01-ab21-8826ad624968.png`
- Browser-rendered implementation: `.audit/14-redesign-proof-led.png`
- Same viewport: 1536 × 1024 desktop, top-of-page resting state.
- Full-view comparison: `.audit/18-reference-comparison.png` (source on the left; implementation on the right).
- Focused regions: the navigation, hero split, proof rail, and generated hero photograph are all visible in the full-view comparison; separate crops were not needed.

## Comparison history

1. **Initial desktop capture — P1**
   - Evidence: `.audit/08-redesign-desktop.png`
   - Finding: the hero consumed the full viewport and pushed the proof rail out of the first scroll, while the selected reference presents the proof rail immediately below the hero.
   - Fix: tightened hero vertical padding and reordered the page so `Proof` follows `Hero` before `Services`.
2. **Post-fix desktop capture**
   - Evidence: `.audit/14-redesign-proof-led.png`
   - Result: the ivory/black proof rail now follows the split hero in the first scroll, matching the source’s visual rhythm.

## Findings

No actionable P0, P1, or P2 differences remain for the agreed direction.

- **P3 — Temporary hero image is intentionally unbranded**
  - Location: hero photograph.
  - Evidence: the source mock shows a JAG mark on the foreground vest; the implementation’s generated placeholder photo is labeled as temporary concept imagery and intentionally contains no fabricated brand mark.
  - Impact: none on layout, hierarchy, or conversion flow; replace with a real JAG field photograph when available.

## Required fidelity surfaces

- **Fonts and typography:** Geist is used consistently. The display scale, tight tracking, uppercase navigation, and editorial headline hierarchy follow the source; the source’s slightly narrower display treatment is an acceptable variation within the existing product typography rule.
- **Spacing and layout rhythm:** desktop hero uses the same high-contrast ivory-copy/right-photo split and leads into a three-part proof rail. The services section continues the design through separated rows rather than cards.
- **Colors and tokens:** implementation maps the source’s near-black, warm ivory, and bronze palette to `--ink`, `--paper`, and `--gold`; text and actions retain visible contrast.
- **Image quality and asset fidelity:** the individual hero photograph is a local raster asset at `public/jag-crew-hero-v1.png`, with the selected source’s subject, crop direction, and warm street-work art direction. It is not recreated with CSS or SVG.
- **Copy and content:** the headline, service categories, service-history rail, and practical proposal CTAs are coherent with the source. The testimonial is deliberately labeled prospective rather than presented as a verified client quote.
- **Icons:** all UI icons use the existing Phosphor icon library; no custom SVG icon substitutes were added.
- **Accessibility and behavior:** meaningful image alt text, labeled required form inputs, visible focus treatment, reduced-motion support, semantic navigation, and tappable telephone/email links are present.
- **Responsive behavior:** `.audit/16-redesign-mobile.png` confirms a 390 × 844 mobile layout with no horizontal overflow; `.audit/17-redesign-mobile-menu.png` confirms the mobile menu opens cleanly.

## Primary interactions checked

- Mobile navigation menu opened and displayed Services, About, Contact, and the proposal CTA.
- Proposal form accepted valid text, a selected service, and a message; it changed to the visible success state.
- Browser console check returned no warnings or errors.

## Implementation checklist

- [x] Rebuild the single-page visual system around the selected reference image.
- [x] Replace the card-heavy service section with an editorial service list.
- [x] Carry the black / bronze / ivory rhythm through proof, services, about, contact, and footer.
- [x] Verify production build and lint.
- [x] Verify desktop, mobile, navigation, form success state, and browser console.

## Follow-up polish

- Replace the temporary generated hero image with real JAG crew photography when it arrives.
- Replace the prospective testimonial label with an approved named BID quote.

final result: passed
