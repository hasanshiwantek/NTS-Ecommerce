// lib/api/products.ts
import serverAxios from "../serverAxios";

export const fetchProducts = async () => {
  try {
    const res = await serverAxios.get("web/products/products");
    // console.log("All Products Response: ",res.data);
    return res.data?.data || [];  // Adjust if your API wraps the response differently
    
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to load products");
  }
};

export const fetchProductBySlug = async (slug: string) => {
  try {
    const res = await serverAxios.get(`web/products/get-product/${slug}`);
    console.log("Slug Products Response: ",res.data);
    return res.data?.data; // assuming API returns { data: {...product} }
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Failed to load product");
  }
};
