"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const [bump, setBump] = useState(false);
  const prevCount = useRef(count);
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const navLinks = lang === "en" ? NAV_LINKS_EN : NAV_LINKS_ES;
  const cartHref = lang === "en" ? "/en/cart" : "/carrito";
  const t = UI[lang];

  useEffect(() => {
    if (count > prevCount.current) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 400);
      prevCount.current = count;
      return () => clearTimeout(timer);
    }
    prevCount.current = count;
  }, [count]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={lang === "en" ? "/en" : "/"} className="flex items-center gap-2" aria-label={`${SITE.name} — ${t.home}`} onClick={() => setOpen(false)}>
          <Image src="/logo-yume-wordmark.webp" alt={SITE.name} width={215} height={80} className="h-9 w-auto sm:h-11" priority />
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-sm text-ink-soft sm:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle className="hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] sm:flex" />
          <Link href={cartHref} className="relative p-2 text-ink hover:text-brand transition-colors" aria-label={`${t.cart}${count > 0 ? ` (${count})` : ""}`}>
            <ShoppingBag size={22} aria-hidden="true" />
            {count > 0 && (
              <span
                className={`absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-white ${bump ? "animate-pop" : ""}`}
              >
                {count}
              </span>
            )}
          </Link>
          <a href={waLink(WA_QUOTE_MESSAGE[lang])} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid hidden sm:inline-flex">
            {t.quoteWhatsapp}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex size-11 items-center justify-center text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navegación móvil" className="border-t border-line bg-paper px-6 py-4 text-sm text-ink-soft sm:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageToggle className="flex items-center gap-1.5" />
            </li>
            <li>
              <a href={waLink(WA_QUOTE_MESSAGE[lang])} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid" onClick={() => setOpen(false)}>
                {t.quoteWhatsapp}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
