interface CategoryFilterProps {
  categories: any[];
  handleCategoryClick: (
    categoryId: number,
    categoryName: string,
    catSlug: string
  ) => void;
}

export default function CategoryFilter({
  categories,
  handleCategoryClick,
}: CategoryFilterProps) {
  return (
    <ul className="space-y-1 ">
      {categories.map((cat: any) => (
        <li
          key={cat.id}
          className="h5-regular 2xl:px-[11px] 2xl:py-[8px] xl:px-[8.25px] xl:py-[5px] p-2 "
        >
          <div
            className="  cursor-pointer px-2 py-2 rounded hover:bg-gray-100"
            onClick={() => handleCategoryClick(cat.id, cat.name, cat.slug)} // ✅ Will always work now
          >
            {cat.name}
          </div>
          {cat.subcategories && cat.subcategories.length > 0 && (
            <div className="ml-6 border-l border-gray-300 pl-2 mt-1">
              <CategoryFilter
                categories={cat.subcategories}
                handleCategoryClick={handleCategoryClick} // ✅ pass down
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
