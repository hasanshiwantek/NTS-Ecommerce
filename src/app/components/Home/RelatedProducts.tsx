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
import { toast } from "react-toastify";
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
    <>
      <h1 className="h1-secondary-medium ">Related Products</h1>
      <div className=" my-8 relative">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-full max-w-[1719px] gap-8  m-auto lg:px-4">
            {visibleProducts.map((product: any) => (
              <div
                key={product.id}
                className="group relative flex flex-col items-start w-full max-w-[405.75px] h-[350px]  border border-gray-200 rounded-md bg-white p-4 lg:p-6 overflow-hidden "
              >
                {/* Product Image */}
                <div className="h-90 flex items-center justify-center mb-4 w-full max-w-[405.75px] ">
                  <Image
                    src={
                      product.image?.[1]?.path ||
                      product.image?.[0]?.path ||
                      "/default-product-image.svg"
                    }
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain max-h-full"
                  />
                </div>

                {/* Product Name */}
                <Link
                  href={`/products/${product?.slug}`}
                  className="cursor-pointer hover:underline"
                >
                  <p className="mb-2 h6-18-px-medium line-clamp-2 ">
                    {product.name}
                  </p>
                </Link>

                {/* Price + Title (always visible ✅) */}
                <div>
                  <h3 className="h7-16-px-regular">
                    {product.brand.name + " | " + product.availabilityText}
                  </h3>
                  <p className="h6-18-px-medium ">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                    }).format(Number(product.price))}
                  </p>
                </div>

                {/* Action Buttons (hover state) */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-10 group-hover:translate-y-8 lg:group-hover:translate-y-6 group-hover:opacity-100 transition-all duration-300 p-2">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product)); // pura product object jayega
                      toast.success(`${product.name} added to cart!`);
                    }}
                    className="btn-primary w-full lg:w-52 lg:mr-2"
                  >
                    Add to Cart
                  </button>
                  <button className="w-full lg:w-52 lg:mr-2 text-[#4A4A4A] bg-white border border-[#4A4A4A] font-medium rounded-md px-4 py-[6px] text-xl transition-all my-1 duration-200 cursor-pointer">
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
    </>
  );
};

export default RelatedProduct;
