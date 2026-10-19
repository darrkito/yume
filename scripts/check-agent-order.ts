// Run: npx tsx scripts/check-agent-order.ts
// Guards what agents rely on: friendly fields -> variantId, exact prices that
// match the checkout, and the cart link round-trip.
import assert from "node:assert";
import { cartParam, normalizeLine, parseCartParam, priceLines } from "../src/lib/agent-order";
import { getProduct, resolvePrice } from "../src/content/products";

const holo = normalizeLine({ slug: "waterproof-vinyl-stickers", pieces: 150, finish: "holografico" }); // EN slug accepted
assert.deepEqual(holo, { slug: "stickers-vinil-impermeable", variantId: "150|troquelado|holografico", qty: 1 });
assert.equal(normalizeLine({ slug: "placa-resena-google-nfc" }).variantId, "blanco"); // default option
assert.equal(normalizeLine({ slug: "dulceros-personalizados", pieces: 20 }).variantId, "20");
assert.throws(() => normalizeLine({ slug: "stickers-vinil-impermeable", pieces: 10 }), /Minimum 40/);
assert.throws(() => normalizeLine({ slug: "nope" }), /Unknown product/);
assert.throws(() => normalizeLine({ slug: "placa-resena-google-nfc", qty: 0 }), /qty/);

const lines = [holo, normalizeLine({ slug: "placa-resena-google-nfc", option: "negro", qty: 2 })];
assert.deepEqual(parseCartParam(cartParam(lines)), lines);
assert.deepEqual(parseCartParam("bad:x:1,stickers-vinil-impermeable:5|troquelado|mate:1"), []); // malformed dropped

const q = priceLines(lines, "es");
assert.equal(q.items[0].unitPrice, resolvePrice(getProduct("stickers-vinil-impermeable")!, "150|troquelado|holografico"));
assert.equal(q.subtotal, 582.5 + 280);
assert.equal(q.delivery.envio_nacional.price, 0); // over $750
console.log("check-agent-order OK");
