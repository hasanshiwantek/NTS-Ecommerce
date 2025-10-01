// app/category/[slug]/page.tsx
import ProductsPage from "@/app/products/page";
import { fetchCategories } from "@/lib/api/category";

interface Props {
  params: Promise<{ slug: string }>; // 👈 same as ProductPage
}

function findCategoryBySlug(categories: any[], slug: string): any | undefined {
  for (const cat of categories) {
    if (cat.slug === slug) return cat;
    if (cat.subcategories && cat.subcategories.length > 0) {
      const found = findCategoryBySlug(cat.subcategories, slug);
      if (found) return found;
    }
  }
  return undefined;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params; // 👈 matching slug
  console.log("Category Slug:", slug);

  const categories = await fetchCategories();

  // Find category by slug
  const category = findCategoryBySlug(categories, slug);

  if (!category) {
    return <div className="text-center py-10">❌ Category not found</div>;
  }

  return (
    <ProductsPage
      initialCategoryId={category.id}
      initialCategoryName={category.name}
    />
  );
}
