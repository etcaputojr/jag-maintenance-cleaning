"use client";

import { useState, type FormEvent } from "react";
import { SectionReveal } from "./SectionReveal";
import { Phone, Envelope, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      errs.name = "Please enter your name.";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!message || message.trim().length < 10) {
      errs.message = "Please tell us about your needs (at least 10 characters).";
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState("loading");

    try {
      // Placeholder — replace with real form handler (Formspree, Resend, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setFormState("success");
      e.currentTarget.reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <h2 className="text-gold text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] mb-4">
            Get in Touch
          </h2>
          <p className="text-ink/60 text-base leading-loose max-w-[55ch] mb-16">
            Ready to discuss your district&apos;s cleaning needs? Fill out the
            form or reach us directly. We respond within one business day.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Form */}
          <SectionReveal delay={0.1}>
            {formState === "success" ? (
              <div className="bg-surface-elevated border border-border-dark rounded-md p-8 text-center">
                <div className="text-gold text-4xl mb-4">&#10003;</div>
                <h3 className="text-gold text-lg font-semibold mb-2">
                  Message Sent
                </h3>
                <p className="text-ink/60 text-sm leading-loose">
                  Thank you for reaching out. We&apos;ll get back to you within
                  one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-ink/80 text-sm font-medium mb-2"
                  >
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 bg-surface-elevated border ${
                      errors.name ? "border-gold" : "border-border-dark"
                    } rounded-md text-ink placeholder:text-ink/30 text-sm focus:outline-none focus:border-gold/60 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-gold text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-ink/80 text-sm font-medium mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 bg-surface-elevated border border-border-dark rounded-md text-ink placeholder:text-ink/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                    placeholder="Your BID or organization"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-ink/80 text-sm font-medium mb-2"
                  >
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 bg-surface-elevated border ${
                      errors.email ? "border-gold" : "border-border-dark"
                    } rounded-md text-ink placeholder:text-ink/30 text-sm focus:outline-none focus:border-gold/60 transition-colors`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-gold text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-ink/80 text-sm font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-surface-elevated border border-border-dark rounded-md text-ink placeholder:text-ink/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                    placeholder="(212) 555-0123"
                  />
                </div>

                {/* Service interest */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-ink/80 text-sm font-medium mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-surface-elevated border border-border-dark rounded-md text-ink text-sm focus:outline-none focus:border-gold/60 transition-colors appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%238A8780' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      paddingRight: "40px",
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="street-cleaning">Street Cleaning</option>
                    <option value="power-washing">Power Washing</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-ink/80 text-sm font-medium mb-2"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`w-full px-4 py-3 bg-surface-elevated border ${
                      errors.message ? "border-gold" : "border-border-dark"
                    } rounded-md text-ink placeholder:text-ink/30 text-sm focus:outline-none focus:border-gold/60 transition-colors resize-none`}
                    placeholder="Tell us about your district's cleaning needs..."
                  />
                  {errors.message && (
                    <p className="text-gold text-xs mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gold text-surface-dark text-base font-semibold rounded-md hover:bg-gold-light transition-colors duration-200 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={18} weight="fill" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </SectionReveal>

          {/* Contact info sidebar */}
          <SectionReveal delay={0.2}>
            <div className="space-y-8">
              {/* Phone slot */}
              <div className="flex items-start gap-4">
                <Phone
                  size={22}
                  weight="fill"
                  className="text-gold shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-ink/50 text-xs tracking-[0.15em] uppercase mb-1">
                    Phone
                  </p>
                  <p className="text-ink/40 text-sm italic">
                    Coming soon
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Envelope
                  size={22}
                  weight="fill"
                  className="text-gold shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-ink/50 text-xs tracking-[0.15em] uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:jwren859@aol.com"
                    className="text-ink/70 hover:text-gold transition-colors text-sm"
                  >
                    jwren859@aol.com
                  </a>
                </div>
              </div>

              {/* Address slot */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={22}
                  weight="fill"
                  className="text-gold shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-ink/50 text-xs tracking-[0.15em] uppercase mb-1">
                    Address
                  </p>
                  <p className="text-ink/40 text-sm italic">
                    Brooklyn, NY — full address coming soon
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border-dark" />

              <p className="text-ink/40 text-sm leading-loose">
                We serve Business Improvement Districts across all five boroughs
                of New York City — Manhattan, Brooklyn, Queens, the Bronx, and
                Staten Island.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
