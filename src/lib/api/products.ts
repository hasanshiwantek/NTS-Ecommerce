// lib/api/products.ts
import serverAxios from "../serverAxios";
const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${baseURL}web/products/products`, {
      next: { revalidate: 60 }, // ✅ revalidate every 60 seconds
      headers: {
        storeId: "4",
      },
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to load products");
  }
};

// Get single product by slug (always fresh)
export const fetchProductBySlug = async (slug: string) => {
  try {
    const res = await fetch(`${baseURL}web/products/get-product/${slug}`, {
      cache: "no-store", // ✅ always fetch fresh data for details
      headers: {
        storeId: "4",
      },
    });

    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    console.log("ddddddddd",data.data);
    
    return data?.data;
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Failed to load product");
  }
};
// lib/api/products.ts
export async function fetchFilteredProducts(filters: {
  page?: number;
  pageSize?: number;
  categoryIds?: number[];
  brandId?: number;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}) {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.pageSize) params.append("pageSize", filters.pageSize.toString());
  if (filters.categoryIds && filters.categoryIds.length > 0)
    params.append("categoryIds", filters.categoryIds.join(","));
  if (filters.brandId) params.append("brandId", filters.brandId.toString());
  if (filters.minPrice) params.append("minPrice", filters.minPrice.toString());
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice.toString());
  if (filters.sortBy) params.append("sortBy", filters.sortBy);

  const url = `${baseURL}web/categories/category-filter?${params.toString()}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      storeId: "4",
    },
    cache: "no-store", // or "no-cache" for fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch filtered products");
  }

  const data = await res.json();
  console.log("Filtered Data:", data);

  return data; // {status, message, data: []}
}
