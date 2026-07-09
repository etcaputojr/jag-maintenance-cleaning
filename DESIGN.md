# Design

## Theme

**Dark-first.** The logo is black and bronze-gold — the site inherits that. Dark sections carry the brand weight; light sections provide rhythm and readability contrast. This is deliberately distinctive: no B2B contractor in this space uses a dark site. That is the point.

The physical scene: a BID director at their desk, comparing three tabs. Two are white Squarespace sites. One is black and bronze-gold. They remember which one.

## Logo

The JAG logo is a bronze-gold-on-black hexagonal mark with architectural motifs (roofline curve, stylized building icon). The bronze-gold is sampled from the supplied logo image and carries a brushed metallic texture. The logo is the brand's strongest asset — the site exists to frame it, not compete with it.

**Logo treatment:** Display the supplied full logo image in the top-right navigation position and in the hero brand lockup. Use the building icon mark alone only if a separate transparent/favicon asset is provided later.

## Color Strategy

**Drenched.** This is not a restrained brand. Logo black and bronze-gold dominate the surface. A single light section variant provides breathing room.

### Palette

| Token | Role | Hex | OKLCH (approx) |
|---|---|---|---|
| `--ink` | Body text on dark | `#F1E8D2` | L 0.92, C 0.03, H 86 |
| `--ink-light` | Body text on light | `#171009` | L 0.10, C 0.02, H 62 |
| `--surface-dark` | Primary page background, sampled logo black | `#010000` | L 0.01, C 0.00, H 0 |
| `--surface-elevated` | Cards, form bg on dark | `#0B0906` | L 0.06, C 0.01, H 67 |
| `--surface-light` | Light content sections | `#F6F0E2` | L 0.95, C 0.03, H 88 |
| `--surface-light-elevated` | Cards on light sections | `#FFFFFF` | L 1.0, C 0, H — |
| `--gold` | Primary brand color, sampled bronze-gold | `#AB7C27` | L 0.58, C 0.12, H 76 |
| `--gold-light` | Hover states, metallic highlights | `#E6BD51` | L 0.78, C 0.12, H 83 |
| `--gold-dark` | Subtle borders, dividers | `#6F4A12` | L 0.38, C 0.10, H 68 |
| `--gold-subtle` | Low-opacity overlays | `#AB7C27` at 10-20% opacity | — |
| `--muted` | Secondary text, captions | `#A89773` | L 0.65, C 0.03, H 82 |
| `--border-dark` | Dividers on dark | `#20180B` | L 0.14, C 0.03, H 69 |
| `--border-light` | Dividers on light | `#DED2B4` | L 0.84, C 0.04, H 84 |

### Palette rules
- **Gold is precious.** Use it for headings, the logo, CTAs, key accents, and section dividers. Never as body text (contrast fails on light, reads as decorative on dark).
- **Gold never touches gold.** A gold heading on a gold-tinted background blurs. Gold elements sit on dark or light surfaces — not gold surfaces.
- **One gold per element.** Gold heading + gold border + gold icon on the same card is oversaturation. Pick one gold element per component.
- **Light sections are earned.** Use them when information density or readability demands it (service details, contact form). Default to dark.

## Typography

### Font stack

**Geist** via `next/font/google`. Single family with weight contrast.

- Clean grotesk, warm enough to complement the gold, sharp enough to hold its own against black.
- Not Inter (AI default). Not a display serif (logo already carries the ornamental weight).
- Mono variant available for any data or specification elements.

**Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold).

### Scale

| Level | Role | Size |
|---|---|---|
| Hero headline | Page title | `clamp(2.75rem, 5.5vw, 5rem)` |
| Section heading | H2 | `clamp(1.75rem, 3vw, 2.5rem)` |
| Subheading | H3 | `clamp(1.25rem, 2vw, 1.5rem)` |
| Body | Paragraphs | 1rem / 16px |
| Small | Captions, meta, footer | 0.875rem |

### Rules
- Headings: gold (`--gold`) on dark, near-black (`--ink-light`) on light. Tracking: `-0.02em`. `text-wrap: balance`.
- Body: `--ink` on dark (`#EDEBE8`, high contrast, warm white). `--ink-light` on light surfaces. Line length capped at 65ch. `line-height: 1.6`.
- Gold body text is banned. Gold is for headings, accents, and CTAs only.

## Layout

### Page structure (single page, anchored sections)

1. **Nav** — Fixed, 72px. Transparent on hero → solid dark on scroll.
2. **Hero** — Full-bleed dark surface. Logo + headline + subtext + dual CTA (Request Proposal + Call).
3. **Services** — Dark section. Asymmetric grid with real photography.
4. **Proof** — Dark or light. BID logo strip + testimonial + years badge.
5. **About** — Light section. Company story, Brooklyn roots, team photo.
6. **Contact** — Dark section. Full form + phone + address.
7. **Footer** — Dark. Company info, service list, borough badge.

### Container
- `max-width: 1200px`, centered, with `padding-inline: 1.5rem` for mobile breathing room.

### Section rhythm
- Dark → Light → Dark → Light alternation. Never two light sections adjacent (breaks the identity). Dark sections can repeat if separated by a clear content boundary.
- Section padding: `py-24 md:py-32` for dark sections, `py-20 md:py-28` for light sections.

## Imagery

- Real photography of JAG crews on NYC streets. No stock, no illustrations, no AI-generated people.
- Hero: large photograph treated with a dark overlay, or a full-bleed image of a cleaned NYC street.
- Services: one real photo per service category (street cleaning, power washing, window cleaning).
- About: photo of the founder/team.
- All images: `object-fit: cover`, proper aspect ratios, lazy-loaded below the fold.
- Alt text as voice: "JAG crew member power washing the sidewalk at Fulton Street and Nostrand Avenue, Brooklyn."

## Shape Consistency

- **Corner radius:** 6px for cards and containers. 4px for buttons and inputs.
- **No pill shapes.** Professional, not consumer-app.
- **No rounded images.** Edges are sharp or slightly softened (2px radius).

## Architecture & Motifs

The logo's architectural cues (hexagon, roofline, building icon) can echo subtly:
- Section dividers: thin gold horizontal rules
- The building icon as a favicon and small watermark
- Geometric precision in grid layouts (echoing the hexagonal structure)
- Do not overuse. The logo is the statement piece.

## Motion

Moderate. Purposeful, restrained.

- **Hero entrance:** Logo + headline fade up on load (single orchestrated moment, 600ms, ease-out expo).
- **Section reveals:** Subtle fade-up on scroll (`whileInView`, once: true, 60ms stagger between children).
- **CTAs:** `scale-[0.98]` on active. Gold lightens on hover (`--gold` → `--gold-light`, 200ms ease-out).
- **Nav:** Background transitions from transparent → solid on scroll (300ms).
- **No scroll hijacking, no parallax, no marquee, no cursor effects.**
- All motion gated: `prefers-reduced-motion: reduce` → instant.

## Component Specifications

### Navigation
- Fixed top, 72px height, z-10.
- Left: nav links (Services, About, Contact). Center: phone number + "Request Proposal" CTA button (bronze-gold fill). Right: supplied logo image.
- Scroll state: `bg-transparent` on hero → `bg-[--surface-dark]/95 backdrop-blur-md` on scroll. Border-bottom: 1px `--border-dark` in scrolled state.

### Hero
- Full viewport height (`min-h-[100dvh]`).
- Background: dark surface with a large photograph on the right half or as a full-bleed overlay.
- Left/content area: supplied logo image (smaller variant), headline in bronze-gold, subtext in warm white, dual CTAs.
- CTAs: "Request a Proposal" (gold fill, dark text), "Call (718) 375-4545" (gold outline).
- No scroll cue. No tagline below CTAs. No eyebrow.

### Services
- Dark background section.
- Three services: Street Cleaning, Power Washing, Window Cleaning.
- Layout: one hero card (larger, with photo) + two side cards. Asymmetric, not three equal columns.
- Each card: dark elevated surface, photo top, service name (gold), one-line description, "Learn more" link.

### Social Proof
- BID logo strip: real BID logos (Simple Icons or provided SVGs), grayscale/white, evenly spaced.
- Testimonial: one quote from a BID director. Gold opening quote mark. Body text in warm white, max 3 lines. Attribution: name, title, district.
- Years badge: "Serving NYC Since [Year]" as a small gold-accented stat.

### About
- Light section (`--surface-light`).
- Left: company story (2 paragraphs, max). Right: founder photo.
- "Brooklyn, NY" as a gold eyebrow (the one permitted eyebrow on the page).
- Three stat pills under the copy: Years in Business, Boroughs Served, BIDs Partnered.

### Contact
- Dark background section.
- Left: form (Name, Organization, Email, Phone, Service Interest dropdown, Message).
- Right: phone number (large, gold), email, Brooklyn address.
- Form labels above inputs. No placeholder-as-label.
- Submit button: gold fill, dark text. Loading state: gold spinner. Success state: confirmation message.

### Footer
- Dark background (`--surface-dark`).
- Three-column grid: Company info (logo small, address, phone, email), Services list, "Proudly serving all five boroughs of NYC" badge.
- Bottom bar: copyright, privacy link.

## States

Every interactive element ships with all states:
- **Default** → resting
- **Hover** → gold lightens, slight lift (1-2px translateY on cards)
- **Focus-visible** → gold outline ring (2px, offset 2px)
- **Active** → scale 0.98
- **Disabled** → reduced opacity, no pointer events
- **Loading** → skeletal loaders matching final layout shape
- **Error** → inline below input, gold-amber tint
- **Success** → green-adjacent warm confirmation

## Accessibility

- WCAG AA minimum.
- All gold-on-dark headings pass 3:1 (large text threshold).
- All body text passes 4.5:1 against its background.
- No gold body text (contrast fail on light, decorative on dark).
- Focus rings visible, 2px gold, offset from element.
- Forms: labels programmatically associated, required fields marked.
- Phone number: `tel:` link, tappable.
- Reduced motion: all animations collapse to instant.

## Z-Index Scale

| Level | Use |
|---|---|
| 10 | Sticky navigation |
| 20 | Dropdown overlays |
| 30 | Modal (if used) |
| 40 | Toast notification |
