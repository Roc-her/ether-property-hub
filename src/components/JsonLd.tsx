import { siteConfig, services, team, faqs } from "@/lib/site-data";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/logo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Mooramba Ave",
      addressLocality: "North Gosford",
      addressRegion: "NSW",
      postalCode: "2250",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.contact,
      jobTitle: siteConfig.contactRole,
    },
    sameAs: [siteConfig.facebook, siteConfig.instagram, siteConfig.tiktok],
    knowsAbout: services.map((s) => s.title),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "2",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: team[0].name,
    jobTitle: team[0].role,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    description: team[0].bio,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
