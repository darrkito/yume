import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { getProduct, productDisplayPrice } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { FREE_SHIPPING_THRESHOLD } from "@/content/shipping";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { PRODUCT_SLUG_EN } from "@/lib/i18n";

// Above-the-fold summary for a guide: the facts a reader (or an AI assistant's
// visitor who arrived with one question) needs, plus a plain-text WhatsApp
// button. Numbers come from the catalog; quote-only guides (no catalog
// product) show no numbers at all.
export function BlogQuickFacts({ post, lang }: { post: BlogPost; lang: "es" | "en" }) {
  const en = lang === "en";
  const product = post.relatedProductSlugs.map((s) => getProduct(s)).find(Boolean);
  const wa = "btn-soft btn-soft-solid min-h-11";
  const t = en
    ? { title: "Quick facts", from: "From", min: "minimum", pcs: "pieces", ship: `Free shipping from ${formatMXN(FREE_SHIPPING_THRESHOLD)} MXN`, proof: "Digital proof, normally within 24 h", view: "See", quote: "Quote on WhatsApp", q: "Want a quote?", qBody: "Tell us about your event or project and we confirm price and delivery time on WhatsApp." }
    : { title: "Datos rápidos", from: "Desde", min: "mínimo", pcs: "piezas", ship: `Envío gratis desde ${formatMXN(FREE_SHIPPING_THRESHOLD)} MXN`, proof: "Prueba digital, normalmente en 24 h", view: "Ver", quote: "Cotizar por WhatsApp", q: "¿Quieres cotizar?", qBody: "Cuéntanos tu evento o proyecto y te confirmamos precio y tiempo de entrega por WhatsApp." };

  if (!product) {
    if (!post.quoteMessage) return null;
    return (
      <aside aria-label={t.q} className="card-soft mt-8 p-5">
        <p className="text-xs font-semibold text-brand-deep">{t.q}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.qBody}</p>
        <a href={waLink(post.quoteMessage)} target="_blank" rel="noopener noreferrer" data-track="blog_quickfacts_wa" className={`${wa} mt-4`}>
          {t.quote}
        </a>
      </aside>
    );
  }

  const name = en ? (productsEn[product.slug]?.name ?? product.name) : product.name;
  const href = en ? `/en/products/${PRODUCT_SLUG_EN[product.slug] ?? product.slug}` : `/productos/${product.slug}`;
  const message = en ? `Hi, I read "${post.title}" and I'd like a quote for ${name}.` : `Hola, leí «${post.title}» y quiero cotizar ${name}.`;
  const facts = [
    `${t.from} ${formatMXN(productDisplayPrice(product))} MXN${product.tiers ? ` · ${t.min} ${product.tiers.baseQty} ${t.pcs}` : ""}`,
    t.ship,
    t.proof,
  ];
  return (
    <aside aria-label={t.title} className="card-soft mt-8 p-5">
      <p className="text-xs font-semibold text-brand-deep">{t.title}: {name}</p>
      <ul className="mt-2 space-y-1 text-sm text-ink">
        {facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={waLink(message)} target="_blank" rel="noopener noreferrer" data-track="blog_quickfacts_wa" className={wa}>
          {t.quote}
        </a>
        <Link href={href} className="btn-soft btn-soft-outline min-h-11">
          {t.view} {name}
        </Link>
      </div>
    </aside>
  );
}
