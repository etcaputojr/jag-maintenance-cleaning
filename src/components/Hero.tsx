"use client";

import Image from "next/image";
import { ArrowDownRight, Phone } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Brooklyn, New York · Since 1999</p>
          <h1 id="hero-title">Your district is judged by its streets.</h1>
          <div className="hero__rule" />
          <p className="hero__intro">
            Street cleaning, power washing, and window cleaning for Business
            Improvement Districts across all five boroughs.
          </p>
          <div className="hero__actions">
            <a className="button button--gold" href="#contact">
              Request a Proposal <ArrowDownRight size={19} weight="bold" aria-hidden="true" />
            </a>
            <a className="text-link" href="tel:+17183754545">
              <Phone size={17} weight="fill" aria-hidden="true" />
              Call (718) 375-4545
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero__image">
        <Image
          src="/jag-crew-hero-v1.png"
          alt="Temporary concept photo of a crew power washing a Brooklyn commercial sidewalk"
          fill
          priority
          sizes="(max-width: 880px) 100vw, 57vw"
        />
        <p className="hero__image-note">Temporary concept imagery</p>
      </div>
    </section>
  );
}
