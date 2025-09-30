// components/Filters/BrandFilter.tsx
export default function BrandFilter({ brands }: { brands: any }) {
  return (
    <ul className="space-y-1">
      {brands.map((b: any) => (
        <li
          key={b.brand.id}
          className="px-2 py-[2px] hover:bg-gray-100 rounded cursor-pointer li-primary !text-[#666666]"
        >
          {b.brand.name}
        </li>
      ))}
    </ul>
  );
}
