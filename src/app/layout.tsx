import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Ether Property Hub | Australia's Buyer Agency for Investors",
  description:
    "Independent buyer's agency for property investors across Australia. Strategy-first advice from active investors. Book a free strategy session with Amir Thapa Magaranti.",
  keywords: [
    "buyer's agent",
    "property investment",
    "Australia",
    "buyer's agency",
    "investment property",
    "NSW",
  ],
  openGraph: {
    title: "Ether Property Hub | Invest. Grow. Thrive.",
    description:
      "Independent buyer's agency for property investors across Australia. Book a free strategy session.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
