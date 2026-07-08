import Link from "next/link";
import { faqs, siteConfig } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const previewFaqs = faqs.slice(0, 3);

export function FAQTeaser() {
  return (
    <section className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_16px_40px_-24px_rgba(15,75,112,0.3)]">
            <div className="h-1 bg-brand-accent" />

            <div className="border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">FAQ</p>
              <h2 className="mt-1.5 font-display text-xl font-bold text-brand-secondary sm:text-2xl">
                Common questions.
              </h2>
              <p className="mt-2 max-w-lg text-xs leading-relaxed text-brand-secondary/65 sm:text-sm">
                Straight answers about buyer&apos;s agency, fees, coverage, and how we work.
              </p>
            </div>

            <div className="divide-y divide-brand-primary/10">
              {previewFaqs.map((faq, index) => (
                <div key={faq.question} className="px-5 py-4 sm:px-6 sm:py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent/80">
                    Q{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-bold text-brand-secondary">
                    {faq.question}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-secondary/65">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid border-t border-brand-primary/10 sm:grid-cols-2">
              <Link
                href="/faq"
                className="flex items-center justify-between gap-4 border-b border-brand-primary/10 bg-brand-primary px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-secondary sm:border-b-0 sm:border-r sm:px-6"
              >
                <span>View all {faqs.length} questions</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between gap-4 bg-brand-accent px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-accent/90 sm:px-6"
              >
                <span>{siteConfig.cta}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
