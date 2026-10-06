import { getProduct, productDisplayPrice } from "@/content/products";
import { FREE_SHIPPING_THRESHOLD } from "@/content/shipping";
import { SITE } from "@/content/site";

// Short, visible answer to "what is Yume / what does it cost / how does it
// ship": the first thing an AI assistant (or a first-time visitor) needs.
// Numbers come from the catalog and the shipping constants.
export function WhatIsYume({ lang }: { lang: "es" | "en" }) {
  const price = (slug: string) => `$${productDisplayPrice(getProduct(slug)!).toLocaleString("en-US")}`;
  const min = (slug: string) => getProduct(slug)!.tiers!.baseQty;
  const free = `$${FREE_SHIPPING_THRESHOLD}`;
  const en = lang === "en";
  return (
    <section aria-labelledby="what-is-yume" className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
      <h2 id="what-is-yume" className="font-display text-2xl text-ink sm:text-3xl text-balance">
        {en ? `What is ${SITE.name}?` : `¿Qué es ${SITE.name}?`}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {en
          ? `${SITE.name} is a custom stationery workshop in ${SITE.city}, ${SITE.state}. It makes logo stickers and labels from ${price("stickers-logo-personalizado")} MXN (minimum ${min("stickers-logo-personalizado")} pieces), waterproof vinyl stickers from ${price("stickers-vinil-impermeable")} MXN (${min("stickers-vinil-impermeable")} pieces), personalized party favor boxes from ${price("dulceros-personalizados")} MXN (${min("dulceros-personalizados")} pieces), medical prescription pads from ${price("recetario-medico-personalizado")} MXN, and NFC plates and stands for Google reviews. Shipping across Mexico is free from ${free} MXN, and so is pickup in Guadalajara. You get a digital proof, normally within 24 hours, before anything is printed.`
          : `${SITE.name} es un taller de papelería personalizada en ${SITE.city}, ${SITE.state}. Hace stickers y etiquetas con tu logo desde ${price("stickers-logo-personalizado")} MXN (mínimo ${min("stickers-logo-personalizado")} piezas), stickers de vinil impermeables desde ${price("stickers-vinil-impermeable")} MXN (${min("stickers-vinil-impermeable")} piezas), dulceros personalizados desde ${price("dulceros-personalizados")} MXN (${min("dulceros-personalizados")} piezas), recetarios médicos desde ${price("recetario-medico-personalizado")} MXN, y placas y stands NFC para reseñas de Google. El envío a todo México es gratis desde ${free} MXN, y recoger en Guadalajara también. Recibes una prueba digital, normalmente en un máximo de 24 horas, antes de imprimir.`}
      </p>
    </section>
  );
}
