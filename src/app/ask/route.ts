import { NextRequest, NextResponse } from "next/server";
import { products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { generalFaq } from "@/content/faq";
import { generalFaqEn } from "@/content/faq.en";
import { blogPosts } from "@/content/blog";
import { blogPostsEn } from "@/content/blog.en";
import { PRODUCT_SLUG_EN } from "@/lib/i18n";
import { SITE } from "@/content/site";

// NLWeb-style /ask endpoint (github.com/microsoft/NLWeb, nlweb-rest-api.md):
// required `query`, optional `site`, `prev`, `mode`, `streaming`, `query_id`.
// Implements mode=list only: keyword retrieval over the same real products,
// FAQ and blog content the site serves, no LLM, no generated text. Always
// answers with one non-streaming JSON object (a valid response for
// streaming=false); `summarize`/`generate` are not offered and fall back to list.

type Doc = { url: string; name: string; description: string; text: string; schema_object: Record<string, unknown> };

const strip = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const STOP = new Set("cuanto cuesta cuestan como donde que los las del con una por para the how much does what where are and for with".split(" "));
const tokens = (s: string) => strip(s).split(/[^a-z0-9]+/).filter((t) => t.length > 2 && !STOP.has(t));

let corpus: (Doc & { n: string; nn: string })[] | undefined;
function getCorpus() {
  if (corpus) return corpus;
  const docs: Doc[] = [];
  for (const p of products) {
    const en = productsEn[p.slug];
    const esUrl = `${SITE.url}/productos/${p.slug}`;
    docs.push({ url: esUrl, name: p.name, description: p.description, text: `${p.category} ${p.description}`, schema_object: { "@type": "Product", name: p.name, url: esUrl, offers: { "@type": "Offer", price: p.price, priceCurrency: p.currency } } });
    if (en) {
      const enUrl = `${SITE.url}/en/products/${PRODUCT_SLUG_EN[p.slug]}`;
      docs.push({ url: enUrl, name: en.name ?? p.name, description: en.description ?? "", text: `${en.category ?? ""} ${en.description ?? ""}`, schema_object: { "@type": "Product", name: en.name ?? p.name, url: enUrl, offers: { "@type": "Offer", price: p.price, priceCurrency: p.currency } } });
    }
  }
  for (const [list, faqUrl] of [[generalFaq, `${SITE.url}/preguntas-frecuentes`], [generalFaqEn, `${SITE.url}/en/faq`]] as const) {
    for (const f of list) docs.push({ url: faqUrl, name: f.q, description: f.a, text: f.a, schema_object: { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } } });
  }
  for (const [posts, base] of [[blogPosts, "/blog"], [blogPostsEn, "/en/blog"]] as const) {
    for (const b of posts) docs.push({ url: `${SITE.url}${base}/${b.slug}`, name: b.title, description: b.description, text: b.description, schema_object: { "@type": "Article", headline: b.title, url: `${SITE.url}${base}/${b.slug}`, datePublished: b.publishedAt } });
  }
  corpus = docs.map((d) => ({ ...d, n: strip(d.name), nn: strip(`${d.description} ${d.text}`) }));
  return corpus;
}

function ask(query: string, queryId: string) {
  const qt = [...new Set(tokens(query))];
  const scored = getCorpus()
    .map((d) => ({ d, s: qt.reduce((a, t) => a + (d.n.includes(t) ? 3 : 0) + (d.nn.includes(t) ? 1 : 0), 0) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 10);
  const max = scored[0]?.s ?? 1;
  return {
    query_id: queryId,
    mode: "list",
    results: scored.map(({ d, s }) => ({ url: d.url, name: d.name, site: SITE.url.replace("https://", ""), score: Math.round((s / max) * 100), description: d.description.slice(0, 300), schema_object: d.schema_object })),
  };
}

function handle(params: URLSearchParams | Record<string, unknown>) {
  const get = (k: string) => String(params instanceof URLSearchParams ? (params.get(k) ?? "") : (params[k] ?? ""));
  const query = (get("decontextualized_query") || get("query")).trim();
  if (!query) return NextResponse.json({ error: "Missing required argument: query" }, { status: 400 });
  return NextResponse.json(ask(query.slice(0, 300), get("query_id") || crypto.randomUUID()));
}

export async function GET(req: NextRequest) {
  return handle(req.nextUrl.searchParams);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  return handle(typeof body === "object" && body ? (body as Record<string, unknown>) : {});
}
