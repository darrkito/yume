import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { blogPostsEn } from "@/content/blog.en";
import type { Lang } from "@/lib/i18n";

// Reciprocal link back to the blog posts that already cross-sell this
// product via relatedProductSlugs — product pages had no link back to their
// own guides, which left them without the internal-link support blog pages
// get from linking out to products. Both blogPosts and blogPostsEn key
// relatedProductSlugs off the canonical (ES) product slug, so no translation
// is needed to match here.
export function RelatedGuides({ productSlug, lang = "es" }: { productSlug: string; lang?: Lang }) {
  const posts = lang === "en" ? blogPostsEn : blogPosts;
  const related = posts.filter((p) => p.relatedProductSlugs.includes(productSlug));
  if (related.length === 0) return null;

  const title = lang === "en" ? "Related guides" : "Guías relacionadas";
  const blogBase = lang === "en" ? "/en/blog" : "/blog";

  return (
    <div className="mt-14 border-t border-line pt-10">
      <h2 className="animate-fade-up font-display text-2xl text-ink">{title}</h2>
      <ul className="mt-6 space-y-3">
        {related.map((p) => (
          <li key={p.slug}>
            <Link
              href={`${blogBase}/${p.slug}`}
              className="text-sm font-medium text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
