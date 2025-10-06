// components/Filters/BrandFilter.tsx
export default function BrandFilter({
  brands,
  handleBrandClick,
}: {
  brands: any;
  handleBrandClick: any;
}) {
  return (
    <ul className="space-y-1 mt-2">
      {brands.map((b: any) => (
        <li
          key={b.brand.id}
          className="2xl:px-[11px] 2xl:py-[11px] xl:px-[8.25px] xl:py-[6px] p-2 hover:bg-gray-100 rounded cursor-pointer h5-20px-regular"
          onClick={() => handleBrandClick(b.brand.id, b.brand.name)}
        >
          {b.brand.name}
        </li>
      ))}
    </ul>
  );
}
