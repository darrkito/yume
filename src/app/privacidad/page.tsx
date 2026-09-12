import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de Yume: qué datos personales recabamos, para qué los usamos y cómo ejerces tus derechos ARCO.",
  alternates: { canonical: "/privacidad", languages: hreflangFor("/privacidad") },
};

const SECTIONS = [
  {
    title: "1. Responsable del tratamiento de datos",
    body: `${SITE.name}, con operación en ${SITE.city}, ${SITE.state}, México, es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.`,
  },
  {
    title: "2. Datos que recabamos",
    body: "Recabamos los datos que nos proporcionas directamente al solicitar una cotización por WhatsApp (nombre, mensaje, y cualquier imagen/diseño que adjuntes) o al realizar un pedido en línea (nombre, dirección de envío, correo electrónico, teléfono, y los datos de pago que procesa directamente Mercado Pago — nosotros no almacenamos números de tarjeta).",
  },
  {
    title: "3. Finalidad del tratamiento",
    body: "Usamos tus datos para: responder tu solicitud de cotización, procesar y dar seguimiento a tu pedido (incluyendo el envío de la prueba digital para tu aprobación), coordinar el envío o la recolección en punto Casa Blanca, y darte seguimiento sobre tu compra. No vendemos tus datos a terceros.",
  },
  {
    title: "4. Terceros que procesan datos en tu nombre",
    body: "Usamos Mercado Pago para procesar pagos en línea (tarjeta, SPEI, efectivo en tiendas) y Supabase para almacenar la información de tu pedido de forma segura. Usamos Microsoft Clarity para entender de forma anónima cómo se usa el sitio (mapas de calor, grabaciones de sesión) — no usamos Google Analytics ni Meta Pixel en este sitio.",
  },
  {
    title: "5. Derechos ARCO",
    body: `Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte (ARCO) al tratamiento de tus datos personales. Para ejercerlos, contáctanos en ${SITE.email}.`,
  },
  {
    title: "6. Cambios a este aviso",
    body: "Podemos actualizar este aviso periódicamente. Cualquier cambio se publicará en esta misma página con su fecha de actualización.",
  },
];

export default function PrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Legal</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">Aviso de Privacidad</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm text-ink-soft">Última actualización: 12 de septiembre de 2026</p>

      <div className="mt-12 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
