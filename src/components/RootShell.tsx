import { ViewTransition } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Playfair_Display, Karla } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TabBar } from "@/components/TabBar";
import { TrackClicks } from "@/components/TrackClicks";
import { LanguageBanner } from "@/components/LanguageBanner";
import { WebMcpProvider } from "@/components/WebMcpProvider";
import { CartProvider } from "@/components/CartContext";
import { CartToast } from "@/components/CartToast";
import { DesignFileProvider } from "@/components/DesignFileContext";
import { SITE } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

// Shared by both root layouts (app/(es) and app/(en)): with one root layout
// per language, each route group renders its own <html lang> statically.
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.homeTitle, template: `%s | ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/", languages: hreflangFor("/") },
  openGraph: {
    title: SITE.homeTitle,
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
  themeColor: "#fffbf3",
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
  telephone: `+${SITE.whatsappNumber}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: "MX",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${SITE.whatsappNumber}`,
    email: SITE.email,
    contactType: "customer service",
    areaServed: "MX",
    availableLanguage: ["es", "en"],
  },
  areaServed: [
    { "@type": "City", name: "Guadalajara" },
    { "@type": "City", name: "Zapopan" },
    { "@type": "City", name: "Tlaquepaque" },
    { "@type": "State", name: "Jalisco" },
    { "@type": "Country", name: "México" },
  ],
  sameAs: [SITE.instagram],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: "es-MX",
  publisher: { "@id": ORG_ID },
};

export function RootShell({ lang, children }: { lang: "es-MX" | "en"; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className={`${playfair.variable} ${karla.variable} font-sans antialiased`}>
        {/* Rendered <link>/<meta> tags are hoisted into <head> by Next.js — ARD's
            capability manifest discovery path, real resource (see .well-known/ai-catalog.json). */}
        <link rel="ai-catalog" href={`${SITE.url}/.well-known/ai-catalog.json`} />
        <div className="paper-grain" aria-hidden="true" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          {lang === "en" ? "Skip to content" : "Saltar al contenido"}
        </a>
        <CartProvider>
          <DesignFileProvider>
            <WebMcpProvider />
            <Header />
            <LanguageBanner />
            {/* Short cross-fade between pages (View Transitions API; browsers without it navigate as before). */}
            <main id="main">
              <ViewTransition>{children}</ViewTransition>
            </main>
            <Footer />
            <TabBar />
            <TrackClicks />
            <CartToast />
          </DesignFileProvider>
        </CartProvider>
        <Analytics />
        {/* Microsoft Clarity — session recording/heatmaps. strategy="lazyOnload"
            (same pattern used on Dizayn/SwapperBetweenChains): Clarity's own
            snippet dynamically injects a second script tag, so there's no
            benefit to loading it any earlier than the page becoming interactive. */}
        <Script id="clarity-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yfgkmcjep5");
          `}
        </Script>
      </body>
    </html>
  );
}
