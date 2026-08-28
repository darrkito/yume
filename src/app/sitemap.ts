import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/productos`, changeFrequency: "weekly", priority: 0.9 },
    ...products.map((p) => ({
      url: `${SITE.url}/productos/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
