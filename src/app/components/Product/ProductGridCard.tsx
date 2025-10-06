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
  const imageUrl = product.image?.[0]?.path || "./default-product-image.svg";
  // Normalize price to number
  const price =
    typeof product.price === "string"
      ? parseFloat(product.price)
      : product.price;

  return (
    <div className="border rounded 2xl:p-5 xl:p-4 p-3 flex flex-col items-center  2xl:h-[449px]  xl:h-[335.5px] h-auto   w-full   ">
      {/* ✅ Product Image */}
      <div
        className="
          flex items-center justify-center
          2xl:w-[404px] 2xl:h-[280px]
          xl:w-[303px] xl:h-[210px]
          w-full h-auto
          md:w-[250px] md:h-[180px]
          sm:w-[200px] sm:h-[150px]
        "
      >
        <Image
          src={imageUrl}
          alt={product?.name}
          width={404}
          height={280}
          className="
            object-contain
            2xl:w-[404px] 2xl:h-[280px]
            xl:w-[303px] xl:h-[210px]
            md:w-[200px] md:h-[180px]
            sm:w-[150px] sm:h-[150px]
            p-5
          "
        />
      </div>

      <div className="flex flex-col gap-[10px]   2xl:w-[404px] 2xl:h-[169px]  xl:w-[303px] xl:h-[125px] px-9">
        {/* Info */}
        <Link href={`/products/${product?.slug}`} className="cursor-pointer">
          <h3 className="h6-18-px-medium 2xl:w-[356px] w-full line-clamp-2">
            {product?.name}
          </h3>
        </Link>

        <p className="h6-18-px-regular">
          HP SKU: <span className="">{product?.sku}</span>
        </p>

        <div className="flex items-end gap-2  mb-2">
          <p className="h6-18-px-medium !text-[#191919]">
            US$ {price?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
