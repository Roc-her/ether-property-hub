import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Recent client property purchases secured by Ether Property Hub across NSW, QLD, VIC, and WA — investment purchases nationwide.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
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
                    Projects
                  </p>
                </div>

                <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.15] text-brand-secondary sm:text-4xl">
                  Client purchases across Australia.
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-brand-secondary/70 sm:text-base">
                  A selection of recent investment properties secured for clients — from regional
                  NSW and Victoria to Brisbane, Perth, and beyond. Over {siteConfig.offMarketStat} of
                  our purchases are never publicly advertised.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 border-2 border-brand-primary bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                >
                  {siteConfig.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <ProjectsGrid />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
