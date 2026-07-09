"use client";

import { MapPin, ShieldCheck, Timer } from "@phosphor-icons/react";
import { SectionReveal } from "./SectionReveal";

const commitments = [
  { icon: Timer, label: "Daily reliability", copy: "Crews built around the work your district needs done." },
  { icon: MapPin, label: "Brooklyn rooted", copy: "Local knowledge with service across all five boroughs." },
  { icon: ShieldCheck, label: "Board ready", copy: "A direct, accountable partner for BID decision-makers." },
];

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="section-shell about__shell">
        <SectionReveal className="about__lead">
          <p className="eyebrow">Brooklyn built</p>
          <h2 id="about-heading">The company your district can call tomorrow.</h2>
        </SectionReveal>

        <SectionReveal className="about__story" delay={0.08}>
          <p>
            JAG Maintenance &amp; Cleaning has kept New York City sidewalks,
            storefronts, and public spaces looking their best for more than two
            decades. We do the unglamorous work with consistency, care, and no
            drama.
          </p>
          <p>
            From a Brooklyn home base, our crews support Business Improvement
            Districts across Manhattan, Brooklyn, Queens, the Bronx, and Staten
            Island.
          </p>
        </SectionReveal>

        <div className="commitments">
          {commitments.map(({ icon: Icon, label, copy }, index) => (
            <SectionReveal className="commitment" delay={0.12 + index * 0.08} key={label}>
              <Icon size={24} weight="fill" aria-hidden="true" />
              <h3>{label}</h3>
              <p>{copy}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
