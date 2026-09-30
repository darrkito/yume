"use client";

import { useSyncExternalStore } from "react";
import { estimateCasablancaPickup, estimateNationalDelivery } from "@/content/shipping";
import type { Lang } from "@/lib/i18n";

// null on the server and during hydration: the server's "today" can differ
// from the shopper's, so dates only render once we're on the client.
const noopSubscribe = () => () => {};
const serverToday = (): string | null => null;
const clientToday = (): string | null => {
  const n = new Date();
  return `${n.getFullYear()}-${n.getMonth() + 1}-${n.getDate()}`;
};

export type DateRange = { from: string; to: string };

/** "If the proof is approved today" delivery ranges, formatted for `lang`. */
export function useDeliveryDates(lang: Lang): { national: DateRange; pickup: DateRange } | null {
  const today = useSyncExternalStore(noopSubscribe, clientToday, serverToday);
  if (!today) return null;
  const [y, m, d] = today.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  const fmt = new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-MX", { weekday: "short", day: "numeric", month: "short" });
  const range = (r: { from: Date; to: Date }): DateRange => ({ from: fmt.format(r.from), to: fmt.format(r.to) });
  return { national: range(estimateNationalDelivery(start)), pickup: range(estimateCasablancaPickup(start)) };
}
