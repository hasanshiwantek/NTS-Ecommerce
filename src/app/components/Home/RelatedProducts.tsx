"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productimg from "@/assets/product-img.png";
import Image from "next/image";
import { Product } from "@/types/types";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
const RelatedProduct = ({ products }: { products: Product[] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const dispatch = useAppDispatch();
      const cart = useAppSelector((state: RootState) => state.cart.items);
      console.log(cart);
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, products.length - itemsPerPage)
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className=" my-8 relative">
      <h1 className="h1-primary my-5">Related Products</h1>

      {/* Slider Row */}
      <div className="flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 lg:px-4">
          {visibleProducts.map((product: any) => (
          <div
  key={product.id}
  className="group relative border rounded-lg shadow-md p-2 lg:p-6 flex flex-col items-start bg-white overflow-hidden"
>
  {/* Product Image */}
  <div className="w-full h-40 flex items-center justify-center mb-4">
    <Image
      src={
        product.image?.[1]?.path ||
        product.image?.[0]?.path ||
        "/default-product-image.svg"
      }
      alt={product.name}
      width={160}
      height={160}
      className="object-contain max-h-full"
    />
  </div>

  {/* Product Name */}
  <Link
    href={`/products/${product?.slug}`}
    className="cursor-pointer hover:underline"
  >
    <p className="mb-2 font-semibold text-lg line-clamp-2">{product.name}</p>
  </Link>

  {/* Price + Title (default state) */}
  <div className="transition-all duration-300 group-hover:translate-y-10 opacity-100 group-hover:opacity-0">
    <h3 className="mb-1 text-lg">{product.pageTitle}</h3>
    <p className="text-lg font-semibold">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(Number(product.price))}
    </p>
  </div>

  {/* Action Buttons (hover state) */}
  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
    <button  onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: Number(product.price),
                    image:
                      product.image?.[0]?.path ||
                      "/default-product-image.svg",
                    slug: product.slug,
                  })
                )
              } className="btn-primary w-56">
      Add to Cart
    </button>
    <button className="w-56 text-[#4A4A4A] bg-white border-1 border-[#4A4A4A] font-medium rounded-md px-4 py-[6px] text-xl transition-all my-1 duration-200 cursor-pointer">
     Get Quote
    </button>
  </div>
</div>

          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex >= products.length - itemsPerPage}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RelatedProduct;
