"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { reviewData } from "@/const/data";
import styles from "@/style/ProductSection/ProductSection.module.css";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

interface Review {
  img: string;
  dateOfExperience: string;
  title: string;
  description: string;
  name: string;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    setReviews(reviewData);
  }, []);

  const reviewTemplate = (review: Review) => {
    return (
      <div className="mt-[2rem] m-2 text-left p-[24px]  flex flex-col gap-5  ">
          <h4 className="mb-2 h3-24px-medium line-clamp-1">{review.title}</h4>
        <div className="mb-3 flex items-center justify-between">

          <img
            src={review.img}
            alt="Rating"
            className="mb-2 "
            style={{ height: "2rem" }}
          />
          <p className="mb-1  font-[500]">{review.dateOfExperience}</p>
        </div>
        <div>
          <p className="mb-3 h5-20px-reg h-[149px]">
            {review.description.length > 120
              ? review.description.slice(0, 120) + "..."
              : review.description}
          </p>
          <p className="mb-1  h6-18-px-regular border-t p-1">{review.name}</p>
        </div>
      </div>
    );
  };

  return (
    <>
    <div>
        {/* Header */}
        <header className="text-center flex flex-col 2xl:gap-5 gap-3 mb-10 ">
          <h1 className="h5-20px-regular  mb-4">Testimonials</h1>
          <h2 className="h1-lg mb-4 ">
            Trusted by
            <span className="!text-[var(--primary-color)]"> 450+</span>{" "}
            Satisfied Clients
          </h2>
          <p className="h3-24px-regular mx-auto ">
            Don't take our words for it, See What our customers Say
          </p>
        </header>
      <div className="flex items-center justify-between md:flex-col sm:flex-col lg:flex-row flex-col">

        <div className="flex flex-col items-center justify-between gap-5 whitespace-nowrap 2xl:px-[60px] 2xl:py-[20px] ">
          <h1 className="text-center h3-regular ">Excellent</h1>
          <Image
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            alt="Reviews"
            width={200}
            height={200}
            className="max-w-[80%]"
          />
          <span className="h5-20px-regular">
            Based on
            <a href="#" className=" ml-2 border-b-2">
              18 <br/>reviews
            </a>
          </span>
          <div className="flex items-center justify-center">
            <IoStarSharp size={20} color="#00b67a" />
            <h1 className="text-[#2A2A2A] mt-1">TrustPilot</h1>
          </div>
        </div>
        <div className="card w-[90%] ">
          <Carousel
            value={reviews}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular
            autoplayInterval={4000}
            itemTemplate={reviewTemplate}
          />
        </div>
      </div>
    </div>

    </>
  );
};

export default Testimonials;
