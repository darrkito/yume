"use client";

import { useEffect } from "react";
import { estimateCasablancaPickup, estimateNationalDelivery, type DeliveryMethod } from "@/content/shipping";
import type { Lang } from "@/lib/i18n";

// Google Customer Reviews opt-in (Merchant Center 5867664375): after a paid
// order Google asks the buyer, in its own dialog, whether it may email a
// short survey once the order arrives. Ratings become the store's seller
// rating in Shopping and feed the store widget. Shows nothing until the
// program is enabled in Merchant Center (Growth > Manage programs).
const MERCHANT_ID = 5867664375;

declare global {
  interface Window {
    renderOptIn?: () => void;
    ___gcfg?: { lang: string };
    gapi?: { load: (name: string, cb: () => void) => void; surveyoptin: { render: (o: Record<string, unknown>) => void } };
  }
}

const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function GoogleReviewsOptIn({ orderId, email, delivery, lang }: { orderId: string; email: string; delivery: DeliveryMethod; lang: Lang }) {
  useEffect(() => {
    if (!orderId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || document.getElementById("gcr-optin")) return;
    const arrives = (delivery === "recoleccion_casablanca" ? estimateCasablancaPickup : estimateNationalDelivery)(new Date()).to;
    window.___gcfg = { lang: lang === "en" ? "en" : "es-419" };
    window.renderOptIn = () =>
      window.gapi?.load("surveyoptin", () =>
        window.gapi!.surveyoptin.render({
          merchant_id: MERCHANT_ID,
          order_id: orderId,
          email,
          delivery_country: "MX",
          estimated_delivery_date: ymd(arrives),
          opt_in_style: "CENTER_DIALOG",
        }),
      );
    const s = document.createElement("script");
    s.id = "gcr-optin";
    s.src = "https://apis.google.com/js/platform.js?onload=renderOptIn";
    s.async = true;
    document.body.appendChild(s);
  }, [orderId, email, delivery, lang]);
  return null;
}
