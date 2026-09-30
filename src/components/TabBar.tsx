"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Image as ImageIcon, MessageCircle, ShoppingBag, Store, X } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { waLink } from "@/content/site";
import { UI } from "@/lib/i18n";

// Pages that already own a fixed bottom action bar (PDP buy bar, cart "Pagar")
// or that are the payment step: a second bar there would eat ~20% of a phone.
const HIDE_PREFIXES = ["/productos/", "/en/products/", "/carrito", "/en/cart", "/pago", "/en/checkout"];

const WA_MESSAGE = {
  es: "Hola, me interesa cotizar un producto de Yume.",
  en: "Hi, I'm interested in getting a quote for a Yume product.",
};

const tab =
  "relative flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand";

export function TabBar() {
  const pathname = usePathname();
  const { count } = useCart();
  const [helpOpen, setHelpOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const t = UI[lang];

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (helpOpen && !d.open) d.showModal();
    if (!helpOpen && d.open) d.close();
  }, [helpOpen]);

  if (HIDE_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  const en = lang === "en";
  const items = [
    { href: en ? "/en" : "/", label: t.tabHome, Icon: Home },
    { href: en ? "/en/products" : "/productos", label: t.tabShop, Icon: Store },
    { href: en ? "/en/gallery" : "/galeria", label: t.tabGallery, Icon: ImageIcon },
    { href: en ? "/en/cart" : "/carrito", label: t.cart, Icon: ShoppingBag, badge: count },
  ];
  const isActive = (href: string) => (href === "/" || href === "/en" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`));
  const links = en
    ? [["/en/blog", t.helpBlog], ["/en/faq", t.helpFaq], ["/en/about", t.helpAbout], ["/en/contact", t.helpContact]]
    : [["/blog", t.helpBlog], ["/preguntas-frecuentes", t.helpFaq], ["/nosotros", t.helpAbout], ["/contacto", t.helpContact]];

  return (
    <>
      <nav
        aria-label={t.tabBarNav}
        className="tabbar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper-raised pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_hsl(var(--shadow-tint)/0.35)] sm:hidden"
      >
        <ul className="mx-auto flex max-w-md items-stretch">
          {items.map(({ href, label, Icon, badge }) => {
            const active = isActive(href);
            return (
              <li key={href} className="flex flex-1">
                <Link href={href} aria-current={active ? "page" : undefined} className={`${tab} ${active ? "font-semibold text-brand" : "text-ink-soft"}`}>
                  <Icon size={22} aria-hidden="true" />
                  {label}
                  {badge ? (
                    <span className="absolute right-[calc(50%-20px)] top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-xs font-semibold leading-none text-white">
                      {badge}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
          <li className="flex flex-1">
            <button type="button" onClick={() => setHelpOpen(true)} aria-haspopup="dialog" className={`${tab} font-semibold text-brand`}>
              <MessageCircle size={22} aria-hidden="true" />
              {t.tabHelp}
            </button>
          </li>
        </ul>
      </nav>

      <dialog
        ref={dialogRef}
        aria-label={t.helpTitle}
        onClose={() => setHelpOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setHelpOpen(false)}
        className="sheet"
      >
        <div className="mx-auto max-w-md px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3">
          <div className="mx-auto h-1 w-10 rounded-full bg-line-strong" aria-hidden="true" />
          <div className="mt-3 flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">{t.helpTitle}</h2>
            <button type="button" onClick={() => setHelpOpen(false)} aria-label={t.closeSheet} className="flex size-11 items-center justify-center text-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <a href={waLink(WA_MESSAGE[lang])} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-3 w-full">
            <MessageCircle size={18} aria-hidden="true" /> {t.quoteWhatsapp}
          </a>
          <ul className="mt-2 divide-y divide-line">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={() => setHelpOpen(false)} className="flex min-h-12 items-center text-base text-ink">
                  {label}
                </Link>
              </li>
            ))}
            <li className="flex min-h-12 items-center">
              <LanguageToggle className="flex items-center gap-3 text-sm font-semibold" />
            </li>
          </ul>
        </div>
      </dialog>
    </>
  );
}
