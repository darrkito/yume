import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PlannersPage } from "@/components/PlannersPage";

export const metadata: Metadata = pageMetadata({
  title: "Custom Event Details for Wedding and Event Planners",
  description:
    "Personalized favor boxes, stickers, temporary tattoos and wedding menus for wedding and event planners. Digital proof, clear timelines and WhatsApp quotes.",
  path: "/en/planners",
  lang: "en",
});

export default function Page() {
  return <PlannersPage lang="en" />;
}
