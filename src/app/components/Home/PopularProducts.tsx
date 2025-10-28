"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { fetchPopularProducts } from "@/redux/slices/homeSlice";
import { addToCart } from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";
import PopularProductSkeleton from "../loader/PopularProductSkeleton";
const PopularProducts = () => {
  const dispatch = useAppDispatch();
  const { popularProducts, loading, error } = useAppSelector(
    (state: any) => state.home
  );
  const products = popularProducts?.data || [];

  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, [dispatch]);

  // Extract unique brands from product data
  const brands = useMemo(() => {
    if (!products.length) return [];
    const uniqueBrands = Array.from(
      new Set(products.map((p: any) => p.brand?.name).filter(Boolean))
    );
    return ["All", ...uniqueBrands];
  }, [products]);

  const [activeTab, setActiveTab] = useState("All");
  const filteredProducts = useMemo(() => {
    if (activeTab === "All") return products;
    return products.filter((p: any) => p.brand?.name === activeTab);
  }, [products, activeTab]);

  return (
    <div className="min-h-screen bg-white md:px-[7%] lg:px-[5.2%] xl:px-[5.2%] 2xl:px-[5.2%] px-[7%]">
      <div className="mx-auto">
        {/* Header */}
        <header className="text-center flex flex-col 2xl:gap-5 gap-3 mb-10 ">
          <h1 className="h1-lg mb-4">Popular Products</h1>
          <p className="h3-24px-regular mx-auto ">
            Explore our most popular products, carefully crafted and loved by
            our customers for <br /> their quality and performance.
          </p>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-200 mb-10  whitespace-nowrap scrollbar-hide">
          <div className="flex justify-center gap-3 -mb-px">
            {brands.map((brandName: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveTab(brandName)}
                className={`inline-block py-3 px-4 h4-medium  transition-colors duration-200 ${
                  brandName === activeTab
                    ? "!text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                    : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
                }`}
                style={{ minWidth: "80px" }}
              >
                {brandName}
              </button>
            ))}
          </div>
        </nav>

        {/* Loading/Error/Products */}
        {loading ? (
          <main
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
               2xl:grid-cols-4 gap-10 relative justify-items-center"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <PopularProductSkeleton key={i} />
            ))}
          </main>
        ) : error ? (
          <p className="text-center text-red-500">Failed to load products.</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <main
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                       2xl:grid-cols-4 gap-10 relative justify-items-center"
          >
            <AnimatePresence mode="wait">
              {filteredProducts.slice(0, 8).map((product: any, index: any) => (
                <motion.div
                  key={product.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col justify-evenly items-start 
                             w-full xl:w-[101.5%] xl:h-[335.55px] 2xl:w-[100.4%] 2xl:h-[449px] 
                             border border-[#D6D6D6] rounded-md bg-white p-4 lg:p-6 overflow-hidden"
                >
                  {/* Product Image */}
                  <div
                    className="w-full flex items-center justify-center 
                                xl:h-[225px] 2xl:h-[240px] mb-4"
                  >
                    <Image
                      src={
                        product.image?.[1]?.path ||
                        product.image?.[0]?.path ||
                        "/default-product-image.svg"
                      }
                      alt={product.name}
                      width={200}
                      height={100}
                      className="object-contain h-full w-auto"
                    />
                  </div>

                  {/* Product Name */}
                  <Link
                    href={`/products/${product?.slug}`}
                    className="relative inline-block cursor-pointer group"
                  >
                    <p className="h6-18-px-medium line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </p>
                  </Link>

                  {/* Brand + Availability + Price */}
                  <div className="flex flex-col justify-between min-h-[4.5rem] mt-2">
                    <h3 className="h7-16-px-regular line-clamp-1">
                      {product.brand?.name} |{" "}
                      <span className="!text-[#219653]">
                        {product.availabilityText || "In Stock"}
                      </span>
                    </h3>

                    <p className="h6-18-px-medium group-hover:invisible">
                      {product?.price
                        ? new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          }).format(Number(product.price))
                        : "$0.00"}
                    </p>
                  </div>

                  {/* Hover Buttons */}
                  <div
                    className="absolute bottom-5 xl:bottom-8 left-0 right-0 flex justify-center gap-3 
                                opacity-0 translate-y-10 group-hover:translate-y-4 
                                lg:group-hover:translate-y-6 group-hover:opacity-100 
                                transition-all duration-300 p-2"
                  >
                    <button
                      onClick={() => {
                        dispatch(addToCart(product));
                        toast.success(`${product.name} added to cart!`);
                      }}
                      className="btn-primary xl:!text-2xl 2xl:!text-[22px] 2xl:!font-medium 
                                 w-full sm:w-[48%] md:w-[45%] lg:w-[50%] xl:w-[45%]
                                 2xl:w-[173.875px] 2xl:h-[50px] whitespace-nowrap"
                    >
                      Add to Cart
                    </button>

                    <button
                      className="xl:!text-2xl 2xl:!text-[22px] 2xl:!font-medium 
                                 w-full sm:w-[48%] md:w-[45%] lg:w-[50%] xl:w-[45%]
                                 2xl:w-[173.875px] 2xl:h-[50px] mr-2
                                 text-[#4A4A4A] bg-white border border-[#4A4A4A] 
                                 rounded-md px-4 py-2 transition-all my-1 duration-200 cursor-pointer whitespace-nowrap"
                    >
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </main>
        )}

        {/* Explore More Button */}
        <div className="mt-16 text-center">
          <Link href={"/products"}>
            <button className="bg-white border-2 border-[#2A2A2A]  !text-[#2A2A2A] h4-regular font-semibold py-3 px-8 rounded-full hover:border-gray-400 hover:shadow-sm transition-colors duration-150  2xl:px-[30px] 2xl:py-[20.5px]">
              Explore more products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
