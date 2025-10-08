"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const blogs = [
  {
    id: 1,
    title: "The Importance of Regular Hardware Upgrades",
    image: "/Blog-left.png",
    slug: "importance-of-regular-hardware-upgrades",
  },
  {
    id: 2,
    title: "Understanding Cloud Computing and Its Hardware Requirements",
    image: "/Blog-right-top.png",
    slug: "understanding-cloud-computing-hardware",
  },
  {
    id: 3,
    title: "How to Optimize Your Data Center Hardware",
    image: "/Blog-right-bottom.png",
    slug: "optimize-data-center-hardware",
  },
];

const OurLatestBlogs = () => {
  return (
    <section className="w-full flex justify-center bg-white text-black py-5">
      <div className="w-full xl:max-w-[1290px] 2xl:max-w-[1720px]">
        {/* Heading + Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <h2 className="h1-secondary !text-[#4A4A4A] uppercase tracking-wide text-center md:text-left">
            Our Latest Blogs
          </h2>

          <div className="flex items-center rounded-md overflow-hidden w-full sm:w-[70%] md:w-[50%] lg:w-[38.5%] 2xl:w-[35.2%] h-[55px] xl:h-[48.75px] 2xl:h-[65px]">
            <Input
              type="text"
              placeholder="Search..."
              className="!max-w-full h-full flex-1 border border-gray-300"
            />
            <button className="bg-[#F15939] text-white hover:bg-[#d94d30] transition flex items-center justify-center w-[60px] sm:w-[70px] md:w-[80px] h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Blog Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Large Blog */}
          <div className="relative overflow-hidden rounded-lg w-full lg:w-[60%] xl:w-[744.75px] 2xl:w-[57.7%]">
            <Link href={`/blog/${blogs[0].slug}`}>
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                width={800}
                height={500}
                className="w-full rounded-lg h-auto lg:h-[95%] xl:h-[545.25px] 2xl:h-[97%] object-cover"
              />
            </Link>
          </div>

          {/* Right Side Blogs */}
          <div className="flex flex-col gap-6 w-full lg:w-[40%] xl:w-[527.25px] 2xl:w-[43.3%]">
            {blogs.slice(1).map((blog, index) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="relative rounded-lg overflow-hidden h-auto lg:h-[45.7%] xl:h-[263.25px] 2xl:h-[47.2%]"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLatestBlogs;
