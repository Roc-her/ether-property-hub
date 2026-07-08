import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { contactImage } from "@/lib/process-images";
import { Reveal } from "./Reveal";

export function ContactTeaser() {
  return (
    <section className="bg-brand-cream pb-12 pt-2 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden border-2 border-brand-primary/15 shadow-[0_16px_40px_-24px_rgba(15,75,112,0.35)] lg:grid lg:grid-cols-2">
            <div className="relative min-h-[220px] border-b border-brand-primary/10 lg:min-h-0 lg:border-b-0 lg:border-r lg:border-brand-primary/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${contactImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/90 via-brand-secondary/70 to-brand-secondary/40" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                  Get in Touch
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  Ready to plan your next move?
                </h2>
                <p className="mt-3 max-w-md text-sm text-white/65">
                  Speak direct with {siteConfig.contact}. Free strategy session — no obligation.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-brand-secondary p-6 text-white sm:p-8">
              <ul className="space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-accent">✓</span>
                  Personal follow-up within 24 hours
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-accent">✓</span>
                  Buyer-only advice — zero conflicts of interest
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-accent">✓</span>
                  Australia-wide property search
                </li>
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-brand-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent/90"
                >
                  Send an enquiry
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-accent"
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
