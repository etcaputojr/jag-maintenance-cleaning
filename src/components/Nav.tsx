"use client";

import Image from "next/image";
import { List, Phone, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
      <nav className="site-nav__inner" aria-label="Primary navigation">
        <a className="site-nav__brand" href="#top" aria-label="JAG Maintenance and Cleaning home">
          <Image
            src="/jag-logo.png"
            alt="JAG Maintenance and Cleaning LLC"
            width={1254}
            height={1254}
            priority
          />
        </a>

        <div className="site-nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="site-nav__actions">
          <a className="site-nav__phone" href="tel:+17183754545">
            <Phone size={17} weight="fill" aria-hidden="true" />
            <span>(718) 375-4545</span>
          </a>
          <a className="button button--gold button--nav" href="#contact">
            Request a Proposal
          </a>
        </div>

        <button
          className="site-nav__toggle"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={26} /> : <List size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="button button--gold" onClick={() => setIsOpen(false)}>
            Request a Proposal
          </a>
        </div>
      )}
    </header>
  );
}
