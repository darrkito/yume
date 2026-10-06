// One-line shipping/proof/invoice facts for agents (A2A, MCP, Markdown). Built
// from the real constants so they cannot drift from the checkout; the static
// files public/llms.txt and public/agents.md are hand-written and guarded by
// scripts/check-ai-facts.ts.
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE, NATIONAL_TRANSIT_DAYS, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";

const m = (n: number) => `$${n.toLocaleString("en-US")}`;

export function shippingFacts(lang: "es" | "en"): string {
  const branches = CASABLANCA_BRANCHES.length;
  return lang === "en"
    ? `Home delivery anywhere in Mexico costs ${m(NATIONAL_SHIPPING_PRICE)} MXN and is free on orders of ${m(FREE_SHIPPING_THRESHOLD)} MXN or more. Pickup at one of ${branches} Casa Blanca branches in the Guadalajara metro area costs ${m(CASABLANCA_PRICE)} MXN and is also free from ${m(FREE_SHIPPING_THRESHOLD)} MXN. Production takes ${PRODUCTION_DAYS.min}-${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min}-${NATIONAL_TRANSIT_DAYS.max} business days of shipping or ${PICKUP_EXTRA_DAYS} business day to reach the pickup branch. The digital proof arrives within 24 hours of payment (up to 2 rounds of changes included). We do not issue invoices (CFDI).`
    : `El envío a domicilio a todo México cuesta ${m(NATIONAL_SHIPPING_PRICE)} MXN y es gratis en compras de ${m(FREE_SHIPPING_THRESHOLD)} MXN o más. La recolección en una de las ${branches} sucursales Casa Blanca de la zona metropolitana de Guadalajara cuesta ${m(CASABLANCA_PRICE)} MXN y también es gratis desde ${m(FREE_SHIPPING_THRESHOLD)} MXN. La producción toma ${PRODUCTION_DAYS.min}-${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min}-${NATIONAL_TRANSIT_DAYS.max} días hábiles de envío o ${PICKUP_EXTRA_DAYS} día hábil para llegar a la sucursal. La prueba digital llega en un máximo de 24 horas después del pago (incluye hasta 2 rondas de ajustes). No emitimos factura (CFDI).`;
}
