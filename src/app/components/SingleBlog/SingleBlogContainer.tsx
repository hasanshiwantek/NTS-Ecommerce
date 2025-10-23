"use client";
import React, { useEffect, useState } from "react";
import SingleBlog from "@/app/components/SingleBlog/SingleBlog";
import BlogSidebar from "@/app/components/SingleBlog/BlogSidebar.tsx/BlogSidebar";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { getBlogById, getBlogs } from "@/redux/slices/storeFrontSlice";
import BlogSkeleton from "../loader/BlogSkeleton";

const SingleBlogContainer = ({singleBlog}:any) => {
    const dispatch = useAppDispatch();
    const { blogs, error,loading } = useAppSelector(
      (state: any) => state.storeFront
    );
    const blogPosts = blogs?.data;
    useEffect(() => {
      dispatch(getBlogs({page:1,perPage:20}));
    }, [dispatch]);
  
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






<div className="flex flex-wrap xl:flex-nowrap gap-10">
  {loading ? (
          // Skeleton Loader for 3 items
          <BlogSkeleton />
        ) : error ? (
          <div className="w-full py-10 text-center text-red-500 font-medium">
            {error || "Something went wrong while fetching blogs."}
          </div>
        ) :
  blogPosts && blogPosts.length > 0 ? (
    blogPosts.slice(0, 3).map((blog: any, index: number) => (
      <div 
        key={blog.id || index} 
        className="relative w-full h-full xl:h-[28.1rem] xl:w-[32%] 2xl:h-[37.5rem] 2xl:w-[100%] rounded-lg overflow-hidden"
      >
        <Image
          src={blog?.thumbnail}
          alt={blog?.title || "Blog Image"}
          width={547} 
          height={450}
          className="w-full h-full object-cover object-center rounded-lg" 
        />
        
        <div className="absolute left-4 bottom-3 md:bottom-8 xl:bottom-5 p-6">
          <h3 className="text-white textxl sm:text-2xl md:text-5xl md:leading-14  font-medium xl:text-[27px] xl:leading-[33px] 2xl:text-[36px] 2xl:leading-[42px] line-clamp-2">
            {blog?.title}
          </h3>
        </div>
      </div>
    ))
  ) : (
    // Jab data fetch hone ke baad koi blog post na mile
    <div className="w-full py-10 text-center text-gray-500">
       No blogs found.
    </div>
  )}
</div>
        </div>
      </main>
    </>
  );
};

export default SingleBlogContainer;
