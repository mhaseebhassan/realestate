import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/config/brand";
import { CurrencyProvider } from "@/context/CurrencyContext";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import MobileConciergeBar from "@/components/MobileConciergeBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${brandConfig.broker.fullName} | ${brandConfig.broker.title} Dubai Prime Real Estate`,
    template: `%s | ${brandConfig.broker.fullName}`,
  },
  description: `${brandConfig.broker.fullName} - ${brandConfig.broker.bioShort} Operating across Palm Jumeirah, Emirates Hills, and Downtown Dubai. Direct advisory, verified DLD escrow, and private negotiations.`,
  keywords: [
    "Dubai Luxury Real Estate",
    "Palm Jumeirah Penthouses",
    "Emirates Hills Mansions",
    "Dubai Private Real Estate Broker",
    "Jumeirah Bay Island Real Estate",
    "Dubai Golden Visa Real Estate",
    "DLD Registered Broker",
  ],
  authors: [{ name: brandConfig.broker.fullName }],
  creator: brandConfig.broker.fullName,
  publisher: brandConfig.broker.brokerageName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  metadataBase: new URL("https://almansoor-private.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${brandConfig.broker.fullName} | Dubai Ultra-Prime Real Estate`,
    description: brandConfig.broker.bioShort,
    url: "https://almansoor-private.com",
    siteName: brandConfig.broker.brokerageName,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/og-share.webp",
        width: 1200,
        height: 630,
        alt: `${brandConfig.broker.fullName} Dubai Prime Real Estate Advisory`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.broker.fullName} | Dubai Luxury Real Estate`,
    description: brandConfig.broker.bioShort,
    images: ["/images/og-share.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": brandConfig.broker.fullName,
    "description": brandConfig.broker.bioShort,
    "telephone": brandConfig.contact.phoneRaw,
    "email": brandConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": brandConfig.contact.officeAddress,
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "22:00"
    },
    "knowsLanguage": brandConfig.broker.languages,
    "priceRange": "AED 10,000,000 to AED 200,000,000+"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-paper)] text-[var(--text-ink)] selection:bg-[var(--text-ink)] selection:text-[var(--bg-paper)]">
        <CurrencyProvider>
          <SmoothScroll />
          {children}
          <CookieConsentBanner />
          <MobileConciergeBar />
        </CurrencyProvider>
      </body>
    </html>
  );
}
