import { heroConfig as item } from "./hero";

const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(
  /\/+$/,
  ""
);

const ogImage = "/meta/opengraph-img.png";
const fullName = "Muhamad Nabil Faiz Amrullah";

export const siteConfig = {
  name: item.name,
  title: "Bil — Portfolio",
  desc: "Portfolio of Muhamad Nabil Faiz Amrullah — Informatics student & full-stack developer.",
  url: siteUrl,
  ogImage,

  author: {
    name: fullName,
    twitter: "@aaronabil_aster",
    github: "Aaronabil",
    email: "nabilmuhamad630@gmail.com",
  },

  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "web development",
    "bil",
    "aaronabil",
    "muhamad nabil faiz amrullah",
  ],
};

type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonical?: string;
};

export const pageMetaData: Record<string, PageMeta> = {
  "/": {
    title: `${fullName} - Informatics Student & Full-Stack Developer`,
    description:
      "I design and build engaging digital experiences focused on performance and visual design — from web apps to ESP32 hardware and motion-graphics videos.",
    ogImage,
  },

  "/blog": {
    title: "Blog - Development & Tutorials",
    description:
      "Articles and tutorials on programming, engineering, and web development.",
    ogImage,
  },

  "/books": {
    title: "Books - Reading & Recommendations",
    description: "Books I've read and recommendations worth exploring.",
    ogImage,
  },

  "/designs": {
    title: "Designs - Creative Work",
    description: "Explore my visual experiments, UI concepts, and design work.",
    ogImage,
  },

  "/gears": {
    title: "Gears - My Setup & Tools",
    description:
      "Explore the tools, devices, and software I use to build products.",
    ogImage,
  },

  "/movies": {
    title: "Movies - Watchlist & Reviews",
    description: "Movies I've watched, saved, and recommend.",
    ogImage,
  },

  "/projects": {
    title: "Projects - My Work & Case Studies",
    description: "Explore my projects, applications, and software products.",
    ogImage,
  },

  "/resume": {
    title: "Resume - Experience & Skills",
    description:
      "Explore my development experience, technical skills, and projects.",
    ogImage,
  },

  "/setup": {
    title: "Setup - My Workspace",
    description: "A look at my workspace, development environment, and setup.",
    ogImage,
  },

  "/work": {
    title: "Work - Experience & Collaborations",
    description:
      "Explore my student and project experience, collaborations, and work.",
    ogImage,
  },

  "/contact": {
    title: "Contact - Get in Touch",
    description:
      "Get in touch for collaborations, projects, and opportunities.",
    ogImage,
  },
};

export function getPageMetaData(pathName: string): PageMeta {
  return pageMetaData[pathName] ?? pageMetaData["/"];
}

export function generateMetaData(pathName: string) {
  const pageMeta = getPageMetaData(pathName);

  const canonicalPath = pathName.startsWith("/") ? pathName : `/${pathName}`;

  const canonicalUrl = pageMeta.canonical ?? `${siteUrl}${canonicalPath}`;

  const pageOgImage = pageMeta.ogImage || siteConfig.ogImage;

  return {
    metadataBase: new URL(siteUrl),

    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords ?? siteConfig.keywords,

    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,

    openGraph: {
      type: "website" as const,
      url: canonicalUrl,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      locale: "en_US",
      images: [
        {
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },

    twitter: {
      card: pageMeta.twitterCard ?? "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageOgImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: canonicalUrl,
    },
  };
}
