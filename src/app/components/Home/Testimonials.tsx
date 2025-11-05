"use client";
import React, { useState, useEffect } from "react";
import { reviewData } from "@/const/data";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
import dynamic from "next/dynamic";
interface Review {
  img: string;
  dateOfExperience: string;
  title: string;
  description: string;
  name: string;
}

// Dynamically import Carousel to reduce bundle size
const Carousel = dynamic(() => import("primereact/carousel").then((mod) => mod.Carousel), {
  ssr: false,
});
const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3); // dynamically set numVisible

  const responsiveOptions = [
    { breakpoint: 1400, numVisible: 3 },
    { breakpoint: 1199, numVisible: 2 },
    { breakpoint: 767, numVisible: 2 },
    { breakpoint: 575, numVisible: 1 },
  ];

  useEffect(() => {
    setReviews(reviewData);

    const handleResize = () => {
      const width = window.innerWidth;
      const resp = responsiveOptions.find((r) => width <= r.breakpoint);
      setVisibleItems(resp ? resp.numVisible : 3);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / visibleItems);

  const navigateLeft = () =>
    setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  const navigateRight = () =>
    setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));

  const reviewTemplate = (review: Review) => (
    <div className="mt-[2rem] m-2 text-left p-[24px] flex flex-col gap-5 bg-white ">
      <FaQuoteLeft size={24} color="#00b67a" className="mb-2" />
      <h4 className="mb-2 h3-24px-medium line-clamp-1">{review.title}</h4>
      <div className="mb-3 flex items-center justify-between">
        <img src={review.img} alt="Rating" style={{ height: "2rem" }} />
        <p className="mb-1 font-[500]">{review.dateOfExperience}</p>
      </div>
      <p className="mb-3 h5-20px-reg h-[140px] line-clamp-5">
        {review.description.length > 120
          ? review.description.slice(0, 120) + "..."
          : review.description}
      </p>
      <p className="mb-1 h6-18-px-regular border-t p-1">{review.name}</p>
    </div>
  );

  return (
    <div>
      {/* Header */}
      <header className="text-center flex flex-col 2xl:gap-5 gap-3 mb-10">
        <h1 className="h5-20px-regular mb-4">Testimonials</h1>
        <h2 className="h1-lg mb-4">
          Trusted by
          <span className="!text-[var(--primary-color)]"> 450+</span> Satisfied
          Clients
        </h2>
        <p className="h3-24px-regular mx-auto">
          Don't take our words for it, See What our customers Say
        </p>
      </header>

      <div className="flex items-center justify-between md:flex-col sm:flex-col lg:flex-row flex-col md:px-[7%] lg:px-[5.2%] xl:px-[5.2%] 2xl:px-[5.2%] px-[7%]">
        {/* Left Summary Box */}
        <div className="flex flex-col items-center justify-between gap-5 whitespace-nowrap 2xl:px-[60px] 2xl:py-[20px]">
          <h1 className="text-center h3-regular">Excellent</h1>
          <Image
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            alt="Reviews"
            width={200}
            height={200}
            className="max-w-[80%]"
          />
          <span className="h5-20px-regular">
            Based on
            <a href="#" className="ml-2 border-b-2">
              18 <br />
              reviews
            </a>
          </span>
          <div className="flex items-center justify-center">
            <IoStarSharp size={20} color="#00b67a" />
            <h1 className="text-[#2A2A2A] mt-1">TrustPilot</h1>
          </div>
        </div>

        {/* Carousel */}
        <div className="card w-[81%] relative">
          <Carousel
            value={reviews}
            page={pageIndex}
            onPageChange={(e) => setPageIndex(e.page)}
            numVisible={visibleItems}
            numScroll={1}
            responsiveOptions={responsiveOptions.map((r) => ({
              breakpoint: r.breakpoint + "px",
              numVisible: r.numVisible,
              numScroll: 1,
            }))}
            className="custom-carousel"
            circular={false}
            autoplayInterval={0}
            itemTemplate={reviewTemplate}
            showIndicators={false}
            showNavigators={false}
          />

          {/* Custom Navigation */}
          <div className="flex items-center justify-center mt-4 gap-4">
            <button
              onClick={navigateLeft}
              className="p-1 text-gray-500 hover:text-gray-800 transition"
            >
              <GoArrowLeft size={25} />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`w-8 h-1 rounded-full transition-all duration-500 ${
                    i === pageIndex ? "bg-[#e84949]" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>

            <button
              onClick={navigateRight}
              className="p-1 text-gray-500 hover:text-gray-800 transition"
            >
              <GoArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
