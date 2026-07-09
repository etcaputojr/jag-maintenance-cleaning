"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-surface-dark overflow-hidden">
      {/* Background photo — next/image with priority for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1603719058070-8e50b185fa9d?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Logo mark */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Image
              src="/jag-logo.png"
              alt="JAG Maintenance and Cleaning LLC"
              width={1254}
              height={1254}
              priority
              className="h-20 w-auto"
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ textWrap: "balance" as const }}
          >
            Keeping NYC&apos;s Streets Clean Since 1999
          </motion.h1>

          {/* Subtext — trimmed to 16 words */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-ink/70 text-lg leading-loose max-w-[55ch] mb-10"
          >
            Street cleaning, power washing, and window cleaning for Business
            Improvement Districts across all five boroughs of New York City.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-surface-dark text-base font-semibold rounded-md hover:bg-gold-light transition-colors duration-200 tracking-wide"
            >
              Request a Proposal
            </a>
            <a
              href="tel:"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold/40 text-gold text-base font-semibold rounded-md hover:border-gold hover:bg-gold/5 transition-all duration-200 tracking-wide"
            >
              Call Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
