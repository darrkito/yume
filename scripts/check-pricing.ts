// Run: npx tsx scripts/check-pricing.ts
// Guards the per-piece pricing that product pages, the cart and checkout
// all share: presets, typed counts, and the server-side validation.
import assert from "node:assert";
import { getProduct, isValidVariant, resolvePrice } from "../src/content/products";
import { validateCartItems } from "../src/lib/mercadopago";

const vinyl = getProduct("stickers-vinil-impermeable")!;
const logo = getProduct("stickers-logo-personalizado")!;

assert.equal(resolvePrice(vinyl, "100"), 350); // first 100 pieces at $3.50
assert.equal(resolvePrice(logo, "100"), 300); // first 100 pieces at $3.00
assert.equal(resolvePrice(vinyl, "437"), 1411.55); // 350 + 337 x 3.15 (10% off past 100)
assert.equal(resolvePrice(logo, "600"), 1650); // 300 + 500 x 2.70 (10% off past 100)
assert.equal(resolvePrice(vinyl, "140"), 476); // dropdown preset: 350 + 40 x 3.15
assert.equal(resolvePrice(vinyl, "40"), 140); // minimum order
assert.equal(resolvePrice(logo, "50"), 150); // minimum order
assert.equal(resolvePrice(logo, "150"), 435);
assert.equal(resolvePrice(vinyl, "150"), 507.5);
assert.equal(isValidVariant(vinyl, "39"), false); // below minimum
assert.equal(isValidVariant(vinyl, "12.5"), false);
assert.equal(isValidVariant(vinyl, "10001"), false);
assert.equal(isValidVariant(getProduct("recetario-medico-personalizado")!, "500"), false);

const [line] = validateCartItems([{ slug: vinyl.slug, qty: 1, variantId: "437", price: 1 }]);
assert.equal(line.price, 1411.55); // server ignores the client's price
assert.throws(() => validateCartItems([{ slug: vinyl.slug, qty: 1, variantId: "20" }]));
assert.throws(() => validateCartItems([{ slug: vinyl.slug, qty: 5000, variantId: "40" }]));

// Dulceros: flat $75 per piece, minimum 10, no wholesale step.
const dulcero = getProduct("dulceros-personalizados")!;
assert.equal(dulcero.price, 750); // 10 pieces, the "Desde" price
assert.equal(resolvePrice(dulcero, "10"), 750);
assert.equal(resolvePrice(dulcero, "13"), 975);
assert.equal(resolvePrice(dulcero, "200"), 15000);
assert.equal(dulcero.variants!.length, 20); // presets 10..200 by 10
assert.equal(dulcero.variants!.at(-1)!.id, "200");
assert.equal(resolvePrice(dulcero, "13"), 975); // custom counts stay valid
assert.equal(isValidVariant(dulcero, "9"), false);
const [dLine] = validateCartItems([{ slug: dulcero.slug, qty: 1, variantId: "12", price: 1 }], {
  personalization: { [dulcero.slug]: { name: "Sofía", theme: "Unicornios" } }, // required for dulceros
});
assert.equal(dLine.price, 900);

console.log("pricing checks OK");
