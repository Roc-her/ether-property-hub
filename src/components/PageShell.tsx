import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className={`overflow-x-hidden bg-brand-cream pt-24 ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
