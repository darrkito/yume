// Run: npx tsx scripts/check-ucp.ts
// Guards the UCP checkout mapping: item ids, MXN cents, stateless ids, escalation.
import assert from "node:assert";
import { checkoutSession, linesFromBody, linesFromId } from "../src/lib/ucp";

const lines = linesFromBody({ line_items: [{ item: { id: "stickers-vinil-impermeable:150|troquelado|holografico" }, quantity: 1 }, { item: { id: "google-review-nfc-plate" }, quantity: 2 }] });
const s = checkoutSession(lines, "es");
assert.equal(s.status, "requires_escalation");
assert.equal(s.currency, "MXN");
assert.equal(s.line_items[0].item.price, 58250); // $582.50 in cents
assert.deepEqual(s.totals, [{ type: "subtotal", amount: 86250 }, { type: "total", amount: 86250 }]);
assert.ok(s.continue_url?.startsWith("https://studioyume.mx/carrito?add="));
assert.deepEqual(linesFromId(s.id), lines); // GET rebuilds the same session
assert.equal(checkoutSession(lines, "es", { canceled: true }).continue_url, undefined);
assert.throws(() => linesFromBody({ line_items: [] }), /line_items/);
assert.throws(() => linesFromBody({ line_items: [{ item: { id: "stickers-vinil-impermeable:5" } }] }), /Minimum 40/);
assert.throws(() => linesFromId("chk_bm9wZQ"), /not found/);
console.log("check-ucp OK");
