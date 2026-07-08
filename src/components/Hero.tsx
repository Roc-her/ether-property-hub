import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-secondary">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/95 via-brand-primary/88 to-brand-secondary/90" />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
          <div className="flex flex-col gap-8 lg:gap-10 lg:pr-6 xl:pr-10">
            <div className="animate-fade-up inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="rounded-full bg-brand-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                2026 Finalist
              </span>
              Central Coast Local Business Awards
            </div>

            <h1 className="animate-fade-up delay-100 font-display text-[2.1rem] font-bold leading-[1.3] tracking-normal text-white sm:text-4xl sm:leading-[1.25] lg:text-[2.75rem] xl:text-[3.25rem]">
              <span className="block">Build wealth through property</span>
              <span className="mt-1 block bg-gradient-to-r from-brand-accent to-amber-200 bg-clip-text text-transparent sm:mt-2">
                with conviction.
              </span>
            </h1>

            <div className="animate-fade-up delay-200 flex max-w-md flex-col gap-4 sm:max-w-lg sm:gap-5">
              <p className="text-lg leading-[1.8] text-white/85 sm:text-xl sm:leading-[1.75]">
                Strategy-first buyer&apos;s agency for property investors across Australia.
              </p>
              <p className="text-base leading-[1.8] text-white/70 sm:text-lg">
                Backed by real investing experience and nationwide research — not sales pitches
                tied to one postcode.
              </p>
            </div>

            <div className="animate-fade-up delay-300 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-black/20 transition hover:bg-brand-accent/90"
              >
                {siteConfig.cta}
                <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="animate-fade-in delay-500 relative mx-auto w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative lg:ml-auto lg:w-full lg:max-w-[400px] xl:max-w-[440px]">
              <div className="overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/30 xl:rounded-[2rem]">
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80')",
                  }}
                />
              </div>

              <div
                className="absolute left-3 top-8 hidden w-32 overflow-hidden rounded-2xl border-2 border-white/20 shadow-xl sm:block sm:w-36"
                style={{ transform: "rotate(-6deg)" }}
              >
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80')",
                  }}
                />
              </div>

              <div className="absolute bottom-4 left-3 hidden max-w-[230px] rounded-2xl border border-white/15 bg-brand-surface/95 p-4 shadow-2xl sm:block sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                    ★
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-accent">
                      Outstanding New Business
                    </p>
                    <p className="mt-1 font-display text-sm font-bold text-brand-secondary">
                      2026 Awards Finalist
                    </p>
                    <p className="text-xs text-brand-secondary/55">Central Coast, NSW</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-3 top-4 hidden rounded-2xl border border-white/15 bg-brand-primary/90 px-4 py-3 shadow-xl sm:block sm:px-5 sm:py-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                  Led by
                </p>
                <p className="mt-1 font-display text-base font-bold text-white">
                  {siteConfig.contact.split(" ")[0]}{" "}
                  {siteConfig.contact.split(" ").slice(-1)[0]}
                </p>
                <p className="text-xs text-brand-accent">Active property investor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
