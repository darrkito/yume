import { RootShell, rootMetadata, viewport } from "@/components/RootShell";

export const metadata = rootMetadata;
export { viewport };

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es-MX">{children}</RootShell>;
}
