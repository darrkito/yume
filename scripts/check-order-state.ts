// Run: npx tsx scripts/check-order-state.ts
// Guards the payment -> order state rules: forward-only transitions, amount
// check, duplicate payments, and the webhook signature.
import assert from "node:assert";
import { createHmac } from "node:crypto";
import { decidePaymentAction, type OrderStatus } from "../src/lib/payment-state";
import { verifyMpSignature } from "../src/lib/webhook-signature";
import { sniffDesignType } from "../src/lib/file-sniff";

const act = (orderStatus: OrderStatus, mpStatus: string, o: { amount?: number; paymentId?: string; orderPaymentId?: string | null; currency?: string } = {}) =>
  decidePaymentAction({
    orderStatus,
    orderTotal: 100,
    orderPaymentId: o.orderPaymentId ?? null,
    paymentId: o.paymentId ?? "p1",
    mpStatus,
    amount: o.amount ?? 100,
    currency: o.currency ?? "MXN",
  });

// approved
assert.equal(act("pending", "approved"), "pay");
assert.equal(act("failed", "approved"), "pay"); // retry after a rejection
assert.equal(act("paid", "approved", { orderPaymentId: "p1" }), "ignore"); // same payment re-notified
assert.equal(act("paid", "approved", { orderPaymentId: "p0" }), "alert-duplicate"); // charged twice
assert.equal(act("pending", "approved", { amount: 90 }), "alert-amount");
assert.equal(act("pending", "approved", { currency: "USD" }), "alert-amount");
// a paid order is never downgraded
assert.equal(act("paid", "rejected", { orderPaymentId: "p1" }), "ignore");
assert.equal(act("paid", "cancelled", { orderPaymentId: "p1" }), "ignore"); // OXXO expiry after card payment
assert.equal(act("pending", "rejected"), "fail");
assert.equal(act("failed", "rejected"), "ignore");
// after-paid events only for the payment that paid the order
assert.equal(act("paid", "refunded", { orderPaymentId: "p1" }), "refund");
assert.equal(act("paid", "refunded", { orderPaymentId: "p0" }), "ignore");
assert.equal(act("paid", "charged_back", { orderPaymentId: "p1" }), "chargeback");
assert.equal(act("pending", "refunded"), "ignore");
assert.equal(act("pending", "in_process"), "ignore");
assert.equal(act("pending", "pending"), "ignore");

// webhook signature
const secret = "s3cret";
const sign = (id: string, reqId: string, ts: string) => `ts=${ts},v1=${createHmac("sha256", secret).update(`id:${id.toLowerCase()};request-id:${reqId};ts:${ts};`).digest("hex")}`;
assert.ok(verifyMpSignature(secret, sign("ABC123", "r1", "1700"), "r1", "ABC123"));
assert.ok(!verifyMpSignature(secret, sign("ABC123", "r1", "1700"), "r1", "OTHER")); // id swapped
assert.ok(!verifyMpSignature("wrong", sign("ABC123", "r1", "1700"), "r1", "ABC123"));
assert.ok(!verifyMpSignature(secret, "", "r1", "ABC123"));
assert.ok(!verifyMpSignature(secret, sign("ABC123", "r1", "1700"), "r1", null));

// magic bytes
const pad = (b: number[]) => Uint8Array.from([...b, ...new Array(16).fill(0)]);
assert.equal(sniffDesignType(pad([0x89, 0x50, 0x4e, 0x47])), "image/png");
assert.equal(sniffDesignType(pad([0xff, 0xd8, 0xff, 0xe0])), "image/jpeg");
assert.equal(sniffDesignType(Buffer.from("%PDF-1.7 aaaaaaaa")), "application/pdf");
assert.equal(sniffDesignType(Buffer.from('<?xml version="1.0"?><svg xmlns="x"></svg>')), "application/octet-stream");
assert.equal(sniffDesignType(Buffer.from("<html><script>alert(1)</script></html>")), null);
assert.equal(sniffDesignType(Buffer.from("MZ\x90\x00 fake exe renamed .png ......")), null);

console.log("check-order-state: ok");
