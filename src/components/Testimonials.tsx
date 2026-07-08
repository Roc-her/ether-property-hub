import Link from "next/link";
import { testimonials, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Reveal } from "./Reveal";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden py-14 lg:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${siteImages.hero}')`,
        }}
      />
      <div className="absolute inset-0 bg-brand-secondary/92" />
      <div className="grain absolute inset-0" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-primary/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              Client Experiences
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Trusted when it matters most.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
              Real clients. Real purchases. The support you want when the stakes are high.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 120} className="h-full">
              <blockquote className="card-shine group relative flex h-full flex-col overflow-hidden border border-white/15 bg-brand-surface shadow-[0_28px_60px_-24px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_-20px_rgba(0,0,0,0.6)]">
                <div className="h-1 shrink-0 bg-gradient-to-r from-brand-accent via-amber-400 to-brand-accent" />

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-1 font-display text-[5.5rem] leading-none text-brand-accent/[0.08] transition duration-300 group-hover:text-brand-accent/[0.14]"
                  >
                    &ldquo;
                  </span>

                  <Stars />

                  <p className="relative mt-5 flex-1 font-display text-base leading-[1.65] text-brand-secondary sm:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <footer className="relative mt-7 flex items-center gap-4 border-t border-brand-primary/10 pt-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-brand-accent/30 bg-brand-primary font-display text-base font-bold text-white">
                      {item.author.charAt(0)}
                    </div>
                    <cite className="not-italic">
                      <span className="block font-display text-base font-bold text-brand-secondary">
                        {item.author}
                      </span>
                      <span className="text-sm text-brand-secondary/50">{item.detail}</span>
                    </cite>
                  </footer>
                </div>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12">
            <p className="text-center text-sm text-white/55">
              Ready for the same level of care on your next purchase?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(184,134,11,0.55)] transition hover:bg-brand-accent/90 hover:shadow-[0_16px_36px_-10px_rgba(184,134,11,0.65)]"
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
