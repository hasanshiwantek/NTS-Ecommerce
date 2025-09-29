"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";
const CheckoutComponent = () => {
  return (
       <div className="bg-gray-50 min-h-screen py-10 px-[5%]">
      {/* Heading + Subheading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-gray-600 mt-2">
          Please enter your details below to complete your purchase
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section (Shipping Address, Shipping Method, Payment Method) */}
      <div className="lg:col-span-1 space-y-6">
  {/* 1. Shipping Address */}
  <div className="bg-white border rounded-md shadow-sm p-6">
    <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
      <span className="w-6 h-6 flex items-center justify-center rounded-full border bg-red-600 border-red-600 text-white text-sm">
        1
      </span>
      Shipping Address
    </h2>

    <form className="space-y-4">
      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <Input id="email" type="email" className="w-full !max-w-full" />
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <Input id="firstName" type="text" className="w-full !max-w-full" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <Input id="lastName" type="text" className="w-full !max-w-full" />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <Input id="company" type="text" className="w-full !max-w-full" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <Input id="phone" type="text" className="w-full !max-w-full" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
          Address Line 1 *
        </label>
        <Input id="address1" type="text" className="w-full !max-w-full" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
          Address Line 2
        </label>
        <Input id="address2" type="text" className="w-full !max-w-full" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          City *
        </label>
        <Input id="city" type="text" className="w-full !max-w-full" />
      </div>

      {/* Country Select */}
      <div className="flex flex-col">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
          Country *
        </label>
        <select
          id="country"
          className="border rounded px-3 py-2 w-full text-gray-600"
        >
          <option>Select your country *</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
          State/Province
        </label>
        <Input id="state" type="text" className="w-full !max-w-full" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
          Zip/Postcode *
        </label>
        <Input id="zip" type="text" className="w-full !max-w-full" />
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="billingSame" defaultChecked />
        <label htmlFor="billingSame" className="text-sm text-gray-600">
          My Billing address is the same as my Shipping address
        </label>
      </div>
    </form>
  </div>
</div>



        {/* Middle Section (Shipping Method + Payment Method) */}
      <div className="lg:col-span-1 space-y-6">
  {/* 2. Shipping Method */}
  <div className="bg-white border rounded-md shadow-sm p-6">
    <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
      <span className="w-6 h-6 flex items-center justify-center rounded-full border bg-red-600 text-white border-red-600 text-sm">
        2
      </span>
      Shipping Method
    </h2>

    <div className="space-y-3 py-3">
      <label className="flex flex-col gap-3 border rounded px-3 py-2 cursor-pointer">
        <div className="flex items-center gap-3">
          <input type="radio" name="shipping" className="text-red-600" />
          <span>$00</span>
        </div>
        <div className="text-sm text-gray-700">
          Ship on my Company/Own shipping account (Add shipping account in the
          comments box)
        </div>
      </label>

   <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4">
  <label className="flex flex-col items-center border rounded px-4 py-3 cursor-pointer flex-1 has-[:checked]:border-orange-500">
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="shipping"
        className="text-orange-500 focus:ring-orange-500"
      />
      <Image
        src="/checkouticon/fedex.png"
        alt="FedEx"
        width={50}
        height={25}
        className="object-contain"
      />
    </div>
    <span className="mt-2 text-sm text-gray-700 text-center">
      $199.48 <br />
      <span className="text-xs text-gray-500">(International Economy)</span>
    </span>
  </label>

  <label className="flex flex-col items-center border rounded px-4 py-3 cursor-pointer flex-1 has-[:checked]:border-orange-500">
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="shipping"
        className="text-orange-500 focus:ring-orange-500"
      />
      <Image
        src="/checkouticon/fedex.png"
        alt="FedEx"
        width={50}
        height={25}
        className="object-contain"
      />
    </div>
    <span className="mt-2 text-sm text-gray-700 text-center">
      $239.91 <br />
      <span className="text-xs text-gray-500">(International Priority)</span>
    </span>
  </label>
</div>


      <div className="mt-4">
        <label
          htmlFor="orderComment"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Order Comment
        </label>
        <Input
          id="orderComment"
          type="text"
          className="w-full !max-w-full"
        />
      </div>
    </div>
  </div>

  {/* 3. Payment Method */}
  <div className="bg-white border rounded-md shadow-sm p-6">
  <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
    <span className="w-6 h-6 flex items-center justify-center rounded-full border bg-red-600 border-red-600 text-white text-sm">
      3
    </span>
    Payment Method
  </h2>

  {/* Credit Card */}
  <label className="flex flex-col border rounded px-3 py-4 has-[:checked]:border-orange-500 ">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="flex items-center gap-2 py-3">
        <input
          type="radio"
          name="payment"
          className="text-orange-500 focus:ring-orange-500"
        />
        <span>Credit Card</span>
      </div>
      {/* Card icon preserved ✅ */}
      <Image
        src="/checkouticon/card.png"
        alt="Card"
        width={100}
        height={35}
        className="object-contain"
      />
    </div>

    {/* Credit card fields */}
    <div className="space-y-4 py-3">
      <div>
        <label
          htmlFor="ccNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Credit Card Number*
        </label>
        <Input id="ccNumber" type="text" className="w-full !max-w-full" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex flex-col w-full sm:w-1/2">
          <label
            htmlFor="expiration"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Expiration *
          </label>
          <Input
            id="expiration"
            type="text"
            placeholder="MM / YY"
            className="w-full !max-w-full"
          />
        </div>

        <div className="flex flex-col w-full sm:w-1/2">
          <label
            htmlFor="cvc"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            CVC *
          </label>
          <Input id="cvc" type="text" className="w-full !max-w-full" />
        </div>
      </div>
    </div>
  </label>

  {/* Google Pay */}
  <label className="flex flex-col mt-4 sm:flex-row items-center justify-between border rounded px-3 py-3 cursor-pointer w-full gap-3 has-[:checked]:border-orange-500">
    <div className="flex items-center gap-3">
      <input
        type="radio"
        name="payment"
        className="text-orange-500 focus:ring-orange-500"
      />
      <Image
        src="/checkouticon/googlepay.png"
        alt="Google Pay"
        width={60}
        height={25}
        className="object-contain my-2"
      />
    </div>
    <Image
      src="/checkouticon/card.png"
      alt="Card"
      width={90}
      height={45}
      className="object-contain"
    />
  </label>

  {/* Affirm */}
  <label className="flex flex-col mt-4 sm:flex-row items-center justify-between border rounded px-3 py-3 cursor-pointer w-full gap-3 has-[:checked]:border-orange-500">
    <div className="flex items-center gap-3">
      <input
        type="radio"
        name="payment"
        className="text-orange-500 focus:ring-orange-500"
      />
      <Image
        src="/checkouticon/affirm.png"
        alt="Affirm"
        width={50}
        height={15}
        className="object-contain mb-2 "
      />
    </div>
    <span className="text-sm sm:text-base text-gray-600">(Pay over time)</span>
  </label>

  <button className="!mt-4 w-full btn-primary rounded-md font-semibold">
    PLACE YOUR ORDER
  </button>
</div>

</div>


        {/* Right Section (Order Summary) */}
        <div className="bg-white border lg:col-span-1 rounded-md shadow-sm p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border bg-red-600 text-white border-red-600 text-sm">
              4
            </span>
            Order Summary
          </h2>

          <div className="space-y-4">
            {[1, 2].map((item, i) => (
              <div key={i} className="flex items-center gap-3 border-b pb-3">
                <Image
                  src="/checkouticon/orderimg.png"
                  alt="Card"
                  width={100}
                  height={35}
                  className="object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    PA905U - Targus 720KB PC 1.44MB
                  </p>
                  <p className="text-sm text-gray-500">$400.00</p>

                  <div className="flex items-center gap-2 mt-1">
                    <button className="px-2 border">-</button>
                    <span>3</span>
                    <button className="px-2 border">+</button>

                    <button className="ml-auto text-gray-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Cart Subtotal</span>
              <span>$200.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$240.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$0</span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label
              htmlFor="discountCode"
              className="block text-sm font-medium text-gray-700"
            >
              Discount Code
            </label>
            <div className="flex gap-2">
              <Input id="discountCode" type="text" className="flex-1" />
              <button className="bg-gray-200 px-4 py-2 rounded">Apply</button>
            </div>
          </div>

          <div className="mt-4 flex justify-between font-semibold text-lg">
            <span>Order total</span>
            <span>$440.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
