import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Approach } from "@/components/Approach";
import { Markets } from "@/components/Markets";
import { ClientTypes } from "@/components/ClientTypes";
import { Reveal } from "@/components/Reveal";
import { aboutContent, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ether Property Hub is Australia's 5-star rated buyer's agency — personal property partners for first-home buyers, interstate buyers, and investors nationwide.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pb-6 pt-6 lg:pb-8 lg:pt-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_20px_50px_-24px_rgba(15,75,112,0.35)]">
              <div className="h-1.5 bg-brand-accent" />

              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-6 sm:px-8 sm:py-8 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block h-6 w-1 bg-brand-accent" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                      About
                    </p>
                  </div>
                  <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.12] text-brand-secondary sm:text-4xl">
                    More than buyer&apos;s agents — your personal property partners.
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-brand-secondary/70 sm:text-base">
                    {aboutContent.intro}
                  </p>
                  {aboutContent.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-3 max-w-2xl text-sm leading-[1.7] text-brand-secondary/70 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <p className="mt-4 max-w-2xl font-display text-base font-semibold italic text-brand-primary sm:text-lg">
                    {aboutContent.closing}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 border-2 border-brand-primary bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                  >
                    {siteConfig.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-full">
                  <Image
                    src={siteImages.about}
                    alt="Ether Property Hub — buyer's agency Australia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 via-brand-secondary/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-secondary/90 px-5 py-4 sm:px-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                      {siteConfig.rating}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-white">
                      Unmatched price outcomes & off-market access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClientTypes />
      <Approach />
      <Markets />
    </PageShell>
  );
}
