export const mainNavLinks = [
  { href: "/about", label: "About", path: "/about" },
  { href: "/services", label: "Services", path: "/services" },
  { href: "/process", label: "Process", path: "/process" },
  { href: "/reviews", label: "Reviews", path: "/reviews" },
  { href: "/faq", label: "FAQ", path: "/faq" },
  { href: "/contact", label: "Contact", path: "/contact" },
] as const;

export function isNavActive(path: string, pathname: string) {
  return pathname === path;
}
