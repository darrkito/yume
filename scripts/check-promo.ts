// Run: npx tsx scripts/check-promo.ts
// Guards the Buen Fin coupon: date window (CDMX), case-insensitive code, and
// that server line prices add up exactly to what the checkout UI previews.
import assert from "node:assert";
import { activePromo, BUEN_FIN, discountedPrice } from "../src/lib/promo";

const at = (iso: string) => Date.parse(iso);
assert.equal(activePromo("YumeBuenFin", at("2026-11-12T23:59:59-06:00")), null, "before start");
assert.ok(activePromo("YumeBuenFin", at("2026-11-13T00:00:00-06:00")), "start");
assert.ok(activePromo(" yumebuenfin ", at("2026-11-17T23:59:59-06:00")), "last second, any case");
assert.equal(activePromo("YumeBuenFin", at("2026-11-18T00:00:00-06:00")), null, "after end");
assert.equal(activePromo("OTRO", at("2026-11-15T12:00:00-06:00")), null, "wrong code");
assert.equal(discountedPrice(350, BUEN_FIN), 297.5);
assert.equal(discountedPrice(75, BUEN_FIN), 63.75);

async function main() {
  const { validateCartItems } = await import("../src/lib/mercadopago");
  const cart = [{ slug: "recetario-medico-personalizado", qty: 2, variantId: "sin-diseno" }];
  const plain = validateCartItems(cart);
  // Outside the window (today) the server must refuse the code, never silently charge full price.
  if (Date.now() < BUEN_FIN.startsAt || Date.now() >= BUEN_FIN.endsAt) {
    assert.throws(() => validateCartItems(cart, { promoCode: "YumeBuenFin" }), /cupón/);
  }
  const realNow = Date.now;
  Date.now = () => at("2026-11-15T12:00:00-06:00");
  try {
    const promo = validateCartItems(cart, { promoCode: "yumebuenfin" });
    assert.equal(promo[0].promo, "YumeBuenFin");
    assert.equal(promo[0].listPrice, plain[0].price);
    assert.equal(promo[0].price, discountedPrice(plain[0].price, BUEN_FIN));
    assert.match(promo[0].name, /YumeBuenFin -15%/);
    assert.equal(validateCartItems(cart, { promoCode: "" })[0].price, plain[0].price, "empty code = no promo");
  } finally {
    Date.now = realNow;
  }
  console.log("check-promo OK");
}
main();
