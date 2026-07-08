import { valuePillars } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="relative z-20 px-6 pb-4 pt-2 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden border-2 border-brand-primary/20 bg-brand-secondary shadow-[0_20px_50px_-24px_rgba(15,75,112,0.45)]">
          <div className="h-1 bg-brand-accent" />

          <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x xl:grid-cols-4 xl:divide-y-0">
            {valuePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group relative flex flex-col p-6 transition-colors hover:bg-white/[0.03] sm:p-7 lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold leading-none text-brand-accent/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white sm:text-xl">
                  {pillar.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-[1.7] text-white/65">
                  {pillar.description}
                </p>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent/80">
                  {pillar.accent}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
