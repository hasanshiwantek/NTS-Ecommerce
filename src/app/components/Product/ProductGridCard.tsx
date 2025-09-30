// components/Product/ProductGridCard.tsx
import Link from "next/link";
interface Product {
  id: number;
  name: string;
  sku: string;
  slug: any;
  price: string | number;
  brand?: { id: number; name: string };
  image?: { path?: string }[];
  rating?: number;
  reviews?: number;
}

export default function ProductGridCard({ product }: { product: Product }) {
  const imageUrl = product.image?.[0]?.path || "./default-product-image.svg";
  // Normalize price to number
  const price =
    typeof product.price === "string"
      ? parseFloat(product.price)
      : product.price;

  return (
    <div className="border rounded p-3 flex flex-col items-center text-center">
      {/* Image */}
      <img
        src={imageUrl}
        alt={product?.name}
        className="w-[120px] h-[120px] object-contain mb-2"
      />

      {/* Info */}
      <Link
        href={`/products/${product?.slug}`}
        className="cursor-pointer"
      >
        <h3 className="font-[505] text-base mb-1 text-[#4A4A4A]">
          {product?.name}
        </h3>
      </Link>

      <p className="span-primary mb-1 !text-[#666666]">
        HP SKU: <span className="">{product?.sku}</span>
      </p>

      <div className="flex items-end gap-2 justify-center mb-2">
        <p className="text-sm font-[501] text-[#191919]">
          US$ {price?.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
