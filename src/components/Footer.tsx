import Link from "next/link";
import { LogoWordmark } from "./Logo";
import { siteConfig } from "@/lib/site-data";
import { mainNavLinks } from "@/lib/navigation";

const serviceLinks = [
  { label: "View all services", href: "/services" },
  { label: "Investment Strategy", href: "/services#strategy" },
  { label: "Property Research", href: "/services#research" },
  { label: "Property Sourcing", href: "/services#sourcing" },
  { label: "Due Diligence", href: "/services#diligence" },
  { label: "Negotiation & Auctions", href: "/services#negotiation" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="h-1 bg-gradient-to-r from-brand-accent via-amber-400/80 to-brand-accent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
              {siteConfig.tagline}
            </p>
            <p className="mt-1 font-display text-lg font-bold sm:text-xl">
              {siteConfig.rating}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-accent/90"
          >
            {siteConfig.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="[&_.font-display]:text-white [&_.text-brand-primary]:text-white">
              <LogoWordmark />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
              <span className="inline-block h-4 w-0.5 bg-brand-accent" />
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
              <span className="inline-block h-4 w-0.5 bg-brand-accent" />
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {mainNavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs text-white/70 transition hover:border-brand-accent/40 hover:text-brand-accent"
              >
                Facebook
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs text-white/70 transition hover:border-brand-accent/40 hover:text-brand-accent"
              >
                Instagram
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs text-white/70 transition hover:border-brand-accent/40 hover:text-brand-accent"
              >
                TikTok
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="mt-2 text-xs text-white/40">{siteConfig.socialHandle}</p>
          </div>

          <div className="lg:col-span-4">
            <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
              <span className="inline-block h-4 w-0.5 bg-brand-accent" />
              Contact
            </h3>
            <div className="mt-4 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              <div className="bg-brand-secondary px-4 py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-sm text-white/80 transition hover:text-brand-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="bg-brand-secondary px-4 py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="mt-1 block text-sm text-white/80 transition hover:text-brand-accent"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="bg-brand-secondary px-4 py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                  Office
                </p>
                <p className="mt-1 text-sm text-white/70">{siteConfig.address}</p>
                <p className="mt-1 text-sm text-white/55">{siteConfig.secondaryAddress}</p>
                <p className="mt-1 text-xs text-white/45">
                  {siteConfig.contact} · {siteConfig.licence}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 py-8 text-xs leading-relaxed text-white/45 md:grid-cols-2">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Licensed Real
            Estate Agency · {siteConfig.licence}
          </p>
          <p>
            All investment decisions involve risk. Past performance is not indicative of future
            results. This website does not constitute financial advice. Please consider your own
            circumstances before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
