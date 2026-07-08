export const siteConfig = {
  name: "Ether Property Hub",
  tagline: "Invest. Grow. Thrive.",
  description:
    "Australia's 5-star rated buyer's agency. Unmatched price outcomes and access to off-market properties. Led by Amir Thapa Magaranti — saving you time, money and stress across Australia.",
  url: "https://etherpropertyhub.com.au",
  email: "amir@etherpropertyhub.com.au",
  phone: "0452 633 252",
  phoneRaw: "0452633252",
  address: "60 Mooramba Ave, North Gosford, NSW 2250",
  secondaryAddress: "12/71-73 Faunce Street West, Gosford NSW 2250",
  licence: "NSW: 400086989",
  contact: "Amir Thapa Magaranti",
  contactRole: "Director & Buyer's Agent",
  facebook: "https://www.facebook.com/profile.php?id=61564510874915",
  instagram: "https://www.instagram.com/etherpropertyhub",
  tiktok: "https://www.tiktok.com/@etherpropertyhub",
  socialHandle: "@etherpropertyhub",
  cta: "Book a free consultation",
  rating: "5-Star Rated Buyer's Agency",
  offMarketStat: "65%",
  heroHeadline:
    "Book a free consultation with Australia's 5-star rated buyer's agency",
  heroSubheadline: "Unmatched price outcomes & access to off-market properties",
  heroDescription:
    "As one of the most experienced and well-connected buyer's agents in Australia, we're driven to save you time, money and stress by taking away the hassles that come from buying property.",
} as const;

export const aboutContent = {
  intro:
    "At Ether Property Hub, we're more than just buyer's agents — we're your personal property partners, here to help you make smarter, faster, and more confident buying decisions.",
  body: [
    "Whether you're a first-home buyer, an investor building your portfolio, or relocating from interstate or overseas, we guide you through every step with clarity and care. We take the time to understand your goals, source the best on- and off-market opportunities, and negotiate fiercely on your behalf.",
    "With a strong foundation in data, local insight, and real-world experience, we're committed to finding not just any property — but the right one for you.",
  ],
  closing: "Your journey is personal. Your property should be too. Let's make it happen — together.",
  serviceIntro:
    "Buying a house should be one of the best moments of your life. We make sure the joy of finding the home you've always dreamed of far outweighs the stress of searching and negotiating.",
} as const;

export const valuePillars = [
  {
    title: "Negotiation",
    description:
      "We protect your interests using instinctive negotiation skills to keep the price right and terms reasonable.",
    accent: "Protect",
  },
  {
    title: "Powerful network",
    description:
      "Over 65% of our purchases for clients are never advertised, so you get to the best properties before anyone else.",
    accent: "65%",
  },
  {
    title: "Save time",
    description:
      "Our tailored strategy sessions allow us to uncover your wants and needs, budget, and lifestyle so we can streamline your house hunt.",
    accent: "Fast",
  },
  {
    title: "Effective offer advice",
    description:
      "We follow your dreams, but overcome emotions to ensure you don't get carried away and be tempted to overpay for a property.",
    accent: "Smart",
  },
] as const;

export const clientTypes = [
  {
    title: "Family home buyers",
    description:
      "Buying that perfect family home can feel overwhelming and emotional. We're here to simplify the process and guide you every step of the way — ensuring you secure a home that fits your lifestyle, budget, and long-term needs.",
    image: "family" as const,
  },
  {
    title: "Interstate & international buyers",
    description:
      "Buying 'sight unseen' comes with risks, but with our trusted network and boots on the ground, we'll give you access to vetted properties, real-time insights, and smooth coordination from start to settlement — wherever you are in the world.",
    image: "interstate" as const,
  },
  {
    title: "Investors",
    description:
      "It's all about the numbers. With years of property investing experience, we help you identify high-performing suburbs, negotiate with confidence, and build a strategic portfolio designed to deliver long-term financial freedom.",
    image: "investors" as const,
  },
] as const;

export const team = [
  {
    name: "Amir Thapa Magaranti",
    role: "Director & Buyer's Agent",
    bio: "At the core of our business is Amir Thapa Magaranti, the Director and trusted guide behind every property journey. With several years of experience in real estate, buyer's advocacy, and property development, Amir combines practical market knowledge with a passion for helping people make confident property decisions — whether it's finding the perfect home, securing a strong investment, or planning a development project.",
    image: "amir" as const,
  },
] as const;

export const projects = [
  { location: "Dubbo", state: "NSW", type: "Investment purchase", image: "dubbo" as const },
  { location: "Caboolture", state: "QLD", type: "Investment purchase", image: "caboolture" as const },
  { location: "Fortitude Valley", state: "QLD", type: "Investment purchase", image: "fortitude-valley" as const },
  { location: "Kallangur", state: "QLD", type: "Investment purchase", image: "kallangur" as const },
  { location: "Thornlie", state: "WA", type: "Investment property", image: "thornlie" as const },
  { location: "Greenfields", state: "WA", type: "Investment purchase", image: "greenfields" as const },
  { location: "Mildura", state: "VIC", type: "Investment purchase", image: "mildura" as const },
] as const;

export const services = [
  {
    title: "Investment Strategy",
    description:
      "Tailored strategy sessions uncover your wants, needs, budget and lifestyle — streamlining your property hunt before a single address is shortlisted.",
    icon: "strategy",
  },
  {
    title: "Property Research",
    description:
      "Data-led suburb analysis, comparable sales, rental demand and growth indicators — the numbers behind every recommendation.",
    icon: "research",
  },
  {
    title: "Property Sourcing",
    description:
      "Active search across Australia for assets that fit your brief. Over 65% of our client purchases are never publicly advertised.",
    icon: "sourcing",
  },
  {
    title: "Off-Market Access",
    description:
      "Pre-market and off-market opportunities through our powerful agent network — get to the best properties before anyone else.",
    icon: "offmarket",
  },
  {
    title: "Due Diligence",
    description:
      "Thorough checks on title, contracts, building reports, and investment fundamentals before you commit.",
    icon: "diligence",
  },
  {
    title: "Negotiation & Auctions",
    description:
      "Instinctive negotiation skills to keep the price right and terms reasonable — with effective offer advice so you never overpay.",
    icon: "negotiation",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "A complimentary consultation to understand your goals, timeline, finance position, and what success looks like for your next purchase.",
  },
  {
    step: "02",
    title: "Search & analysis",
    description:
      "Nationwide sourcing, suburb shortlisting, cash flow review, and due diligence before any recommendation is made.",
  },
  {
    step: "03",
    title: "Secure & settle",
    description:
      "Negotiation, auction bidding, contract review, and settlement support — with guidance that continues beyond purchase.",
  },
] as const;

export const differentiators = valuePillars;

export const testimonials = [
  {
    quote:
      "I'm so grateful for Amir from Ether Property Hub. From day one he made us feel supported and truly listened to what we were looking for. He was always just a call or text away, answering every question with patience and kindness.",
    author: "Bigyan Shrestha",
    detail: "Home buyer",
  },
  {
    quote:
      "Amir guided me expertly during the purchasing journey. He checked in constantly to make sure I was comfortable throughout the process. Great service — thank you!",
    author: "Adhish Panta",
    detail: "Property buyer",
  },
] as const;

export const faqs = [
  {
    question: "What does a buyer's agent do?",
    answer:
      "A buyer's agent represents you — the purchaser — through property search, due diligence, negotiation, and settlement. Unlike a selling agent who works for the vendor, a buyer's agent protects your interests, budget, and investment strategy throughout the entire process.",
  },
  {
    question: "Do you work with first-home buyers and investors?",
    answer:
      "Yes. From family home buyers to interstate and international buyers to seasoned investors, we have the experience and qualifications to suit all needs. Whether it's your first home or your fifth investment, we tailor our approach to your goals.",
  },
  {
    question: "Which areas of Australia do you cover?",
    answer:
      "We operate Australia-wide — from Brisbane and the Central Coast to Perth, Melbourne, Dubbo, Mildura and beyond. Our research and sourcing follow the opportunity, not a single postcode.",
  },
  {
    question: "What does off-market property mean?",
    answer:
      "Off-market properties are sold without public advertising on major portals. Over 65% of our client purchases are never advertised — surfaced through agent relationships and direct outreach before they hit the open market.",
  },
  {
    question: "How does your fee structure work?",
    answer:
      "We operate with transparent pricing discussed upfront. There are no hidden commissions or conflicts of interest — you know exactly what you're investing in our service before we begin.",
  },
  {
    question: "What happens in the free consultation?",
    answer:
      "It's a no-obligation discovery call to understand your property goals, current financial position, and timeline. We'll discuss a tailored solution that's right for you — with no sales pressure.",
  },
] as const;
