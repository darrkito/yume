import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TattooPage } from "@/components/TattooPage";

export const metadata: Metadata = pageMetadata({
  title: "Tatuajes Temporales Personalizados con tu Logo o Foto",
  description:
    "Tatuajes temporales personalizados con tu logo, diseño o foto para fiestas, bodas y eventos. Prueba digital incluida. Cotiza por WhatsApp; envíos a todo México.",
  path: "/productos/tatuajes-temporales-personalizados",
});

export default function Page() {
  return <TattooPage lang="es" />;
}
