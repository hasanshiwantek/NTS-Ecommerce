// components/Product/ProductCategoryCard.tsx
import Link from "next/link";
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

import { ShoppingCart } from "lucide-react";
import { addToCart } from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks/useReduxHooks";
export default function ProductCategoryCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const imageUrl = product.image?.[0]?.path || "./default-product-image.svg";
  return (
    <div className="border rounded p-4 grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 items-center">
      {/* Image */}
      <img
        src={imageUrl}
        alt={product?.name}
        className="w-[120px] h-[120px] object-contain"
      />
      {/* Info */}
      <div className="">
        <Link href={`/products/${product?.slug}`} className="cursor-pointer">
          <h3 className="font-medium text-xl mb-1 text-[#4A4A4A]">
            {product?.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-[var(--primary-color)] text-sm font-semibold">
          {product.rating && product.reviews > 0 ? (
            <>
              ★ {product?.rating}
              <span className="!text-[#1A80AD] font-semibold">
                ({product?.reviews} Reviews)
              </span>
            </>
          ) : (
            <span className="text-gray-500 italic">No reviews yet</span>
          )}
        </div>

        <p className="span-primary  mt-1">
          <span className="span-primary  ">SKU:</span>{" "}
          <span className="span-primary  ">{product?.sku}</span>
        </p>

        <div className="flex items-center gap-2 mt-2">
          <p className="text-lg font-bold text-[#4A4A4A]">
            {product?.price && !isNaN(Number(product.price))
              ? `£${Number(product.price).toFixed(2)}`
              : "Price not available"}
          </p>

          {product.msrp > 0 && (
            <p className="text-sm text-red-500 line-through">
              £{Number(product?.msrp).toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-end gap-2">
        {/* Add To Cart */}
        <button 
         onClick={() => {
    dispatch(addToCart(product)); 
    toast.success(`${product.name} added to cart!`);
  }}
         className="flex items-center justify-center gap-2 w-40 bg-[var(--primary-color)] text-white font-medium px-5 py-2 rounded shadow hover:bg-white hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] hover:border  transition">
          <ShoppingCart size={16} />
          Add To Cart
        </button>

        {/* Quote | Help */}
        <button className="text-base font-medium border w-40 border-gray-500 bg-white text-gray-800 px-5 py-2 rounded hover:bg-gray-100 transition">
          Quote | Help
        </button>
      </div>
    </div>
  );
}
