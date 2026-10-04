import { RootShell, rootMetadata, viewport } from "@/components/RootShell";

export const metadata = rootMetadata;
export { viewport };

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
