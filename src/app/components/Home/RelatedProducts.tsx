"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productimg from "@/assets/product-img.png";
import Image from "next/image";
import { Product } from "@/types/types";
import Link from "next/link";
const RelatedProduct = ({ products }: { products: Product[] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

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
              className="border rounded-lg shadow-md p-2 lg:p-6 flex flex-col items-start bg-white"
            >
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

              <Link
                href={`/products/${product?.slug}`}
                className="cursor-pointer hover:underline"
              >
                <p className=" mb-2 font-semibold text-lg line-clamp-2">
                  {product.name}
                </p>
              </Link>
              <h3 className=" mb-1 text-lg">{product.pageTitle}</h3>
              <p className="text-lg font-semibold ">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                }).format(Number(product.price))}
              </p>
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
