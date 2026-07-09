"use client";

import { SectionReveal } from "./SectionReveal";

const SERVICES = [
  "Street Cleaning",
  "Power Washing",
  "Window Cleaning",
];

const BOROUGHS = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "The Bronx",
  "Staten Island",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 bg-surface-dark border-t border-border-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Company */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold font-bold text-lg tracking-tight">
                  JAG
                </span>
                <span className="text-ink/40 text-xs font-medium tracking-wide">
                  Maintenance &amp; Cleaning LLC
                </span>
              </div>
              <p className="text-ink/40 text-sm leading-loose max-w-[30ch]">
                Brooklyn-based street cleaning, power washing, and window
                cleaning. Serving NYC since 1999.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-ink/50 text-xs tracking-[0.15em] uppercase mb-4 font-medium">
                Services
              </p>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-ink/50 hover:text-gold transition-colors text-sm"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Boroughs */}
            <div>
              <p className="text-ink/50 text-xs tracking-[0.15em] uppercase mb-4 font-medium">
                Serving All Five Boroughs
              </p>
              <ul className="space-y-1.5">
                {BOROUGHS.map((b) => (
                  <li key={b} className="text-ink/40 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ink/30 text-xs">
              &copy; {year} JAG Maintenance &amp; Cleaning LLC. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2 text-ink/30 text-xs">
              <span>Contact:</span>
              <a
                href="mailto:jwren859@aol.com"
                className="hover:text-gold transition-colors"
              >
                jwren859@aol.com
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
