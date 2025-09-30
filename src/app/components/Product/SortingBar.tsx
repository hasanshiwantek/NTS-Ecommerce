interface Props {
  total: number;
  view: "list" | "grid";
  setView: (view: "list" | "grid") => void;
  filters: any;
  setFilters: any;
}

export default function SortingBar({
  total,
  view,
  setView,
  filters,
  setFilters,
}: Props) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    let sortBy = "";

    // Normalize value to match your backend expectation
    switch (selectedValue) {
      case "Best selling":
        sortBy = "bestSelling";
        break;
      case "Price: Low to High":
        sortBy = "priceLowToHigh";
        break;
      case "Price: High to Low":
        sortBy = "priceHighToLow";
        break;
      default:
        sortBy = "bestSelling";
    }

    setFilters((prev: any) => ({
      ...prev,
      sortBy,
      page: 1, // Reset to page 1 on sort change
    }));
  };

  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-center border p-4">
      <h4 className="li-primary">Top Brands (Showing 96 of {total})</h4>

      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col items-center gap-3 text-sm">
        <span className="span-primary">Sort by</span>

        {/* Sort Dropdown */}
        <select
          value={filters.sortBy || ""}
          onChange={(e) =>
            setFilters((prev: any) => ({
              ...prev,
              sortBy: e.target.value,
              page: 1,
            }))
          }
          className="px-3 py-1 text-[12px] font-medium text-gray-700 
             border border-gray-300 rounded-md shadow-sm 
             bg-white cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]
             hover:border-gray-400 transition-all"
        >
          <option value="">Sort By</option>
          <option value="bestSelling">Best Selling</option>
          <option value="priceLowToHigh">Low to High</option>
          <option value="priceHighToLow">High to Low</option>
        </select>

        {/* View Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-2 rounded-md border transition-colors text-sm font-medium ${
              view === "grid"
                ? "bg-[var(--primary-color)] text-white border-orange-500 shadow-md"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            ▭▭
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-3 py-2 rounded-md border transition-colors text-sm font-medium ${
              view === "list"
                ? "bg-[var(--primary-color)] text-white border-orange-500 shadow-md"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}
