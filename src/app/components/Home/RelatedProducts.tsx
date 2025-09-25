"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productimg from "@/assets/product-img.png";
import Image from "next/image";

const RelatedProduct = () => {
  const products = [
    {
      id: 1,
      image: productimg,
      title: "Dell R760 Rack",
      description:
        "PA905U - Targus 720KB PC 1.44MB PC 1.4MB Mac 1 x 4-pin Type A Male Hot-Swappable 3.5-Inch External Floppy Drive",
      price: "US$ 5,400.00",
    },
    {
      id: 2,
      image: productimg,
      title: "HP ProLiant DL380",
      description:
        "High-performance rack server with Intel Xeon processors and scalable storage options.",
      price: "US$ 4,900.00",
    },
    {
      id: 3,
      image: productimg,
      title: "Lenovo ThinkSystem SR650",
      description:
        "Enterprise-grade rack server optimized for virtualization and database workloads.",
      price: "US$ 4,200.00",
    },
    {
      id: 4,
      image: productimg,
      title: "Cisco UCS C220 M6",
      description:
        "Rack server offering industry-leading performance and advanced security features.",
      price: "US$ 6,100.00",
    },
    {
      id: 5,
      image: productimg,
      title: "Supermicro SYS-1029U",
      description:
        "Ultra-dense rack server solution supporting dual Xeon processors and flexible storage.",
      price: "US$ 5,750.00",
    },
    {
      id: 6,
      image: productimg,
      title: "Fujitsu PRIMERGY RX2540",
      description:
        "Reliable server with enhanced efficiency and modular design for demanding workloads.",
      price: "US$ 4,800.00",
    },
    {
      id: 7,
      image: productimg,
      title: "Oracle Server X8-2",
      description:
        "Optimized for Oracle Database with secure, high-bandwidth architecture.",
      price: "US$ 6,500.00",
    },
    {
      id: 8,
      image: productimg,
      title: "IBM Power System S922",
      description:
        "Powerful system designed for hybrid cloud and AI workloads with scalable storage.",
      price: "US$ 7,200.00",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, products.length - itemsPerPage)
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className=" my-8 relative">
      <h1 className="h1-primary my-5">Related Products</h1>

      {/* Slider Row */}
      <div className="flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 lg:px-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-2 lg:p-6 flex flex-col items-start bg-white"
            >
              <Image
                src={product.image}
                width={200}
                height={200}
                alt={product.title}
                className="object-contain mb-4 m-auto"
              />
              <p className=" mb-2 font-semibold text-lg line-clamp-2">
                {product.description}
              </p>
              <h3 className=" mb-1 text-lg">{product.title}</h3>
              <p className="text-lg font-semibold">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex >= products.length - itemsPerPage}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RelatedProduct;
