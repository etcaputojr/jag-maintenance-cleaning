# design-sync notes — JAG Maintenance

Project: `JAG Maintenance` (claude.ai/design `7fff2f4a-d700-4447-a3d3-4d5d295d73fe`). Shape: **package, synth-entry**. First sync 2026-10-26.

This repo is a Next.js 16 site, not a component library. The "components" are the 7 homepage sections in `src/components/` (no props). `SectionReveal` is excluded (internal motion wrapper).

## Build
- `npm ci`, then `node .design-sync/build-inputs.mjs` (cfg.buildCmd) BEFORE the converter. It writes `.design-sync/.cache/` (gitignored):
  - `site.css` — `src/app/globals.css` compiled through `@tailwindcss/postcss`, plus a Google Fonts `@import` for Geist and `--font-geist-sans` (next/font sets that variable at runtime on the real site).
  - `images.ts` — data-URI copies of `public/jag-logo.png` (160px) and the hero PNG (1400px JPEG). Uses macOS `sips`.
- `next/image` is swapped for `.design-sync/shims/next-image.tsx` (plain `<img>`, supports `fill`) via `.design-sync/tsconfig.json` paths. claude.ai/design has no Next image server.
- Converter: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./.design-sync/entry.ts --out ./ds-bundle`
- Converter deps: `cd .ds-sync && npm i esbuild ts-morph @types/react playwright@1.61.1` (1.61.1 matches cached chromium-1228).
- GOTCHA: the converter's tsconfig reader strips `/* … */` comments with a regex, so a paths key like `"@/*"` eats the rest of the file and the plugin silently returns null. Keep `.design-sync/tsconfig.json` free of `/*` sequences (it has no `@/*` alias; the sections use relative imports).
- Every section card is `cardMode: single` with a 1440-wide viewport (full-width sections clip in grid cells).

## Previews
- No authored previews: the sections take no props, so the floor render IS the real section. Nothing to author unless props are added.

## Known render warns
- `[FONT_REMOTE]` Geist / Geist Mono load from Google Fonts at runtime.

## Re-sync risks
- New images used by a section must be added to `build-inputs.mjs` `images`, or they render as broken `/path.png` in designs.
- New sections need a line in `.design-sync/entry.ts` and `componentSrcMap`.
- `motion` reveal animations start at opacity 0 and rely on IntersectionObserver; renders were fine in the headless check, but watch for blank sections.
- Contact form submit cannot work in designs (no `/api/contact`).
- `site.css` is generated from `globals.css` each build; `DESIGN.md` disagrees with the live CSS (gold, radii). The sync follows the CSS.
