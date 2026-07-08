import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { ReviewsTeaser } from "@/components/ReviewsTeaser";
import { FAQTeaser } from "@/components/FAQTeaser";
import { ContactTeaser } from "@/components/ContactTeaser";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <Marquee />
        <TrustBar />
        <AboutTeaser />
        <Services />
        <Process />
        <ReviewsTeaser />
        <FAQTeaser />
        <ContactTeaser />
      </main>
      <Footer />
    </>
  );
}
