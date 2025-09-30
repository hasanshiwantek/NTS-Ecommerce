// components/Product/ProductList.tsx

"use client";

import { useState } from "react";
import ProductCategoryCard from "./ProductCategoryCard";
import ProductGridCard from "./ProductGridCard";
import SortingBar from "./SortingBar";
import { motion, AnimatePresence } from "framer-motion";
import ProductSkeleton from "../loader/ProductSkeleton";
import Pagination from "@/components/ui/pagination";

interface ProductListProps {
  filters: any;
  setFilters: any;
  products: any[];
  pagination: any;
  isLoading?: boolean;
  error?: string | null;
}

export default function ProductList({
  filters,
  setFilters,
  products,
  pagination,
  isLoading = false,
  error = null,
}: ProductListProps) {
  const [view, setView] = useState<"list" | "grid">("list");
  const [page, setPage] = useState(1);
  const total = pagination?.total || 0;
  return (
    <section className="flex-1 px-6">
      {/* Headings */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#4A4A4A]">Heading Text</h2>
        <p className="span-primary">
          Do you need to fix your computer or make it work better? At
          NewTownSpares, we have all the IT Accessories you need! It doesn’t
          matter if it’s for your home, work, or even an old computer. We are
          here to help you. We have parts from popular brands like Intel, Dell,
          and HP.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#4A4A4A]">Heading Text</h2>
        <p className="span-primary">
          Do you need to fix your computer or make it work better? At
          NewTownSpares, we have all the IT Accessories you need! It doesn’t
          matter if it’s for your home, work, or even an old computer. We are
          here to help you. We have parts from popular brands like Intel, Dell,
          and HP.
        </p>
      </div>

      {/* Sort Bar */}
      <SortingBar
        total={total || 0}
        view={view}
        setView={setView}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Error State */}
      {error && (
        <div className="mt-6 text-center text-red-500 font-medium">
          ⚠️ Failed to load products. Please try again later.
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && products?.length === 0 && (
        <div className="mt-6 text-center text-gray-500 font-medium">
          No products found. Try adjusting your filters.
        </div>
      )}

      {/* Loading State */}
      {isLoading && !error && (
        <motion.div
          key="loading"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`mt-4 ${
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              : "space-y-4"
          }`}
        >
          {Array.from({ length: 6 }).map((_, idx) => (
            <ProductSkeleton key={idx} view={view} />
          ))}
        </motion.div>
      )}

      {/* Product Cards */}
      {!isLoading && !error && products?.length > 0 && (
        <motion.div
          key={view}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`mt-4 ${
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              : "space-y-4"
          }`}
        >
          <AnimatePresence mode="wait">
            {products.map((product, idx) =>
              view === "list" ? (
                <motion.div
                  key={`list-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <ProductCategoryCard product={product} />
                </motion.div>
              ) : (
                <motion.div
                  key={`grid-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <ProductGridCard product={product} />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Pagination */}
      {!isLoading && !error && pagination?.lastPage > 1 && (
        <div className="mt-6 flex justify-end">
          <Pagination
            currentPage={filters.page}
            totalPages={pagination?.lastPage || 1}
            onPageChange={(page) =>
              setFilters((prev: any) => ({
                ...prev,
                page,
              }))
            }
          />
        </div>
      )}
    </section>
  );
}
