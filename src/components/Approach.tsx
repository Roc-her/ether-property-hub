import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig, differentiators } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const principleIcons: ReactNode[] = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
];

export function Approach() {
  return (
    <section id="approach" className="bg-brand-cream pb-12 pt-10 lg:pb-16 lg:pt-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_20px_50px_-24px_rgba(15,75,112,0.35)]">
            <div className="h-1.5 bg-brand-accent" />

            <div className="grid xl:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-brand-primary/10 p-6 lg:p-7 xl:border-b-0 xl:border-r xl:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block h-6 w-1 bg-brand-accent" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                    Why Ether Property Hub
                  </p>
                </div>

                <h2 className="mt-4 font-display text-2xl font-bold leading-[1.2] text-brand-secondary sm:text-3xl">
                  Built by investors,{" "}
                  <span className="italic text-brand-primary">for investors.</span>
                </h2>

                <p className="mt-4 text-sm leading-[1.7] text-brand-secondary/70 lg:text-[15px]">
                  Unlike many buyer&apos;s agents, we&apos;re active property investors ourselves.
                  Every recommendation is backed by real experience, market research, and a
                  long-term wealth-building strategy.
                </p>

                <div className="mt-6 grid border border-brand-primary/15 sm:grid-cols-2">
                  <div className="flex items-center gap-3 border-b border-brand-primary/10 bg-brand-cream/60 px-4 py-3 sm:border-b-0 sm:border-r">
                    <span className="h-2 w-2 shrink-0 bg-brand-accent" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-primary">
                      Invest · Grow · Thrive
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                  >
                    {siteConfig.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr]">
                <div className="flex flex-col justify-between bg-brand-secondary px-2.5 py-4 text-white sm:px-3 sm:py-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                      2026
                    </p>
                    <p className="mt-1.5 font-display text-xs font-bold leading-tight sm:text-sm">
                      Awards Finalist
                    </p>
                  </div>
                  <p className="text-[9px] leading-snug text-white/50">Central Coast</p>
                </div>

                <div className="relative min-h-[200px] sm:min-h-[220px] xl:min-h-[240px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80')",
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-primary/25 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-secondary/90 px-4 py-3 sm:px-5 sm:py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                      Our difference
                    </p>
                    <p className="mt-1 font-display text-base font-bold leading-snug text-white sm:text-lg">
                      Real portfolios. Real research. Real results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 overflow-hidden border-2 border-brand-primary/15 bg-brand-surface lg:mt-10">
            <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-400/80 to-brand-accent" />

            <div className="flex flex-col gap-3 border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 hidden h-8 w-1 shrink-0 bg-brand-accent sm:block" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                    What sets us apart
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-brand-secondary sm:text-2xl">
                    The Ether Property Hub edge
                  </h3>
                </div>
              </div>
              <p className="max-w-xs border-l-2 border-brand-accent/40 pl-3 text-xs leading-relaxed text-brand-secondary/55 sm:text-sm">
                Four principles behind every search, negotiation, and recommendation.
              </p>
            </div>

            <div className="grid auto-rows-fr divide-y divide-brand-primary/10 sm:grid-cols-2 sm:divide-x">
              {differentiators.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden bg-brand-surface p-5 transition-all duration-300 hover:bg-brand-cream/50 sm:p-6"
                >
                  <span className="pointer-events-none absolute -right-1 top-1 font-display text-6xl font-bold leading-none text-brand-primary/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-accent/25 bg-gradient-to-br from-brand-accent to-amber-700 text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {principleIcons[index]}
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent/80">
                        Principle {String(index + 1).padStart(2, "0")}
                      </p>
                      <h4 className="mt-1.5 font-display text-base font-bold leading-snug text-brand-secondary sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs leading-[1.65] text-brand-secondary/65 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-4 h-0.5 w-full bg-brand-primary/10">
                    <div className="h-0.5 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
