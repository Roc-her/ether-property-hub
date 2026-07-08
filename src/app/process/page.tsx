import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "How It Works | Ether Property Hub",
  description:
    "Three clear stages from strategy session to settlement — how Ether Property Hub guides property investors from brief to purchase.",
};

export default function ProcessPage() {
  return (
    <PageShell>
      <section className="pb-12 pt-6 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden border-2 border-brand-primary/15 shadow-[0_20px_50px_-24px_rgba(15,75,112,0.35)] lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative border-b border-brand-primary/10 bg-brand-secondary px-5 py-8 text-white sm:px-8 lg:border-b-0 lg:border-r lg:border-brand-primary/10">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-accent" />

                <p className="pl-4 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                  The Process
                </p>
                <h1 className="mt-4 max-w-md pl-4 font-display text-3xl font-bold leading-[1.12] sm:text-4xl">
                  From brief to settlement.
                </h1>
                <p className="mt-4 max-w-md pl-4 text-sm leading-[1.7] text-white/65 sm:text-base">
                  Three clear stages — define what fits, do the diligence, then decide with
                  conviction. Every step is buyer-only, transparent, and scoped to your goals.
                </p>

                <Link
                  href="/contact"
                  className="ml-4 mt-7 inline-flex items-center gap-2 bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-accent/90"
                >
                  {siteConfig.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="flex flex-col justify-center bg-brand-surface px-5 py-6 sm:px-8 sm:py-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                  At a glance
                </p>
                <ul className="mt-4 space-y-3">
                  {["Strategy Session", "Search & Analysis", "Secure & Settle"].map(
                    (label, index) => (
                      <li
                        key={label}
                        className="flex items-center gap-3 border border-brand-primary/10 bg-brand-cream/50 px-4 py-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-brand-accent/40 bg-brand-surface font-display text-xs font-bold text-brand-primary">
                          0{index + 1}
                        </span>
                        <span className="text-sm font-semibold text-brand-secondary">{label}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="col-span-full">
                <ProcessSteps />
              </div>
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
                    Begin with a complimentary strategy session.
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    No obligation. Direct with {siteConfig.contact}.
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
