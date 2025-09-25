"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, User } from "lucide-react"
import React from "react"
import { User2 } from "lucide-react"

const ProductReview = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className=""
    >
      <header className="mb-8">
        <h1
          className="h1-primary"
        >
          Reviews
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Ratings summary */}
        <aside
          className="border rounded-lg p-6 flex flex-col items-center lg:items-start"
          aria-label="Rating summary"
        >
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-600 font-semibold">★ Trustpilot</span>
          </div>

          <p className="flex items-center text-lg font-semibold">
            4.5
            <span className="flex ml-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "fill-yellow-400" : "fill-muted"
                  }`}
                />
              ))}
            </span>
          </p>

          <p className="text-base text-muted-foreground mb-4">from 134 reviews</p>

          {/* Ratings Breakdown */}
          <ul className="w-full space-y-2">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <li key={star} className="flex items-center text-sm">
                <span className="w-6 font-medium">{star}.0</span>
                <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-yellow-400 rounded-full"
                    style={{ width: `${[100, 34, 4, 2, 0][i]}%` }}
                  />
                </div>
                <span className="w-6 text-gray-600">
                  {[100, 34, 4, 2, 0][i]}
                </span>
              </li>
            ))}
          </ul>

          {/* Write Review Button */}
          <button
            className="!mt-6 btn-outline-primary"
          >
            Write a review
          </button>
        </aside>

        {/* RIGHT: Reviews */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
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
          ].map((review, idx) => (
            <article
              key={idx}
              className="border rounded-lg p-5 bg-white shadow-sm"
              itemScope
              itemType="http://schema.org/Review"
            >
              <header className="flex items-center justify-between mb-3 pb-2 border-b">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {review.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4
                      className="h4-primary"
                      itemProp="author"
                    >
                      {review.name}
                    </h4>
                    <time
                      dateTime={review.time}
                      className="text-base text-gray-500"
                      itemProp="datePublished"
                    >
                      {review.time}
                    </time>
                  </div>
                </div>
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 ${
                        starIdx < 4 ? "fill-yellow-400" : "fill-muted"
                      }`}
                    />
                  ))}
                </div>
              </header>
              <p className="p-primary" itemProp="reviewBody">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* SEE MORE */}
      <div className="text-center mt-8">
        <Button
          variant="link"
          className="text-lg text-red-600 font-medium hover:underline"
        >
          See more ↓
        </Button>
      </div>
    </section>
  )
}

export default ProductReview
