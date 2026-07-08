import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Ether Property Hub",
  description:
    "Contact Ether Property Hub to book a free strategy session with Amir Thapa Magaranti. Email, phone, and enquiry form.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="pb-4 pt-6 lg:pt-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden border-2 border-brand-primary/15 bg-brand-surface shadow-[0_16px_40px_-24px_rgba(15,75,112,0.3)]">
              <div className="h-1 bg-brand-accent" />
              <div className="px-5 py-6 sm:px-8 sm:py-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                  Contact
                </p>
                <h1 className="mt-3 font-display text-3xl font-bold text-brand-secondary sm:text-4xl">
                  Let&apos;s talk about your next move.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-secondary/65 sm:text-base">
                  Book a free strategy session with {siteConfig.contact}. No obligation — just a
                  straight conversation about your property goals.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-brand-secondary/70">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-brand-primary transition hover:text-brand-accent"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="font-medium text-brand-primary transition hover:text-brand-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Contact />
    </PageShell>
  );
}
