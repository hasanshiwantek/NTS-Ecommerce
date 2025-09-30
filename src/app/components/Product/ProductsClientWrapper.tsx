"use client";
import { useState, useEffect } from "react";
import Sidebar from "../Filters/Sidebar";
import ProductList from "./ProductList";
import { fetchFilteredProducts } from "@/lib/api/products";
import { ProductFilterPayload } from "@/types/types";
export default function ProductsClientWrapper({ categories, brands }: any) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log("Filtered Products data from frontend: ", products);
  console.log("Pagination: ", pagination);
  const [filters, setFilters] = useState<ProductFilterPayload>({
    page: 1,
    pageSize: 20,
    categoryIds: [],
    brandId: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: "",
  });

  console.log("Filters: ", filters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetchFilteredProducts(filters);
        setProducts(res.data || []);
        setPagination(res.pagination || null);
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]);
  return (
    <div className="container  ">
      <div className="flex gap-6 py-4">
        {/* Sidebar: Filters */}
        <aside className="w-[240px] shrink-0  rounded  bg-white">
          <Sidebar
            categories={categories}
            brands={brands}
            filters={filters}
            setFilters={setFilters}
          />
        </aside>

        {/* Product Listing */}
        <main className="flex-1">
          <ProductList
            filters={filters}
            setFilters={setFilters}
            products={products}
            pagination={pagination}
            isLoading={isLoading}
            error={error}
          />
        </main>
      </div>
    </div>
  );
}
