import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { blogPosts } from "@/content/blog";
import { blogPostsEn } from "@/content/blog.en";
import { SITE } from "@/content/site";
import { esPathToEnPath, PRODUCT_SLUG_EN, BLOG_SLUG_ES } from "@/lib/i18n";

// Every URL's `alternates.languages` mirrors the same ES<->EN pair regardless
// of which language entry it's attached to — that reciprocity is what tells
// Google/Bing the two URLs are the same content in two languages.
function withLanguages(esPath: string) {
  return {
    languages: {
      "es-MX": `${SITE.url}${esPath}`,
      "en-US": `${SITE.url}${esPathToEnPath(esPath)}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: SITE.url, changeFrequency: "weekly", priority: 1, alternates: withLanguages("/") },
    { url: `${SITE.url}/en`, changeFrequency: "weekly", priority: 0.9, alternates: withLanguages("/") },

    { url: `${SITE.url}/productos`, changeFrequency: "weekly", priority: 0.9, alternates: withLanguages("/productos") },
    { url: `${SITE.url}/en/products`, changeFrequency: "weekly", priority: 0.8, alternates: withLanguages("/productos") },

    { url: `${SITE.url}/preguntas-frecuentes`, changeFrequency: "monthly", priority: 0.7, alternates: withLanguages("/preguntas-frecuentes") },
    { url: `${SITE.url}/en/faq`, changeFrequency: "monthly", priority: 0.6, alternates: withLanguages("/preguntas-frecuentes") },

    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.7, alternates: withLanguages("/blog") },
    { url: `${SITE.url}/en/blog`, changeFrequency: "weekly", priority: 0.6, alternates: withLanguages("/blog") },
  ];

  for (const p of products) {
    const esPath = `/productos/${p.slug}`;
    entries.push({ url: `${SITE.url}${esPath}`, changeFrequency: "monthly", priority: 0.8, alternates: withLanguages(esPath) });
    entries.push({
      url: `${SITE.url}/en/products/${PRODUCT_SLUG_EN[p.slug]}`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: withLanguages(esPath),
    });
  }

  for (const p of blogPosts) {
    const esPath = `/blog/${p.slug}`;
    entries.push({
      url: `${SITE.url}${esPath}`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: p.publishedAt,
      alternates: withLanguages(esPath),
    });
  }
  for (const p of blogPostsEn) {
    const esPath = `/blog/${BLOG_SLUG_ES[p.slug]}`;
    entries.push({
      url: `${SITE.url}/en/blog/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.5,
      lastModified: p.publishedAt,
      alternates: withLanguages(esPath),
    });
  }

  return entries;
}
