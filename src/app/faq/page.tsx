import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | Ether Property Hub",
  description:
    "Frequently asked questions about buyer's agency, fees, coverage, and working with Ether Property Hub.",
};

export default function FAQPage() {
  return (
    <PageShell>
      <FAQ />

      <section className="pb-12 lg:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-secondary text-white">
              <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-400/80 to-brand-accent" />
              <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
                <p className="font-display text-xl font-bold sm:text-2xl">Still have questions?</p>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent/90"
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
