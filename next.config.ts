import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/zurri-cloud/image/upload",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;