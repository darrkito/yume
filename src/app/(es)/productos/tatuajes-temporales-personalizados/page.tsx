import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TattooPage } from "@/components/TattooPage";

export const metadata: Metadata = pageMetadata({
  title: "Tatuajes Temporales Personalizados en Guadalajara",
  description:
    "Tatuajes temporales con tu logo o diseño, en el tamaño que necesites. Tintas aptas para la piel, producción en 2-3 días hábiles tras el anticipo. Cotiza por WhatsApp.",
  path: "/productos/tatuajes-temporales-personalizados",
});

export default function Page() {
  return <TattooPage lang="es" />;
}
