import { getSupabaseClient } from "@/lib/supabase";
import type { CheckoutItem } from "@/lib/mercadopago";
import { getCasablancaBranch, type DeliveryMethod } from "@/content/shipping";

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
  status: "pending" | "paid" | "failed" | "cancelled";
  mp_payment_id: string | null;
  emails_sent: boolean;
  design_file_urls: DesignFileUpload[] | null;
  created_at: string;
  updated_at: string;
}

export function validateShippingAddress(raw: unknown): ShippingAddress {
  const a = raw as Partial<ShippingAddress> | undefined;
  if (!a || !a.street || !a.number || !a.neighborhood || !a.city || !a.state || !a.zip) {
    throw new Error("Falta información de la dirección de envío.");
  }
  return {
    street: String(a.street),
    number: String(a.number),
    neighborhood: String(a.neighborhood),
    city: String(a.city),
    state: String(a.state),
    zip: String(a.zip),
    references: a.references ? String(a.references) : undefined,
  };
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

export function validateCustomer(raw: unknown): Customer {
  const c = raw as Partial<Customer> | undefined;
  if (!c || !c.name || !c.email || !c.phone) {
    throw new Error("Falta nombre, correo o teléfono del cliente.");
  }
  return { name: String(c.name), email: String(c.email), phone: String(c.phone) };
}

// Best-effort: these come from the client after a successful upload to our
// own /api/upload-design (which is where the real validation already
// happened), so a malformed entry here just gets dropped rather than
// failing the whole order — a lost design-file link should never block a
// real payment from going through.
export function validateDesignFileUrls(raw: unknown): DesignFileUpload[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (d): d is DesignFileUpload =>
      d && typeof d.productName === "string" && typeof d.fileName === "string" && typeof d.url === "string",
  );
}

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
  const { data, error } = await supabase
    .from("orders")
    .insert({
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
      delivery_method: delivery.method,
      shipping_address: delivery.shippingAddress,
      casablanca_branch: delivery.casablancaBranch,
      items,
      total,
      status: "pending",
      design_file_urls: designFileUrls?.length ? designFileUrls : null,
    })
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

export async function markOrderAsPaid(orderId: string, mpPaymentId: string): Promise<Order> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("orders")
    .update({ status: "paid", mp_payment_id: mpPaymentId, updated_at: new Date().toISOString() })
    .eq("id", orderId)
    .select()
    .single();
  if (error) throw error;
  return data as Order;
}

export async function markOrderAsFailed(orderId: string): Promise<Order> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("orders")
    .update({ status: "failed", updated_at: new Date().toISOString() })
    .eq("id", orderId)
    .select()
    .single();
  if (error) throw error;
  return data as Order;
}

export async function markEmailsAsSent(orderId: string): Promise<void> {
  const supabase = getSupabaseClient();
  const { error } = await supabase.from("orders").update({ emails_sent: true }).eq("id", orderId);
  if (error) throw error;
}
