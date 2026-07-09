"use client";

import { SectionReveal } from "./SectionReveal";
import { Buildings, MapPin, Calendar } from "@phosphor-icons/react";

const STATS = [
  {
    value: "1999",
    label: "Founded",
    icon: Calendar,
  },
  {
    value: "5",
    label: "Boroughs Served",
    icon: MapPin,
  },
  {
    value: "25+",
    label: "Years of Service",
    icon: Buildings,
  },
];

export function Proof() {
  return (
    <section className="py-20 md:py-28 bg-surface-light">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Stats row */}
        <SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
              <span className="text-gold-dark mx-auto mb-3 flex justify-center">
                <stat.icon size={24} weight="fill" />
              </span>
                <div className="text-ink-light text-4xl font-bold tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-muted text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* BID logo strip placeholder */}
        <SectionReveal delay={0.1}>
          <div className="mb-16">
            <p className="text-muted text-xs tracking-[0.15em] uppercase text-center mb-8">
              Trusted by Business Improvement Districts Across NYC
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
              {["MANHATTAN", "BROOKLYN", "QUEENS", "BRONX", "STATEN ISLAND"].map(
                (boro) => (
                  <span
                    key={boro}
                    className="text-ink-light text-sm font-semibold tracking-[0.12em]"
                  >
                    {boro}
                  </span>
                )
              )}
            </div>
          </div>
        </SectionReveal>

        {/* Testimonial placeholder */}
        <SectionReveal delay={0.2}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-gold text-5xl font-serif leading-none mb-4 opacity-60">
              &ldquo;
            </div>
            <p className="text-ink-light/40 text-lg leading-relaxed italic mb-6">
              Testimonials from our BID partners coming soon.
            </p>
            <div className="w-12 h-px bg-gold-dark/40 mx-auto" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
