"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import { ChevronUp, ChevronDown } from "lucide-react";
export default function Sidebar({
  categories,
  brands,
  filters,
  setFilters,
  products,
  filterMeta,
  setFilterMeta,
}: {
  categories: any;
  brands: any;
  filters: any;
  setFilters: any;
  products: any;
  filterMeta: any;
  setFilterMeta: any;
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Top Brands"
  );
  const [expandedCategorySection, setExpandedCategorySection] = useState<
    string | null
  >(null);

  const toggleCategorySection = (section: string) => {
    setExpandedCategorySection((prev) => (prev === section ? null : section));
  };

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  // user clicks a category
  const handleCategoryClick = (catId: number, name: string) => {
    setFilters((prev: any) => ({
      ...prev,
      categoryIds: [catId], // or push multiple
      page: 1, // reset page
    }));
    setFilterMeta((prev: any) => ({ ...prev, categoryName: name }));
  };

  // user clicks a brand
  const handleBrandClick = (brandId: number, name: string) => {
    setFilters((prev: any) => ({
      ...prev,
      brandId,
      page: 1,
    }));
    setFilterMeta((prev: any) => ({ ...prev, brandName: name }));
  };

  return (
    <aside className="w-[240px] bg-white border rounded-lg text-sm">
      {/* Category Section */}
      <div className="border-b px-4 py-3 bg-gray-100 rounded-t-lg">
        <h2 className="!text-xl !font-semibold !text-[#4A4A4A]">Category</h2>
      </div>

      <ul className="px-3 py-2 space-y-2">
        {/* Top Brands */}
        <li>
          <div
            onClick={() => toggleSection("Top Brands")}
            className="flex justify-between cursor-pointer transition-all"
          >
            <span className="li-primary !text-[#4A4A4A]">Top Brands</span>
            <span
              className={`transform transition-transform duration-300 ${
                expandedSection === "Top Brands" ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown size={18} className="!text-[#4A4A4A]" />
            </span>
          </div>

          <AnimatePresence initial={false}>
            {expandedSection === "Top Brands" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 ml-2 border-l overflow-hidden"
              >
                <BrandFilter
                  brands={brands}
                  handleBrandClick={handleBrandClick}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Dynamic Categories */}
        {categories.map((cat: any) => (
          <li key={cat.id}>
            <div
              onClick={() => {
                toggleCategorySection(cat.name);
                // ✅ trigger filter/API
              }}
              className="flex justify-between cursor-pointer"
            >
              <span
                className="li-primary !text-[#4A4A4A] hover:bg-gray-50"
                onClick={() => handleCategoryClick(cat.id,cat.name)}
              >
                {cat.name}
              </span>
              <span
                className={`transform transition-transform duration-300 ${
                  expandedCategorySection === cat.name
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              >
                <ChevronDown size={18} className="!text-[#4A4A4A]" />
              </span>
            </div>

            <AnimatePresence initial={false}>
              {expandedCategorySection === cat.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 ml-2 border-l overflow-hidden"
                >
                  <CategoryFilter
                    categories={cat.subcategories || []}
                    handleCategoryClick={handleCategoryClick}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Price Filter */}
      <div className="mt-2">
        <div className="border-t bg-gray-50 px-4 py-3 mt-2">
          <h2 className="!text-xl !font-semibold !text-[#4A4A4A]">
            Shop by price
          </h2>
        </div>
        <div className="p-4">
          <PriceFilter filters={filters} setFilters={setFilters} />
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-base px-4 py-2 text-gray-500 border-t">
        {products?.length} products
      </div>
    </aside>
  );
}
