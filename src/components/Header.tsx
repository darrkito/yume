"use client";

import { useState } from "react";
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
  { href: "/blog", label: "Blog" },
  { href: "/preguntas-frecuentes", label: "Preguntas" },
];

const NAV_LINKS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/products", label: "Shop" },
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
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const navLinks = lang === "en" ? NAV_LINKS_EN : NAV_LINKS_ES;
  const cartHref = lang === "en" ? "/en/cart" : "/carrito";
  const t = UI[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={lang === "en" ? "/en" : "/"} className="flex items-center gap-2" aria-label={`${SITE.name} — ${t.home}`} onClick={() => setOpen(false)}>
          <Image src="/logo-yume-wordmark.webp" alt={SITE.name} width={215} height={80} className="h-10 w-auto sm:h-12" priority />
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-sm uppercase tracking-[0.15em] text-ink-soft sm:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle className="hidden text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-brand sm:flex sm:items-center sm:gap-1.5" />
          <Link href={cartHref} className="relative p-2 text-ink hover:text-brand transition-colors" aria-label={`${t.cart}${count > 0 ? ` (${count})` : ""}`}>
            <ShoppingBag size={22} aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </Link>
          <a
            href={waLink(WA_QUOTE_MESSAGE[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep sm:inline-block"
          >
            {t.quoteWhatsapp}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="p-2 text-ink sm:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navegación móvil" className="border-t border-line bg-paper px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.15em] text-ink-soft">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageToggle className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-brand" />
            </li>
            <li>
              <a
                href={waLink(WA_QUOTE_MESSAGE[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {t.quoteWhatsapp}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
