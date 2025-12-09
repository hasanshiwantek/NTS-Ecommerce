interface CategoryFilterProps {
  categories: any[];
  handleCategoryClick: (
    categoryId: number,
    categoryName: string,
    catSlug: string
  ) => void;
  activeCategoryId?: number; // ✅ new prop
}

export default function CategoryFilter({
  categories,
  handleCategoryClick,
  activeCategoryId,
}: CategoryFilterProps) {
  return (
    <ul className="space-y-1 ">
      {categories.map((cat: any) => {
        const isActive = activeCategoryId === cat.id; // ✅ compare current cat
        return (
          <li
            key={cat.id}
            className={`h5-regular 2xl:px-[11px] 2xl:py-[8px] xl:px-[8.25px] xl:py-[5px] p-2`}
          >
            <div
              onClick={() => handleCategoryClick(cat.id, cat.name, cat.slug)}
              className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-200 
                ${
                  isActive
                    ? "bg-[#F15939] text-white"
                    : "hover:bg-gray-100 text-[#333333]"
                }`}
            >
              {cat.name}
            </div>

            {/* ✅ Nested subcategories (recursive) */}
            {cat.subcategories && cat.subcategories.length > 0 && (
              <div className="ml-3 border-l border-gray-300 mt-1">
                <CategoryFilter
                  categories={cat.subcategories}
                  handleCategoryClick={handleCategoryClick}
                  activeCategoryId={activeCategoryId} // ✅ pass down
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
