import React from "react";
import SingleBlog from "../components/SingleBlog/SingleBlog";
import BlogSidebar from "../components/SingleBlog/BlogSidebar.tsx/BlogSidebar";
const page = () => {
  return (
    <>
      <main className="flex gap-11 flex-row  w-full xl:max-w-[1290px] 2xl:max-w-[1720px]">
          <SingleBlog />
          <BlogSidebar />
      </main>
      <div>
        {/* IMAGES GRID */}
      </div>

    </>
  );
};

export default page;
