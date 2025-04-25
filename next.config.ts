import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Ryans",
  assetPrefix: "https://L0tt3B.github.io/Ryans",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
