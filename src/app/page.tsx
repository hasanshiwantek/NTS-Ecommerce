import type { Metadata } from "next";
import RelatedProduct from "./components/Home/RelatedProducts";
import Banner from "./components/Home/Banner";
import { fetchProducts } from "@/lib/api/products";
import Spinner from "./components/loader/loader";
import { Suspense } from "react";
import TopIndustries from "./components/Home/TopIndustries";
import ItEquipment from "./components/Home/ItEquipment";
import AuthorizedSupplier from "./components/Home/AuthorizedSupplier";
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

const Page = async () => {
  const products = await fetchProducts();

  return (
    <>
      <main className="flex flex-col gap-5" role="main">
        <Banner />
        <Suspense fallback={<Spinner/>}>
          <RelatedProduct products={products.slice(0, 8)} />
        </Suspense>
        <TopIndustries/>
        <ItEquipment/>
        <AuthorizedSupplier/>
      </main>
    </>
  );
};

export default Page;
