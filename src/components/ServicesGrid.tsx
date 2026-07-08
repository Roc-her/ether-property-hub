import { services } from "@/lib/site-data";
import { ServiceIcon } from "@/lib/service-icons";

export function ServicesGrid() {
  return (
    <div className="grid divide-y divide-brand-primary/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
      {services.map((service, index) => (
        <article
          key={service.title}
          id={service.icon}
          className="group relative overflow-hidden bg-brand-surface p-5 transition-colors hover:bg-brand-cream/50 sm:p-6"
        >
          <span className="pointer-events-none absolute -right-1 top-1 font-display text-6xl font-bold leading-none text-brand-primary/[0.04]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-accent/25 bg-gradient-to-br from-brand-accent to-amber-700 text-white">
              <ServiceIcon icon={service.icon} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent/80">
                Service {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-brand-secondary sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-[1.65] text-brand-secondary/65 sm:text-sm">
                {service.description}
              </p>
            </div>
          </div>

          <div className="relative mt-4 h-0.5 w-full bg-brand-primary/10">
            <div className="h-0.5 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />
          </div>
        </article>
      ))}
    </div>
  );
}
