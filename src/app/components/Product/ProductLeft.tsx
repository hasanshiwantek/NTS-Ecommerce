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
        width={408} // Actual displayed width (640 ki jagah)
        height={277} // Actual displayed height (434 ki jagah)
        className="object-contain rounded-lg max-w-full h-auto"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 408px"
        quality={80}
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
