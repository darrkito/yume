"use client";

import { useEffect, useState } from "react";
import { Loader2, Check } from "lucide-react";
import type { CartItem } from "@/components/CartContext";
import { formatMXN } from "@/lib/format";
import type { Lang } from "@/lib/i18n";

const COPY = {
  es: { processing: "Imprimiendo tu recibo…", total: "Total", thanks: "¡Gracias por tu compra!", tagline: "Guadalajara, Jalisco" },
  en: { processing: "Printing your receipt…", total: "Total", thanks: "Thank you for your order!", tagline: "Guadalajara, Jalisco" },
};

// Deterministic (no Math.random, avoids hydration mismatch) torn-edge
// zigzag for the bottom of the receipt paper.
const TEETH = 14;
const TORN_EDGE = (() => {
  // Path order matters for clip-path polygon: top-left -> top-right ->
  // straight down the right side -> zigzag right-to-left across the
  // bottom -> straight back up the left side (implicit closing edge).
  // Going left-to-right for the zigzag (ascending i) instead produces a
  // self-crossing bowtie that clips the sides, not just the bottom.
  const points = ["0% 0%", "100% 0%"];
  for (let i = TEETH; i >= 0; i--) {
    const x = (i / TEETH) * 100;
    const y = i % 2 === 0 ? 100 : 92 - (i % 3);
    points.push(`${x.toFixed(1)}% ${y}%`);
  }
  return `polygon(${points.join(", ")})`;
})();

type Stage = "processing" | "printing" | "complete";

export function ReceiptPrinter({ items, total, lang = "es" }: { items: CartItem[]; total: number; lang?: Lang }) {
  const [stage, setStage] = useState<Stage>("processing");
  const t = COPY[lang];
  const orderNumber = useOrderNumber();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage("complete");
      return;
    }
    const t1 = setTimeout(() => setStage("printing"), 900);
    const t2 = setTimeout(() => setStage("complete"), 900 + 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="receipt-printer">
      <div className="receipt-body">
        <div className="receipt-slot" />
        {stage === "processing" ? (
          <Loader2 size={18} className="receipt-status-icon animate-spin" aria-hidden="true" />
        ) : (
          <Check size={18} className="receipt-status-icon" aria-hidden="true" />
        )}
      </div>
      <div className="receipt-feed" data-stage={stage}>
        <div className="receipt-paper" style={{ clipPath: TORN_EDGE }}>
          <p className="receipt-brand">YUME</p>
          <p className="receipt-tagline">{t.tagline}</p>
          <div className="receipt-rule" />
          <ul className="receipt-items">
            {items.map((item) => (
              <li key={`${item.slug}:${item.variantId ?? ""}`}>
                <span>
                  {item.name} ×{item.qty}
                </span>
                <span>{formatMXN(item.price * item.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="receipt-rule" />
          <div className="receipt-total">
            <span>{t.total}</span>
            <span>{formatMXN(total)} MXN</span>
          </div>
          {orderNumber && <p className="receipt-order-no">#{orderNumber}</p>}
          <p className="receipt-thanks">{t.thanks}</p>
        </div>
      </div>
    </div>
  );
}

// A short, stable order reference derived once at mount time — cosmetic
// only, the real order id lives in Supabase via the webhook. Set in an
// effect (not a lazy useState initializer) since Date.now() would differ
// between the server render and the client, causing a hydration mismatch.
function useOrderNumber() {
  const [n, setN] = useState<number | null>(null);
  useEffect(() => {
    setN(Math.floor(1000 + (Date.now() % 9000)));
  }, []);
  return n;
}
