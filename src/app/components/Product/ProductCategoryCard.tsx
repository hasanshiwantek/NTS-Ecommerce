// components/Product/ProductCategoryCard.tsx

interface Product {
  title: string;
  price: number;
  oldPrice: number;
  sku: string;
  rating: number;
  reviews: number;
  image: string;
}
import { ShoppingCart } from "lucide-react";
export default function ProductCategoryCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-4 flex md:flex-col sm:flex-col lg:flex-row xl:flex-row flex-col gap-4 items-center">
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-[120px] h-[120px] object-contain"
      />

      {/* Info */}
      <div className="">
        <h3 className="font-medium text-xl mb-1 text-[#4A4A4A]">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 text-[var(--primary-color)] text-sm font-semibold">
          ★ {product.rating}
          <span className="!text-[#1A80AD] font-semibold">
            ({product.reviews} Reviews)
          </span>
        </div>

        <p className="span-primary  mt-1">
          <span className="span-primary  ">HP SKU:</span>{" "}
          <span className="span-primary  ">{product.sku}</span>
        </p>

        <div className="flex items-center gap-2 mt-2">
          <p className="text-lg font-bold text-[#4A4A4A]">
            £{product.price.toFixed(2)}
          </p>
          <p className="text-sm text-red-500 line-through">
            £{product.oldPrice.toFixed(2)}
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-end gap-2">
        {/* Add To Cart */}
        <button className="flex items-center justify-center gap-2 w-40 bg-[var(--primary-color)] text-white font-medium px-5 py-2 rounded shadow hover:bg-white hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] hover:border  transition">
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
