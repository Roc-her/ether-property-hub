import Link from "next/link";
import { testimonials, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Reveal } from "./Reveal";

export function ReviewsTeaser() {
  const [featured] = testimonials;

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${siteImages.hero}')`,
        }}
      />
      <div className="absolute inset-0 bg-brand-secondary/92" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              Client Experiences
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Trusted when it matters most.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="mx-auto mt-8 max-w-3xl border border-white/15 bg-brand-surface p-6 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.5)] sm:p-8">
            <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-400 to-brand-accent" />
            <p className="mt-5 font-display text-lg leading-[1.6] text-brand-secondary sm:text-xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-3 border-t border-brand-primary/10 pt-5">
              <div className="flex h-10 w-10 items-center justify-center bg-brand-primary font-display text-sm font-bold text-white">
                {featured.author.charAt(0)}
              </div>
              <cite className="not-italic">
                <span className="block text-sm font-bold text-brand-secondary">{featured.author}</span>
                <span className="text-xs text-brand-secondary/50">{featured.detail}</span>
              </cite>
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Read all reviews
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-accent/90"
            >
              {siteConfig.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
