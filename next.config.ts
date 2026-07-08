import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> deploys to Cloudflare Pages, Netlify, or any static host.
  output: "export",
  images: {
    // Required for static export (no server-side image optimization).
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
