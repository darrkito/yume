import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Yume's privacy policy: what personal data we collect, how we use it, and how to exercise your data rights.",
  alternates: { canonical: "/en/privacy", languages: hreflangFor("/privacidad") },
};

const SECTIONS = [
  {
    title: "1. Data controller",
    body: `${SITE.name}, operating out of ${SITE.city}, ${SITE.state}, Mexico, is responsible for processing your personal data in accordance with Mexico's Federal Law on Protection of Personal Data Held by Private Parties.`,
  },
  {
    title: "2. Data we collect",
    body: "We collect the data you provide directly when requesting a quote on WhatsApp (name, message, and any image/design you attach) or when placing an order online (name, shipping address, email, phone, and payment data processed directly by Mercado Pago — we never store card numbers ourselves).",
  },
  {
    title: "3. Purpose of processing",
    body: "We use your data to: respond to your quote request, process and follow up on your order (including sending the digital proof for your approval), coordinate shipping or pickup at the Casa Blanca point, and follow up on your purchase. We do not sell your data to third parties.",
  },
  {
    title: "4. Third parties that process data on our behalf",
    body: "We use Mercado Pago to process online payments (card, SPEI, cash at stores) and Supabase to securely store your order information. We use Microsoft Clarity to anonymously understand how the site is used (heatmaps, session recordings) — we do not use Google Analytics or Meta Pixel on this site.",
  },
  {
    title: "5. Your rights",
    body: `You have the right to access, correct, cancel, or object to the processing of your personal data. To exercise these rights, contact us at ${SITE.email}.`,
  },
  {
    title: "6. Changes to this policy",
    body: "We may update this policy periodically. Any changes will be posted on this same page with the corresponding update date.",
  },
];

export default function PrivacyPageEn() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Legal</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">Privacy Policy</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm text-ink-soft">Last updated: September 12, 2026</p>

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
