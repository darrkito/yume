import { MercadoPagoConfig } from "mercadopago";
import { getProduct } from "@/content/products";

// Server-only client — never import this from a "use client" component.
// Throws at request time (not at module load) so `next build` doesn't fail
// before the real token is set in Vercel env vars.
export function getMpClient() {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("MERCADOPAGO_ACCESS_TOKEN no está configurado.");
  }
  return new MercadoPagoConfig({ accessToken });
}

export interface CheckoutItem {
  slug: string;
  name: string;
  price: number;
  qty: number;
}

// Trusts only `slug` and `qty` from the client — `name`/`price` are always
// re-resolved from the server-side product catalog so a tampered request
// body can never change what actually gets charged.
export function validateCartItems(items: unknown): CheckoutItem[] {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("El carrito está vacío.");
  }
  return items.map((raw) => {
    const { slug, qty } = raw as { slug?: unknown; qty?: unknown };
    if (typeof slug !== "string" || typeof qty !== "number" || !Number.isFinite(qty) || qty <= 0) {
      throw new Error("Producto inválido en el carrito.");
    }
    const product = getProduct(slug);
    if (!product) {
      throw new Error(`Producto no encontrado: ${slug}`);
    }
    return { slug: product.slug, name: product.name, price: product.price, qty: Math.floor(qty) };
  });
}
