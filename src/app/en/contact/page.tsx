import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, AtSign } from "lucide-react";
import { SITE, waLink } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Yume via WhatsApp, email, or Instagram to get a quote for custom stationery or personalized goods. Shipping across Mexico from Guadalajara.",
  alternates: { canonical: "/en/contact", languages: hreflangFor("/contacto") },
};

export default function ContactPageEn() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Contact</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">Let&apos;s talk</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        The fastest way to get a quote is WhatsApp: tell us what you need (prescription pad, logo stickers, vinyl stickers, quantity, design) and we&apos;ll reply with pricing and next steps.
      </p>

      <div className="mt-12 space-y-6">
        <a
          href={waLink("Hi, I'd like to get a quote for a Yume product.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Get a quote on WhatsApp
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
          {SITE.city}, {SITE.state}, Mexico — shipping nationwide, pickup available at the Casa Blanca point (Guadalajara).
        </p>
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <h2 className="font-display text-xl text-ink">On turnaround times</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
          Every piece is made to order, so turnaround varies by product and quantity. We confirm the exact timeline when you request a quote on WhatsApp — we don&apos;t publish a fixed timeframe because we&apos;d rather give you the real one for your order, not a generic estimate.
        </p>
      </div>
    </section>
  );
}
