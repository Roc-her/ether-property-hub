import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Ether Property Hub",
  description:
    "Full buyer's agency support for property investors — strategy, research, sourcing, off-market access, due diligence, and negotiation across Australia.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="pb-12 pt-6 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_20px_50px_-24px_rgba(15,75,112,0.35)]">
              <div className="h-1.5 bg-brand-accent" />

              <div className="border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-6 sm:px-8 sm:py-8">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block h-6 w-1 bg-brand-accent" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                    Services
                  </p>
                </div>

                <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.15] text-brand-secondary sm:text-4xl">
                  Your private buying desk.
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-brand-secondary/70 sm:text-base">
                  Full advocacy or targeted support — scoped to your brief, timeline, and risk
                  appetite. Every service is buyer-only, research-led, and designed to protect
                  your investment logic from search through to settlement.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 border-2 border-brand-primary bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                >
                  {siteConfig.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <ServicesGrid />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 overflow-hidden border-2 border-brand-primary/15 bg-brand-secondary text-white lg:mt-10">
              <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-400/80 to-brand-accent" />
              <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                    Ready to start?
                  </p>
                  <p className="mt-1.5 font-display text-xl font-bold sm:text-2xl">
                    Discuss your brief with {siteConfig.contact}.
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    A complimentary strategy session — no obligation, no sales pressure.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent/90"
                >
                  {siteConfig.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
