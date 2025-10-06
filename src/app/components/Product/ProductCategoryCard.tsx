import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { addToCart } from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks/useReduxHooks";

interface Product {
  id: number;
  name: string;
  slug: string;
  sku: string;
  price: any;
  msrp: any;
  rating: any;
  reviews: any;
  brand?: { id: number; name: string };
  categories?: { id: number; name: string }[];
  image?: { path?: string }[];
  availabilityText?: string;
  description?: string;
  customFields?: Record<string, string>;
}

export default function ProductCategoryCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const imageUrl = product.image?.[0]?.path || "./default-product-image.svg";

  return (
    <div
      className="
        border rounded p-4
        grid gap-6 items-center w-full transition-all duration-300
        xl:grid-cols-[187.5px_1fr_180px]     /* 🧱 Figma desktop (1440px) */
        2xl:grid-cols-[240px_1fr_240px]      /* 🧱 Figma big screen (1920px) */
        2xl:w-[1260px]
         lg:grid-cols-1              /* Tablets (2 cols: image + content) */
        md:grid-cols-1                       /* Stack on mobile */
      "
    >
      {/* ✅ Product Image */}
      <div
        className="
    flex items-center justify-center w-full shrink-0
    2xl:w-full 2xl:h-[250px]
    xl:w-full xl:h-[187.5px]
    lg:w-full lg:h-[180px]
    md:w-full md:h-[160px]
    sm:w-full sm:h-[180px]
  "
      >
        <Image
          src={imageUrl}
          alt={product?.name}
          width={250}
          height={250}
          className="
      object-contain
      2xl:w-[192px] 2xl:h-[206px]
      xl:w-[144.5px] xl:h-[154.5px]
      lg:w-[160px] lg:h-[160px]
      md:w-[180px] md:h-[140px]
      sm:w-[150px] sm:h-[130px]
    "
        />
      </div>

      {/* ✅ Product Info */}
      <div
        className="
          flex flex-col justify-center 2xl:justify-start xl:justify-start 
          text-center lg:text-left 2xl:text-left xl:text-left
          2xl:gap-[10px] 2xl:w-[710px] 2xl:h-[226px] 2xl:items-start xl:items-start 
          md:items-center md:text-center
        "
      >
        <Link href={`/products/${product?.slug}`} className="cursor-pointer">
          <h3 className="mb-1 h3-regular">{product?.name}</h3>
        </Link>

        <div
          className="
            flex flex-wrap items-center 2xl:items-start xl:items-start  2xl:justify-start xl:justify-start   justify-center lg:justify-start gap-2
            h6-18-px-medium
          "
        >
          {product.rating && product.reviews > 0 ? (
            <>
              ★ {product?.rating}
              <span className="!text-[#1A80AD]  h6-18-px-medium">
                ({product?.reviews} Reviews)
              </span>
            </>
          ) : (
            <span className="italic  h6-18-px-medium">No reviews yet</span>
          )}
        </div>

        <p className="h5-20px-regular mt-1">
          <span className="h5-20px-regular">SKU:</span> {product?.sku}
        </p>

        <div
          className="
            flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2
          "
        >
          <p className="h2-bold">
            {product?.price && !isNaN(Number(product.price))
              ? `£${Number(product.price).toFixed(2)}`
              : "Price not available"}
          </p>

          {product.msrp > 0 && (
            <p className="h5-20px-regular !text-[#FF435C] line-through">
              £{Number(product?.msrp).toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {/* ✅ CTA Buttons */}
      <div
        className="
          flex flex-col items-center  2xl:items-end xl:items-end gap-4
          2xl:gap-4 xl:gap-3
          md:mt-4
        "
      >
        {/* Add To Cart */}
        <button
          onClick={() => {
            dispatch(addToCart(product));
            toast.success(`${product.name} added to cart!`);
          }}
          className="
            flex items-center justify-center gap-2
            w-[160px] h-[45px] rounded-[6px] text-[15px]
            bg-[var(--primary-color)] text-white font-medium
            hover:bg-white hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] hover:border
            transition
            xl:w-[180px] xl:h-[45px] xl:text-[15px] /* Figma desktop */
            2xl:w-[240px] 2xl:h-[60px] 2xl:text-[16.5px] /* Figma big screen */
          "
        >
          <ShoppingCart size={16} fill="white" />
          Add To Cart
        </button>

        {/* Quote | Help */}
        <button
          className="
            text-[14px] font-medium border border-gray-500
            bg-white text-gray-800 rounded transition
            hover:bg-gray-100
            w-[140px] h-[40px]
            md:w-[160px] md:h-[45px]
            xl:w-[180px] xl:h-[45px] xl:text-[15px] /* Figma desktop */
            2xl:w-[240px] 2xl:h-[60px] 2xl:text-[16.5px] /* Figma big screen */
          "
        >
          Quote | Help
        </button>
      </div>
    </div>
  );
}
