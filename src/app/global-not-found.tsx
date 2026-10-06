import { RootShell, rootMetadata, viewport } from "@/components/RootShell";
import { notFoundMetadata } from "@/lib/seo";
import NotFound from "./(es)/not-found";

// Root defaults (metadataBase, icons, twitter) plus noindex and no canonical:
// a 404 must never claim to be the homepage.
export const metadata = { ...rootMetadata, ...notFoundMetadata("es") };
export { viewport };

// Unmatched URLs have no route group (so no root layout): render the Spanish shell + 404.
export default function GlobalNotFound() {
  return (
    <RootShell lang="es-MX">
      <NotFound />
    </RootShell>
  );
}
