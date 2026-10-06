import { MapPin } from "lucide-react";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";
import { SITE } from "@/content/site";
import { formatMXN } from "@/lib/format";
import type { Lang } from "@/lib/i18n";

// Where the order is made and how a Guadalajara-area customer gets it,
// from the real shipping data (branches, prices, days): the local facts a
// "<product> en Guadalajara" search is actually asking about.
export function LocalPickup({ lang }: { lang: Lang }) {
  const branches = CASABLANCA_BRANCHES.map((b) => b.name).join(", ");
  const pickupDays = `${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS}-${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS}`;
  return (
    <div className="mt-20 rounded-2xl border border-line bg-paper-raised p-6 sm:p-8">
      <h2 className="flex items-center gap-2 font-display text-2xl text-ink">
        <MapPin size={22} className="shrink-0 text-brand" aria-hidden="true" />
        {lang === "en" ? `Made in ${SITE.city}` : `Hecho en ${SITE.city}`}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
        {lang === "en"
          ? `We produce every order in ${SITE.city}, ${SITE.state}. In the Guadalajara metro area you can pick it up for ${formatMXN(CASABLANCA_PRICE)} at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca branches, about ${pickupDays} business days after you approve your proof. Anywhere else in Mexico, it ships by courier for ${formatMXN(NATIONAL_SHIPPING_PRICE)} (free from ${formatMXN(FREE_SHIPPING_THRESHOLD)}).`
          : `Producimos cada pedido en ${SITE.city}, ${SITE.state}. En la zona metropolitana de Guadalajara lo recoges por ${formatMXN(CASABLANCA_PRICE)} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales Casa Blanca, unos ${pickupDays} días hábiles después de aprobar tu prueba. Al resto de México lo enviamos por paquetería por ${formatMXN(NATIONAL_SHIPPING_PRICE)} (gratis desde ${formatMXN(FREE_SHIPPING_THRESHOLD)}).`}
      </p>
      <p className="mt-3 max-w-2xl text-xs leading-relaxed text-ink-soft">
        {lang === "en" ? "Pickup branches: " : "Sucursales para recoger: "}
        {branches}.
      </p>
    </div>
  );
}
