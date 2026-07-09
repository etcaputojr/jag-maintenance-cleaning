"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { SectionReveal } from "./SectionReveal";

const services = [
  {
    number: "01",
    title: "Street Cleaning",
    description: "Daily litter removal, sidewalk sweeping, curb-line clearing, and receptacle maintenance.",
  },
  {
    number: "02",
    title: "Power Washing",
    description: "High-pressure cleaning for sidewalks, plazas, storefronts, and public-facing spaces.",
  },
  {
    number: "03",
    title: "Window Cleaning",
    description: "Commercial window cleaning that keeps storefronts and district properties presentable.",
  },
];

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="section-shell services__shell">
        <SectionReveal className="services__intro">
          <p className="eyebrow eyebrow--gold">What we handle</p>
          <h2 id="services-heading">The work people notice first.</h2>
          <p>
            The visible work that lets a district open every day looking cared
            for, safe, and ready for business.
          </p>
        </SectionReveal>

        <div className="service-list">
          {services.map((service, index) => (
            <SectionReveal className="service-row" delay={index * 0.08} key={service.title}>
              <span className="service-row__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" aria-label={`Request a proposal for ${service.title}`}>
                <ArrowUpRight size={24} weight="bold" aria-hidden="true" />
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
