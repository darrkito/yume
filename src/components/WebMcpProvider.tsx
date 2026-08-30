"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { getFaqCategories } from "@/content/faq";
import { getFaqCategoriesEn } from "@/content/faq.en";

interface ModelContextTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<{ content: { type: "text"; text: string }[] }>;
}

// navigator.modelContext.provideContext() is the primary WebMCP surface for
// a static, known-upfront tool set (see agent_readiness_playbook §8) —
// feature-detected, so this is a no-op until a browser ships it. Real tools
// operating on the same content the page itself renders, not a fabricated
// second copy.
export function WebMcpProvider() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    if (typeof navigator === "undefined" || !("modelContext" in navigator)) return;
    const nav = navigator as unknown as { modelContext: { provideContext: (ctx: { tools: ModelContextTool[] } ) => void } };

    const textResult = (value: unknown) => ({ content: [{ type: "text" as const, text: JSON.stringify(value) }] });

    const tools: ModelContextTool[] = [
      {
        name: "list_products",
        description: "List Yume's products with prices in MXN.",
        inputSchema: { type: "object", properties: {} },
        execute: async () =>
          textResult(
            products.map((p) => ({
              slug: p.slug,
              name: lang === "en" ? (productsEn[p.slug]?.name ?? p.name) : p.name,
              price: p.price,
              currency: p.currency,
            })),
          ),
      },
      {
        name: "search_faq",
        description: "Search Yume's FAQ (general, medical prescription pads, custom stickers) by keyword.",
        inputSchema: { type: "object", properties: { query: { type: "string" } }, required: ["query"] },
        execute: async (input) => {
          const query = String(input.query ?? "").toLowerCase();
          const categories = lang === "en" ? getFaqCategoriesEn() : getFaqCategories();
          const matches = categories.flatMap((c) =>
            c.items.filter((f) => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)),
          );
          return textResult(matches);
        },
      },
    ];

    nav.modelContext.provideContext({ tools });
  }, [lang]);

  return null;
}
