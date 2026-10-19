// Google Merchant Center product feed (RSS 2.0 + g: namespace), one per
// language: /feeds/productos.xml (ES) and /feeds/products.xml (EN). Built at
// deploy time from the same catalog the pages render, so price, title and
// images always match the landing page (Merchant rejects mismatches). Also
// valid input for Microsoft Merchant Center, Pinterest and Meta catalogs.
// The price is productDisplayPrice, the same "Desde $X" the page and its
// Product JSON-LD show. Shipping and returns live in the Merchant account
// policies, not per item.
import { productDisplayPrice, products } from "@/content/products";
import { getProductTranslation } from "@/content/products.en";
import { productPhotos } from "@/content/product-photos";
import { SITE } from "@/content/site";
import { PRODUCT_SLUG_EN } from "@/lib/i18n";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const tag = (name: string, value: string) => `<g:${name}>${esc(value)}</g:${name}>`;

export function productFeed(lang: "es" | "en"): string {
  const en = lang === "en";
  const items = products.flatMap((p) => {
    const t = en ? getProductTranslation(p.slug) : p;
    if (!t) return [];
    const link = en ? `${SITE.url}/en/products/${PRODUCT_SLUG_EN[p.slug]}` : `${SITE.url}/productos/${p.slug}`;
    const images = [...new Set([p.image ?? "/og-image.jpg", ...productPhotos(p.slug, lang).map((ph) => ph.src)])].map((src) => `${SITE.url}${src}`);
    const fields = [
      tag("id", en ? `${p.slug}-en` : p.slug),
      tag("title", t.name),
      tag("description", t.description),
      tag("link", link),
      tag("image_link", images[0]),
      ...images.slice(1, 11).map((src) => tag("additional_image_link", src)),
      tag("availability", "in_stock"),
      tag("condition", "new"),
      tag("price", `${productDisplayPrice(p).toFixed(2)} ${p.currency}`),
      tag("brand", SITE.name),
      tag("identifier_exists", "no"),
      tag("product_type", t.category),
      // Merchant limits: 10 highlights of up to 150 characters each.
      ...t.details.filter((d) => d.length <= 150).slice(0, 10).map((d) => tag("product_highlight", d)),
      ...t.specs.map(
        (s) =>
          `<g:product_detail>${tag("section_name", en ? "Specifications" : "Especificaciones")}${tag("attribute_name", s.label)}${tag("attribute_value", s.value)}</g:product_detail>`,
      ),
    ];
    return [`<item>${fields.join("")}</item>`];
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0"><channel><title>${esc(SITE.name)}</title><link>${SITE.url}${en ? "/en" : ""}</link><description>${esc(en ? SITE.descriptionEn : SITE.description)}</description>
${items.join("\n")}
</channel></rss>
`;
}

export const feedResponse = (lang: "es" | "en") =>
  new Response(productFeed(lang), { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
