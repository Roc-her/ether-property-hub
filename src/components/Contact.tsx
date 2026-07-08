"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { contactImage } from "@/lib/process-images";
import { Reveal } from "./Reveal";

const benefits = [
  "No obligation — your first consultation is always free",
  "Personal follow-up within 24 hours",
  "Buyer-only advice with zero conflicts of interest",
  "Australia-wide coverage across all major markets",
] as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 shadow-[0_16px_40px_-24px_rgba(15,75,112,0.35)] lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="relative flex flex-col border-b border-brand-primary/10 bg-brand-secondary px-5 py-7 text-white sm:px-7 sm:py-8 lg:border-b-0 lg:border-r lg:border-brand-primary/10">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-accent" />

              <p className="pl-4 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                Get in Touch
              </p>
              <h2 className="mt-3 max-w-sm pl-4 font-display text-2xl font-bold leading-[1.15] sm:text-3xl">
                Ready to plan your next move?
              </h2>
              <p className="mt-3 max-w-sm pl-4 text-sm leading-relaxed text-white/60">
                Send a note and {siteConfig.contact} will follow up personally — no sales pitch,
                just a straight conversation about your goals.
              </p>

              <ul className="ml-4 mt-6 grid gap-2 sm:grid-cols-2">
                {benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border border-white/10 bg-white/5 px-3 py-2.5 text-xs leading-snug text-white/75"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-brand-accent text-[10px] font-bold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative ml-4 mt-6 min-h-[150px] overflow-hidden border border-white/10 sm:min-h-[170px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${contactImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-secondary/90 px-4 py-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                    Direct with {siteConfig.contact}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold leading-snug text-white">
                    Personal follow-up on every enquiry.
                  </p>
                </div>
              </div>

              <div className="ml-4 mt-6 grid flex-1 gap-px border border-white/10 bg-white/10 sm:mt-5">
                <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                  <div className="bg-brand-secondary px-4 py-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-sm font-medium text-white hover:text-brand-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="bg-brand-secondary px-4 py-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="mt-1 block text-sm font-medium text-white hover:text-brand-accent"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="bg-brand-secondary px-4 py-3.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                    Office
                  </p>
                  <p className="mt-1 text-sm text-white/75">{siteConfig.address}</p>
                  <p className="mt-1 text-sm text-white/60">{siteConfig.secondaryAddress}</p>
                  <p className="mt-1 text-xs text-white/45">{siteConfig.licence}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-brand-surface">
              <div className="h-1 shrink-0 bg-gradient-to-r from-brand-accent via-amber-400 to-brand-accent" />

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                {submitted ? (
                  <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center border-2 border-brand-accent bg-brand-accent/10 text-2xl text-brand-accent">
                      ✓
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-brand-secondary">
                      Thank you!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-secondary/70">
                      Your enquiry has been received. {siteConfig.contact} will be in touch within
                      24 hours to arrange your free consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                      Enquiry form
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-brand-secondary sm:text-2xl">
                      {siteConfig.cta}
                    </h3>

                    <div className="mt-6 grid flex-1 gap-4 sm:grid-cols-2">
                      <Field label="Full name" name="name" required className="sm:col-span-1" />
                      <Field
                        label="Email address"
                        name="email"
                        type="email"
                        required
                        className="sm:col-span-1"
                      />
                      <Field label="Phone" name="phone" type="tel" className="sm:col-span-2" />
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary/70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your property goals..."
                          className="w-full resize-y border border-brand-primary/15 bg-brand-cream px-4 py-3 text-sm text-brand-secondary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 flex w-full items-center justify-center gap-2 bg-brand-accent py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(184,134,11,0.45)] transition hover:bg-brand-accent/90"
                    >
                      Send enquiry
                      <span aria-hidden="true">→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary/70"
      >
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-brand-primary/15 bg-brand-cream px-4 py-3 text-sm text-brand-secondary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
      />
    </div>
  );
}
