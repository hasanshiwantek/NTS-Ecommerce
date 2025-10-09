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
        border rounded-md bg-white p-6
        grid gap-[2%] items-center w-full transition-all duration-300
        2xl:grid-cols-[20%_1fr_20%]
        xl:grid-cols-[22%_1fr_22%]
        lg:grid-cols-[25%_1fr_25%]
      "
    >
      {/* ✅ Product Image */}
      <div
        className="
          flex items-center justify-center w-full shrink-0
          2xl:h-[40%]
          xl:h-[35%]
          lg:h-[30%]
          md:h-[25%]
          sm:h-[22%]
        "
      >
        <Image
          src={imageUrl}
          alt={product?.name}
          width={250}
          height={250}
          className="
            object-contain
            w-[80%] h-auto max-h-[220px]
            2xl:w-[95%]
            xl:w-[80%]
            lg:w-[70%]
            md:w-[65%]
            sm:w-[60%]
          "
        />
      </div>

      {/* ✅ Product Info */}
      <div
        className="
          flex flex-col justify-center 2xl:justify-start xl:justify-start 
          text-center lg:text-left 2xl:text-left xl:text-left
          2xl:gap-[2%] xl:gap-[3%]
          w-full
          2xl:items-start xl:items-start 
          md:items-center md:text-center
        "
      >
        <Link
          href={`/products/${product?.slug}`}
          className="cursor-pointer relative inline-block  group "
        >
          <h3 className="mb-1 h3-regular line-clamp-2 ">{product?.name}</h3>
          {/* Animated underline */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F15939] transition-all duration-300 group-hover:w-full"></span>
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
        {/* ✅ Add To Cart */}
        <button
          onClick={() => {
            dispatch(addToCart(product));
            toast.success(`${product.name} added to cart!`);
          }}
          className="
    flex items-center justify-center gap-[4%]
    bg-[var(--primary-color)] text-white font-medium rounded-md
    hover:bg-white hover:text-[var(--primary-color)] hover:border hover:border-[var(--primary-color)]
    transition duration-300
    w-[70%] sm:w-[65%] md:w-[60%] xl:w-[80%] 2xl:w-[85%]
    2xl:py-[7%] xl:py-[6%] lg:py-[6%] md:py-[2%] sm:py-[2%] py-[2%] 
    text-base sm:text-base xl:text-lg 2xl:text-xl
  "
        >
          <ShoppingCart size={16} fill="white" />
          Add To Cart
        </button>

        {/* ✅ Quote | Help */}
        <button
          className="
    border border-gray-500 text-gray-800 bg-white rounded-md font-medium
    hover:bg-gray-100 transition duration-300
    w-[65%] sm:w-[60%] md:w-[55%] xl:w-[80%] 2xl:w-[85%]
   2xl:py-[7%] xl:py-[6%] lg:py-[6%] md:py-[2%] sm:py-[2%] py-[2%] 
   text-base sm:text-base xl:text-lg 2xl:text-xl
  "
        >
          Quote | Help
        </button>
      </div>
    </div>
  );
}
