import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gatewayBaseUrl = process.env.NEXT_PUBLIC_GATEWAY_BASE_URL || "https://bluepixel.vivo.com.cn";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  async rewrites() {
    return [
      {
        source: "/web/:path*",
        destination: `${gatewayBaseUrl}/web/:path*`,
      },
      {
        source: "/api/v1/:path*",
        destination: `${gatewayBaseUrl}/api/v1/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
