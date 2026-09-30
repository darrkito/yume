// Run: npx tsx scripts/check-delivery.ts
import assert from "node:assert";
import { addBusinessDays, estimateCasablancaPickup, estimateNationalDelivery } from "../src/content/shipping";
import { getProduct, piecesForAmount, tieredPrice } from "../src/content/products";

const fri = new Date(2026, 9, 2); // Fri Oct 2 2026
assert.equal(addBusinessDays(fri, 1).getDate(), 5); // skips the weekend -> Mon
assert.equal(addBusinessDays(fri, 5).getDate(), 9);
const est = estimateNationalDelivery(fri);
assert.equal(est.from.getDate(), 9); // 3+2 business days = 5
assert.equal(est.to.getDate(), 16); // 5+5 business days = 10
const eom = estimateNationalDelivery(new Date(2026, 9, 28)); // Wed Oct 28 -> month rollover
assert.equal(eom.to.getMonth(), 10);

const vinyl = getProduct("stickers-vinil-impermeable")!.tiers!;
const logo = getProduct("stickers-logo-personalizado")!.tiers!;
for (const t of [vinyl, logo]) {
  const n = piecesForAmount(t, 750);
  assert.ok(tieredPrice(t, n) >= 750);
  assert.ok(tieredPrice(t, n - 1) < 750);
}
const pick = estimateCasablancaPickup(fri); // production 3-5 + 1 business day
assert.equal(pick.from.getDate(), 8);
assert.equal(pick.to.getDate(), 12); // skips the weekend
console.log("delivery ok");
