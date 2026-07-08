import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Approach } from "@/components/Approach";
import { Markets } from "@/components/Markets";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Ether Property Hub",
  description:
    "Learn about Ether Property Hub — investor-led buyer's agency founded by Amir Thapa Magaranti, serving property investors Australia-wide.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pb-6 pt-6 lg:pb-8 lg:pt-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_20px_50px_-24px_rgba(15,75,112,0.35)]">
              <div className="h-1.5 bg-brand-accent" />
              <div className="border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-6 sm:px-8 sm:py-8">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block h-6 w-1 bg-brand-accent" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                    About
                  </p>
                </div>
                <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.12] text-brand-secondary sm:text-4xl">
                  Investor-led buyer&apos;s advocacy.
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-brand-secondary/70 sm:text-base">
                  Ether Property Hub is an independent buyer&apos;s agency led by {siteConfig.contact}.
                  We help property investors across Australia build wealth through strategy-first
                  advice, rigorous research, and buyer-only representation — from first investment
                  through to portfolio growth.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-brand-secondary/70 sm:text-base">
                  Unlike many agencies, we&apos;re active investors ourselves. Every recommendation
                  reflects real market experience, not sales targets or developer incentives.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 border-2 border-brand-primary bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                >
                  {siteConfig.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Approach />
      <Markets />
    </PageShell>
  );
}
