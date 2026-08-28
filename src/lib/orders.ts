import { getSupabaseClient } from "@/lib/supabase";
import type { CheckoutItem } from "@/lib/mercadopago";

export interface ShippingAddress {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  references?: string;
}

export interface Customer {
  name: string;
  email: string;
  phone?: string;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  shipping_address: ShippingAddress;
  items: CheckoutItem[];
  total: number;
  status: "pending" | "paid" | "failed" | "cancelled";
  mp_payment_id: string | null;
  emails_sent: boolean;
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

export function validateCustomer(raw: unknown): Customer {
  const c = raw as Partial<Customer> | undefined;
  if (!c || !c.name || !c.email) {
    throw new Error("Falta nombre o correo del cliente.");
  }
  return { name: String(c.name), email: String(c.email), phone: c.phone ? String(c.phone) : undefined };
}

export async function createPendingOrder({
  customer,
  shippingAddress,
  items,
  total,
}: {
  customer: Customer;
  shippingAddress: ShippingAddress;
  items: CheckoutItem[];
  total: number;
}): Promise<Order> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("orders")
    .insert({
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone ?? null,
      shipping_address: shippingAddress,
      items,
      total,
      status: "pending",
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
