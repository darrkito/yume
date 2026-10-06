// Run: npx tsx scripts/check-checkout-validation.ts
// Guards the server-side input rules for checkout requests.
import assert from "node:assert";
process.env.Supa_Store_Stor_SUPABASE_URL = "https://abc.supabase.co";
async function main() {
const { validateCustomer, validateShippingAddress, validateDesignFileUrls } = await import("../src/lib/orders");
const { validateCartItems } = await import("../src/lib/mercadopago");

const ok = { name: "María López", email: "maria@example.com", phone: "33 1234 5678" };
assert.deepEqual(validateCustomer(ok), { name: "María López", email: "maria@example.com", phone: "3312345678" });
assert.equal(validateCustomer({ ...ok, phone: "+52 33 1234 5678" }).phone, "3312345678");

// mail relay: lists / display names / header tricks must be rejected
for (const email of ["a@b.com,victim@x.com", "a@b.com;c@d.com", "Name <a@b.com>", "a@b.com\nBcc: x@y.com", "a b@c.com", "nope"]) {
  assert.throws(() => validateCustomer({ ...ok, email }), /correo/, email);
}
assert.throws(() => validateCustomer({ ...ok, phone: "12345" }), /10 dígitos/);
assert.throws(() => validateCustomer({ ...ok, name: "" }));

const addr = { street: "Juárez", number: "10", neighborhood: "Centro", city: "Guadalajara", state: "Jalisco", zip: "44100" };
assert.equal(validateShippingAddress(addr).zip, "44100");
assert.throws(() => validateShippingAddress({ ...addr, zip: "4410" }), /5 dígitos/);
assert.throws(() => validateShippingAddress({ ...addr, street: "" }));
assert.equal(validateShippingAddress({ ...addr, street: "x".repeat(500) }).street.length, 120);

// design urls: only our own private bucket
const good = { productName: "P", fileName: "a.png", url: "https://abc.supabase.co/storage/v1/object/sign/order-designs/x.png?token=t" };
const evil = { productName: "P", fileName: "a.png", url: "https://evil.example/phish" };
assert.equal(validateDesignFileUrls([good, evil]).length, 1);
assert.equal(validateDesignFileUrls("nope").length, 0);

// quantities must be whole numbers
assert.throws(() => validateCartItems([{ slug: "x", qty: 1.5 }]));

// personalization: required fields enforced per product/option, stored on the line
const dulcero = [{ slug: "dulceros-personalizados", qty: 1, variantId: "12" }];
assert.throws(() => validateCartItems(dulcero, { personalization: {} }), /Falta/);
const [dl] = validateCartItems(dulcero, { personalization: { "dulceros-personalizados": { name: " Sofía 7 años ", theme: "Unicornios", bogus: "x" } } });
assert.deepEqual(dl.personalization, [
  { label: "Nombre o texto de la caja", value: "Sofía 7 años" },
  { label: "Temática", value: "Unicornios" },
]);
assert.throws(() => validateCartItems(dulcero, { personalization: { "dulceros-personalizados": { name: "a", theme: "b", eventDate: "mañana" } } }), /Fecha/);
// recetario data only required when we design it
assert.doesNotThrow(() => validateCartItems([{ slug: "recetario-medico-personalizado", qty: 1, variantId: "sin-diseno" }]));
assert.throws(() => validateCartItems([{ slug: "recetario-medico-personalizado", qty: 1, variantId: "con-diseno" }]), /Falta/);
// order note rides on the first line, trimmed
const [nl] = validateCartItems(dulcero, { personalization: { "dulceros-personalizados": { name: "a", theme: "b" } }, note: "  fiesta el 12  " });
assert.equal(nl.personalization!.at(-1)!.value, "fiesta el 12");

console.log("check-checkout-validation: ok");
}
main();
