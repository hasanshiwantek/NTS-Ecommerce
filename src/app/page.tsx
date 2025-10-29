import type { Metadata } from "next";
import Banner from "./components/Home/Banner";
import { fetchProducts } from "@/lib/api/products";
import TopIndustries from "./components/Home/TopIndustries";
import ItEquipment from "./components/Home/ItEquipment";
import AuthorizedSupplier from "./components/Home/AuthorizedSupplier";
import PopularProducts from "./components/Home/PopularProducts";
import Testimonials from "./components/Home/Testimonials";
import GetInTouch from "./components/Home/GetInTouch";
import Brands from "./components/Home/Brands";
import AOSWrapper from "./components/animation/AOSWrapper";
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
      <main className="flex flex-col gap-30" role="main">
        <AOSWrapper animation="zoom-in" delay={100}>
          <Banner />
        </AOSWrapper>
        <AOSWrapper animation="fade-up" delay={400}>
          <Brands />
        </AOSWrapper>
        <AOSWrapper animation="fade-up" delay={600}>
          <PopularProducts />
        </AOSWrapper>
        <AOSWrapper animation="fade-up" delay={1100}>
          <TopIndustries />
        </AOSWrapper>
        <AOSWrapper animation="fade-up" delay={1600}>
          <ItEquipment />
        </AOSWrapper>
        <AOSWrapper animation="fade-up" delay={1800}>
          <AuthorizedSupplier />
        </AOSWrapper>
        <AOSWrapper animation="fade-up" delay={1900}>
          <Testimonials />
        </AOSWrapper>
        <AOSWrapper animation="fade-up" delay={2000}>
          <GetInTouch />
        </AOSWrapper>
      </main>
    </>
  );
};

export default Page;
