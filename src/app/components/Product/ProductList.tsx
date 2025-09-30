// components/Product/ProductList.tsx

"use client";

import { useState } from "react";
import ProductCategoryCard from "./ProductCategoryCard";
import ProductGridCard from "./ProductGridCard";
import SortingBar from "./SortingBar";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "@/components/ui/pagination";
const mockProducts = Array(3).fill({
  title:
    "PA09501 - Targus 7200R XE L 4.4GHz PC Server 2*Xeon X5672*2*960G SAS SSD...",
  price: 45.0,
  oldPrice: 60.0,
  sku: "PA09501",
  rating: 4.6,
  reviews: 132,
  image:
    "https://cdn11.bigcommerce.com/s-4jpol1blth/images/stencil/640w/products/78219/966124/41FF8B7RPNL._AC___93112.1736531700.jpg?c=1",
});

export default function ProductList() {
  const [view, setView] = useState<"list" | "grid">("list");
  const [page, setPage] = useState(1);
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
      <SortingBar total={325331} view={view} setView={setView} />

      {/* Animated Product Cards */}
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
          {mockProducts.map((product, idx) =>
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

      {/* Pagination */}
      <div className="mt-6 flex justify-end ">
        <Pagination
          currentPage={page}
          totalPages={10}
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </section>
  );
}
