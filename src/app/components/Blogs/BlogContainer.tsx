"use client";
import React, { useEffect } from "react";
import OurLatestBlogs from "./OurLatestBlogs";
import GridCard from "./GridCard";
import BlogTrending from "./BlogTrending";
import BlogCategories from "./BlogCategories";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { getBlogs } from "@/redux/slices/storeFrontSlice";

const BlogContainer = () => {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.storeFront);
  console.log("Blogs data from frontend: ", blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div>
      <OurLatestBlogs />
      <GridCard />
      <BlogTrending />
      <BlogCategories />
    </div>
  );
};

export default BlogContainer;
