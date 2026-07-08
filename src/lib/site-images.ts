export const siteImages = {
  logo: "/images/logo.jpg",
  hero: "/images/hero.jpeg",
  amir: "/images/amir-portrait.jpeg",
  about: "/images/hero.jpeg",
  contact: "/images/contact.png",
  projects: {
    dubbo: "/images/project-dubbo.jpeg",
    caboolture: "/images/project-caboolture.jpeg",
    "fortitude-valley": "/images/project-fortitude-valley.jpeg",
    kallangur: "/images/project-kallangur.jpeg",
    thornlie: "/images/project-thornlie.jpeg",
    greenfields: "/images/project-greenfields.jpeg",
    mildura: "/images/project-mildura.jpeg",
  },
  clients: {
    family: "/images/contact.png",
    interstate: "/images/hero.jpeg",
    investors: "/images/project-thornlie.jpeg",
  },
} as const;

export const processStepImages = [
  "/images/hero.jpeg",
  "/images/project-thornlie.jpeg",
  "/images/contact.png",
] as const;

export const contactImage = siteImages.contact;
