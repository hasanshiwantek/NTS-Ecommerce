"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { getBrands } from "@/redux/slices/homeSlice";
import CommonCarousel from "../commoncarousel/CommonCarousel";

const Brands = () => {
  const dispatch = useAppDispatch();
  const { getBrand, error, loading } = useAppSelector(
    (state: any) => state?.home
  );
  const data = getBrand?.data?.map((item: any) => item?.brand);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        // SKELETON UI (when loading is true)
        <div className="w-full">
          <div className="flex">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  // Mimics CarouselItem's responsive basis
                  className="
            basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 2xl:basis-1/8 
            flex-shrink-0 
            px-1 
            animate-pulse
          "
                >
                  {/* Outer card wrapper (no border/shadow needed for skeleton) */}
                  <div className="flex justify-center items-center">
                    {/* Mimics CardContent dimensions and provides background */}
                    <div
                      className="
                flex items-center justify-center p-6 
                w-full 2xl:w-[123.6%] h-[12.5rem] 
                bg-gray-200 rounded-lg /* Skeleton background */
              "
                    >
                      {/* Placeholder for the Image container */}
                      <div className="w-44 h-44 flex items-center justify-center">
                        {/* The actual placeholder shape */}
                        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : data && data?.length > 0 ? (
        <CommonCarousel items={data} />
      ) : (
        error
      )}
    </>
  );
};

export default Brands;
