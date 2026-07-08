import { Reveal } from "./Reveal";
import { siteImages } from "@/lib/site-images";

const markets = [
  { city: "Sydney", state: "NSW" },
  { city: "Melbourne", state: "VIC" },
  { city: "Brisbane", state: "QLD" },
  { city: "Perth", state: "WA" },
  { city: "Adelaide", state: "SA" },
  { city: "Central Coast", state: "NSW" },
  { city: "Gold Coast", state: "QLD" },
  { city: "Canberra", state: "ACT" },
];

export function Markets() {
  return (
    <section className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_16px_40px_-24px_rgba(15,75,112,0.3)]">
            <div className="h-1 bg-brand-accent" />

            <div className="grid xl:grid-cols-2">
              <div className="border-b border-brand-primary/10 p-6 lg:p-7 xl:border-b-0 xl:border-r xl:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block h-6 w-1 bg-brand-accent" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                    Nationwide Coverage
                  </p>
                </div>

                <h2 className="mt-4 font-display text-2xl font-bold leading-[1.2] text-brand-secondary sm:text-3xl">
                  We follow the{" "}
                  <span className="italic text-brand-primary">opportunity</span>, not a postcode.
                </h2>

                <p className="mt-4 text-sm leading-[1.7] text-brand-secondary/70 lg:text-[15px]">
                  Research-led search across every major Australian market — chosen on merit, not
                  geography.
                </p>

                <div className="mt-6 border border-brand-primary/15">
                  <div className="border-b border-brand-primary/10 bg-brand-cream/50 px-3 py-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary/70">
                      Markets we search
                    </p>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-y divide-brand-primary/10 sm:grid-cols-4">
                    {markets.map((market) => (
                      <div
                        key={market.city}
                        className="group px-3 py-2.5 transition-colors hover:bg-brand-cream/60"
                      >
                        <span className="font-display text-xs font-bold text-brand-secondary group-hover:text-brand-primary sm:text-sm">
                          {market.city}
                        </span>
                        <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-wide text-brand-secondary/40">
                          {market.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr]">
                <div className="flex flex-col justify-between bg-brand-primary px-2.5 py-4 text-white sm:px-3 sm:py-5">
                  <div>
                    <p className="font-display text-2xl font-bold leading-none">8+</p>
                    <p className="mt-1.5 text-[9px] font-bold uppercase leading-snug tracking-[0.1em] text-brand-accent">
                      Major markets
                    </p>
                  </div>
                  <p className="text-[9px] leading-snug text-white/50">AU-wide</p>
                </div>

                <div className="relative min-h-[200px] bg-brand-secondary sm:min-h-[220px] xl:min-h-[240px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
                    style={{
                      backgroundImage: `url('${siteImages.projects.mildura}')`,
                    }}
                  />
                  <svg
                    viewBox="0 0 400 400"
                    className="absolute inset-0 h-full w-full p-5 text-brand-accent/60 sm:p-6"
                    aria-hidden="true"
                  >
                    <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 7" opacity="0.45" />
                    <circle cx="200" cy="200" r="85" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                    <circle cx="200" cy="200" r="42" fill="currentColor" opacity="0.15" />
                    <circle cx="285" cy="155" r="5" fill="currentColor" />
                    <circle cx="145" cy="225" r="4" fill="white" opacity="0.85" />
                  </svg>

                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-secondary/95 px-4 py-3 sm:px-5 sm:py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                      Search scope
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-white">Australia-wide</p>
                    <p className="text-[11px] text-white/55">Research-led · Buyer-only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
