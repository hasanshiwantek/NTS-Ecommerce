interface BrandFilterProps {
  brands: any[];
  handleBrandClick: (brandId: number, brandName: string) => void;
  activeBrandId?: number;
}

export default function BrandFilter({
  brands,
  handleBrandClick,
  activeBrandId,
}: BrandFilterProps) {
  return (
    <ul className="space-y-1 mt-2">
      {brands.map((b: any) => {
        const isActive = activeBrandId === b.brand.id; // ✅ Check if brand is active
        return (
          <li
            key={b.brand.id}
            onClick={() => handleBrandClick(b.brand.id, b.brand.name )}
            className={`2xl:px-[11px] 2xl:py-[11px] xl:px-[8.25px] xl:py-[6px] p-2 rounded-md cursor-pointer h5-20px-regular transition-all duration-200
              ${
                isActive
                  ? "bg-[#F15939] !text-white hover:bg-[#d94d30]"
                  : "hover:bg-gray-100 text-[#333333]"
              }`}
          >
            {b.brand.name}
          </li>
        );
      })}
    </ul>
  );
}
