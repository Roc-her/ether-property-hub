import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet Amir Thapa Magaranti — Director & Buyer's Agent at Ether Property Hub, Australia's 5-star rated buyer's agency.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <PageShell>
      <section className="pb-6 pt-6 lg:pb-8 lg:pt-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-2 flex items-center gap-2.5">
            <span className="inline-block h-6 w-1 bg-brand-accent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
              Team
            </p>
          </div>
          <h1 className="font-display text-3xl font-bold text-brand-secondary sm:text-4xl">
            The people behind your purchase.
          </h1>
        </div>
      </section>
      <TeamSection />
    </PageShell>
  );
}
