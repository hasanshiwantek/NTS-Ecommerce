"use client";
import React from "react";
import Image from "next/image";

const ProductLeft = ({ images, selectedImage, setSelectedImage }: any) => {
  return (
    <div className=" product-left flex flex-col w-full lg:w-[37%] xl:w-[40.1%] 2xl:w-[34.9%]">
      <div className="flex flex-col gap-[10px]">
        {/* Main Image */}
        <figure
          className="rounded-md sm:mt-0 border flex items-center justify-center 
          w-full lg:h-[35rem] lg:w-[100%] xl:w-[100%]  xl:h-[39.1rem] 2xl:w-[100%] 2xl:h-[49.1rem]  
           p-1 bg-[#FFF]"
        >
          <Image
            src={selectedImage || "/default-product-image.svg"}
            alt="Main product image"
            className="md:w-[60%] lg:w-[85%] lg:h-[67.2%] xl:w-[84.5%] 2xl:w-[84.2%] 2xl:h-[62.2%] xl:h-[62.2%]  object-contain rounded-lg p-10 md:p-20 sm:p-10 lg:p-12 2xl:p-16 xl:p-12"
            width={500}
            height={500}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            quality={85}
          />
        </figure>

        {/* Thumbnails */}
        <figcaption
          className="
            flex justify-center items-center h-[5.1rem] xl:w-[100%] xl:h-[5.7rem] 2xl:w-[100%] 2xl:h-[7.2rem] 
          "
        >
          Image may differ from the actual product
        </figcaption>
      </div>
    </div>
  );
};

export default ProductLeft;
