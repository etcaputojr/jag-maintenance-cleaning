"use client";

import { SectionReveal } from "./SectionReveal";

export function Proof() {
  return (
    <section className="proof" aria-label="JAG maintenance credentials">
      <SectionReveal className="proof__founded">
        <span className="proof__label">Since</span>
        <strong>1999</strong>
      </SectionReveal>

      <SectionReveal className="proof__quote" delay={0.08}>
        <p>
          JAG Maintenance &amp; Cleaning LLC has been an essential partner in
          keeping our district clean, safe, and welcoming. Their reliability
          shows up every day.
        </p>
        <span>Prospective BID partner testimonial</span>
      </SectionReveal>

      <SectionReveal className="proof__service" delay={0.16}>
        <strong>25</strong>
        <span>Years of dependable service</span>
      </SectionReveal>
    </section>
  );
}
