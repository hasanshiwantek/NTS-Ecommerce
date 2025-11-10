import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true, // Enable gzip compression

  images: {
    // Allow images from these domains
    domains: [
      "ecom.brokercell.com",
      "images.pexels.com",
      "images.unsplash.com",
      "cdn11.bigcommerce.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow any host over HTTPS
      },
      {
        protocol: "https",
        hostname: "ecom.brokercell.com",
        pathname: "/product_images/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },

  productionBrowserSourceMaps: false,

  compiler: {
    reactRemoveProperties: true, // Remove data-react-* props in production
  },

  experimental: {
    esmExternals: true,
    serverActions: { allowedOrigins: [] },
  },

  future: {
    webpack5: true,
  },

  async headers() {
    return [
      // Cache images & icons for long-term
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:all*(woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async rewrites() {
    // Optional: Prevent redirect loops for images from external APIs
    return [
      {
        source: "/_next/image",
        destination: "/_next/image",
      },
    ];
  },

  // Optional: Reduce bundle size
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};

export default nextConfig;
