import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PlannersPage } from "@/components/PlannersPage";

export const metadata: Metadata = pageMetadata({
  title: "Detalles Personalizados para Wedding y Event Planners",
  description:
    "Dulceros, stickers, tatuajes temporales y menús de boda personalizados para wedding y event planners. Prueba digital, tiempos claros y cotización por WhatsApp.",
  path: "/planners",
});

export default function Page() {
  return <PlannersPage lang="es" />;
}
