import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/tasty-corner-demo",
  assetPrefix: "/tasty-corner-demo",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
