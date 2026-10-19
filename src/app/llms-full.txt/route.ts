import { products } from "@/content/products";
import { productMarkdown, faqMarkdown, blogListMarkdown } from "@/lib/markdown";
import { SITE } from "@/content/site";

// Everything an agent needs in one fetch: every product page (ES and EN) as
// Markdown, the FAQ, the blog index and how to order. Built at deploy time
// from the same content modules the pages render, never a separate copy.
export const dynamic = "force-static";

const HOW_TO_ORDER = `# How AI agents can order from Yume

1. Read a product with the MCP tool \`get_product\` (POST ${SITE.url}/mcp): its \`orderGuide\` lists option ids, piece minimums and personalization fields.
2. Price it exactly with \`get_price_quote\` (same prices the checkout charges, MXN, with delivery options).
3. Hand off to the customer with either:
   - \`create_cart_link\`: a link that opens the cart already filled (${SITE.url}/carrito?add=slug:variantId:qty,...); the customer adds shipping details and pays, or
   - \`create_checkout\`: with the customer's consent, name, email, phone and delivery details, creates the order and returns a Mercado Pago payment link the customer opens to pay (card, OXXO cash, SPEI). The agent never handles card data.
4. Products that need a logo or design: the customer sends it by WhatsApp (+52 33 1895 8175) after paying; a digital proof follows within 24 hours, with up to 2 rounds of changes.

Example cart link (150 holographic die-cut vinyl stickers): ${SITE.url}/carrito?add=stickers-vinil-impermeable:150%7Ctroquelado%7Cholografico:1
`;

export function GET() {
  const parts = [
    `# ${SITE.name} (${SITE.domain}): full catalog for AI agents\n\n> ${SITE.description}\n\nSummary: ${SITE.url}/llms.txt · Agent instructions: ${SITE.url}/agents.md`,
    HOW_TO_ORDER,
    ...products.map((p) => productMarkdown(p.slug, "es")),
    ...products.map((p) => productMarkdown(p.slug, "en")),
    faqMarkdown("es"),
    faqMarkdown("en"),
    blogListMarkdown("es"),
  ].filter(Boolean);
  return new Response(parts.join("\n\n---\n\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
