"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Phone, List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled
          ? "bg-surface-dark/95 backdrop-blur-md border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo — left */}
        <a
          href="#"
          className="shrink-0 flex items-center"
          aria-label="JAG Maintenance and Cleaning — Home"
        >
          <Image
            src="/jag-logo.png"
            alt="JAG Maintenance and Cleaning LLC"
            width={1254}
            height={1254}
            priority
            className="h-12 w-auto"
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Desktop links — center */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink/70 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA — right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:"
            className="flex items-center gap-2 text-ink/70 hover:text-gold transition-colors duration-200 text-sm"
          >
            <Phone size={16} weight="fill" />
            <span className="tracking-wide">Call Us</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 bg-gold text-surface-dark text-sm font-semibold rounded-md hover:bg-gold-light transition-colors duration-200 tracking-wide"
          >
            Request a Proposal
          </a>
        </div>

        {/* Mobile hamburger — right */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ink p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-surface-dark/98 backdrop-blur-md border-b border-border-dark px-6 pb-6"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-ink/70 hover:text-gold transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center w-full justify-center px-5 py-3 bg-gold text-surface-dark text-sm font-semibold rounded-md hover:bg-gold-light transition-colors"
          >
            Request a Proposal
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
