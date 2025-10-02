import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
  },
};

export default nextConfig;
