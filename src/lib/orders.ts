import { getSupabaseClient } from "@/lib/supabase";
import type { CheckoutItem } from "@/lib/mercadopago";
import { getCasablancaBranch, type DeliveryMethod } from "@/content/shipping";
import type { OrderStatus } from "@/lib/payment-state";

export interface ShippingAddress {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  references?: string;
}

export type { DeliveryMethod };

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

export interface DesignFileUpload {
  /** Product slug the file belongs to (language-independent). */
  slug?: string;
  productName: string;
  fileName: string;
  url: string;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  delivery_method: DeliveryMethod;
  shipping_address: ShippingAddress | null;
  casablanca_branch: string | null;
  items: CheckoutItem[];
  total: number;
  status: OrderStatus;
  mp_payment_id: string | null;
  emails_sent: boolean;
  design_file_urls: DesignFileUpload[] | null;
  abandoned_reminder_sent_at: string | null;
  created_at: string;
  updated_at: string;
}

// Server-side limits: the form validates in the browser, but anything can
// POST to these routes directly, so length/shape is enforced here too.
function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function validateShippingAddress(raw: unknown): ShippingAddress {
  const a = raw as Record<string, unknown> | undefined;
  const address = {
    street: text(a?.street, 120),
    number: text(a?.number, 20),
    neighborhood: text(a?.neighborhood, 120),
    city: text(a?.city, 80),
    state: text(a?.state, 80),
    zip: text(a?.zip, 10),
  };
  if (Object.values(address).some((v) => !v)) {
    throw new Error("Falta información de la dirección de envío.");
  }
  if (!/^\d{5}$/.test(address.zip)) {
    throw new Error("El código postal debe tener 5 dígitos.");
  }
  const references = text(a?.references, 300);
  return { ...address, references: references || undefined };
}

export interface DeliveryInfo {
  method: DeliveryMethod;
  shippingAddress: ShippingAddress | null;
  casablancaBranch: string | null;
}

export function validateDelivery(raw: unknown): DeliveryInfo {
  const d = raw as { method?: unknown; shippingAddress?: unknown; casablancaBranch?: unknown } | undefined;
  const method = d?.method;

  if (method === "recoleccion_casablanca") {
    const branchId = typeof d?.casablancaBranch === "string" ? d.casablancaBranch : undefined;
    if (!branchId || !getCasablancaBranch(branchId)) {
      throw new Error("Selecciona una sucursal válida de Casa Blanca.");
    }
    return { method: "recoleccion_casablanca", shippingAddress: null, casablancaBranch: branchId };
  }

  // Default to national shipping — matches the form's default and keeps
  // existing callers (that never sent a `delivery` field) working.
  return { method: "envio_nacional", shippingAddress: validateShippingAddress(d?.shippingAddress), casablancaBranch: null };
}

// One plain address, no lists or display names: Nodemailer treats a comma-
// separated `to` as several recipients, which would turn the store's Gmail
// into a spam relay.
const EMAIL_RE = /^[^\s@,;<>"'()[\]\\]+@[^\s@,;<>"'()[\]\\]+\.[^\s@,;<>"'()[\]\\]+$/;

export function validateCustomer(raw: unknown): Customer {
  const c = raw as Record<string, unknown> | undefined;
  const name = text(c?.name, 120);
  const email = text(c?.email, 254);
  let phone = typeof c?.phone === "string" ? c.phone.replace(/\D/g, "") : "";
  if (phone.length === 12 && phone.startsWith("52")) phone = phone.slice(2);
  if (!name || !email || !phone) {
    throw new Error("Falta nombre, correo o teléfono del cliente.");
  }
  if (!EMAIL_RE.test(email)) throw new Error("El correo no es válido.");
  if (phone.length !== 10) throw new Error("El teléfono debe tener 10 dígitos.");
  return { name, email, phone };
}

// Design files are uploaded to our own private bucket before checkout, so an
// entry is only accepted if its URL points at that bucket. Otherwise anyone
// could plant an arbitrary link that then goes out in the owner's email.
// A malformed entry is dropped rather than failing the order: a lost
// design-file link should never block a real payment.
function isOwnBucketUrl(url: string): boolean {
  const base = process.env.Supa_Store_Stor_SUPABASE_URL;
  return !!base && url.startsWith(`${base}/storage/v1/object/sign/order-designs/`);
}

export function validateDesignFileUrls(raw: unknown): DesignFileUpload[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (d): d is DesignFileUpload =>
        d && typeof d.productName === "string" && typeof d.fileName === "string" && typeof d.url === "string" && isOwnBucketUrl(d.url),
    )
    .slice(0, 20)
    .map((d) => ({ slug: typeof d.slug === "string" ? d.slug.slice(0, 80) : undefined, productName: d.productName.slice(0, 200), fileName: d.fileName.slice(0, 200), url: d.url }));
}

// A shopper who retries (rejected card, closed Mercado Pago tab, edited their
// data) should not leave a trail of duplicate pending orders: reuse the same
// unpaid order from the last 2 h when email, delivery and cart are identical.
// Orders that already got a payment id are never reused.
const REUSE_WINDOW_H = 2;
// jsonb does not preserve key order, so compare cart contents by value.
const cartKey = (items: CheckoutItem[]) => items.map((i) => `${i.slug}|${i.name}|${i.price}|${i.qty}|${(i.personalization ?? []).map((p) => `${p.label}=${p.value}`).join(",")}`).join(";");

export async function createPendingOrder({
  customer,
  delivery,
  items,
  total,
  designFileUrls,
}: {
  customer: Customer;
  delivery: DeliveryInfo;
  items: CheckoutItem[];
  total: number;
  designFileUrls?: DesignFileUpload[];
}): Promise<Order> {
  const supabase = getSupabaseClient();
  const fields = {
    customer_name: customer.name,
    customer_email: customer.email,
    customer_phone: customer.phone,
    delivery_method: delivery.method,
    shipping_address: delivery.shippingAddress,
    casablanca_branch: delivery.casablancaBranch,
    items,
    total,
    design_file_urls: designFileUrls?.length ? designFileUrls : null,
  };

  const since = new Date(Date.now() - REUSE_WINDOW_H * 3600_000).toISOString();
  const { data: recent, error: recentError } = await supabase
    .from("orders")
    .select("id, items, total")
    .in("status", ["pending", "failed"])
    .is("mp_payment_id", null)
    .ilike("customer_email", customer.email.replace(/[\\%_]/g, "\\$&"))
    .gte("created_at", since)
    .order("created_at", { ascending: false })
    .limit(5);
  if (recentError) throw recentError;
  const same = (recent ?? []).find((o) => Number(o.total) === total && cartKey(o.items) === cartKey(items));
  if (same) {
    const { data, error } = await supabase
      .from("orders")
      .update({ ...fields, status: "pending", updated_at: new Date().toISOString() })
      .eq("id", same.id)
      .is("mp_payment_id", null)
      .select()
      .single();
    if (error) throw error;
    return data as Order;
  }

  const { data, error } = await supabase
    .from("orders")
    .insert({ ...fields, status: "pending" })
    .select()
    .single();
  if (error) throw error;
  return data as Order;
}

export async function getOrderById(orderId: string): Promise<Order | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from("orders").select("*").eq("id", orderId).maybeSingle();
  if (error) throw error;
  return data as Order | null;
}

/** pending/failed -> paid. Returns the order either way (already-paid is a no-op). */
export async function markOrderAsPaid(orderId: string, mpPaymentId: string): Promise<Order> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("orders")
    .update({ status: "paid", mp_payment_id: mpPaymentId, updated_at: new Date().toISOString() })
    .eq("id", orderId)
    .in("status", ["pending", "failed"])
    .select()
    .maybeSingle();
  if (error) throw error;
  if (data) return data as Order;
  const current = await getOrderById(orderId);
  if (!current) throw new Error(`Order ${orderId} not found`);
  return current;
}

/** pending -> failed only: a paid order is never downgraded. */
export async function markOrderAsFailed(orderId: string): Promise<void> {
  const supabase = getSupabaseClient();
  const { error } = await supabase
    .from("orders")
    .update({ status: "failed", updated_at: new Date().toISOString() })
    .eq("id", orderId)
    .eq("status", "pending");
  if (error) throw error;
}

/** paid -> refunded | charged_back. */
export async function markOrderAfterPaid(orderId: string, status: "refunded" | "charged_back"): Promise<void> {
  const supabase = getSupabaseClient();
  const { error } = await supabase
    .from("orders")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", orderId)
    .eq("status", "paid");
  if (error) throw error;
}

/** Atomically claims the confirmation emails: true only for the caller that
 * flips the flag, so webhook + on-site payment can't both send. */
export async function claimEmails(orderId: string): Promise<boolean> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("orders")
    .update({ emails_sent: true })
    .eq("id", orderId)
    .eq("emails_sent", false)
    .select("id");
  if (error) throw error;
  return (data ?? []).length === 1;
}

/** Undo a claim when the emails did not go out, so the next notification retries. */
export async function releaseEmails(orderId: string): Promise<void> {
  const supabase = getSupabaseClient();
  const { error } = await supabase.from("orders").update({ emails_sent: false }).eq("id", orderId);
  if (error) throw error;
}

// --- Abandoned-checkout reminder ---------------------------------------------
// One email per shopper, 24-72 h after a pending order was created. The 72 h
// upper bound keeps a missed cron day from reminding someone a week late.
const REMINDER_MIN_AGE_H = 24;
const REMINDER_MAX_AGE_H = 72;

/** Pending, never-reminded orders in the reminder window, one per email
 * (the newest), skipping shoppers who paid an order created after it. */
export async function getAbandonedOrders(now = new Date()): Promise<{ send: Order[]; skipped: Order[] }> {
  const supabase = getSupabaseClient();
  const ago = (h: number) => new Date(now.getTime() - h * 3600_000).toISOString();

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("status", "pending")
    .is("abandoned_reminder_sent_at", null)
    .gte("created_at", ago(REMINDER_MAX_AGE_H))
    .lte("created_at", ago(REMINDER_MIN_AGE_H))
    .order("created_at", { ascending: false });
  if (error) throw error;
  const pending = (data ?? []) as Order[];
  if (pending.length === 0) return { send: [], skipped: [] };

  const emails = [...new Set(pending.map((o) => o.customer_email))];
  const { data: paid, error: paidError } = await supabase
    .from("orders")
    .select("customer_email, created_at")
    .eq("status", "paid")
    .gte("created_at", ago(REMINDER_MAX_AGE_H))
    .in("customer_email", emails);
  if (paidError) throw paidError;

  const send: Order[] = [];
  const skipped: Order[] = [];
  const seen = new Set<string>();
  for (const order of pending) {
    const email = order.customer_email.toLowerCase();
    const alreadyPaid = (paid ?? []).some((p) => p.customer_email.toLowerCase() === email && p.created_at >= order.created_at);
    if (seen.has(email) || alreadyPaid) {
      skipped.push(order);
    } else {
      seen.add(email);
      send.push(order);
    }
  }
  return { send, skipped };
}

/** Atomically claims an order for reminding: true only for the caller that
 * flips the column, so two overlapping cron runs can never both send. */
export async function claimReminder(orderId: string): Promise<boolean> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("orders")
    .update({ abandoned_reminder_sent_at: new Date().toISOString() })
    .eq("id", orderId)
    .is("abandoned_reminder_sent_at", null)
    .select("id");
  if (error) throw error;
  return (data ?? []).length === 1;
}

/** Undo a claim when the email did not go out, so tomorrow's run retries. */
export async function releaseReminder(orderId: string): Promise<void> {
  const supabase = getSupabaseClient();
  const { error } = await supabase.from("orders").update({ abandoned_reminder_sent_at: null }).eq("id", orderId);
  if (error) throw error;
}

/** Skipped duplicates are marked too, so the shopper never gets a second email. */
export async function markRemindedWithoutSending(orderIds: string[]): Promise<void> {
  if (orderIds.length === 0) return;
  const supabase = getSupabaseClient();
  const { error } = await supabase
    .from("orders")
    .update({ abandoned_reminder_sent_at: new Date().toISOString() })
    .in("id", orderIds)
    .is("abandoned_reminder_sent_at", null);
  if (error) throw error;
}
