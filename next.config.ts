import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
