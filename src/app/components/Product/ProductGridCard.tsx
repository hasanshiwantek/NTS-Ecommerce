// components/Product/ProductGridCard.tsx
import Link from "next/link";
import Image from "next/image";

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
  const imageUrl = product.image?.[0]?.path || "/default-product-image.svg";

  // Normalize price to number
  const price =
    typeof product.price === "string"
      ? parseFloat(product.price)
      : product.price;

  return (
    <div
      className="
        border rounded bg-white 
        flex flex-col justify-between items-center
        2xl:p-[2%] xl:p-[2.5%] p-[3%]
        w-full h-full xl:min-h-[300px] 2xl:min-h-[400px]
        transition-all duration-300
      "
    >
      {/* ✅ Product Image */}
      <div
        className="
          flex items-center justify-center
          w-[85%] h-[55%]
        "
      >
        <Image
          src={imageUrl}
          alt={product?.name}
          width={400}
          height={280}
          className="
            object-contain
            w-full h-full
            p-[3%]
          "
        />
      </div>

      {/* ✅ Product Info */}
      <div
        className="
          flex flex-col justify-between items-start
          w-[90%] mt-[2%] gap-2
        "
      >
        {/* Product Name */}
        <Link
          href={`/products/${product?.sku}`}
          className="w-full cursor-pointer relative inline-block  group "
        >
          <h3 className="h6-18-px-medium w-full line-clamp-2">
            {product?.name}
          </h3>
          {/* Animated underline */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F15939] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* SKU */}
        <p className="h6-18-px-regular">
          HP SKU: <span>{product?.sku}</span>
        </p>

        {/* ✅ Price */}
        <div className="flex items-end gap-[2%] mt-[1%]">
          <p className="h6-18-px-medium !text-[#191919]">
            US$ {price?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
