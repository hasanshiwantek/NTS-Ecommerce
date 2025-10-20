"use client";
import React from "react";
import Image from "next/image";

const ProductLeft = ({ images, selectedImage, setSelectedImage }: any) => {
  return (
    <div className=" product-left flex flex-col w-full lg:w-[37%] xl:w-[40.1%] 2xl:w-[34.9%]">
      <div className="flex flex-col gap-[10px]">
     
        {/* Main Image */}
        <div
          className="rounded-md sm:mt-0 border flex items-center justify-center 
          w-full lg:h-[35rem] lg:w-[100%] xl:w-[100%]  xl:h-[39.1rem] 2xl:w-[100%] 2xl:h-[49.1rem]  
           p-1 bg-[#F2F3F7]"
        >
          <Image
            src={selectedImage || "/default-product-image.svg"}
            alt="Product"
            className="md:w-[60%] lg:w-[85%] lg:h-[67.2%] xl:w-[84.5%] 2xl:w-[84.2%] 2xl:h-[62.2%] xl:h-[62.2%]  object-contain rounded-lg p-10 md:p-20 sm:p-10 lg:p-12 2xl:p-16 xl:p-12"
            width={500}
            height={500}
          />
        </div>

            {/* Thumbnails */}
        <div
          className="
            flex justify-center items-center h-[5.1rem] xl:w-[100%] xl:h-[5.7rem] 2xl:w-[100%] 2xl:h-[7.2rem] border
          "
        > Image may differ from the actual product
          {/* {images.map((img: string, idx: number) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
