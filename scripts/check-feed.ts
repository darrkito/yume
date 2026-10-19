// Run: npx tsx scripts/check-feed.ts
// Guards the Merchant Center feeds: one item per product, price = the page's "Desde $X", Merchant limits, escaping.
import assert from "node:assert";
import { productDisplayPrice, products } from "../src/content/products";
import { productFeed } from "../src/lib/feed";

for (const lang of ["es", "en"] as const) {
  const xml = productFeed(lang);
  const items = xml.split("<item>").slice(1);
  assert.ok(items.length >= 3 && items.length <= products.length, `${lang}: ${items.length} items`);
  for (const it of items) {
    const id = it.match(/<g:id>([^<]+)/)![1].replace(/-en$/, "");
    const p = products.find((x) => x.slug === id)!;
    assert.ok(p, `unknown id ${id}`);
    assert.ok(it.includes(`<g:price>${productDisplayPrice(p).toFixed(2)} MXN</g:price>`), `${id} price`);
    assert.ok((it.match(/<g:product_highlight>/g) ?? []).length <= 10, `${id} highlights`);
    assert.ok((it.match(/<g:additional_image_link>/g) ?? []).length <= 10, `${id} images`);
    assert.ok(/<g:image_link>https:\/\/studioyume\.mx\//.test(it), `${id} image`);
  }
  assert.ok(!/&(?!amp;|lt;|gt;|quot;)/.test(xml), `${lang}: unescaped &`);
}
console.log("check-feed OK");
