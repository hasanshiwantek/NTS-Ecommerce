"use client";
import { useState, useEffect } from "react";
import Sidebar from "../Filters/Sidebar";
import ProductList from "./ProductList";
import { fetchFilteredProducts } from "@/lib/api/products";
import { ProductFilterPayload } from "@/types/types";
import { useParams } from "next/navigation";

export default function ProductsClientWrapper({
  categories,
  brands,
  initialCategoryId,
  initialCategoryName,
}: any) {
  const params = useParams(); // get slug param
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log("Filtered Products data from frontend: ", products);
  console.log("Pagination: ", pagination);
  const [filters, setFilters] = useState<ProductFilterPayload>({
    page: 1,
    pageSize: 20,
    categoryIds: initialCategoryId ? [initialCategoryId] : [],
    brandId: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: "",
  });

  // ✅ Sync filters when URL slug changes
  useEffect(() => {
    if (params?.slug && categories?.length > 0) {
      const matched = categories.find((c: any) => c.slug === params.slug);
      if (matched) {
        setFilters((prev) => ({
          ...prev,
          categoryIds: [matched.id],
          page: 1,
        }));
        setFilterMeta((prev) => ({
          ...prev,
          categoryName: matched.name,
        }));
      }
    }
  }, [params?.slug, categories]);

  // 👇 Separate state for UI display (not sent to API)
  const [filterMeta, setFilterMeta] = useState({
    brandName: undefined as string | undefined,
    categoryName: initialCategoryName || undefined,
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
      <div className="flex flex-col md:flex-row gap-6 py-4">
        {/* Sidebar: Filters */}
        <aside
          className="
  2xl:w-[34rem]    /* 412px → 25.75rem */
  xl:w-[25rem]      /* 309px → 19.3rem */
        lg:w-[20rem] 
  md:w-[20rem] 
  sm:w-full
  w-full
  2xl:px-2 p-0
  shrink-0 rounded bg-white
"
        >
          <Sidebar
            categories={categories}
            brands={brands}
            filters={filters}
            setFilters={setFilters}
            products={products}
            filterMeta={filterMeta}
            setFilterMeta={setFilterMeta}
          />
        </aside>

        {/* Product Listing */}
        <main className="">
          <ProductList
            filters={filters}
            setFilters={setFilters}
            products={products}
            pagination={pagination}
            isLoading={isLoading}
            error={error}
            filterMeta={filterMeta}
          />
        </main>
      </div>
    </div>
  );
}
