import React from "react";
import BlogSkeleton from "../loader/BlogSkeleton";
import Link from "next/link";
const BlogCategories = ({
  blogPosts,
  error,
  loading,
}: {
  blogPosts: any[];
  error: any;
  loading: boolean;
}) => {
  const getExcerpt = (html: string, maxLength = 200) => {
    if (!html) return "";

    // Create a temporary DOM element
    const div = document.createElement("div");
    div.innerHTML = html;

    // Get text content only
    const text = div.textContent || div.innerText || "";

    // Truncate
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="flex flex-col items-start   py-5 w-full xl:max-w-[1290px] 2xl:max-w-[1720px] ">
      {/* <h2 className="h1-secondary !text-[#4A4A4A] uppercase mb-8">
    Categories
  </h2> */}

      <div className="space-y-8 w-full">
        {loading ? (
          // Skeleton Loader for 3 items
          <BlogSkeleton />
        ) : error ? (
          <div className="w-full py-10 text-center text-red-500 font-medium">
            {error || "Something went wrong while fetching blogs."}
          </div>
        ) : blogPosts && blogPosts.length > 0 ? (
          blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="
          flex flex-col 
          md:flex-row 
          xl:flex-row 2xl:flex-row
          w-full 
          xl:w-[100%] 2xl:w-[100%] 
          xl:h-[20.9rem] 2xl:h-[20.1rem] 
          md:gap-6 xl:gap-[30px] 2xl:gap-10 
          bg-white rounded-lg overflow-hidden transition group
        "
            >
              {/* Image */}
              <div
                className="
            w-full md:w-[35%] xl:w-[35.5%] 2xl:w-[38.2%] 
            h-[220px] md:h-[280px] lg:h-[320px] xl:h-auto
          "
              >
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div
                className="
            w-full md:w-[55%] xl:w-[52.2%] 2xl:w-[51.8%]
            h-auto xl:h-[20.5rem] 2xl:h-[20.4rem] 
            flex flex-col justify-center my-auto 
            gap-6 md:gap-6 xl:gap-6 
            p-5 md:p-6 xl:p-0
          "
              >
                <p className="h5-medium border-l-3 border-[#F15939] pl-3">
                  {blog.title || "N/A"}
                </p>
                <h3 className="h3-secondary group-hover:!text-[#F15939] leading-12.5">
                  {blog.title}
                </h3>
                <p className="h5-regular line-clamp-3">
                  {getExcerpt(blog.body, 150)}
                </p>

                <Link
                  href={`blogs/${blog.id}`}
                  className="h4-regular relative inline-block group/readmore"
                >
                  Read More →
                  <span className="absolute left-0 -bottom-1 h-[2px] !text-[#F15939] w-0 bg-current transition-all duration-300 group-hover/readmore:w-40"></span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full py-10 text-center text-gray-500 font-medium">
            No blogs found.
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2 mt-10 mx-auto">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">
          Prev
        </button>
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 border rounded ${
              num === 1 ? "bg-red-500 text-white" : "hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
        <button className="px-3 py-1 border rounded hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogCategories;
