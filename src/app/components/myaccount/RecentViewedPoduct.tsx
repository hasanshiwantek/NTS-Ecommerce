import React from "react";
import Image from "next/image";

const recentProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: "$199",
    image: "/default-product-image.svg",
  },
  {
    id: 2,
    name: "Smart Fitness Watch Series 7",
    price: "$249",
    image: "/default-product-image.svg",
  },
  {
    id: 3,
    name: "Portable 10000mAh Power Bank",
    price: "$299",
    image: "/default-product-image.svg",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair with Lumbar Support",
    price: "$349",
    image: "/default-product-image.svg",
  },
  {
    id: 5,
    name: "Ultra HD 4K Action Camera",
    price: "$399",
    image: "/default-product-image.svg",
  },
];


const RecentViewedProduct = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Recently Viewed Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="w-full h-80 xl:h-[28rem] 2xl:h-[32.4rem] relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 bg-white"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 text-start">
              <h3 className="h6-18-px-medium line-clamp-2 min-h-[3rem]">{product.name}</h3>
              <p className="h6-18-px-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentViewedProduct;
