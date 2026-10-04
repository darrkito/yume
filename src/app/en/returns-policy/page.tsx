import type { Metadata } from "next";
import Link from "next/link";
import { SITE, waLink } from "@/content/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Returns and Exchanges Policy",
  description: "Yume's returns and exchanges policy: defective items only, within 48 hours of your package arriving, with return shipping paid by the customer.",
  path: "/en/returns-policy",
  lang: "en",
});

const SECTIONS = [
  {
    title: "1. Defective items only",
    body: "Every product is made to order with your design or details, so we only accept returns or exchanges when an item arrives defective. We don't accept returns or exchanges of items that aren't defective.",
  },
  {
    title: "2. Deadline: 48 hours",
    body: "You have 48 hours from the moment your package arrives to request a return or exchange. After that we can't accept it.",
  },
  {
    title: "3. How to request it",
    body: `Message us on WhatsApp or at ${SITE.email} within those 48 hours with your order number and photos of the defect.`,
  },
  {
    title: "4. Return shipping",
    body: "The defective item must be shipped back to Yume, for both a return and an exchange. Return shipping is paid by the customer.",
  },
  {
    title: "5. Refund or exchange",
    body: "Once we receive the item and confirm the defect, you can choose a refund or have us send you the item again.",
  },
];

export default function ReturnsPolicyPage() {
  const breadcrumb = breadcrumbSchema("/en/returns-policy", [{ name: "Home", url: "/en" }, { name: "Returns Policy" }]);
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink sm:text-5xl">Returns and Exchanges Policy</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm text-ink-soft">Last updated: October 4, 2026</p>

      <div className="mt-12 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm text-ink-soft">
        Did your order arrive defective?{" "}
        <a href={waLink("Hi, my Yume order arrived defective. My order number is: ")} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
          Message us on WhatsApp
        </a>{" "}
        or check the <Link href="/en/faq" className="font-semibold text-brand hover:underline">FAQ</Link>.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </section>
  );
}
