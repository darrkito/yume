// Pure functions turning the site's real content into Markdown — used by
// middleware.ts for Accept:text/markdown negotiation. No fabricated content:
// every renderer reads the exact same data source the human-facing page
// does, so an agent requesting Markdown never sees something the site
// doesn't actually say.
import { products, getProduct, type Product } from "@/content/products";
import { productsEn, getProductTranslation } from "@/content/products.en";
import { blogPosts, getBlogPost } from "@/content/blog";
import { blogPostsEn, getBlogPostEn } from "@/content/blog.en";
import { getFaqCategories } from "@/content/faq";
import { getFaqCategoriesEn } from "@/content/faq.en";
import { SITE } from "@/content/site";
import { PRODUCT_SLUG_EN } from "@/lib/i18n";

export function productsListMarkdown(lang: "es" | "en"): string {
  const lines = [lang === "en" ? "# Yume — Products" : "# Yume — Productos", ""];
  for (const p of products) {
    const url = lang === "en" ? `${SITE.url}/en/products/${PRODUCT_SLUG_EN[p.slug]}` : `${SITE.url}/productos/${p.slug}`;
    const t = lang === "en" ? productsEn[p.slug] : undefined;
    lines.push(`## [${t?.name ?? p.name}](${url})`);
    lines.push(t?.description ?? p.description);
    lines.push("");
  }
  return lines.join("\n");
}

function productMarkdownFor(product: Product, lang: "es" | "en"): string {
  const t = lang === "en" ? getProductTranslation(product.slug) : undefined;
  const name = t?.name ?? product.name;
  const description = t?.description ?? product.description;
  const specs = t?.specs ?? product.specs;
  const details = t?.details ?? product.details;
  const faq = t?.faq ?? product.faq;

  const lines = [`# ${name}`, "", description, "", lang === "en" ? "## Specs" : "## Especificaciones"];
  for (const s of specs) lines.push(`- **${s.label}:** ${s.value}`);
  lines.push("", lang === "en" ? "## Details" : "## Detalles");
  for (const d of details) lines.push(`- ${d}`);
  lines.push("", "## FAQ");
  for (const f of faq) {
    lines.push(`**${f.q}**`);
    lines.push(f.a);
    lines.push("");
  }
  return lines.join("\n");
}

export function productMarkdown(slug: string, lang: "es" | "en"): string | null {
  const product = getProduct(slug);
  if (!product) return null;
  return productMarkdownFor(product, lang);
}

export function faqMarkdown(lang: "es" | "en"): string {
  const categories = lang === "en" ? getFaqCategoriesEn() : getFaqCategories();
  const lines = [lang === "en" ? "# Yume — Frequently Asked Questions" : "# Yume — Preguntas frecuentes", ""];
  for (const category of categories) {
    lines.push(`## ${category.label}`, "");
    for (const item of category.items) {
      lines.push(`**${item.q}**`);
      lines.push(item.a);
      lines.push("");
    }
  }
  return lines.join("\n");
}

export function blogListMarkdown(lang: "es" | "en"): string {
  const posts = lang === "en" ? blogPostsEn : blogPosts;
  const lines = [lang === "en" ? "# Yume — Blog" : "# Yume — Blog", ""];
  for (const p of posts) {
    const url = lang === "en" ? `${SITE.url}/en/blog/${p.slug}` : `${SITE.url}/blog/${p.slug}`;
    lines.push(`## [${p.title}](${url})`);
    lines.push(p.description);
    lines.push("");
  }
  return lines.join("\n");
}

export function blogPostMarkdown(slug: string, lang: "es" | "en"): string | null {
  const post = lang === "en" ? getBlogPostEn(slug) : getBlogPost(slug);
  if (!post) return null;
  const lines = [`# ${post.title}`, "", post.intro, ""];
  for (const section of post.sections) {
    lines.push(`## ${section.heading}`, "");
    for (const paragraph of section.body) lines.push(paragraph, "");
  }
  return lines.join("\n");
}
