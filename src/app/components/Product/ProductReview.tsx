"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const ProductReview = () => {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      name: "Bella Thompson",
      time: "3 days ago",
      text: "I recently discovered this incredible gadget, and it has transformed the way I approach my daily tasks. The features are intuitive and user-friendly, which made the learning curve very minimal. I can’t believe I waited so long to try it!",
    },
    {
      name: "Charlie Brown",
      time: "5 days ago",
      text: "This item has been a game-changer for me! The quality is top-notch, and it has made my workflow so much smoother. I highly recommend it to anyone looking to enhance their productivity.",
    },
    {
      name: "Diana Prince",
      time: "1 week ago",
      text: "I’ve been using this product for a while now, and I’ve seen a huge improvement in my efficiency. The design is sleek and the performance is reliable. It’s definitely worth every penny!",
    },
    {
      name: "Ethan Hunt",
      time: "2 weeks ago",
      text: "What an outstanding product! It offers remarkable functionality and has surpassed my expectations in every aspect. I’m extremely satisfied and will be recommending it to my friends.",
    },
  ];

  return (
    <section
      id="reviews"
      className="w-full max-w-[1719px] flex flex-col gap-8 "
    >
      <header className="mb-8">
        <h1 className="h1-secondary-medium ">Reviews</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT Summary (unchanged) */}
        <aside className="rounded-lg p-6 flex flex-col items-center lg:items-start">
          <div className="mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-green-600 font-semibold text-3xl">
                ★
              </span>
              <span className="text-black font-semibold text-3xl">
                 Trustpilot
              </span>
            </div>
            <p className="flex items-center justify-center text-2xl font-semibold">
              4.5
              <span className="flex ml-4 text-[#FFA439]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < 4 ? "fill-[#FFA439]" : "fill-muted"
                    }`}
                  />
                ))}
              </span>
            </p>
            <p className="h6-regular !text-muted-foreground mb-4">
              from 134 reviews
            </p>
          </div>
          <ul className="w-full space-y-2">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <li key={star} className="flex items-center text-sm">
               <span className="flex items-center gap-1 font-medium ">
  {star}.0
  <Star className="w-6 h-6 fill-[#FFA439] text-[#FFA439]" />
</span>

                <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-black rounded-full"
                    style={{ width: `${[100, 34, 4, 2, 0][i]}%` }}
                  />
                </div>
                <span className="w-6 text-gray-600">
                  {[100, 34, 4, 2, 0][i]}
                </span>
              </li>
            ))}
          </ul>

          <button className="!mt-6 btn-outline-primary !text-[18px] !font-medium !px-10 !py-4 mx-auto">
            Write a review
          </button>
        </aside>

        {/* RIGHT: Reviews */}
        <div className="lg:col-span-2 relative">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700`}
          >
            {reviews.map((review, idx) => (
              <article
                key={idx}
                className="border rounded-lg p-5 bg-white shadow-xs transition-all duration-500"
                itemScope
                itemType="http://schema.org/Review"
              >
                <header className="flex items-center justify-between mb-3 pb-2 border-b">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-[20px] font-medium" itemProp="author">
                        {review.name}
                      </h4>
                      <time
                        dateTime={review.time}
                        className="h5-20px-medium"
                        itemProp="datePublished"
                      >
                        {review.time}
                      </time>
                    </div>
                  </div>
                  <div className="flex space-x-1 text-[#FFA439]">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-6 h-6 ${
                          starIdx < 4 ? "fill-[#FFA439]" : "fill-muted"
                        }`}
                      />
                    ))}
                  </div>
                </header>
                <p className="h5-20px-regular" itemProp="reviewBody">
                  {review.text}
                </p>
              </article>
            ))}
          </div>

          {/* ✅ Gradient Fade Effect on Bottom Cards */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none bg-gradient-to-t from-white to-transparent rounded-b-lg z-10" />
          )}
        </div>
      </div>

      {/* SEE MORE BUTTON */}
      {!showAll && (
        <div className="text-center mt-8">
          <Button
            variant="link"
            className="text-lg text-red-600 font-medium hover:underline"
            onClick={() => {
              setShowAll(true);
              setTimeout(() => {
                document
                  .getElementById("reviews")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            See more ↓
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProductReview;
