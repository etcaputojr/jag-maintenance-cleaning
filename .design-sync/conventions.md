# JAG Maintenance — how to build with these components

JAG Maintenance & Cleaning LLC: street cleaning, power washing and window cleaning for NYC Business Improvement Districts (BIDs). Brooklyn, since 1999. Phone (917) 416-6472. The reader of every page is a BID director comparing contractors.

## What the components are

The 7 components are whole page sections of the live homepage, not small controls. They take **no props**: render them as-is, in this order, to get the real homepage:

```jsx
const { Nav, Hero, Proof, Services, About, Contact, Footer } = window.JAG;
<>
  <Nav />
  <main><Hero /><Proof /><Services /><About /><Contact /></main>
  <Footer />
</>
```

- No provider or wrapper is needed. Link `styles.css` once; it carries every style and the Geist font.
- `Nav` is sticky and links to `#services`, `#about`, `#contact`. Keep those ids on new sections that replace the originals.
- `Contact` posts to `/api/contact`, which does not exist in a design, so a submit shows the error message. Do not treat that as a bug.
- To change a section's copy or layout, build a new section in the same idiom (below) and place it in the page instead of the original.

## Styling idiom: plain CSS classes + CSS variables (no Tailwind utilities)

Colors (CSS variables on `:root`): `--ink` #0e0b08 (page bg, text on paper), `--paper` #f4efe4 (light sections), `--paper-deep`, `--cream` #fbf7ef (text on dark), `--gold` #c69c32 (brand: buttons, rules, numbers), `--gold-light` #e1bd62 (hover, eyebrows on dark), `--muted`, `--line-dark` (dividers on dark), `--line-light` (dividers on paper). Dark sections use background `#0a0907`.

Reusable classes:
- `section-shell` — centered content container, max 1400px with 24px side gutters.
- `eyebrow` — small uppercase label above a heading (gold-brown on paper). Add `eyebrow--gold` on dark sections.
- `button button--gold` — the primary action: square gold block, uppercase, dark text. Put it on an `<a>` or `<button>`.
- `text-link` — the secondary action (used for "Call (917) 416-6472" with a phone icon).
- `hero__rule` — the 136×4px gold rule under the hero headline.

Rules: square corners everywhere (no border-radius, no pills, no shadows). Alternate dark and paper sections; never two paper sections in a row. Never set text in `--gold` on `--paper` (fails contrast). Headlines: Geist bold, tight tracking (-0.05em), line-height under 1, end with a period. Uppercase only for eyebrows, buttons and nav.

## A new section in the house style

```jsx
<section style={{ background: "#0a0907", padding: "120px 0" }}>
  <div className="section-shell">
    <p className="eyebrow eyebrow--gold">What districts say</p>
    <h2 style={{ margin: 0, maxWidth: "12ch", color: "var(--cream)", fontSize: "clamp(2.8rem, 5.4vw, 5.8rem)", letterSpacing: "-0.05em", lineHeight: 0.98 }}>
      Clean blocks, every morning.
    </h2>
    <a className="button button--gold" href="#contact" style={{ marginTop: 32 }}>Request a Proposal</a>
  </div>
</section>
```

## Where the truth lives

Read `_ds_bundle.css` (the compiled site stylesheet; all classes above are defined there) and each `components/general/<Name>/<Name>.prompt.md`. Copy: direct and plain; no "solutions", no invented stats or testimonials.
