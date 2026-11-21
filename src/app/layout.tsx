import { Suspense } from "react";

import type { Metadata } from "next";

import { Toaster } from "sonner";

import { CustomCursor } from "@/components/common/CustomCursor";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { NavigationProgress } from "@/components/common/NavigationProgress";
import { OnekoCat } from "@/components/common/OnekoCat";
import { Quote } from "@/components/common/Quote";
import { Reveal } from "@/components/common/Reveal";
import SwarmTrigger from "@/components/common/SwarmTrigger";
import { poppins } from "@/config/font";
import { AppProviders } from "@/providers/AppProviders";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://larpbil.vercel.app"),
  alternates: {
    canonical: process.env.SITE_URL || "https://larpbil.vercel.app",
  },
  title: {
    default: "Muhamad Nabil Faiz Amrullah - Full-Stack Developer",
    template: "%s",
  },

  description:
    "I design and build engaging digital experiences focused on performance and visual design — from web apps to ESP32 hardware and motion-graphics videos.",

  openGraph: {
    type: "website",
    url: process.env.SITE_URL || "https://larpbil.vercel.app",
    title:
      "Muhamad Nabil Faiz Amrullah - Full-Stack Developer",
    description:
      "I build modern websites and digital products focused on design and performance.",
    siteName: "Bil — Portfolio",
    images: [
      {
        url: "/meta/opengraph-img.png",
        width: 1200,
        height: 630,
        alt: "Bil Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Muhamad Nabil Faiz Amrullah - Full-Stack Developer",
    description:
      "I build modern websites and digital products focused on design and performance.",
    images: ["/meta/opengraph-img.png"],
    creator: "@aaronabil_aster",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          <AppProviders>
            <NavigationProgress />
            <Toaster richColors position="top-right" />
            <CustomCursor />
            <Navbar />
            <OnekoCat />
            {children}
            <SwarmTrigger />
            <Reveal delay={0.2}>
              <Quote />
            </Reveal>
            <Footer />
          </AppProviders>
        </Suspense>
      </body>
    </html>
  );
}
