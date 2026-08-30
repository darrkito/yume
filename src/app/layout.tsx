import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageBanner } from "@/components/LanguageBanner";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { WebMcpProvider } from "@/components/WebMcpProvider";
import { CartProvider } from "@/components/CartContext";
import { SITE } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/", languages: hreflangFor("/") },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    url: "/",
    siteName: SITE.name,
    locale: "es_MX",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "MX-JAL",
    "geo.placename": `${SITE.city}, ${SITE.state}`,
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#fffcf5",
};

const ORG_ID = `${SITE.url}/#organization`;
const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo-yume.webp`,
  image: `${SITE.url}/logo-yume.webp`,
  description: SITE.description,
  email: SITE.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: "MX",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  areaServed: [
    { "@type": "City", name: "Guadalajara" },
    { "@type": "City", name: "Zapopan" },
    { "@type": "City", name: "Tlaquepaque" },
    { "@type": "State", name: "Jalisco" },
    { "@type": "Country", name: "México" },
  ],
  sameAs: [SITE.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {/* Rendered <link>/<meta> tags are hoisted into <head> by Next.js — ARD's
            capability manifest discovery path, real resource (see .well-known/ai-catalog.json). */}
        <link rel="ai-catalog" href={`${SITE.url}/.well-known/ai-catalog.json`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <CartProvider>
          <HtmlLangSync />
          <WebMcpProvider />
          <Header />
          <LanguageBanner />
          <main id="main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
