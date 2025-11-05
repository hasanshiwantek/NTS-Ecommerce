import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const nextConfig: NextConfig = withBundleAnalyzer({
  enabled: isAnalyze,
})({
  // Enable compression
  compress: true,

  // Optimize images
  images: {
    domains: [
      "ecom.brokercell.com",
      "images.pexels.com",
      "images.unsplash.com",
      "cdn11.bigcommerce.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
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
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Remove react props in production
  compiler: {
    reactRemoveProperties: true,
  },

  // Reduce legacy polyfills
  experimental: {
    esmExternals: true,
    serverActions: { allowedOrigins: [] },
  },

  future: {
    webpack5: true,
  },

  webpack: (config) => {
    // Target modern JS environment
    config.output.environment = {
      arrowFunction: true,
      bigIntLiteral: true,
      const: true,
      destructuring: true,
      dynamicImport: true,
      forOf: true,
      module: true,
    };

    // Only modify cacheGroups if splitChunks exists
    if (
      config.optimization?.splitChunks &&
      typeof config.optimization.splitChunks !== "boolean"
    ) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      };
    }

    return config;
  },

  // Optional caching headers for static assets
  async headers() {
    return [
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
});

export default nextConfig;
