import Link from "next/link";
import { differentiators, siteConfig } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function AboutTeaser() {
  const preview = differentiators.slice(0, 2);

  return (
    <section className="bg-brand-cream pb-12 pt-10 lg:pb-16 lg:pt-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_16px_40px_-24px_rgba(15,75,112,0.3)]">
            <div className="h-1 bg-brand-accent" />

            <div className="grid xl:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-brand-primary/10 p-5 sm:p-6 xl:border-b-0 xl:border-r xl:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block h-6 w-1 bg-brand-accent" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                    About us
                  </p>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-brand-secondary sm:text-2xl">
                  Built by investors, for investors.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-secondary/65">
                  Active property investors advising investors — backed by real portfolios, research,
                  and a nationwide search for the right opportunities.
                </p>
                <Link
                  href="/about"
                  className="mt-5 inline-flex items-center gap-2 border border-brand-primary/20 px-4 py-2 text-xs font-semibold text-brand-primary transition hover:border-brand-primary hover:bg-brand-cream sm:text-sm"
                >
                  Learn about us
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="relative min-h-[180px] sm:min-h-[200px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-brand-primary/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-secondary/90 px-4 py-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                    2026 Awards Finalist
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-white">
                    Outstanding New Business — Central Coast
                  </p>
                </div>
              </div>
            </div>

            <div className="grid divide-y divide-brand-primary/10 border-t border-brand-primary/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {preview.map((item) => (
                <div key={item.title} className="p-5 sm:p-6">
                  <h3 className="font-display text-base font-bold text-brand-secondary">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-brand-secondary/60 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid border-t border-brand-primary/10 sm:grid-cols-2">
              <Link
                href="/about"
                className="flex items-center justify-between gap-4 border-b border-brand-primary/10 bg-brand-primary px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-secondary sm:border-b-0 sm:border-r sm:px-6"
              >
                <span>Read our full story</span>
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
