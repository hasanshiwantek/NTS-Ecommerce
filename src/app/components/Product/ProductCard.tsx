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
  {/* Breadcrumb */}
  <p className="p-primary text-base sm:text-sm text-gray-500 mb-4 sm:mb-6">
    Home <span className="mx-2">{">"}</span>
    {product.name} <span className="mx-2">{">"}</span>
    <span className="text-gray-700 font-medium">{product.code}</span>
  </p>

  {/* Product Layout */}
   <div className="flex flex-wrap lg:flex-nowrap gap-6 sm:gap-8 bg-white p-4 sm:p-6 rounded-xl w-full max-w-[1719px] mx-auto">
    {/* Left: Images */}
          <div className="flex flex-col w-full lg:w-[30%] xl:w-[600px]">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        {/* Thumbnails */}
        <div
          className="
            flex gap-2 pb-2
            max-[642px]:flex-row max-[642px]:overflow-x-auto
            sm:flex-col sm:gap-y-3 sm:overflow-visible sm:pb-0 mb-1
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
              className={`w-24 h-24 object-contain my-4 rounded-lg cursor-pointer transition bg-[#F2F3F7] p-2
                ${
                  selectedImage === img
                    ? "border-2 border-blue-500 ring-2 ring-blue-300"
                    : "border"
                }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 sm:mt-0 flex items-center justify-center w-full h-64 sm:h-[400px] md:h-[450px] lg:w-[350px] xl:h-[499.6673889160156px] p-1 bg-[#F2F3F7]">
          <Image
            src={selectedImage || "/default-product-image.svg"}
            alt={product?.image?.[0]?.altText || product?.name || "Product"}
            className="w-full h-full object-contain rounded-lg lg:p-16"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>

    {/* Middle: Details */}
    <div className="flex flex-col h-full w-full lg:w-[45%] xl:w-[696px]">
      <div>
        <h6 className="h6-regular">{product?.brand?.name}</h6>
        <h3 className="h3-secondary leading-8 mb-3">
          {product?.pageTitle || "N/A"}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-3 mb-4">
          {product?.rating && (
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          )}
          <h6 className="h6-medium">
            {product?.rating || "N/A " + " Ratings"}
          </h6>
          <h6 className="!text-blue-500 h6-medium">
            {product.reviews || "N/A " + " Reviews"}
          </h6>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <h2 className="h2-secondary">
              £{Number(product?.price || 0).toFixed(2)}
            </h2>
            <h5 className="h5-regular line-through !text-pink-400">
              £
              {product?.msrp && product.msrp > 0
                ? Number(product.msrp).toFixed(2)
                : "N/A"}
            </h5>
          </div>

          {/* Secure Methods */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-300 pb-3">
            <span className="p-primary sm:text-sm text-gray-600 font-medium">
              Secure methods:
            </span>
            <div className="flex items-center gap-2">
              <Image src={visa} alt="Visa" className="h-auto w-auto" />
              <Image src={debit} alt="Debit" className="h-auto w-auto" />
              <Image src={paypal} alt="PayPal" className="h-auto w-auto" />
              <Image src={americanexpress} alt="AmEx" className="h-auto w-auto" />
              <Image src={googlepay} alt="GooglePay" className="h-auto w-auto" />
            </div>
          </div>

          {/* Shipping Info */}
          <div className="my-3">
            <div className="mt-6 bg-[#F5F5F5] p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <Image
                src={freelogo}
                alt="Free Shipping Logo"
                className="w-12 h-12 object-contain"
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
                <Image src={feedxlogo} alt="FedEx" className="w-14 h-10" />
              </div>
            </div>
          </div>

          {/* SKU */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 my-3">
            <h5 className=" h5-medium ">SKU:</h5>
            <h5 className="h5-medium text-gray-900">
              {product?.sku || "N/A"}
            </h5>
          </div>

          {/* Availability */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <h5 className="h5-regular">Availability:</h5>
            <h5 className="h5-medium !text-[#00B67A]">
              {product?.availabilityText || "N/A"}
            </h5>
          </div>

          {/* Quantity */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2">
            <h5 className="h5-regular">Quantity:</h5>
           <div className="flex items-center justify-center w-28 lg:w-[146px] lg:h-[48px] border border-gray-300 rounded-full mt-2 sm:mt-0">
  {/* Decrement */}
  <button
    onClick={decrement}
    className="flex items-center justify-center w-[48px] h-[48px] text-gray-700 hover:text-red-500 transition"
  >
    <Minus width={15} height={15} />
  </button>

  {/* Quantity */}
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

      {/* Actions */}
      <div className="flex justify-between items-center gap-3 sm:gap-4">
        <button className="!w-[70rem] btn-primary !rounded-full flex items-center justify-center space-x-2 transition !py-5">
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
        <button className="!w-[30rem] btn-outline-primary !rounded-full flex items-center justify-center space-x-2 transition !py-5">
          <span>Buy Now</span>
        </button>
      </div>

      {/* Note */}
      <div className="mt-4 p-3">
        <p className="text-[18px] font-normal text-[#4A4A4A] leading-6 italic w-[60rem]">
          <span className="text-red-600">*</span> All Business Entities,
          Corporations, Public & Private School Systems, Governmental
          Organizations, Colleges, Universities & Libraries are welcome to
          submit purchase orders.
        </p>
      </div>
    </div>

    {/* Right: Support Section */}
     <div className="w-full lg:w-[25%] xl:w-[376px] mt-6 xl:mt-0 xl:ml-auto">
      {/* Support Card 1 */}
      <div className="border border-gray-300 rounded-lg text-center h-max">
        <div className="bg-[#F5F6FA] p-2">
          <h3 className="h5-bold my-3">Dedicated Support Team, 24/7</h3>
        </div>
        <div className="flex justify-center my-2">
          <Image src={supportIcon1} alt="Support 1" className="w-12 h-12 rounded-full" />
          <Image src={supportIcon2} alt="Support 2" className="w-12 h-12 rounded-full -ml-2" />
          <Image src={supportIcon3} alt="Support 3" className="w-12 h-12 rounded-full -ml-2" />
        </div>
        <div className="p-3">
          <div className="flex justify-center mb-2">
            <button className="btn-outline-primary flex w-64 justify-center gap-5 items-center !rounded-full !text-lg">
              <Phone width={12} height={12} /> Call us Now
            </button>
          </div>
          <div className="flex justify-center gap-3 mb-3">
            <button className="!px-10 py-2 btn-outline-primary w-32 !rounded-full !text-lg">
              Email
            </button>
            <button className="!px-10 py-2 btn-outline-primary w-32 !rounded-full !text-lg">
              Chat
            </button>
          </div>
        </div>
      </div>

      {/* Support Card 2 */}
      <div className="mt-6 border border-gray-300 rounded-lg text-center h-max">
        <div className="bg-[#F5F6FA] p-2">
          <h3 className="h5-bold my-3">Looking for a Bulk Quantity?</h3>
        </div>
        <div className="p-3">
          <div className="flex flex-col items-start mb-2">
            <p className="text-xl w-80 text-start">
              Request a Quote and one of our sales representative will get in touch with you very soon
            </p>
            <button className="btn-outline-primary flex m-auto w-64 justify-center gap-5 items-center !rounded-full !text-lg">
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
