// app/products/page.tsx
import { fetchCategories } from "@/lib/api/category";
import { fetchBrands } from "@/lib/api/brand";
import ProductsClientWrapper from "../components/Product/ProductsClientWrapper";
export default async function ProductsPage() {
  const categories = await fetchCategories();
  const brands = await fetchBrands();

  return (
    <div className="container">
      <ProductsClientWrapper categories={categories} brands={brands} />
    </div>
  );
}
