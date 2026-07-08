import Image from "next/image";
import { projects } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";

export function ProjectsGrid() {
  return (
    <div className="grid divide-y divide-brand-primary/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={`${project.location}-${project.state}`}
          className="group relative overflow-hidden bg-brand-surface transition hover:bg-brand-cream/50"
        >
          <div className="relative aspect-[5/4] overflow-hidden border-b border-brand-primary/10 sm:aspect-[4/3]">
            <Image
              src={siteImages.projects[project.image]}
              alt={`${project.location}, ${project.state} — ${project.type}`}
              fill
              className="object-cover object-center transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>

          <div className="relative p-5 sm:p-6">
            <span className="pointer-events-none absolute -right-1 top-1 font-display text-6xl font-bold leading-none text-brand-primary/[0.04]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
              {project.type}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-brand-secondary">
              {project.location}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-primary">{project.state}</p>

            <div className="mt-4 h-0.5 w-full bg-brand-primary/10">
              <div className="h-0.5 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
