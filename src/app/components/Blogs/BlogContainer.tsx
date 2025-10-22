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
  const { blogs, error,loading } = useAppSelector(
    (state: any) => state.storeFront
  );
  const blogPosts = blogs?.data;
  console.log("Blogs data from frontend: ", blogPosts);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div>
      <OurLatestBlogs />
      {/* <GridCard /> */}
      <BlogCategories blogPosts={blogPosts} error={error} loading={loading} />
      {/* <BlogTrending /> */}
    </div>
  );
};

export default BlogContainer;
