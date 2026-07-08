import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Testimonials } from "@/components/Testimonials";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Client Reviews | Ether Property Hub",
  description:
    "Read what clients say about working with Amir Thapa Magaranti and Ether Property Hub.",
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <Testimonials />

      <section className="pb-12 lg:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-secondary text-white">
              <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-400/80 to-brand-accent" />
              <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
                <p className="font-display text-xl font-bold sm:text-2xl">
                  Ready for the same experience?
                </p>
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
