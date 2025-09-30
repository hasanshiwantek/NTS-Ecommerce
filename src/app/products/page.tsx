// app/products/page.tsx

import { fetchCategories } from '@/lib/api/category';
import { fetchBrands } from '@/lib/api/brand';
import Sidebar from '../components/Filters/Sidebar';
import ProductList from '../components/Product/ProductList';
export default async function ProductsPage() {
  const categories = await fetchCategories();
  const brands = await fetchBrands();

  return (
    <div className="container  ">
      <div className="flex gap-6 py-4">
        {/* Sidebar: Filters */}
        <aside className="w-[240px] shrink-0  rounded  bg-white">
          <Sidebar categories={categories} brands={brands} />
        </aside>

        {/* Product Listing */}
        <main className="flex-1">
          <ProductList />
        </main>
      </div>
    </div>
  );
}
