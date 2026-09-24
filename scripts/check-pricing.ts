// Run: npx tsx scripts/check-pricing.ts
// Guards the per-piece pricing that product pages, the cart and checkout
// all share: presets, typed counts, and the server-side validation.
import assert from "node:assert";
import { getProduct, isValidVariant, resolvePrice } from "../src/content/products";
import { validateCartItems } from "../src/lib/mercadopago";

const vinyl = getProduct("stickers-vinil-impermeable")!;
const logo = getProduct("stickers-logo-personalizado")!;

assert.equal(resolvePrice(vinyl, "100"), 250); // first 100 pieces
assert.equal(resolvePrice(logo, "100"), 200);
assert.equal(resolvePrice(vinyl, "437"), 250 + 337 * 2); // wholesale past 100
assert.equal(resolvePrice(logo, "600"), 200 + 500 * 1.6);
assert.equal(resolvePrice(vinyl, "140"), 330); // dropdown preset unchanged
assert.equal(isValidVariant(vinyl, "39"), false); // below minimum
assert.equal(isValidVariant(vinyl, "12.5"), false);
assert.equal(isValidVariant(vinyl, "10001"), false);
assert.equal(isValidVariant(getProduct("recetario-medico-personalizado")!, "500"), false);

const [line] = validateCartItems([{ slug: vinyl.slug, qty: 1, variantId: "437", price: 1 }]);
assert.equal(line.price, 924); // server ignores the client's price
assert.throws(() => validateCartItems([{ slug: vinyl.slug, qty: 1, variantId: "20" }]));
assert.throws(() => validateCartItems([{ slug: vinyl.slug, qty: 5000, variantId: "40" }]));

console.log("pricing checks OK");
