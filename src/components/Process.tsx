import Link from "next/link";
import { processSteps, siteConfig } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 shadow-[0_16px_40px_-24px_rgba(15,75,112,0.35)] lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="relative bg-brand-secondary px-5 py-6 text-white sm:px-7 sm:py-8">
              <div className="absolute inset-y-0 right-0 hidden w-px bg-white/10 lg:block" />
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-accent" />

              <p className="pl-3 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                The Process
              </p>
              <h2 className="mt-3 pl-3 font-display text-2xl font-bold leading-[1.15] sm:text-[1.75rem]">
                From brief to settlement.
              </h2>
              <p className="mt-3 max-w-xs pl-3 text-sm leading-relaxed text-white/65">
                Three clear stages — define what fits, do the diligence, then decide with
                conviction.
              </p>

              <Link
                href="/process"
                className="mt-6 ml-3 inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-brand-accent hover:bg-white/5 sm:text-sm"
              >
                See how it works
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="bg-brand-surface px-5 py-6 sm:px-7 sm:py-8">
              <ol className="relative space-y-0">
                {processSteps.map((step, index) => (
                  <li key={step.step} className="relative flex gap-4 pb-8 last:pb-0">
                    {index < processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[17px] top-9 h-[calc(100%-1.25rem)] w-px bg-brand-accent/35"
                      />
                    )}

                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-brand-accent bg-brand-cream font-display text-sm font-bold text-brand-primary">
                      {step.step}
                    </div>

                    <Link href="/process" className="group min-w-0 flex-1 pt-0.5">
                      <h3 className="font-display text-base font-bold text-brand-secondary transition-colors group-hover:text-brand-primary sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-brand-secondary/60 sm:text-sm">
                        {step.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div className="col-span-full grid border-t border-brand-primary/10 sm:grid-cols-2">
              <Link
                href="/process"
                className="flex items-center justify-between gap-4 border-b border-brand-primary/10 bg-brand-primary px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-secondary sm:border-b-0 sm:border-r sm:px-6"
              >
                <span>View the full process</span>
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
