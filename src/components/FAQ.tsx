"use client";

import Link from "next/link";
import { useState } from "react";
import { faqs, siteConfig } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 shadow-[0_16px_40px_-24px_rgba(15,75,112,0.35)] lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="relative border-b border-brand-primary/10 bg-brand-secondary px-5 py-7 text-white sm:px-7 sm:py-8 lg:border-b-0 lg:border-r lg:border-brand-primary/10">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-accent" />

              <p className="pl-4 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                FAQ
              </p>
              <h2 className="mt-3 max-w-xs pl-4 font-display text-2xl font-bold leading-[1.15] sm:text-3xl">
                Common questions.
              </h2>
              <p className="mt-3 max-w-xs pl-4 text-sm leading-relaxed text-white/60">
                Everything you need to know about working with a buyer&apos;s agency — answered
                plainly.
              </p>

              <div className="ml-4 mt-7 border border-white/10 bg-white/5 p-4">
                <p className="font-display text-base font-bold">Still unsure?</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Book a free strategy session and get straight answers — no obligation.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 bg-brand-accent px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-accent/90 sm:text-sm"
                >
                  {siteConfig.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="divide-y divide-brand-primary/10 bg-brand-surface">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`relative transition-colors ${isOpen ? "bg-brand-cream/50" : ""}`}
                  >
                    {isOpen && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 top-0 w-1 bg-brand-accent"
                      />
                    )}

                    <button
                      type="button"
                      className="flex w-full items-start gap-4 px-5 py-4 text-left transition hover:bg-brand-cream/40 sm:px-6 sm:py-5"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border font-display text-xs font-bold transition ${
                          isOpen
                            ? "border-brand-accent bg-brand-accent text-white"
                            : "border-brand-primary/15 bg-brand-cream/60 text-brand-primary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1 pt-0.5">
                        <span className="block font-display text-base font-bold leading-snug text-brand-secondary sm:text-[17px]">
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border text-lg font-light transition ${
                          isOpen
                            ? "border-brand-accent bg-brand-accent/10 text-brand-accent"
                            : "border-brand-primary/15 text-brand-primary"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-brand-primary/10 px-5 pb-5 pl-[4.25rem] pr-6 pt-4 text-sm leading-[1.7] text-brand-secondary/70 sm:px-6 sm:pb-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
