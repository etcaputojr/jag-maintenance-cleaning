"use client";

import { useState, type FormEvent } from "react";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { SectionReveal } from "./SectionReveal";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="section-shell contact__shell">
        <SectionReveal className="contact__lead">
          <p className="eyebrow eyebrow--gold">Start the conversation</p>
          <h2 id="contact-heading">Let&apos;s keep your district looking its best.</h2>
          <p>
            Tell us what your district needs. We&apos;ll follow up with a clear,
            practical proposal.
          </p>

          <div className="contact__details">
            <a href="tel:+19174166472">
              <Phone size={21} weight="fill" aria-hidden="true" />
              <span>(917) 416-6472</span>
            </a>
            <a href="mailto:jwren859@aol.com">
              <EnvelopeSimple size={21} weight="fill" aria-hidden="true" />
              <span>jwren859@aol.com</span>
            </a>
          </div>
        </SectionReveal>

        <SectionReveal className="contact__form-wrap" delay={0.1}>
          {status === "sent" ? (
            <div className="contact__success" role="status">
              <p className="eyebrow eyebrow--gold">Message received</p>
              <h3>Thank you. We&apos;ll be in touch within one business day.</h3>
              <button className="text-link" type="button" onClick={() => setStatus("idle")}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <label className="contact-form__honeypot" aria-hidden="true">
                Company website
                <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
              </label>
              <label>
                Name <span aria-hidden="true">*</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Organization
                <input name="organization" autoComplete="organization" />
              </label>
              <label>
                Email <span aria-hidden="true">*</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
              <label>
                Service interest
                <select name="service" defaultValue="">
                  <option value="">Select a service</option>
                  <option>Street Cleaning</option>
                  <option>Power Washing</option>
                  <option>Window Cleaning</option>
                  <option>Multiple Services</option>
                </select>
              </label>
              <label className="contact-form__message">
                Tell us about your district <span aria-hidden="true">*</span>
                <textarea name="message" rows={5} required />
              </label>
              <button className="button button--gold" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request a Proposal"}
              </button>
              {status === "error" && (
                <p className="contact-form__error" role="alert">
                  We couldn&apos;t send your request. Please try again or call (917) 416-6472.
                </p>
              )}
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
