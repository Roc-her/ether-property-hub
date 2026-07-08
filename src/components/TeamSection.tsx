import Link from "next/link";
import Image from "next/image";
import { team, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Reveal } from "./Reveal";

export function TeamSection() {
  return (
    <section className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_20px_50px_-24px_rgba(15,75,112,0.35)]">
            <div className="h-1.5 bg-brand-accent" />

            {team.map((member) => (
              <div key={member.name} className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative flex min-h-[320px] items-center justify-center border-b border-brand-primary/10 bg-white p-4 sm:min-h-[380px] sm:p-6 lg:min-h-[420px] lg:border-b-0 lg:border-r lg:p-8">
                  <Image
                    src={siteImages.amir}
                    alt={`${member.name} — ${member.role}`}
                    width={520}
                    height={650}
                    className="h-auto w-full max-w-[420px] object-contain"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>

                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block h-6 w-1 bg-brand-accent" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                      Meet the team
                    </p>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-brand-secondary sm:text-3xl">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary">
                    {member.role}
                  </p>
                  <p className="mt-5 text-sm leading-[1.75] text-brand-secondary/70 sm:text-base">
                    {member.bio}
                  </p>

                  <div className="mt-6 grid gap-px overflow-hidden border border-brand-primary/10 bg-brand-primary/10 sm:grid-cols-2">
                    <div className="bg-brand-cream/60 px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 block text-sm font-medium text-brand-secondary hover:text-brand-primary"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                    <div className="bg-brand-cream/60 px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                        Phone
                      </p>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="mt-1 block text-sm font-medium text-brand-secondary hover:text-brand-primary"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 border-2 border-brand-primary bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                  >
                    {siteConfig.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
