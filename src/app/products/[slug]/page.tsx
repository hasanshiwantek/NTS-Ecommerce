import type { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";
import { fetchProductBySlug, fetchProducts } from "@/lib/api/products";
import ProductCard from "@/app/components/Product/ProductCard";
import ProductOverview from "@/app/components/Product/ProductOverview";
import ProductFAQs from "@/app/components/Product/ProductFAQs";
import ProductReview from "@/app/components/Product/ProductReview";
import RelatedProduct from "@/app/components/Home/RelatedProducts";
// ✅ Dynamic metadata for SEO
export async function generateMetadata(props: {
  params: { slug: string };
}): Promise<Metadata> {
  const { params } = props;
  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found | New Town Spares",
      description: "This product could not be found.",
    };
  }

  const url = `https://nts-ecommerce.vercel.app/products/${params.slug}`;

  return {
    title: `${product.pageTitle || product.name} | New Town Spares`,
    description:
      product.metaDescription?.substring(0, 160) ||
      product.description?.substring(0, 160) ||
      "Buy quality products at New Town Spares.",
    keywords:
      product.searchKeywords ||
      `${product.name}, ${product.brand?.name}, New Town Spares`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: product.pageTitle || product.name,
      description: product.metaDescription || product.description,
      url,
      siteName: "New Town Spares",
      images: [
        {
          url: product.image?.[0]?.path || "/default-product-image.svg",
          width: 1200,
          height: 630,
          alt: product.pageTitle || product.name,
        },
      ],
      type: "website", // ✅ cast since Next.js types don’t allow "product"
    },
    twitter: {
      card: "summary_large_image",
      title: product.pageTitle || product.name,
      description: product.metaDescription || product.description,
      images: [product.image?.[0]?.path || "/default-product-image.svg"],
    },
  };
}

// ✅ Page component (server-side)
export default async function ProductPage(props: { params: { slug: string } }) {
  const { params } = props; // ✅ unwrap props synchronously
  console.log("Slug param:", params.slug); // should log string, not Promise

  const product = await fetchProductBySlug(params.slug);
  const products = await fetchProducts();

  if (!product) {
    return <div className="text-center py-10">❌ Product not found</div>;
  }

  // ✅ JSON-LD Structured Data for rich snippets
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.pageTitle || product.name,
    image: product.image?.[0]?.path || "/default-product-image.svg",
    description: product.metaDescription || product.description,
    sku: product.sku,
    mpn: product.mpn,
    brand: {
      "@type": "Brand",
      name: product.brand?.name || "New Town Spares",
    },
    offers: {
      "@type": "Offer",
      url: `https://nts-ecommerce.vercel.app/products/${params.slug}`,
      priceCurrency: "USD",
      price: product.price,
      availability: product.availabilityText
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "New Town Spares",
      },
    },
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="my-6">
        {/* H1 for SEO */}
        <h1 className="text-2xl font-bold mb-4">{product.pageTitle}</h1>

        {/* Product Sections */}
        <ProductCard product={product} />
        <ProductOverview product={product} />
        <ProductFAQs />
        <ProductReview />
        <RelatedProduct products={products} />
      </article>
    </>
  );
}
