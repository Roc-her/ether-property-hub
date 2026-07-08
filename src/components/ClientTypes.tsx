import Image from "next/image";
import { clientTypes } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Reveal } from "./Reveal";

export function ClientTypes() {
  return (
    <section className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface">
            <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-400/80 to-brand-accent" />

            <div className="border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-6 sm:px-8 sm:py-7">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-6 w-1 bg-brand-accent" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                  Who we help
                </p>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-brand-secondary sm:text-3xl">
                Every buyer journey is different.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-secondary/70">
                From first-home buyers to interstate relocations and seasoned investors — we tailor
                our approach to your goals, timeline, and risk profile.
              </p>
            </div>

            <div className="grid divide-y divide-brand-primary/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {clientTypes.map((client, index) => (
                <article key={client.title} className="group overflow-hidden">
                  <div className="relative aspect-[5/4] overflow-hidden border-b border-brand-primary/10 sm:aspect-[4/3]">
                    <Image
                      src={siteImages.clients[client.image]}
                      alt={client.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-secondary/80 px-4 py-3 backdrop-blur-sm">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                        Client {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-display text-base font-bold text-white sm:text-lg">
                        {client.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 lg:p-7">
                    <p className="text-sm leading-[1.7] text-brand-secondary/65">
                      {client.description}
                    </p>
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
