// Run: npx tsx scripts/check-ai-facts.ts
// Guards that what AI agents read (llms.txt, agents.md, A2A, Markdown, JSON-LD)
// says the same as the checkout constants: free-shipping threshold, pickup,
// no invoice, 24 h proof.
import assert from "node:assert";
import { readFileSync } from "node:fs";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE } from "../src/content/shipping";
import { shippingFacts } from "../src/content/shipping-facts";
import { productPageSchema } from "../src/lib/seo";
import { getProduct } from "../src/content/products";

const t = String(FREE_SHIPPING_THRESHOLD);
for (const lang of ["es", "en"] as const) {
  const f = shippingFacts(lang);
  assert.ok(f.includes(t) && f.includes(String(NATIONAL_SHIPPING_PRICE)) && f.includes(String(CASABLANCA_PRICE)), `${lang}: constants`);
  assert.ok(f.includes("24") && /CFDI/.test(f), `${lang}: 24 h proof and invoice`);
  assert.ok(f.includes(String(CASABLANCA_BRANCHES.length)), `${lang}: branch count`);
}
for (const file of ["public/llms.txt", "public/agents.md"]) {
  const s = readFileSync(file, "utf8");
  assert.ok(s.includes(`$${t}`), `${file}: free-shipping threshold $${t}`);
  assert.ok(s.includes(`$${NATIONAL_SHIPPING_PRICE}`) && s.includes(`$${CASABLANCA_PRICE}`), `${file}: shipping/pickup prices`);
  assert.ok(/CFDI/.test(s) && /24 (horas|hours)/.test(s), `${file}: invoice and 24 h proof`);
  assert.ok(!/no incluyen envío/.test(s), `${file}: stale "prices exclude shipping" claim`);
}
const ld = JSON.stringify(productPageSchema(getProduct("stickers-logo-personalizado")!, { lang: "es", path: "/x", name: "x", description: "x", category: "x", images: [] }));
assert.ok(ld.includes(`gratis en compras de $${t}`), "JSON-LD shipping labels mention the free threshold");
const until = /"priceValidUntil":"(\d{4}-\d{2}-\d{2})"/.exec(ld)?.[1];
assert.ok(until && new Date(until) > new Date(), "priceValidUntil must be in the future");
console.log("check-ai-facts: ok");
