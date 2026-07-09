"use client";

import { useState, type FormEvent } from "react";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { SectionReveal } from "./SectionReveal";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 700);
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
            <a href="tel:+17183754545">
              <Phone size={21} weight="fill" aria-hidden="true" />
              <span>(718) 375-4545</span>
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
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
