import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable compression
  compress: true,

  // Optimize images
  images: {
    domains: [
      "ecom.brokercell.com",
      "images.pexels.com",
      "images.unsplash.com",
      "https://cdn11.bigcommerce.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "ecom.brokercell.com",
        port: "", // leave empty if no port
        pathname: "/product_images/**", // allow all images inside /product_images/
      },
    ],
    // Optimize image formats (Next.js 15 compatible)
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL
    minimumCacheTTL: 60,
    // Enable image optimization
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimize production builds
  productionBrowserSourceMaps: false,

  experimental: {
    esmExternals: true, // use ES modules
    serverActions: { allowedOrigins: [] }, // if needed
  },
  compiler: {
    reactRemoveProperties: true, // Remove data-react-* props in production
  },
  // optional: tell Next.js to target modern browsers only
  future: {
    webpack5: true,
  },
  // Headers for caching and performance
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
};

export default nextConfig;
