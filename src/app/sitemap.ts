import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { blogPosts } from "@/content/blog";
import { blogPostsEn } from "@/content/blog.en";
import { SITE } from "@/content/site";
import { hreflangFor, PRODUCT_SLUG_EN, BLOG_SLUG_EN, BLOG_SLUG_ES } from "@/lib/i18n";

// Every URL's `alternates.languages` mirrors the same ES<->EN pair regardless
// of which language entry it's attached to — that reciprocity is what tells
// Google/Bing the two URLs are the same content in two languages. Built from
// hreflangFor(), the same source as each page's <link rel="alternate">, so
// the sitemap and the HTML can't disagree (x-default included).
function withLanguages(esPath: string) {
  return {
    languages: Object.fromEntries(Object.entries(hreflangFor(esPath)).map(([code, path]) => [code, `${SITE.url}${path}`])),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: SITE.url, changeFrequency: "weekly", priority: 1, alternates: withLanguages("/") },
    { url: `${SITE.url}/en`, changeFrequency: "weekly", priority: 0.9, alternates: withLanguages("/") },

    { url: `${SITE.url}/productos`, changeFrequency: "weekly", priority: 0.9, alternates: withLanguages("/productos") },
    { url: `${SITE.url}/en/products`, changeFrequency: "weekly", priority: 0.8, alternates: withLanguages("/productos") },

    { url: `${SITE.url}/galeria`, changeFrequency: "monthly", priority: 0.8, alternates: withLanguages("/galeria") },
    { url: `${SITE.url}/en/gallery`, changeFrequency: "monthly", priority: 0.7, alternates: withLanguages("/galeria") },

    { url: `${SITE.url}/preguntas-frecuentes`, changeFrequency: "monthly", priority: 0.7, alternates: withLanguages("/preguntas-frecuentes") },
    { url: `${SITE.url}/en/faq`, changeFrequency: "monthly", priority: 0.6, alternates: withLanguages("/preguntas-frecuentes") },

    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.7, alternates: withLanguages("/blog") },
    { url: `${SITE.url}/en/blog`, changeFrequency: "weekly", priority: 0.6, alternates: withLanguages("/blog") },

    { url: `${SITE.url}/nosotros`, changeFrequency: "monthly", priority: 0.5, alternates: withLanguages("/nosotros") },
    { url: `${SITE.url}/en/about`, changeFrequency: "monthly", priority: 0.4, alternates: withLanguages("/nosotros") },

    { url: `${SITE.url}/contacto`, changeFrequency: "monthly", priority: 0.6, alternates: withLanguages("/contacto") },
    { url: `${SITE.url}/en/contact`, changeFrequency: "monthly", priority: 0.5, alternates: withLanguages("/contacto") },

    { url: `${SITE.url}/privacidad`, changeFrequency: "yearly", priority: 0.3, alternates: withLanguages("/privacidad") },
    { url: `${SITE.url}/en/privacy`, changeFrequency: "yearly", priority: 0.2, alternates: withLanguages("/privacidad") },

    { url: `${SITE.url}/politica-de-devoluciones`, changeFrequency: "yearly", priority: 0.3, alternates: withLanguages("/politica-de-devoluciones") },
    { url: `${SITE.url}/en/returns-policy`, changeFrequency: "yearly", priority: 0.2, alternates: withLanguages("/politica-de-devoluciones") },
  ];

  // A slug missing from the ES<->EN maps in lib/i18n.ts would otherwise
  // publish ".../undefined" URLs: skip the sibling instead.
  for (const p of products) {
    const esPath = `/productos/${p.slug}`;
    const enSlug = PRODUCT_SLUG_EN[p.slug];
    const lastModified = p.updatedAt;
    entries.push({ url: `${SITE.url}${esPath}`, changeFrequency: "monthly", priority: 0.8, lastModified, alternates: enSlug ? withLanguages(esPath) : undefined });
    if (enSlug) {
      entries.push({ url: `${SITE.url}/en/products/${enSlug}`, changeFrequency: "monthly", priority: 0.7, lastModified, alternates: withLanguages(esPath) });
    }
  }

  for (const p of blogPosts) {
    const esPath = `/blog/${p.slug}`;
    entries.push({
      url: `${SITE.url}${esPath}`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: p.modifiedAt ?? p.publishedAt,
      alternates: BLOG_SLUG_EN[p.slug] ? withLanguages(esPath) : undefined,
    });
  }
  for (const p of blogPostsEn) {
    const esSlug = BLOG_SLUG_ES[p.slug];
    entries.push({
      url: `${SITE.url}/en/blog/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.5,
      lastModified: p.modifiedAt ?? p.publishedAt,
      alternates: esSlug ? withLanguages(`/blog/${esSlug}`) : undefined,
    });
  }

  return entries;
}
