import React from "react";

const BlogCategories = () => {
  const blogs = [
    {
      id: 1,
      image:
        "/category-img-one.png",
      title: "Top 10 Essential Tools for IT Hardware Management",
      category: "Industry Insights",
      excerpt:
        "Elevate your IT infrastructure by integrating cutting-edge tools crafted for comprehensive hardware monitoring and maintenance.",
    },
    {
      id: 2,
      image:
        "/category-img-two.png",
      title: "Sustainable IT: Embracing Eco-Friendly Hardware Solutions",
      category: "Industry Insights",
      excerpt:
        "As environmental concerns rise, the shift towards sustainable IT solutions becomes imperative. Discover the best eco-friendly hardware choices that reduce your carbon footprint.",
    },
    {
      id: 3,
      image:
        "/category-img-three.png",
      title: "Maximizing Efficiency with Smart IT Hardware",
      category: "Industry Insights",
      excerpt:
        "In today’s fast-paced environment, smart IT hardware is crucial for optimizing performance and reducing operational costs.",
    },
    {
      id: 4,
      image:
        "/category-img-four.png",
      title: "The Future of IT Hardware: Trends to Watch",
      category: "Industry Insights",
      excerpt:
        "To stay ahead of the curve, it’s essential to grasp the emerging trends in IT hardware that are set to redefine the technology landscape.",
    },
  ];

  return (
   <div className="flex flex-col items-start   py-10 w-full xl:max-w-[925.5px] 2xl:max-w-[1234px] ">
  <h2 className="h1-secondary !text-[#4A4A4A] uppercase mb-8">
    Categories
  </h2>

  <div className="space-y-8 w-full">
    {blogs.map((blog) => (
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
            src={blog.image}
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
            {blog.category}
          </p>
          <h3 className="h3-secondary group-hover:!text-[#F15939] leading-12.5">{blog.title}</h3>
          <p className="h5-regular line-clamp-3">{blog.excerpt}</p>
         <a
  href="#"
  className="h4-regular relative inline-block group/readmore"
>
  Read More →
  <span
    className="absolute left-0 -bottom-1 h-[2px] !text-[#F15939] w-0 bg-current transition-all duration-300 group-hover/readmore:w-40"
  ></span>
</a>

        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="flex items-center gap-2 mt-10 mx-auto">
    <button className="px-3 py-1 border rounded hover:bg-gray-100">Prev</button>
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
    <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
  </div>
</div>

  );
};

export default BlogCategories;
