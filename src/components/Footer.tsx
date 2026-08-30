"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, waLink } from "@/content/site";
import { UI } from "@/lib/i18n";

const TAGLINE = {
  es: `${SITE.tagline}. Piezas hechas sobre pedido en ${SITE.city}, ${SITE.state} — con envíos a todo México.`,
  en: `Custom stationery and personalized goods. Pieces made to order in ${SITE.city}, ${SITE.state} — shipping across all of Mexico.`,
};

const WA_QUOTE_MESSAGE = {
  es: "Hola, me interesa cotizar un producto de Yume.",
  en: "Hi, I'm interested in getting a quote for a Yume product.",
};

const MADE_IN = {
  es: `Hecho en ${SITE.city}, ${SITE.state}, México.`,
  en: `Made in ${SITE.city}, ${SITE.state}, Mexico.`,
};

const FOOTER_CREDIT = {
  es: "Web diseñada por Dizayn",
  en: "Website by Dizayn",
};

export function Footer() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const t = UI[lang];
  const shopHref = lang === "en" ? "/en/products" : "/productos";
  const blogHref = lang === "en" ? "/en/blog" : "/blog";
  const faqHref = lang === "en" ? "/en/faq" : "/preguntas-frecuentes";

  return (
    <footer className="border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-ink">{SITE.name.toUpperCase()}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">{TAGLINE[lang]}</p>
          </div>
          <nav aria-label="Enlaces" className="text-sm text-ink-soft">
            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-ink">{t.explore}</p>
            <ul className="space-y-2">
              <li>
                <Link href={shopHref} className="hover:text-brand transition-colors">
                  {t.shop}
                </Link>
              </li>
              <li>
                <Link href={blogHref} className="hover:text-brand transition-colors">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href={faqHref} className="hover:text-brand transition-colors">
                  {lang === "en" ? "Frequently Asked Questions" : "Preguntas frecuentes"}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm text-ink-soft">
            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-ink">{t.contact}</p>
            <ul className="space-y-2">
              <li>
                <a href={waLink(WA_QUOTE_MESSAGE[lang])} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-brand transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-xs text-ink-soft">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {MADE_IN[lang]}{" "}
            <a href="https://dizayn.com.mx/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">
              {FOOTER_CREDIT[lang]}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
