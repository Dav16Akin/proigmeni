import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where the browser supports it (smallest), then WebP, then the original.
    formats: ["image/avif", "image/webp"],
    // Optimised images are content-hashed by URL; cache them for 31 days.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
