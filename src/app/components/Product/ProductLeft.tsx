"use client";
import React from "react";
import Image from "next/image";

const ProductLeft = ({ images, selectedImage, setSelectedImage }: any) => {
  return (
    <div className=" product-left flex flex-col w-full lg:w-[30%] xl:w-[450px] xl:h-[374px] 2xl:w-[35.3%]">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        {/* Thumbnails */}
        <div
          className="
            flex flex-col justify-between gap-2 
            max-[642px]:flex-row max-[642px]:overflow-x-auto
            sm:flex-col sm:gap-y-3 sm:overflow-visible sm:pb-0  max-[642px]:p-[5px]
          "
        >
          {images.map((img: string, idx: number) => (
            <Image
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              width={150}
              height={150}
              onClick={() => setSelectedImage(img)}
              className={`2xl:w-28 2xl:h-28 xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-15 h-15  object-contain rounded-lg cursor-pointer transition bg-[#F2F3F7] p-2
                ${
                  selectedImage === img
                    ? "border-2 border-gray-500 ring-2 ring-gray-500"
                    : "border border-black ring-2 ring-[#3333331A]"
                }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div
          className="flex-1 rounded-md sm:mt-0 border flex items-center justify-center 
          w-full h-64 sm:h-[400px] md:h-[450px] lg:w-[30rem] 2xl:w-[499.67px] 2xl:h-[499.6673889160156px] xl:w-[374.75px] xl:h-[374.75px] 
           p-1 bg-[#F2F3F7]"
        >
          <Image
            src={selectedImage || "/default-product-image.svg"}
            alt="Product"
            className="w-full h-full object-contain rounded-lg p-10 md:p-20 sm:p-10 lg:p-12 2xl:p-16 xl:p-12"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
