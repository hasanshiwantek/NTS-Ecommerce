"use client";
import React, { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import americanexpress from "@/assets/card-icon/american-express.png";
import debit from "@/assets/card-icon/debit-card.png";
import googlepay from "@/assets/card-icon/google-pay.png";
import paypal from "@/assets/card-icon/paypal.png";
import visa from "@/assets/card-icon/visa.png";
import freelogo from "@/assets/card-icon/freelogo.png";
import dhllogo from "@/assets/card-icon/dhllogo.png";
import upslogo from "@/assets/card-icon/upslogo.png";
import feedxlogo from "@/assets/card-icon/feedxlogo.png";
import supportIcon1 from "@/assets/support/support-img1.png";
import supportIcon2 from "@/assets/support/support-img2.png";
import supportIcon3 from "@/assets/support/support-img3.png";
import { Phone, Plus, Minus } from "lucide-react";
import Image from "next/image";
const ProductCard = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(0);
  const images =
    product?.image?.length > 0
      ? product.image.map((img: any) => img.path)
      : ["/default-product-image.svg"];

  // Selected image state (default = first image)
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <div className="max-w-full mx-auto">
      {/* Product Layout */}
      <div className=" bg-white  rounded-xl w-full max-w-[1719px]  sm:p-4">
        {/* Breadcrumb */}
        <p className="h5-20px-regular lg:mb-7  ">
            Home{" "}
  <Image
    className="inline-block align-middle"
    src="/arrow-right.png"
    alt="Arrow Right Icon"
    width={12}
    height={12}
  />{" "}
          {/* {product.name} {" "} */}
        {product.categoryHierarchy?.map((data:any, index:number) => (
  <span key={index} className="h5-regular">
    {data?.name}
  </span>
))}

        
        </p>

        <div className="flex flex-wrap lg:flex-nowrap gap-6 sm:gap-8  ">
          {/* Left: Images */}
          <div className="flex flex-col w-full lg:w-[30%] xl:w-[600px]">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              {/* Thumbnails */}
              <div
                className="
              flex flex-col justify-between gap-2 
            max-[642px]:flex-row max-[642px]:overflow-x-auto
            sm:flex-col sm:gap-y-3 sm:overflow-visible sm:pb-0 
          "
              >
               {images.map((img: string, idx: number) => (
  <Image
    key={idx}
    src={img}
    alt={`Thumbnail ${idx + 1}`}
    width={150}
    height={150}
    onClick={() => setSelectedImage(img)}
    className={`w-28 h-28 object-contain rounded-lg cursor-pointer transition bg-[#F2F3F7] p-2
      ${
        selectedImage === img
          ? "border-2 border-black ring-2 ring-gray-900"
          : "border border-black ring-2 ring-[#3333331A]"
      }`}
  />
))}

              </div>

              {/* Main Image */}
              <div
                className="flex-1 rounded-md sm:mt-0 border  flex items-center justify-center w-full h-64 sm:h-[400px] md:h-[450px] xl:w-[30rem]
             2xl:w-[499.67px] xl:h-[499.67px]  2xl:h-[499.6673889160156px] p-1 bg-[#F2F3F7]"
              >
                <Image
                  src={selectedImage || "/default-product-image.svg"}
                  alt={
                    product?.image?.[0]?.altText || product?.name || "Product"
                  }
                  className="w-full h-full object-contain rounded-lg lg:p-0 2xl:p-16"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Middle: Details */}
          <div className="flex flex-col gap-5 h-full w-full lg:w-[45%] xl:w-[496px] 2xl:w-[696px]">
            <div>
              <div className="flex flex-col gap-3 ">
                <h6 className="h6-regular">{product?.brand?.name}</h6>
                <h3 className="h3-secondary leading-10">
                  {product?.pageTitle || "N/A"}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-3 ">
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

              <div className="">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center space-x-3 ">
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
                  <div className="flex flex-wrap items-center gap-2  ">
                    <span className="h6-18-px-regular">Secure methods:</span>
                    <div className="flex items-center gap-2">
                      <Image src={visa} alt="Visa" className="h-auto w-auto" />
                      <Image
                        src={debit}
                        alt="Debit"
                        className="h-auto w-auto"
                      />
                      <Image
                        src={paypal}
                        alt="PayPal"
                        className="h-auto w-auto"
                      />
                      <Image
                        src={americanexpress}
                        alt="AmEx"
                        className="h-auto w-auto"
                      />
                      <Image
                        src={googlepay}
                        alt="GooglePay"
                        className="h-auto w-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="my-3">
                  <div className="mt-6 bg-[#F5F5F5] p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Image
                      src={freelogo}
                      alt="Free Shipping Logo"
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <h5 className="h5-bold">Free shipping Up to 10 lbs</h5>
                      <p className="h7-regular">
                        Get your orders delivered without extra cost.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={dhllogo} alt="DHL" className="w-14 h-10" />
                      <Image src={upslogo} alt="UPS" className="w-14 h-10" />
                      <Image
                        src={feedxlogo}
                        alt="FedEx"
                        className="w-14 h-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-[696px]">
                  {/* SKU */}
                  <div className="flex items-center">
                    <h5 className="h5-medium w-32 min-w-[120px]">SKU:</h5>
                    <h5 className="h5-medium-20px-medium ">
                      {product?.sku || "N/A"}
                    </h5>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center">
                    <h5 className="h5-regular w-32 min-w-[120px]">
                      Availability:
                    </h5>
                    <h5 className="h5-medium !text-[#00B67A]">
                      {product?.availabilityText || "N/A"}
                    </h5>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center">
                    <h5 className="h5-regular w-32 min-w-[120px]">Quantity:</h5>
                    <div className="flex items-center justify-center w-28 lg:w-[146px] lg:h-[48px] border border-gray-300 rounded-full">
                      {/* Decrement */}
                      <button
                        onClick={decrement}
                        className="flex items-center justify-center w-[48px] h-[48px] text-gray-700 hover:text-red-500 transition"
                      >
                        <Minus width={15} height={15} />
                      </button>

                      {/* Quantity Number */}
                      <span className="flex items-center justify-center text-base sm:text-lg font-semibold w-[48px] h-[48px] border-x border-gray-300">
                        {quantity}
                      </span>

                      {/* Increment */}
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
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <button className="w-[65rem]  bg-[#F15939]  hover:border-[#F15939] hover:bg-white hover:text-[#F15939] h4-medium text-white border border-[#F15939]  hover:#f15939 !rounded-full flex items-center justify-center space-x-2 transition !py-5">
                <ShoppingCart className="w-7 h-7" />
                <span>Add to Cart</span>
              </button>
              <button className="w-[35rem]  h4-medium border-2  border-[#4A4A4A] bg-transparent hover:text-[#F15939] hover:bg-[white] text-[#333333] hover:border-[#F15939] !rounded-full flex items-center justify-center space-x-2 transition !py-5">
                <span>Buy Now</span>
              </button>
            </div>

            {/* Note */}
            <div className="mt-9 xl:mt-1 2xl:mt-1 lg:mt-16 p-3">
              <p className="h6-regular !text-[#4A4A4A] leading-6 italic w-[60rem]">
                <span className="text-red-600">*</span> All Business Entities,
                Corporations, Public & Private School Systems, Governmental
                Organizations, Colleges, Universities & Libraries are welcome to
                submit purchase orders.
              </p>
            </div>
          </div>

          {/* Right: Support Section */}
          <div className="w-full lg:w-[25%] xl:w-[376px] 2xl:w-[376px] mt-6 xl:mt-0 xl:ml-auto">
            {/* Support Card 1 */}
            <div className="border border-gray-300 rounded-[20px]  h-max w-full ">
              <div className="bg-[#F5F6FA] px-6 py-4 rounded-t-[20px] ">
                <h3 className="h5-bold my-2">Dedicated Support Team, 24/7</h3>
              </div>
              <div className="flex justify-center my-2">
                <Image
                  src={supportIcon1}
                  alt="Support 1"
                  className="w-[5rem] h-[5rem] rounded-full"
                />
                <Image
                  src={supportIcon2}
                  alt="Support 2"
                  className="w-[5rem] h-[5rem] rounded-full -ml-2"
                />
                <Image
                  src={supportIcon3}
                  alt="Support 3"
                  className="w-[5rem] h-[5rem] rounded-full -ml-2"
                />
              </div>
              <div className="p-3">
                <div className="flex justify-center mb-2">
                  <button className="btn-outline-primary flex w-80 justify-center gap-5 items-center !rounded-full h5-regular">
                    <Phone width={12} height={12} /> Call us Now
                  </button>
                </div>
                <div className="flex justify-center gap-3 mb-3">
                  <button className="!px-10 py-2 btn-outline-primary w-40 !rounded-full h5-regular">
                    Email
                  </button>
                  <button className="!px-10 py-2 btn-outline-primary w-40 !rounded-full h5-regular">
                    Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Support Card 2 */}
            <div className="mt-6 border border-gray-300 rounded-[20px]  h-max  lg:h-max">
              {/* Header */}
              <div className="bg-[#F5F6FA] px-6 py-4 rounded-t-[20px] ">
                <h3 className="h5-bold my-2">Looking for a Bulk Quantity?</h3>
              </div>

              {/* Body */}
              <div className="px-6 py-6 flex flex-col lg:text-start xl:items-start md:items-center sm:items-center items-center">
                <p className="h5-regular mb-4 max-w-[500px]  leading-[1.5]">
                  Request a Quote and one of our sales representative will get
                  in touch with you very soon
                </p>

                <button className="btn-outline-primary xl:w-96 lg:w-64  !py-4 flex justify-center items-center !rounded-full h5-regular">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
