"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoWordmark } from "./Logo";
import { siteConfig } from "@/lib/site-data";
import { isNavActive, mainNavLinks } from "@/lib/navigation";

function navLinkClassName(active: boolean, onHero: boolean) {
  if (active) {
    return "relative text-sm font-semibold text-brand-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand-accent";
  }
  return onHero
    ? "text-sm font-medium text-white/80 transition-colors hover:text-white"
    : "text-sm font-medium text-white/85 transition-colors hover:text-white";
}

function mobileNavLinkClassName(active: boolean) {
  return active
    ? "border-l-2 border-brand-accent pl-3 text-base font-semibold text-brand-accent"
    : "border-l-2 border-transparent pl-3 text-base font-medium text-white/90 transition-colors hover:text-white";
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomeHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isHomeHero
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-brand-primary/20 bg-brand-secondary/95 shadow-md backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <LogoWordmark light />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNavLinks.map((link) => {
            const active = isNavActive(link.path, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={navLinkClassName(active, isHomeHero)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition sm:inline-flex ${
              pathname === "/contact"
                ? "bg-brand-accent/90 ring-2 ring-white/30"
                : "bg-brand-accent hover:bg-brand-accent/90"
            }`}
          >
            {siteConfig.cta}
          </Link>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-brand-secondary px-6 py-4 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4">
            {mainNavLinks.map((link) => {
              const active = isNavActive(link.path, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={mobileNavLinkClassName(active)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-full bg-brand-accent px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {siteConfig.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
