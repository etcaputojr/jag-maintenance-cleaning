// Prepares design-sync inputs that the Next.js build normally provides:
// 1. compiles src/app/globals.css (Tailwind v4) to plain CSS, plus the Geist
//    font that next/font injects at runtime;
// 2. embeds small copies of the public/ images that next/image serves, so
//    sections render inside claude.ai/design, which has no Next server.
// Run from the repo root: node .design-sync/build-inputs.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";

const cache = ".design-sync/.cache";
mkdirSync(cache, { recursive: true });

const src = readFileSync("src/app/globals.css", "utf8");
const out = await postcss([tailwind()]).process(src, { from: "src/app/globals.css" });
const font =
  '@import url("https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap");\n' +
  ':root { --font-geist-sans: "Geist"; --font-geist-mono: "Geist Mono"; }\n';
writeFileSync(`${cache}/site.css`, font + out.css);

// Resize with macOS sips; the shim maps public/ paths to these data URIs.
execFileSync("sips", ["-Z", "160", "public/jag-logo.png", "--out", `${cache}/logo.png`]);
execFileSync("sips", ["-Z", "1400", "-s", "format", "jpeg", "-s", "formatOptions", "72",
  "public/jag-hero-window-cleaning-black-logo-v8.png", "--out", `${cache}/hero.jpg`]);
const uri = (f, mime) => `data:${mime};base64,${readFileSync(f).toString("base64")}`;
const images = {
  "/jag-logo.png": uri(`${cache}/logo.png`, "image/png"),
  "/jag-hero-window-cleaning-black-logo-v8.png": uri(`${cache}/hero.jpg`, "image/jpeg"),
};
writeFileSync(`${cache}/images.ts`, `export const images: Record<string, string> = ${JSON.stringify(images)};\n`);
console.log("design-sync inputs ready:", Object.keys(images).join(", "));
