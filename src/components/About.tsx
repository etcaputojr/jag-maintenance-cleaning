"use client";

import { SectionReveal } from "./SectionReveal";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface-light">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <SectionReveal>
            <p className="text-gold-dark text-xs tracking-[0.18em] uppercase mb-4 font-medium">
              Brooklyn, NY
            </p>
            <h2 className="text-ink-light text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] mb-6">
              Rooted in Brooklyn, Serving All Five Boroughs
            </h2>
            <div className="text-ink-light/70 text-base leading-relaxed space-y-4 max-w-[55ch]">
              <p>
                Founded in 1999, JAG Maintenance &amp; Cleaning LLC has been
                keeping New York City&apos;s streets, sidewalks, and public
                spaces clean for over two decades. What started as a small
                Brooklyn operation has grown into a trusted partner for Business
                Improvement Districts across all five boroughs.
              </p>
              <p>
                We specialize in the work that keeps districts looking their
                best — daily street cleaning, high-pressure power washing, and
                commercial window cleaning. Every crew member is trained,
                equipped, and committed to showing up and doing the job right.
                No shortcuts, no excuses.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { label: "Founded", value: "1999" },
                { label: "Boroughs", value: "All 5" },
                { label: "BIDs Served", value: "Multiple" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 bg-surface-light-elevated border border-border-light rounded-md"
                >
                  <span className="text-ink-light font-bold text-lg">
                    {stat.value}
                  </span>
                  <span className="text-muted text-xs ml-2 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Photo placeholder */}
          <SectionReveal delay={0.15}>
            <div className="relative aspect-[4/5] bg-surface-dark/5 rounded-md overflow-hidden border border-border-light">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="JAG Maintenance & Cleaning team placeholder"
                className="w-full h-full object-cover opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-muted text-sm tracking-wide">
                    Team photo coming soon
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
