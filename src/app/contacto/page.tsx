import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, AtSign } from "lucide-react";
import { SITE, waLink } from "@/content/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contacto — Cotiza tu Papelería Personalizada",
  description: "Contacta a Yume por WhatsApp, correo o Instagram para cotizar tu papelería o artículos personalizados. Envíos a todo México desde Guadalajara.",
  path: "/contacto",
});

export default function ContactoPage() {
  const breadcrumb = breadcrumbSchema("/contacto", [{ name: "Inicio", url: "/" }, { name: "Contacto" }]);
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Contacto</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">Cotiza tu producto personalizado</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        La forma más rápida de cotizar es por WhatsApp: cuéntanos qué necesitas (recetario, etiquetas, stickers, cantidad, diseño) y te respondemos con precio y siguientes pasos.
      </p>

      <div className="mt-12 space-y-6">
        <a
          href={waLink("Hola, quiero cotizar un producto de Yume.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Cotizar por WhatsApp
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="flex min-h-11 items-center gap-2 text-sm text-ink-soft transition-colors hover:text-brand"
        >
          <Mail size={18} aria-hidden="true" />
          {SITE.email}
        </a>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-2 text-sm text-ink-soft transition-colors hover:text-brand"
        >
          <AtSign size={18} aria-hidden="true" />
          Instagram: @studioyume.mx
        </a>
        <p className="flex items-center gap-2 text-sm text-ink-soft">
          <MapPin size={18} aria-hidden="true" />
          {SITE.city}, {SITE.state}, México — envíos a todo el país, recolección en punto Casa Blanca (Guadalajara).
        </p>
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <h2 className="font-display text-xl text-ink">Sobre los tiempos de entrega</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
          Cada pieza se produce sobre pedido, así que el tiempo de entrega varía según el producto y la cantidad. Te confirmamos el tiempo exacto al cotizar por WhatsApp — no publicamos un plazo fijo porque preferimos darte el real para tu pedido, no un estimado genérico.
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </section>
  );
}
