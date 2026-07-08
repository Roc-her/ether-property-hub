export const mainNavLinks = [
  { href: "/about", label: "About", path: "/about" },
  { href: "/projects", label: "Projects", path: "/projects" },
  { href: "/team", label: "Team", path: "/team" },
  { href: "/services", label: "Services", path: "/services" },
  { href: "/reviews", label: "Reviews", path: "/reviews" },
  { href: "/faq", label: "FAQ", path: "/faq" },
  { href: "/contact", label: "Contact", path: "/contact" },
] as const;

export function isNavActive(path: string, pathname: string) {
  return pathname === path;
}
