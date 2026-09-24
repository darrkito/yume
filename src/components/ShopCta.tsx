import Link from "next/link";
import { CASABLANCA_PRICE } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import type { Lang } from "@/lib/i18n";

const COPY = {
  es: {
    title: "¿Listo para pedir el tuyo?",
    body: `Precios claros desde $100 MXN. Recoge en Guadalajara por ${formatMXN(CASABLANCA_PRICE)} o te lo enviamos a todo México.`,
    cta: "Ver productos y precios",
    href: "/productos",
  },
  en: {
    title: "Ready to order yours?",
    body: `Clear pricing from $100 MXN. Pick up in Guadalajara for ${formatMXN(CASABLANCA_PRICE)} or get it shipped anywhere in Mexico.`,
    cta: "See products & prices",
    href: "/en/products",
  },
};

// Closing buy CTA for content pages (blog, FAQ, about, contact) that
// otherwise end without a direct path to the shop.
export function ShopCta({ lang = "es" }: { lang?: Lang }) {
  const c = COPY[lang];
  return (
    <div className="card-soft mt-14 flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <h2 className="font-display text-2xl text-ink text-balance">{c.title}</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{c.body}</p>
      </div>
      <Link href={c.href} className="btn-soft btn-soft-solid shrink-0">
        {c.cta}
      </Link>
    </div>
  );
}
