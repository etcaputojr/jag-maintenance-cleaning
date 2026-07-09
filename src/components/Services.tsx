"use client";

import { motion, useReducedMotion } from "motion/react";
import { Broom, Drop, Buildings } from "@phosphor-icons/react";
import { SectionReveal } from "./SectionReveal";

const SERVICES = [
  {
    title: "Street Cleaning",
    description:
      "Daily litter removal, sidewalk sweeping, curb line clearing, and trash receptacle maintenance for Business Improvement Districts across all five boroughs.",
    icon: Broom,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    imageW: 800,
    imageH: 500,
    large: true,
  },
  {
    title: "Power Washing",
    description:
      "High-pressure cleaning for sidewalks, plazas, storefronts, and public spaces. Removes gum, stains, and grime that routine sweeping cannot reach.",
    icon: Drop,
    image:
      "https://images.unsplash.com/photo-1628177142898-93e4e9c6c5f2?auto=format&fit=crop&w=600&q=80",
    imageW: 600,
    imageH: 400,
    large: false,
  },
  {
    title: "Window Cleaning",
    description:
      "Commercial-grade window cleaning for storefronts, building facades, and district properties. Streak-free results that make the district shine.",
    icon: Buildings,
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80",
    imageW: 600,
    imageH: 400,
    large: false,
  },
];

function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  large,
  index,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; weight?: "fill" | "regular" }>;
  image: string;
  large: boolean;
  index: number;
}) {
  const reduce = useReducedMotion();

  if (large) {
    return (
      <SectionReveal delay={index * 0.1}>
        <div className="group relative bg-surface-elevated rounded-md overflow-hidden border border-border-dark hover:border-gold/30 transition-all duration-300 md:row-span-2">
          <div className="relative h-72 overflow-hidden">
            <img
              src={image}
              alt={title}
              width={800}
              height={500}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gold shrink-0">
                  <Icon size={22} weight="fill" />
                </span>
                <h3 className="text-gold text-xl font-semibold tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="text-ink/70 text-sm leading-loose max-w-[50ch]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    );
  }

  return (
    <SectionReveal delay={index * 0.1}>
      <div className="group relative bg-surface-elevated rounded-md overflow-hidden border border-border-dark hover:border-gold/30 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-surface-dark/20" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-gold shrink-0">
              <Icon size={20} weight="fill" />
            </span>
            <h3 className="text-gold text-lg font-semibold tracking-tight">
              {title}
            </h3>
          </div>
          <p className="text-ink/60 text-sm leading-loose max-w-[50ch]">
            {description}
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <h2 className="text-gold text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] mb-4">
            Our Services
          </h2>
          <p className="text-ink/60 text-base leading-loose max-w-[55ch] mb-16">
            Professional street maintenance, power washing, and window cleaning
            for New York City&apos;s Business Improvement Districts. We keep
            your district clean, safe, and welcoming.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
