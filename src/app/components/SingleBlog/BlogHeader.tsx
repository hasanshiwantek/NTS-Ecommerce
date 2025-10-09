import React from "react";
import Image from "next/image";
import Blogimg1 from "@/assets/blog/blogImage1.jpg";
const BlogHeader = () => {
  return (
    <section className="w-full bg-white">
      {/* Blog Title + Meta */}
      <div className="flex flex-col gap-9">
        {/* Title */}
        <h1 className="h1-secondary-medium ">
          Host Bus Adapters: A Comprehensive Guide to Modern Storage Solutions
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center h5-20px-regular gap-3">
          <span>By Evelyn Hayes</span>
          <span className="w-[4px] h-[4px] bg-gray-400 rounded-full"></span>
          <span>November 14, 2024</span>
          <span className="w-[4px] h-[4px] bg-gray-400 rounded-full"></span>
          <span className="text-[#F15939] font-medium">Data Storage</span>
        </div>
      </div>

      {/* Blog Image */}
      <div className="w-full mt-6 relative aspect-[16/9] h-auto 2xl:h-[727px]">
        <Image
          src={Blogimg1}
          alt="Host Bus Adapter chip"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default BlogHeader;
