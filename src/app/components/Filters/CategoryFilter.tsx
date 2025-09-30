// components/Filters/CategoryFilter.tsx
export default function CategoryFilter({ categories }: { categories: any }) {
  return (
    <ul className="space-y-1 text-[13px]">
      {categories.map((cat: any) => (
        <li key={cat.id} className="li-primary !text-[#666666]">
          <div className="cursor-pointer px-2 py-[2px] hover:bg-gray-100 rounded">
            {cat.name}
          </div>
          {cat.subcategories && cat.subcategories.length > 0 && (
            <div className="ml-3 border-l border-gray-300 pl-2 mt-1">
              <CategoryFilter categories={cat.subcategories} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
