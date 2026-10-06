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
import { TrafficSource } from "@/components/TrafficSource";
import { LanguageBanner } from "@/components/LanguageBanner";
import { WebMcpProvider } from "@/components/WebMcpProvider";
import { CartProvider } from "@/components/CartContext";
import { CartToast } from "@/components/CartToast";
import { DesignFileProvider } from "@/components/DesignFileContext";
import { SITE } from "@/content/site";
import type { Lang } from "@/lib/i18n";
import { founderSchema, merchantReturnPolicy, ogLocale, ORG_ID } from "@/lib/seo";

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

// Defaults for every page of one language tree (one root layout per
// language). No canonical, hreflang or og:url here on purpose: a page that
// doesn't set its own (cart, checkout, 404) used to inherit the homepage's,
// which tells search engines "this URL duplicates the homepage". Every
// indexable page sets its own via pageMetadata()/generateMetadata, and the
// two homepages set theirs explicitly.
function rootMetadataFor(lang: Lang): Metadata {
  const description = lang === "en" ? SITE.descriptionEn : SITE.description;
  const title = lang === "en" ? SITE.homeTitleEn : SITE.homeTitle;
  return {
    metadataBase: new URL(SITE.url),
    title: { default: title, template: `%s | ${SITE.name}` },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SITE.name,
      locale: ogLocale(lang),
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
    robots: { index: true, follow: true },
  };
}

export const rootMetadata = rootMetadataFor("es");
export const rootMetadataEn = rootMetadataFor("en");

export const viewport: Viewport = {
  themeColor: "#fffbf3",
};

// OnlineStore (an Organization subtype), not LocalBusiness: Yume has no
// storefront to visit (orders ship nationally or go to a Casa Blanca branch),
// and LocalBusiness without a street address is an incomplete local entity.
// The local tie comes from areaServed, the city-level address and — once
// it exists — the Google Business Profile in sameAs/hasMap.
function orgSchemaFor(lang: Lang) {
  const founder = founderSchema(lang);
  const sameAs = [SITE.instagram, SITE.gbpUrl, ...SITE.otherProfiles].filter((u): u is string => Boolean(u));
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo-yume.webp`,
    image: `${SITE.url}/logo-yume.webp`,
    description: lang === "en" ? SITE.descriptionEn : SITE.description,
    email: SITE.email,
    telephone: `+${SITE.whatsappNumber}`,
    foundingDate: SITE.foundingDate,
    ...(founder ? { founder } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: "MX",
    },
    ...(SITE.gbpUrl ? { hasMap: SITE.gbpUrl } : {}),
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
      { "@type": "City", name: "Tonalá" },
      { "@type": "City", name: "Tlajomulco de Zúñiga" },
      { "@type": "State", name: "Jalisco" },
      { "@type": "Country", name: lang === "en" ? "Mexico" : "México" },
    ],
    hasMerchantReturnPolicy: merchantReturnPolicy(lang),
    sameAs,
  };
}

function websiteSchemaFor(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: lang === "en" ? "en" : "es-MX",
    publisher: { "@id": ORG_ID },
  };
}

export function RootShell({ lang, children }: { lang: "es-MX" | "en"; children: React.ReactNode }) {
  const pageLang: Lang = lang === "en" ? "en" : "es";
  return (
    <html lang={lang}>
      <body className={`${playfair.variable} ${karla.variable} font-sans antialiased`}>
        {/* Rendered <link>/<meta> tags are hoisted into <head> by Next.js — ARD's
            capability manifest discovery path, real resource (see .well-known/ai-catalog.json). */}
        <link rel="ai-catalog" href={`${SITE.url}/.well-known/ai-catalog.json`} />
        <div className="paper-grain" aria-hidden="true" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchemaFor(pageLang)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaFor(pageLang)) }} />
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
            <TrafficSource />
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
