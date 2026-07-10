"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoWordmark } from "./Logo";
import { siteConfig } from "@/lib/site-data";
import { isNavActive, mainNavLinks } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-shadow duration-500 ${
        scrolled ? "shadow-[0_18px_44px_rgb(0_0_0/0.28)]" : ""
      }`}
      style={{
        background:
          "linear-gradient(90deg, rgb(11 28 51 / 0.97) 0%, rgb(8 22 40 / 0.97) 40%, rgb(7 21 37 / 0.97) 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgb(43 154 232 / 0.28)",
      }}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <LogoWordmark compact />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNavLinks.map((link) => {
            const active = isNavActive(link.path, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="nav-link relative inline-flex h-[76px] items-center px-3.5 text-[11.5px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300"
                style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
              >
                {link.label}
                <span
                  className={`absolute bottom-[24px] left-1/2 h-px w-6 -translate-x-1/2 bg-gold transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-cta hidden h-10 items-center px-5 text-[10.5px] sm:inline-flex"
          >
            {siteConfig.cta}
          </Link>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-brand-secondary px-5 py-6 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {mainNavLinks.map((link) => {
              const active = isNavActive(link.path, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-l-2 py-2.5 pl-4 text-[13px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:translate-x-0.5 ${
                    active
                      ? "border-gold text-gold"
                      : "border-transparent text-white hover:text-gold-soft"
                  }`}
                  style={!active ? { color: "#ffffff" } : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-cta mt-4 h-11 w-full text-[11px]"
            >
              {siteConfig.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
