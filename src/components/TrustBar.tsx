import { siteConfig } from "@/lib/site-data";

const stats = [
  {
    label: "Buyer-only",
    detail: "Zero vendor conflicts of interest",
    accent: "100%",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    label: "Australia-wide",
    detail: "National property search & sourcing",
    accent: "AU",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    label: "Fixed fees",
    detail: "Transparent pricing upfront",
    accent: "Fixed",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
  },
  {
    label: "Licensed",
    detail: siteConfig.licence,
    accent: "NSW",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
];

export function TrustBar() {
  return (
    <section className="relative z-20 px-6 pb-4 pt-2 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[1.75rem] bg-brand-secondary shadow-[0_24px_60px_-20px_rgba(15,75,112,0.45)] ring-1 ring-white/10">
          <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-300/80 to-brand-accent" />

          <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x xl:grid-cols-4 xl:divide-y-0">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="group relative flex gap-4 p-6 transition-colors hover:bg-white/[0.04] sm:p-7 lg:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent to-amber-600 text-white shadow-lg shadow-brand-accent/25 transition group-hover:scale-105">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {stat.icon}
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                    {stat.accent}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-white sm:text-xl">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.65] text-white/60">{stat.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
