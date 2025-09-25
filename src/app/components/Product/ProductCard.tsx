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
import fasterlogo from "@/assets/card-icon/fasterlogo.png";
import bluelogo from "@/assets/card-icon/bluelogo.png";
import dunlogo from "@/assets/card-icon/dunlogo.png";
import authorizelogo from "@/assets/card-icon/authorizelogo.png";
import trustlogo from "@/assets/card-icon/trustlogo.png";
import laptopimg1 from "@/assets/laptopimg1.png";
import laptopimg2 from "@/assets/laptopimg2.png";
import laptopimg3 from "@/assets/laptopimg3.png";
import laptopimg4 from "@/assets/laptopimg4.png";
import laptopimg5 from "@/assets/laptopimg5.png";
import supportIcon1 from "@/assets/support/support-img1.png";
import supportIcon2 from "@/assets/support/support-img2.png";
import supportIcon3 from "@/assets/support/support-img3.png";
import { Phone, Plus, Minus } from "lucide-react";
import Image from "next/image";
const SingleProduct: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  // Array of product images
  const images = [laptopimg1, laptopimg2, laptopimg3, laptopimg4, laptopimg5];

  // Selected image state (default = first image)
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const product = {
    name: "Western Digital",
    name2:
      "PA905U - Targus 720KB PC 1.44MB PC 1.4MB Mac 1 x 4-pin Type A Male Hot-Swappable 3.5-Inch External Floppy Drive",
    code: "CODE92934U9",
    price: 28.0,
    originalPrice: 40.0,
    rating: 4.5,
    reviews: 324,
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <p className="p-primary text-base sm:text-sm text-gray-500 mb-4 sm:mb-6">
        Home <span className="mx-2">{">"}</span>
        {product.name} <span className="mx-2">{">"}</span>
        <span className="text-gray-700 font-medium">{product.code}</span>
      </p>

      {/* Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-8 bg-white p-4 sm:p-6 rounded-xl shadow-md">
        {/* Left: Images */}
        <div className="flex flex-col lg:col-span-1">
          <div className="flex flex-col sm:flex-row sm:space-x-4 ">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 sm:gap-y-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
              {images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-16 sm:w-24 sm:h-20 object-cover rounded-lg cursor-pointer transition ${
                    selectedImage === img
                      ? "border-2 border-blue-500"
                      : "border"
                  }`}
                />
              ))}
            </div>

            <div className="flex-1 sm:mt-0 flex items-center justify-center h-64 sm:h-[400px] md:h-[450px] ">
              <Image
                src={"https://cdn11.bigcommerce.com/s-4jpol1blth/images/stencil/640w/products/78219/966124/41FF8B7RPNL._AC___93112.1736531700.jpg?c=1"}
                alt="Selected Product"
                className="w-full h-full object-contain rounded-lg  "
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col h-full lg:col-span-2 ">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-[var(--primary-color)] mb-2 lg:mb-0">
              {product.name}
            </h1>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-7 mb-3">
              {product.name2}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-700 font-semibold text-base">
                {product.rating}
              </span>
              <span className="text-blue-500 font-bold text-base">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl sm:text-3xl font-bold">
                  £{product.price}.00
                </span>
                <span className="text-base sm:text-lg line-through text-pink-400">
                  £{product.originalPrice}.00
                </span>
              </div>

              {/* Secure Methods */}
              <div className="flex flex-wrap items-center gap-2 border-b border-gray-300 pb-3">
                <span className="p-primary sm:text-sm text-gray-600 font-medium">
                  Secure methods:
                </span>
                <div className="flex items-center gap-2">
                  <Image src={visa} alt="Visa" className="h-6 w-auto" />
                  <Image src={debit} alt="Debit" className="h-6 w-auto" />
                  <Image src={paypal} alt="PayPal" className="h-6 w-auto" />
                  <Image
                    src={americanexpress}
                    alt="AmEx"
                    className="h-6 w-auto"
                  />
                  <Image
                    src={googlepay}
                    alt="GooglePay"
                    className="h-6 w-auto"
                  />
                </div>
              </div>

              <div className="my-3">
                {/* Row 1 */}
                <div className="mt-6 bg-[#F5F5F5] p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Image
                    src={freelogo}
                    alt="Free Shipping Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="h4-primary">Free shipping Up to 10 lbs</h4>
                    <p className="span-primary ">
                      Get your orders delivered without extra cost.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={dhllogo}
                      alt="DHL"
                      className="w-12 h-10 object-contain"
                    />
                    <Image
                      src={upslogo}
                      alt="UPS"
                      className="w-12 h-10 object-contain"
                    />
                    <Image
                      src={feedxlogo}
                      alt="FedEx"
                      className="w-12 h-10 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* SKU */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 my-3">
                <span className=" span-primary ">SKU:</span>
                <span className="text-sm sm:text-lg font-bold text-gray-900">
                  Z9PR-D12-(ASMB6-IKVM)
                </span>
              </div>

              {/* Availability */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <span className="span-primary">Availability:</span>
                <span className="text-sm sm:text-lg text-green-900">
                  In Stock
                </span>
              </div>

              {/* Quantity */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2">
                <span className="span-primary">Quantity:</span>
                <div className="flex items-center  space-x-3 border border-gray-300 rounded-full px-2 mt-2 sm:mt-0">
                  <button
                    onClick={decrement}
                    className="w-7 h-7   sm:w-8 sm:h-8 flex items-center justify-center text-gray-700 hover:text-red-500 transition"
                  >
                    <Minus width={15} height={15} />
                  </button>
                  <span className="text-base sm:text-lg font-semibold w-6 text-center border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={increment}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-700 hover:text-green-600 transition"
                  >
                    <Plus width={15} height={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center gap-3 sm:gap-4">
            <button className="w-full btn-primary  !rounded-full flex items-center justify-center space-x-2  transition">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="w-full btn-outline-primary !rounded-full flex items-center justify-center space-x-2 transition">
              <span>Buy Now</span>
            </button>
          </div>
          {/* Note under images */}
          <div className="mt-4  p-3">
            <p className="text-base  text-gray-600 leading-6 italic">
              <span className="text-red-600"> *</span> All Business Entities,
              Corporations, Public & Private School Systems, Governmental
              Organizations, Colleges, Universities & Libraries are welcome to
              submit purchase orders.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="lg:col-span-1">
          <div className="mt-6 border border-gray-300 rounded-lg text-center h-max ">
            {/* Avatars */}
            <div className="bg-[#F5F6FA] p-2 ">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                Dedicated Support Team, 24/7
              </h3>
            </div>
            <div className="flex justify-center my-2">
              <Image
                src={supportIcon1}
                alt="Support 1"
                className="w-12 h-12 object-cover rounded-full"
                width={200}
                height={200}
              />
              <Image
                src={supportIcon2}
                alt="Support 2"
                className="w-12 h-12 object-cover rounded-full -ml-2"
                width={200}
                height={200}
              />
              <Image
                src={supportIcon3}
                alt="Support 3"
                className="w-12 h-12 object-cover rounded-full -ml-2"
                width={200}
                height={200}
              />
            </div>

            {/* Buttons */}
            <div className="p-3 ">
              <div className="flex justify-center mb-2 ">
                <button className="btn-outline-primary flex  w-full justify-center gap-5 items-center !rounded-full">
                  <Phone width={15} height={15} /> Call us Now
                </button>
              </div>
              <div className="flex  xs:flex-row justify-center gap-3 mb-3">
                <button className="!px-10 py-2 btn-outline-primary  w-full  !rounded-full transition">
                  Email
                </button>
                <button className="!px-10 py-2 btn-outline-primary w-full !rounded-full transition">
                  Chat
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-gray-300 rounded-lg text-center h-max">
            {/* Avatars */}
            <div className="bg-[#F5F6FA] p-2 ">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                Looking for a Bulk Quantity?
              </h3>
            </div>

            {/* Buttons */}
            <div className="p-3 ">
              <div className="flex flex-col justify-center mb-2 ">
                <p className="p-primary">
                  Request a Quote and one of our sales representative will get
                  in touch with you very soon
                </p>
                <button className="btn-outline-primary flex  w-full justify-center gap-5 items-center !rounded-full">
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

export default SingleProduct;
