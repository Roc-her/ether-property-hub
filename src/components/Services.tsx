import Link from "next/link";
import { services, siteConfig } from "@/lib/site-data";
import { ServiceIcon } from "@/lib/service-icons";
import { Reveal } from "./Reveal";

const teaserServices = services.slice(0, 3);
const moreServices = services.slice(3);

export function Services() {
  return (
    <section id="services" className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_16px_40px_-24px_rgba(15,75,112,0.3)]">
            <div className="h-1 bg-brand-accent" />

            <div className="flex flex-col gap-3 border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 hidden h-8 w-1 shrink-0 bg-brand-accent sm:block" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                    Services
                  </p>
                  <h2 className="mt-1.5 font-display text-xl font-bold text-brand-secondary sm:text-2xl">
                    Your private buying desk.
                  </h2>
                  <p className="mt-2 max-w-lg text-xs leading-relaxed text-brand-secondary/65 sm:text-sm">
                    Full advocacy or targeted support — from strategy through to settlement.
                  </p>
                </div>
              </div>
              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 self-start border border-brand-primary/20 bg-brand-surface px-4 py-2 text-xs font-semibold text-brand-primary transition hover:border-brand-primary hover:bg-brand-cream sm:self-auto sm:text-sm"
              >
                View all services
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid divide-y divide-brand-primary/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {teaserServices.map((service, index) => (
                <Link
                  key={service.title}
                  href="/services"
                  className="group block p-5 transition-colors hover:bg-brand-cream/50 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-brand-accent/25 bg-gradient-to-br from-brand-accent to-amber-700 text-white">
                      <ServiceIcon icon={service.icon} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold leading-snug text-brand-secondary sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-brand-secondary/60 sm:text-sm">
                    {service.description}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold text-brand-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>

            <div className="border-t border-brand-primary/10 bg-brand-cream/50 px-5 py-4 sm:px-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                Also included
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {moreServices.map((service) => (
                  <Link
                    key={service.title}
                    href="/services"
                    className="border border-brand-primary/15 bg-brand-surface px-3 py-1.5 text-xs text-brand-secondary/75 transition hover:border-brand-primary/30 hover:text-brand-primary"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid border-t border-brand-primary/10 sm:grid-cols-2">
              <Link
                href="/services"
                className="flex items-center justify-between gap-4 border-b border-brand-primary/10 bg-brand-primary px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-secondary sm:border-b-0 sm:border-r sm:px-6"
              >
                <span>Explore all six services</span>
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
