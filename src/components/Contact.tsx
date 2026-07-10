"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";

const benefits = [
  "Free discovery call — no obligation",
  "Personal follow-up from Amir",
  "Buyer's agent — we work for you, not the vendor",
  "Australia-wide property search",
] as const;

export function Contact({ hideTitle = false }: { hideTitle?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-ivory section-pad">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            {!hideTitle && (
              <>
                <Eyebrow>Get in touch</Eyebrow>
                <h2 className="premium-h2 mt-5 text-ink">{siteConfig.discoveryCta} today</h2>
                <p className="premium-lead mt-5">{siteConfig.contactIntro}</p>
              </>
            )}

            <ul className={`space-y-3 ${hideTitle ? "" : "mt-8"}`}>
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-snug text-ink-soft">
                  <span className="mt-0.5 text-gold" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
              <a href={`mailto:${siteConfig.email}`} className="bg-bg-pure px-5 py-4 transition-colors hover:bg-surface-soft">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Email</span>
                <span className="mt-1 block text-[14px] text-ink">{siteConfig.email}</span>
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="bg-bg-pure px-5 py-4 transition-colors hover:bg-surface-soft">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Phone</span>
                <span className="mt-1 block text-[14px] text-ink">{siteConfig.phone}</span>
              </a>
              <div className="bg-bg-pure px-5 py-4 sm:col-span-2">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Office</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">
                  {siteConfig.address}
                </span>
                <span className="mt-1 block text-[13px] text-ink-muted">{siteConfig.licence}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[12px] border border-line bg-bg-pure p-7 shadow-sm md:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-gold/10 text-2xl text-gold">
                    ✓
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Thank you!</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
                    Your enquiry has been received. {siteConfig.contact} will be in touch within 24
                    hours to arrange your free strategy session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="label-cap text-gold">Enquiry form</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {siteConfig.cta}
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Email address" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" className="sm:col-span-2" />
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your property goals…"
                        className="w-full resize-y rounded-[8px] border border-line bg-surface-soft px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-brand-primary focus:bg-bg-pure"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-cta mt-6 h-12 w-full text-[11.5px]">
                    Send enquiry
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
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
      <label htmlFor={name} className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-[8px] border border-line bg-surface-soft px-4 text-[15px] text-ink outline-none transition-colors focus:border-brand-primary focus:bg-bg-pure"
      />
    </div>
  );
}
