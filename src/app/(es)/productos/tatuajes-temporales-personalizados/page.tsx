import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TattooPage } from "@/components/TattooPage";

export const metadata: Metadata = pageMetadata({
  title: "Tatuajes Temporales Personalizados Guadalajara",
  description:
    "Tatuajes temporales personalizados en Guadalajara: tu logo o foto para fiestas, bodas y eventos. Cotiza por WhatsApp; envío a todo México.",
  path: "/productos/tatuajes-temporales-personalizados",
});

export default function Page() {
  return <TattooPage lang="es" />;
}
