// Run: npx tsx scripts/check-order-emails.ts
// Guards the customer confirmation and the internal sale email: content per
// delivery method, HTML escaping, pending-design warning, brand shell.
import assert from "node:assert";
import type { Order } from "../src/lib/orders";
import { businessNotificationEmail, customerConfirmationEmail } from "../src/lib/email-templates";

const base = {
  id: "8f3c1a2e-0000-0000-0000-000000000000",
  customer_name: "<b>María</b> López",
  customer_email: "maria@example.com",
  customer_phone: "33 1234 5678",
  items: [{ slug: "stickers-logo-personalizado", name: "Etiquetas Logo Personalizado: 50 piezas", price: 100, qty: 1 }],
  total: 100,
  status: "paid",
  mp_payment_id: "123",
  design_file_urls: null,
  updated_at: "2026-09-30T12:00:00Z",
} as const;

const ship = {
  ...base,
  delivery_method: "envio_nacional",
  casablanca_branch: null,
  shipping_address: { street: "Av. <i>Juárez</i>", number: "10", neighborhood: "Centro", city: "Guadalajara", state: "Jalisco", zip: "44100", references: "Portón negro" },
} as unknown as Order;
const pickup = { ...base, delivery_method: "recoleccion_casablanca", casablanca_branch: "juarez", shipping_address: null } as unknown as Order;

const c1 = customerConfirmationEmail(ship);
assert.ok(c1.subject.includes("#8f3c1a2e"));
assert.ok(!c1.html.includes("<b>María"), "name must be escaped");
assert.ok(!c1.html.includes("<i>Juárez"), "address must be escaped");
assert.ok(c1.html.includes("Dirección de envío") && c1.html.includes("CP 44100") && c1.html.includes("Portón negro"));
assert.ok(c1.html.includes("salga rumbo a tu domicilio"));
assert.ok(c1.html.includes("Falta tu diseño"), "logo product without upload must warn");
assert.ok(c1.html.includes("api.whatsapp.com/send?phone=523334005135"));
assert.ok(c1.html.includes("logo-yume-wordmark.png") && c1.html.includes("Playfair"));

const c2 = customerConfirmationEmail(pickup);
assert.ok(c2.html.includes("Casa Blanca") && c2.html.includes("Juárez (matriz)"));
assert.ok(c2.html.includes("comprobante que necesitas presentar"));
assert.ok(!c2.html.includes("Dirección de envío"));

const b1 = businessNotificationEmail(ship);
assert.ok(b1.subject.includes("Nueva venta") && b1.subject.includes("$100.00"));
assert.ok(b1.html.includes("Diseño pendiente"));
assert.ok(b1.html.includes("Generar guía de envío"));
assert.ok(b1.html.includes("api.whatsapp.com/send?phone=523312345678"), "footer opens a chat with the customer (52 prefix)");
const b2 = businessNotificationEmail(pickup);
assert.ok(b2.html.includes("sucursal Casa Blanca elegida"));
console.log("order emails ok");
