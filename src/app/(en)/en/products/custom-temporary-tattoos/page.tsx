import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TattooPage } from "@/components/TattooPage";

export const metadata: Metadata = pageMetadata({
  title: "Custom Temporary Tattoos in Guadalajara",
  description:
    "Temporary tattoos with your logo or design, in the size you need. Skin-safe inks, 2-3 business day production after the deposit. Get a quote on WhatsApp.",
  path: "/en/products/custom-temporary-tattoos",
  lang: "en",
});

export default function Page() {
  return <TattooPage lang="en" />;
}
