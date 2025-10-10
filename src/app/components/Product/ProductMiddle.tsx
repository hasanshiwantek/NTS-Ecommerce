"use client";
import React from "react";
import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import Image from "next/image";
import americanexpress from "@/assets/card-icon/american-express.png";
import debit from "@/assets/card-icon/debit-card.png";
import googlepay from "@/assets/card-icon/google-pay.png";
import paypal from "@/assets/card-icon/paypal.png";
import visa from "@/assets/card-icon/visa.png";
import freelogo from "@/assets/card-icon/freelogo.png";
import dhllogo from "@/assets/card-icon/dhllogo.png";
import upslogo from "@/assets/card-icon/upslogo.png";
import feedxlogo from "@/assets/card-icon/feedxlogo.png";
import cart from "@/assets/card-icon/shoppingCart.svg";

const ProductMiddle = ({ product, quantity, increment, decrement }: any) => {
  return (
    <div className=" product-middle  flex flex-col h-full w-full  lg:w-[45%] xl:w-[40.5%] 2xl:w-[40.8%]">
      <div>
        <div className="flex flex-col 2xl:gap-3 xl:gap-[9px] gap-3">
          <h6 className="h6-regular">{product?.brand?.name}</h6>
          <h3
            className="
    font-bold uppercase 
    text-[14px] leading-[1.3] tracking-[0.0075em] text-[#4a4a4a] 
    sm:text-[16px] 
    lg:text-[18px]
    lg:font-semibold 
    xl:text-[18px] 
    xl:font-semibold
    2xl:text-[24px]
  "
          >
            {product?.name || "N/A"}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-3">
            {product?.rating && (
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            )}
            <h6 className="h6-medium-color">
              {product?.rating || "N/A " + " Ratings"}
            </h6>
            <h6 className="!text-[#1A80AD] h6-medium">
              {product.reviews || "N/A " + " Reviews"}
            </h6>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col 2xl:gap-[4px] xl:gap-[3px] my-3">
          <div className="flex items-center space-x-3">
            <h2 className="h2-secondary">
              £{Number(product?.price || 0).toFixed(2)}
            </h2>
            <h5 className="h5-regular line-through !text-[#FF435C]">
              £
              {product?.msrp && product.msrp > 0
                ? Number(product.msrp).toFixed(2)
                : "N/A"}
            </h5>
          </div>

          {/* Secure Methods */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="h6-18-px-regular">Secure methods:</span>
            <div className="flex items-center gap-2">
              <Image src={visa} alt="Visa" />
              <Image src={debit} alt="Debit" />
              <Image src={paypal} alt="PayPal" />
              <Image src={americanexpress} alt="AmEx" />
              <Image src={googlepay} alt="GooglePay" />
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="2xl:gap-[16px]  xl:gap-[12px] bg-[#F5F5F5] p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src={freelogo}
            alt="Free Shipping"
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1 text-center sm:text-left ">
            <h5 className="h5-bold">Free shipping Up to 10 lbs</h5>
            <p className="h7-regular">
              Get your orders delivered without extra cost.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={dhllogo} alt="DHL" className="w-14 h-10" />
            <Image src={upslogo} alt="UPS" className="w-14 h-10" />
            <Image src={feedxlogo} alt="FedEx" className="w-14 h-10" />
          </div>
        </div>

        {/* SKU / Availability / Quantity */}
        <div className="flex flex-col gap-3 w-full max-w-[696px] mt-2">
          <div className="flex items-center">
            <h5 className="h5-medium w-32 min-w-[120px]">SKU:</h5>
            <h5 className="h5-medium-20px-medium">{product?.sku || "N/A"}</h5>
          </div>
          <div className="flex items-center">
            <h5 className="h5-regular w-32 min-w-[120px]">Availability:</h5>
            <h5 className="h5-medium !text-[#00B67A]">
              {product?.availabilityText || "N/A"}
            </h5>
          </div>

          <div className="flex items-center">
            <h5 className="h5-regular w-32 min-w-[120px]">Quantity:</h5>
            <div
              className="
      flex items-center justify-center 
      w-24 h-10                   /* default (sm and below) */
      md:w-28 md:h-11             /* md screens */
      lg:w-32 lg:h-12             /* lg screens */
      xl:w-[120px] xl:h-[40px]    /* xl screens */
      2xl:w-[146px] 2xl:h-[48px]  /* 2xl screens */
      border border-gray-300 rounded-full
    "
            >
              <button
                onClick={decrement}
                className="
        flex items-center justify-center
        w-8 h-8 text-gray-700       /* default */
        md:w-9 md:h-9
        lg:w-10 lg:h-10
        xl:w-[40px] xl:h-[40px]
        2xl:w-[48px] 2xl:h-[48px]
        hover:text-red-500 transition
      "
              >
                <Minus width={15} height={15} />
              </button>

              <span
                className="
        flex items-center justify-center font-semibold
        text-sm sm:text-base md:text-lg
        w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12
        xl:w-[40px] xl:h-[40px] 2xl:w-[48px] 2xl:h-[48px]
        border-x border-gray-300
      "
              >
                {quantity}
              </span>

              <button
                onClick={increment}
                className="
        flex items-center justify-center
        w-8 h-8 text-gray-700
        md:w-9 md:h-9
        lg:w-10 lg:h-10
        xl:w-[40px] xl:h-[40px]
        2xl:w-[48px] 2xl:h-[48px]
        hover:text-green-600 transition
      "
              >
                <Plus width={15} height={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center 2xl:mt-8 xl:mt-7 lg:mt-5 md:mt-3 mt-3 gap-3 sm:gap-4">
        {/* Add to Cart */}
        <button
          className="
      bg-[#F15939] 
      hover:border-[#F15939] hover:bg-white hover:text-[#F15939] 
      font-medium text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[16.5px] 2xl:text-[22px] 
      text-white border border-[#F15939] 
      rounded-full flex items-center justify-center space-x-2 transition 
      py-3 sm:py-4 xl:py-3
      w-full lg:w-[40rem] xl:w-[50rem] 2xl:w-[70rem]
    "
        >
          <ShoppingCart
            className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
            fill="white"
          />
          <span>Add to Cart</span>
        </button>

        {/* Buy Now */}
        <button
          className="
      text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[16.5px] 2xl:text-[22px] 
      font-medium border border-[#4A4A4A] 
      bg-transparent text-[#4A4A4A] 
      hover:text-[#F15939] hover:bg-white hover:border-[#F15939] 
      rounded-full flex items-center justify-center space-x-2 transition 
      py-3 sm:py-4 xl:py-3
      w-full lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem]
    "
        >
          <span>Buy Now</span>
        </button>
      </div>

      {/* Note */}
      <div className="p-3 2xl:mt-4 xl:mt-2 mt-2">
        <p className="h6-regular !text-[#4A4A4A] leading-6 italic xl:w-[490px] 2xl:w-[550px]">
          <span className="text-red-600">*</span> All Business Entities,
          Corporations, Public & Private School Systems, Governmental
          Organizations, Colleges, Universities & Libraries are welcome to
          submit purchase orders.
        </p>
      </div>
    </div>
  );
};

export default ProductMiddle;
