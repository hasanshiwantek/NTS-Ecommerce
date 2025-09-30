// components/Product/ProductGridCard.tsx

interface Product {
  title: string;
  price: number;
  oldPrice: number;
  sku: string;
  rating: number;
  reviews: number;
  image: string;
}

export default function ProductGridCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-3 flex flex-col items-center text-center">
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-[120px] h-[120px] object-contain mb-2"
      />

      {/* Info */}
      <h3 className="font-[505] text-base mb-1 text-[#4A4A4A]">
        {product.title}
      </h3>

      <p className="span-primary mb-1 !text-[#666666]">
        HP SKU:{" "}
        <span className="">{product.sku}</span>
      </p>

      <div className="flex items-end gap-2 justify-center mb-2">
        <p className="text-sm font-[501] text-[#191919]">
          US$ {product.price.toFixed(2)}
        </p>
   
      </div>

      {/* Buttons */}
      {/* <div className="flex gap-2">
        <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
          + Add To Cart
        </button>
        <button className="border px-3 py-1 text-xs rounded">Get quote</button>
      </div> */}
    </div>
  );
}
