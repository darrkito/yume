import { RootShell, rootMetadata, viewport } from "@/components/RootShell";
import NotFound from "./(es)/not-found";

export const metadata = { ...rootMetadata, title: "Página no encontrada", robots: { index: false } };
export { viewport };

// Unmatched URLs have no route group (so no root layout): render the Spanish shell + 404.
export default function GlobalNotFound() {
  return (
    <RootShell lang="es-MX">
      <NotFound />
    </RootShell>
  );
}
