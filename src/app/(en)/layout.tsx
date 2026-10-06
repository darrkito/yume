import { RootShell, rootMetadataEn, viewport } from "@/components/RootShell";

export const metadata = rootMetadataEn;
export { viewport };

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
