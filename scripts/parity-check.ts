import { blogPosts } from "../src/content/blog";
import { blogPostsEn } from "../src/content/blog.en";
import { BLOG_SLUG_EN } from "../src/lib/i18n";
import type { BlogPost } from "../src/content/blog";

function content(post: BlogPost): string {
  return JSON.stringify([post.intro, post.sections, post.faq ?? []]);
}

function wordCount(text: string): number {
  return (text.match(/[\p{L}\p{N}]+/gu) ?? []).length;
}

function sameSet<T>(a: Set<T>, b: Set<T>): boolean {
  return a.size === b.size && [...a].every((value) => b.has(value));
}

let differences = 0;
for (const es of blogPosts) {
  const en = blogPostsEn.find((post) => post.slug === BLOG_SLUG_EN[es.slug]);
  const reasons: string[] = [];
  if (!en) {
    reasons.push("falta post EN");
  } else {
    const esContent = content(es);
    const enContent = content(en);
    const esWords = wordCount(esContent);
    const enWords = wordCount(enContent);
    if (enWords < esWords * 0.85) reasons.push(`palabras ES ${esWords}, EN ${enWords}`);
    if (es.sections.length !== en.sections.length) reasons.push(`sections ES ${es.sections.length}, EN ${en.sections.length}`);
    if ((es.faq?.length ?? 0) !== (en.faq?.length ?? 0)) reasons.push(`faq ES ${es.faq?.length ?? 0}, EN ${en.faq?.length ?? 0}`);
    const esLinks = (esContent.match(/\]\(\//g) ?? []).length;
    const enLinks = (enContent.match(/\]\(\//g) ?? []).length;
    if (enLinks < esLinks - 1) reasons.push(`enlaces internos ES ${esLinks}, EN ${enLinks}`);
    if (JSON.stringify(es.relatedProductSlugs) !== JSON.stringify(en.relatedProductSlugs)) reasons.push("relatedProductSlugs distintos");
    const mappedBlogs = (es.relatedBlogSlugs ?? []).map((slug) => BLOG_SLUG_EN[slug]);
    if (mappedBlogs.some((slug) => !slug) || !sameSet(new Set(mappedBlogs), new Set(en.relatedBlogSlugs ?? []))) reasons.push("relatedBlogSlugs distintos o sin mapeo");
    if ((es.sources?.length ?? 0) !== (en.sources?.length ?? 0)) reasons.push(`sources ES ${es.sources?.length ?? 0}, EN ${en.sources?.length ?? 0}`);
  }
  if (reasons.length) {
    differences++;
    console.log(`${es.slug} | ${reasons.join("; ")}`);
  }
}

console.log(`parity: ${blogPosts.length} posts, ${differences} con diferencias`);
process.exit(differences > 0 ? 1 : 0);
