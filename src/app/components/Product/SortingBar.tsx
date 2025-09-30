// components/Product/SortBar.tsx
interface Props {
  total: number;
  view: "list" | "grid";
  setView: (view: "list" | "grid") => void;
}

export default function SortingBar({ total, view, setView }: Props) {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-center border p-4">
      <h4 className="li-primary">Top Brands (Showing 96 of {total})</h4>

      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col items-center gap-3 text-sm">
        <span className="span-primary">Sort by</span>
        {/* Sort Dropdown */}
        <select className="border border-gray-300 rounded-xs px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ">
           <option>Select SortBy</option>
          <option>Best selling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
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
