import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { BlogGrid } from "@/components/BlogGrid";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog de papelería personalizada",
  description: "Guías sobre papelería personalizada, recetarios médicos y etiquetas para negocios en Guadalajara y Jalisco.",
  path: "/blog",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}/blog#blog`,
  name: "Blog de Yume",
  url: `${SITE.url}/blog`,
  publisher: { "@id": `${SITE.url}/#organization` },
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE.url}/blog/${p.slug}`,
    datePublished: p.publishedAt,
    dateModified: p.modifiedAt ?? p.publishedAt,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
  })),
};

export default function BlogIndexPage() {
  const breadcrumb = breadcrumbSchema("/blog", [{ name: "Inicio", url: "/" }, { name: "Blog" }]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink text-balance sm:text-5xl">Guías y notas</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Papelería creativa personalizada, recetarios médicos y etiquetas para negocios, con foco en Guadalajara y Jalisco.
      </p>

      <div className="mt-14">
        <BlogGrid posts={blogPosts} lang="es" basePath="/blog" allLabel="Todos" readMoreLabel="Leer más" />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
    </section>
  );
}
