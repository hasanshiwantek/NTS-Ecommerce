import type { Metadata } from "next";
import RelatedProduct from "./components/Home/RelatedProducts";
import Banner from "./components/Home/Banner";

export const metadata: Metadata = {
  title: "Home | New Town Spares",
  description:
    "Welcome to New Town Spares – your one-stop shop for connectors, cables, motherboards, and electronics. Get the best prices and fast delivery.",
  openGraph: {
    title: "New Town Spares – Home",
    description:
      "Shop electronics, connectors, and computer accessories at New Town Spares. Affordable, reliable, and delivered fast.",
    url: "https://nts-ecommerce.vercel.app",
    siteName: "New Town Spares",
    images: [
      {
        url: "/navlogo.png", // ✅ apna OG image yaha dalna
        width: 1200,
        height: 630,
        alt: "New Town Spares Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Town Spares – Home",
    description:
      "Buy electronics, connectors, cables, and computer parts at New Town Spares.",
    images: ["/navlogo.png"], // ✅ same ya custom image
  },
};

const Page = () => {
  return (
    <>
      <main className="flex flex-col gp-5" role="main">
        <Banner />
        <RelatedProduct />
      </main>
    </>
  );
};

export default Page;
