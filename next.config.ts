import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project — a stray package-lock.json in
    // the home directory would otherwise make Next.js infer /home/darrkito
    // as the root, which it then refuses to use.
    root: __dirname,
  },
};

export default nextConfig;
