"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[#f9f9f9]">
        <div className="relative w-full max-h-screen">
          <Image
            src="/banner-image.png"
            alt="Server Rack"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
      </div>

    </>
  );
};

export default Banner;
