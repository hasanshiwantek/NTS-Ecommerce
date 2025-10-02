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

const ProductMiddle = ({ product, quantity, increment, decrement }: any) => {
  return (
    <div className="flex flex-col h-full w-full lg:w-[45%] xl:w-[496px] 2xl:w-[696px]">
      <div>
        <div className="flex flex-col gap-3">
          <h6 className="h6-regular">{product?.brand?.name}</h6>
          <h3 className="h3-secondary !font-bold !uppercase">
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
        <div className="flex flex-col gap-3 my-3">
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
        <div className="mt-6 bg-[#F5F5F5] p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src={freelogo} alt="Free Shipping" className="w-16 h-16" />
          <div className="flex-1 text-center sm:text-left">
            <h5 className="h5-bold">Free shipping Up to 10 lbs</h5>
            <p className="h7-regular">Get your orders delivered without extra cost.</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={dhllogo} alt="DHL" className="w-14 h-10" />
            <Image src={upslogo} alt="UPS" className="w-14 h-10" />
            <Image src={feedxlogo} alt="FedEx" className="w-14 h-10" />
          </div>
        </div>

        {/* SKU / Availability / Quantity */}
        <div className="flex flex-col gap-3 w-full max-w-[696px] mt-4">
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
            <div className="flex items-center justify-center w-28 lg:w-[146px] lg:h-[48px] border border-gray-300 rounded-full">
              <button
                onClick={decrement}
                className="flex items-center justify-center w-[48px] h-[48px] text-gray-700 hover:text-red-500 transition"
              >
                <Minus width={15} height={15} />
              </button>
              <span className="flex items-center justify-center text-base sm:text-lg font-semibold w-[48px] h-[48px] border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="flex items-center justify-center w-[48px] h-[48px] text-gray-700 hover:text-green-600 transition"
              >
                <Plus width={15} height={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-8 gap-3 sm:gap-4">
        <button className="w-[70rem] bg-[#F15939] hover:border-[#F15939] hover:bg-white hover:text-[#F15939] font-medium text-[22px] text-white border border-[#F15939] !rounded-full flex items-center justify-center space-x-2 transition !py-5">
          <ShoppingCart className="w-7 h-7" />
          <span>Add to Cart</span>
        </button>
        <button className="w-[30rem] text-[22px] font-medium border-2 border-[#4A4A4A] bg-transparent hover:text-[#F15939] hover:bg-[white] text-[#333333] hover:border-[#F15939] !rounded-full flex items-center justify-center space-x-2 transition !py-5">
          <span>Buy Now</span>
        </button>
      </div>

      {/* Note */}
      <div className="p-3">
        <p className="h6-regular !text-[#4A4A4A] leading-6 italic w-[60rem]">
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
