"use client";
import React from "react";

const FooterSkeleton = () => {
  return (
    <section         className="
    w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[88%] xl:max-w-[85%] 
    2xl:max-w-[90%] 
    mx-auto 
    px-4 sm:px-6 lg:px-8 xl:px-10 
    py-16 text-center sm:text-start
  ">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="space-y-4 animate-pulse">
            {/* Skeleton heading */}
            <div className="h-5 w-2/3 bg-gray-400 rounded"></div>
            {/* Skeleton list items */}
            <ul className="space-y-2">
              {Array(4)
                .fill(0)
                .map((__, i) => (
                  <li key={i} className="h-4 w-full bg-gray-300 rounded"></li>
                ))}
            </ul>
          </div>
        ))}
    </div>
    </section>

  );
};

export default FooterSkeleton;
