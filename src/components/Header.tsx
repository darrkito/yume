"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE, waLink } from "@/content/site";
import { useCart } from "@/components/CartContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { UI } from "@/lib/i18n";

const NAV_LINKS_ES = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Tienda" },
  { href: "/galeria", label: "Galería" },
  { href: "/blog", label: "Blog" },
  { href: "/preguntas-frecuentes", label: "Preguntas" },
];

const NAV_LINKS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/products", label: "Shop" },
  { href: "/en/gallery", label: "Gallery" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/faq", label: "FAQ" },
];

const WA_QUOTE_MESSAGE = {
  es: "Hola, me interesa cotizar un producto de Yume.",
  en: "Hi, I'm interested in getting a quote for a Yume product.",
};

export function Header() {
  const { count } = useCart();
  const [bump, setBump] = useState(false);
  const prevCount = useRef(count);
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const navLinks = lang === "en" ? NAV_LINKS_EN : NAV_LINKS_ES;
  const cartHref = lang === "en" ? "/en/cart" : "/carrito";
  const shopHref = lang === "en" ? "/en/products" : "/productos";
  const t = UI[lang];
  const isActive = (href: string) => (href === "/" || href === "/en" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`));

  useEffect(() => {
    if (count > prevCount.current) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 400);
      prevCount.current = count;
      return () => clearTimeout(timer);
    }
    prevCount.current = count;
  }, [count]);

  // Checkout gets a reduced header: logo, the way back to the cart, and a
  // quiet help link. The full nav and the "Cotizar" button were exits from
  // the step closest to payment.
  if (pathname === "/pago" || pathname === "/en/checkout") {
    return (
      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href={lang === "en" ? "/en" : "/"} aria-label={`${SITE.name}: ${t.home}`}>
            <Image src="/logo-yume-wordmark.webp" alt={SITE.name} width={215} height={80} className="h-9 w-auto sm:h-11" loading="eager" />
          </Link>
          <div className="flex items-center gap-2 text-sm text-ink-soft sm:gap-6">
            <Link href={cartHref} className="inline-flex min-h-11 items-center transition-colors hover:text-brand">
              {t.backToCart}
            </Link>
            <a
              href={waLink(WA_QUOTE_MESSAGE[lang])}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.checkoutHelp}
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 transition-colors hover:text-brand"
            >
              <WhatsAppIcon size={18} />
              <span className="hidden sm:inline">{t.checkoutHelp}</span>
            </a>
          </div>
        </div>
      </header>
    );
  }

  // Opaque on purpose: backdrop-blur doesn't composite reliably here and left
  // content behind the header readable (fixed in 9fbbc50, regressed by the redesign).
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={lang === "en" ? "/en" : "/"} className="flex items-center gap-2" aria-label={`${SITE.name}: ${t.home}`}>
          <Image src="/logo-yume-wordmark.webp" alt={SITE.name} width={215} height={80} className="h-9 w-auto sm:h-11" loading="eager" />
        </Link>
        <nav aria-label={t.mainNav} className="hidden items-center gap-8 text-sm text-ink-soft sm:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`inline-flex min-h-11 items-center transition-colors hover:text-brand ${isActive(l.href) ? "font-semibold text-ink" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle className="hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] sm:flex" />
          <Link href={cartHref} className="relative flex size-11 items-center justify-center text-ink hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" aria-label={`${t.cart}${count > 0 ? ` (${count})` : ""}`}>
            <ShoppingBag size={22} aria-hidden="true" />
            {count > 0 && (
              <span
                className={`absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs font-semibold text-white ${bump ? "animate-pop" : ""}`}
              >
                {count}
              </span>
            )}
          </Link>
          <a href={waLink(WA_QUOTE_MESSAGE[lang])} target="_blank" rel="noopener noreferrer" aria-label={t.quoteWhatsapp} className="flex size-11 items-center justify-center text-ink transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><WhatsAppIcon size={22} /></a>
          {pathname !== cartHref && (
            <Link
              href={pathname === shopHref ? cartHref : shopHref}
              className="btn-soft btn-soft-solid hidden whitespace-nowrap sm:inline-flex"
            >
              {pathname === shopHref ? t.cart : t.viewShop}
            </Link>
          )}
        </div>
      </div>

    </header>
  );
}
