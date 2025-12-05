"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductLeft from "./ProductLeft";
import ProductMiddle from "./ProductMiddle";
import ProductRight from "./ProductRight";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { toast } from "react-toastify";
import { addToCart } from "@/redux/slices/cartSlice";

const ProductCard = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();
  const addtocart = ()=>{
     dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  }
  const images =
    product?.image?.length > 0
      ? product.image.map((img: any) => img.path)
      : ["/default-product-image.svg"];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 0 && setQuantity(quantity - 1);

   // ✅ JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: images,
    description: product.metaDescription || product.description,
    sku: product.sku,
    mpn: product.mpn,
    brand: {
      "@type": "Brand",
      name: product.brand?.name || "New Town Spares",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating || 0,
      reviewCount: product.reviews || 0,
    },
    offers: {
      "@type": "Offer",
      url: `https://nts-ecommerce.vercel.app/products/${product.slug}`,
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
    <div className="max-w-full mx-auto">
          {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white rounded-xl w-full 2xl:max-w-[1719px] 2xl:px-3 px-0">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb"  className="flex items-center space-x-2 h5-20px-regular lg:mb-7 sm:mb-7 mb-7 flex-wrap">
          <span>Home</span>
          {/* {product.categoryHierarchy?.map((data: any, index: number) => (
          ))} */}
            <React.Fragment >
              <Image
                className="inline-block align-middle"
                src="/arrow-right.png"
                alt="Arrow Right"
                width={12}
                height={12}
                loading="lazy"
                sizes="12px"
              />
              <span className="h5-regular">{product?.sku}</span>
            </React.Fragment>
        </nav >

        <div className="flex flex-wrap lg:flex-nowrap 2xl:gap-6 xl:gap-[20px] lg:gap-[25px] md:gap-5 sm:gap-4 gap-4 ">
          <ProductLeft
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <ProductMiddle
            product={product}
            quantity={quantity}
            increment={increment}
            decrement={decrement}
            addtocart={addtocart}
          />
          <ProductRight      product={{
              name: product.name,
              image: images[0],
              sku:product.sku,
            }}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
