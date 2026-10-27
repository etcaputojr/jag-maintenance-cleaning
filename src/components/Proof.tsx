"use client";

import { SectionReveal } from "./SectionReveal";

export function Proof() {
  return (
    <section className="proof" aria-labelledby="proof-heading">
      <SectionReveal className="proof__intro">
        <h2 id="proof-heading">JAG at a glance.</h2>
        <p>Key details for your contractor shortlist.</p>
      </SectionReveal>

      <SectionReveal className="proof__details" delay={0.08}>
        <dl>
          <div><dt>Established</dt><dd>1999</dd></div>
          <div><dt>Home base</dt><dd>Brooklyn, New York</dd></div>
          <div><dt>Service area</dt><dd>All five NYC boroughs</dd></div>
          <div><dt>Services</dt><dd>Street cleaning · Power washing · Window cleaning</dd></div>
        </dl>
        <p>Ask about crew schedules, reporting, and relevant district work in your proposal request.</p>
      </SectionReveal>
    </section>
  );
}
