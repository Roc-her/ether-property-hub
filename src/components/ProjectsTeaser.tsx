import Link from "next/link";
import Image from "next/image";
import { projects, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Reveal } from "./Reveal";

export function ProjectsTeaser() {
  const preview = projects.slice(0, 4);

  return (
    <section className="bg-brand-surface pb-12 pt-10 lg:pb-16 lg:pt-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_16px_40px_-24px_rgba(15,75,112,0.3)]">
            <div className="h-1 bg-brand-accent" />

            <div className="border-b border-brand-primary/10 bg-brand-cream/40 px-5 py-6 sm:px-8 sm:py-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block h-6 w-1 bg-brand-accent" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                      Client purchases
                    </p>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold text-brand-secondary sm:text-2xl">
                    Properties secured across Australia.
                  </h2>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-secondary/65">
                    A snapshot of recent investment purchases — from Dubbo and Mildura to Perth and
                    Brisbane.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex shrink-0 items-center gap-2 border border-brand-primary/20 px-4 py-2 text-xs font-semibold text-brand-primary transition hover:border-brand-primary hover:bg-brand-cream sm:text-sm"
                >
                  View all projects
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="grid divide-y divide-brand-primary/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {preview.map((project) => (
                <div
                  key={`${project.location}-${project.state}`}
                  className="group grid grid-cols-[112px_1fr] gap-0 sm:grid-cols-1"
                >
                  <div className="relative min-h-[88px] overflow-hidden border-b border-brand-primary/10 sm:min-h-[160px] sm:border-b sm:border-brand-primary/10">
                    <Image
                      src={siteImages.projects[project.image]}
                      alt={`${project.location}, ${project.state}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 112px, 50vw"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                      {project.type}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-brand-secondary">
                      {project.location}, {project.state}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-between gap-4 border-t border-brand-primary/10 bg-brand-accent px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-accent/90 sm:px-6"
            >
              <span>{siteConfig.cta}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
