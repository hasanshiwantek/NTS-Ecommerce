"use client";
import { useState, useEffect } from "react";
import Sidebar from "../Filters/Sidebar";
import ProductList from "./ProductList";
import { fetchFilteredProducts } from "@/lib/api/products";
import { ProductFilterPayload } from "@/types/types";
import { useParams, usePathname } from "next/navigation";

export default function ProductsClientWrapper({
  categories,
  brands,
  initialCategoryId,
  initialCategoryName,
  initialBrandId,
  initialBrandName,
}: any) {
  const params = useParams(); // get slug param
  const pathname = usePathname(); // get current path
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log("Filtered Products data from frontend: ", products);
  console.log("Pagination: ", pagination);
  
  // Detect if we're on brand or category page
  const isBrandPage = pathname?.startsWith('/brand/');
  const isCategoryPage = pathname?.startsWith('/category/');
  
  const [filters, setFilters] = useState<ProductFilterPayload>({
    page: 1,
    pageSize: 20,
    categoryIds: initialCategoryId ? [initialCategoryId] : [],
    brandId: initialBrandId || null,
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: "",
  });

  // ✅ Sync filters when URL slug changes (for category pages)
  useEffect(() => {
    if (isCategoryPage && params?.slug && categories?.length > 0) {
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
  }, [params?.slug, categories, isCategoryPage]);

  // ✅ Sync filters when URL slug changes (for brand pages)
  useEffect(() => {
    if (isBrandPage && params?.slug && brands?.length > 0) {
      const matched = brands.find((b: any) => b.brand?.slug === params.slug);
      if (matched) {
        setFilters((prev) => ({
          ...prev,
          brandId: matched.brand?.id,
          page: 1,
        }));
        setFilterMeta((prev) => ({
          ...prev,
          brandName: matched.brand?.name,
        }));
      }
    }
  }, [params?.slug, brands, isBrandPage]);

  // 👇 Separate state for UI display (not sent to API)
  const [filterMeta, setFilterMeta] = useState({
    brandName: initialBrandName || undefined,
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
      <div className="flex flex-col md:flex-row gap-4 py-4 w-full xl:max-w-[100%] 2xl:max-w-[119.5%]">

        {/* Sidebar: Filters */}
        <aside
          className="w-full md:w-[28%] lg:w-[27%] xl:w-[24%] 2xl:w-[24.1%] bg-white rounded
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
            isBrandPage={isBrandPage}
            isCategoryPage={isCategoryPage}
          />
        </aside>

        {/* Product Listing */}
        <main className="w-full md:w-[71%] lg:w-[72%] xl:w-[73.3%] 2xl:w-[73.8%]">
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
  );
}
