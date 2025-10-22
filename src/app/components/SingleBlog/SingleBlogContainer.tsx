"use client";
import React, { useEffect, useState } from "react";
import SingleBlog from "@/app/components/SingleBlog/SingleBlog";
import BlogSidebar from "@/app/components/SingleBlog/BlogSidebar.tsx/BlogSidebar";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { getBlogById } from "@/redux/slices/storeFrontSlice";

const SingleBlogContainer = ({singleBlog}:any) => {
  return (
    <>
      <main className="2xl:px-3 px-0 w-full xl:max-w-[1290px] 2xl:max-w-[1720px]">
        <nav className="  flex items-center ">
          <Link href="/" className=" h5-20px-regular transition-colors">
            Home
          </Link>
          <ChevronRight className="mx-2 w-5 h-5 text-gray-400" />
          <Link href="/blogs" className="h5-20px-regular transition-colors">
            Blogs
          </Link>
          <ChevronRight className="mx-2 w-5 h-5 text-gray-400" />
          <span className="h5-regular">{singleBlog?.title}</span>
        </nav>

        <div className="flex gap-11 flex-row ">
          <SingleBlog blogPost={singleBlog}/>
          <BlogSidebar />
        </div>
        <div className="xl:max-w-[1440px] 2xl:max-w-[1720px] py-10">
          <h2 className="h1-secondary !text-[#4A4A4A] text-center mb-6">
            YOU MIGHT ALSO LIKE
          </h2>

          <div className="flex gap-10">
            <div className="w-full 2xl:h-[37.5rem] 2xl:w-[100%] rounded-lg overflow-hidden">
              <Image
                src="/Blog-right-top.png"
                alt="Understanding Cloud Computing"
                width={546.6668701171875}
                height={450}
                className="w-full h-full object-center rounded-lg"
              />
            </div>

            <div className="w-full 2xl:h-[37.5rem] 2xl:w-[100%] rounded-lg overflow-hidden">
              <Image
                src="/Blog-right-bottom.png"
                alt="Optimize Your Data Center Hardware"
                width={546.6668701171875}
                height={450}
                className="w-full h-full object-center rounded-lg"
              />
            </div>

            <div className="w-full 2xl:h-[37.5rem] 2xl:w-[100%] rounded-lg overflow-hidden">
              <Image
                src="/Blog-left.png"
                alt="Essential Tools for IT Hardware Management"
                width={546.6668701171875}
                height={450}
                className="w-full h-full object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleBlogContainer;
