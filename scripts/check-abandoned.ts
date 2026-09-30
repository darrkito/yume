// Run: npx tsx scripts/check-abandoned.ts
// Guards the abandoned-checkout reminder email: escaped name, order summary,
// the "only reminder" promise, OXXO/SPEI note and a prefilled WhatsApp link.
import assert from "node:assert";
import type { Order } from "../src/lib/orders";
import { abandonedCheckoutEmail } from "../src/lib/email-templates";

const order = {
  id: "8f3c1a2e-0000-0000-0000-000000000000",
  customer_name: '<script>alert(1)</script> María López',
  customer_email: "maria@example.com",
  items: [{ slug: "stickers-vinil-impermeable", name: "Stickers Vinil: 100 piezas", price: 250, qty: 1 }],
  total: 250,
} as unknown as Order;

const { subject, html } = abandonedCheckoutEmail(order);
assert.ok(subject.includes("Yume"));
assert.ok(!html.includes("<script>"), "customer name must be escaped");
assert.ok(html.includes("&lt;script&gt;"));
assert.ok(html.includes("Stickers Vinil: 100 piezas"));
assert.ok(html.includes("$250.00"));
assert.ok(html.includes("único recordatorio"));
assert.ok(html.includes("OXXO"));
assert.ok(html.includes("api.whatsapp.com/send?phone=523334005135"));
console.log("abandoned email ok");
