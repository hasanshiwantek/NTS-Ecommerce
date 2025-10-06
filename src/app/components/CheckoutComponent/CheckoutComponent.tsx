"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import { decreaseQty, increaseQty, removeFromCart } from "@/redux/slices/cartSlice";
const CheckoutComponent = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.items);
  console.log("reduxxxx", cart);


  // subtotal calculate (price string → number)
  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0
  );

  const shipping = cart.length > 0 ? 240 : 0; // static example
  const tax = 0; // static example
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen py-10 px-[5%] md:px-[6%] lg:px-[7%] xl:px-0 2xl:px-0 xl:max-w-[1290px] 2xl:max-w-[1720px] mx-auto">
      {/* Heading + Subheading */}
      <div className="mb-8 text-center lg:text-left">
        <h1 className="h1-secondary-medium">Checkout</h1>
        <p className="h5-regular mt-2">
          Please enter your details below to complete your purchase
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* LEFT SECTION (Shipping Address) */}
        <div className="w-full xl:w-[100.1%] 2xl:w-[100%] mx-auto space-y-6">
          <div className="bg-white border rounded-md shadow-sm p-6">
            <h2 className="h3-secondary flex items-center gap-2 mb-4">
              <span className="w-[36px] h-[36px] flex items-center justify-center rounded-full border bg-[#F15939] border-red-600 text-white text-sm">
                1
              </span>
              Shipping Address
            </h2>

            <form className="space-y-4">
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="h5-regular mb-1">Email *</label>
                <Input id="email" type="email" className="w-full !max-w-full" />
              </div>

              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="h5-regular mb-1">First Name *</label>
                  <Input id="firstName" type="text" className="w-full !max-w-full" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="h5-regular mb-1">Last Name *</label>
                  <Input id="lastName" type="text" className="w-full !max-w-full" />
                </div>
              </div>

              {/* Other Fields */}
              <div className="flex flex-col">
                <label htmlFor="company" className="h5-regular mb-1">Company</label>
                <Input id="company" type="text" className="w-full !max-w-full" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="h5-regular mb-1">Phone Number</label>
                <Input id="phone" type="text" className="w-full !max-w-full" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address1" className="h5-regular mb-1">Address Line 1 *</label>
                <Input id="address1" type="text" className="w-full !max-w-full" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address2" className="h5-regular mb-1">Address Line 2</label>
                <Input id="address2" type="text" className="w-full !max-w-full" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="h5-regular mb-1">City *</label>
                <Input id="city" type="text" className="w-full !max-w-full" />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label htmlFor="country" className="h5-regular mb-1">Country *</label>
                <select id="country" className="border rounded px-3 py-2 w-full text-gray-600">
                  <option>Select your country *</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="state" className="h5-regular mb-1">State/Province</label>
                <Input id="state" type="text" className="w-full !max-w-full" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="zip" className="h5-regular mb-1">Zip/Postcode *</label>
                <Input id="zip" type="text" className="w-full !max-w-full" />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="billingSame" defaultChecked />
                <label htmlFor="billingSame" className="h6-regular !text-[#4A4A4A]">
                  My Billing address is the same as my Shipping address
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* MIDDLE SECTION (Shipping + Payment) */}
        <div className="w-full xl:w-[100.1%] 2xl:w-[100%] mx-auto space-y-6">
          {/* Shipping Method */}
          <div className="bg-white border rounded-md shadow-sm p-6">
            <h2 className="h3-secondary flex items-center gap-2 mb-4">
              <span className="w-[36px] h-[36px] flex items-center justify-center rounded-full border bg-[#F15939] text-white border-red-600 text-sm">
                2
              </span>
              Shipping Method
            </h2>

            <div className="space-y-3 py-3">
              <label className="flex flex-col gap-3 border rounded px-3 py-2 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="shipping" className="text-red-600" />
                  <span className="h3-secondary">$00</span>
                </div>
                <div className="h5-regular">
                  Ship on my Company/Own shipping account (Add shipping account in the comments box)
                </div>
              </label>

              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4">
                <label className="flex flex-col items-center border rounded px-4 py-3 cursor-pointer flex-1 has-[:checked]:border-orange-500">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="shipping" className="text-orange-500 focus:ring-orange-500" />
                    <Image src="/checkouticon/fedex.png" alt="FedEx" width={74} height={25} className="object-contain" />
                  </div>
                  <span className="mt-2 h3-secondary text-center">
                    $199.48 <br />
                    <span className="h5-regular">(International Economy)</span>
                  </span>
                </label>

                <label className="flex flex-col items-center border rounded px-4 py-3 cursor-pointer flex-1 has-[:checked]:border-orange-500">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="shipping" className="text-orange-500 focus:ring-orange-500" />
                    <Image src="/checkouticon/fedex.png" alt="FedEx" width={74} height={25} className="object-contain" />
                  </div>
                  <span className="mt-2 h3-secondary text-center">
                    $239.91 <br />
                    <span className="h5-regular">(International Priority)</span>
                  </span>
                </label>
              </div>

              <div className="mt-4">
                <label htmlFor="orderComment" className="h5-regular mb-1">Order Comment</label>
                <Input id="orderComment" type="text" className="w-full !max-w-full" />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white border rounded-md shadow-sm p-6">
            <h2 className="h3-secondary flex items-center gap-2 mb-4">
              <span className="w-[36px] h-[36px] flex items-center justify-center rounded-full border bg-[#F15939] border-red-600 text-white text-sm">
                3
              </span>
              Payment Method
            </h2>

            {/* Credit Card */}
            <label className="flex flex-col border rounded px-3 py-4 has-[:checked]:border-orange-500">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-center gap-2 py-3">
                  <input type="radio" name="payment" className="text-orange-500 focus:ring-orange-500" />
                  <span className="h3-secondary">Credit Card</span>
                </div>
                <Image src="/checkouticon/card.png" alt="Card" width={207} height={35} className="object-contain" />
              </div>

              <div className="space-y-4 py-3">
                <div>
                  <label htmlFor="ccNumber" className="h5-regular mb-1">Credit Card Number*</label>
                  <Input id="ccNumber" type="text" className="w-full !max-w-full" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="flex flex-col w-full sm:w-1/2">
                    <label htmlFor="expiration" className="h5-regular mb-1">Expiration *</label>
                    <Input id="expiration" type="text" placeholder="MM / YY" className="w-full !max-w-full" />
                  </div>
                  <div className="flex flex-col w-full sm:w-1/2">
                    <label htmlFor="cvc" className="h5-regular mb-1">CVC *</label>
                    <Input id="cvc" type="text" className="w-full !max-w-full" />
                  </div>
                </div>
              </div>
            </label>

            {/* Google Pay */}
            <label className="flex flex-col mt-4 sm:flex-row items-center justify-between border rounded px-3 py-3 cursor-pointer w-full gap-3 has-[:checked]:border-orange-500">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="text-orange-500 focus:ring-orange-500" />
                <Image src="/checkouticon/googlepay.png" alt="Google Pay" width={80} height={25} className="object-contain my-2" />
              </div>
              <Image src="/checkouticon/card.png" alt="Card" width={133} height={45} className="object-contain" />
            </label>

            {/* Affirm */}
            <label className="flex flex-col mt-4 sm:flex-row items-center justify-between border rounded px-3 py-3 cursor-pointer w-full gap-3 has-[:checked]:border-orange-500">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="text-orange-500 focus:ring-orange-500" />
                <Image src="/checkouticon/affirm.png" alt="Affirm" width={80} height={15} className="object-contain mb-2" />
              </div>
              <span className="h5-regular">(Pay over time)</span>
            </label>

            <button className="!mt-4 w-full h-[57px] btn-primary !rounded-full h5-bold !text-[#FFFFFF]">
              PLACE YOUR ORDER
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (Order Summary) */}
        <div className="bg-white border rounded-md shadow-sm p-6 w-full xl:w-[100.1%] 2xl:w-[100%] mx-auto">
          <h2 className="h3-secondary flex items-center gap-2 mb-4">
            <span className="w-[36px] h-[36px] flex items-center justify-center rounded-full border bg-[#F15939] text-white border-red-600 text-sm">
              {cart.length}
            </span>
            Order Summary
          </h2>
          {/* Cart Items */} <div className="space-y-5"> 
            {cart.map((item, i) => (<div key={i} className="relative flex items-center gap-3 p-3 border"> 
              <Image src={item.image?.[0]?.path || "/checkouticon/orderimg.png"} alt={item.name} width={116} height={35} className="object-cover" />
               <div className="flex-1"> <p className="h6-medium !text-[#333333] line-clamp-2">{item.name}</p>
                <p className="h6-regular !text-[#4A4A4A]"> ${Number(item.price).toFixed(2)} </p> 
                <div className="flex w-[146.39999389648438px] h-[48px] items-center justify-center border border-gray-300 rounded-full">
                   {/* Decrease Button */}
                    <button onClick={() => dispatch(decreaseQty(item.id))} className="flex items-center justify-center w-16 h-10 h5-medium" > -- </button>
                     {/* Quantity Display */} 
                     <span className="h5-medium border-x h-[48px] border-gray-300 px-6 flex items-center justify-center select-none"> {item.quantity} </span> 
                     {/* Increase Button */} <button onClick={() => dispatch(increaseQty(item.id))} className="flex items-center justify-center w-16 h-10 h5-medium" > + </button> 
                     {/* Remove Button (trash icon) */}
                      </div>
                      <button onClick={() => dispatch(removeFromCart(item.id))} className="absolute right-6 bottom-9 ml-auto text-gray-500 hover:text-red-700 transition" > <Trash2 className="w-5 h-5" /> </button> </div>
                       </div>))} </div> {/* Totals */} <div className="mt-4 space-y-2 text-sm"> 
                        <div className="flex justify-between h5-regular"> 
                          <span>Cart Subtotal</span> <span>${subtotal.toFixed(2)}</span> 
                          </div> <div className="flex justify-between h5-regular"> <span>Shipping</span>
                           <span>${shipping.toFixed(2)}</span> </div> <div className="flex justify-between h5-regular"> <span>Tax</span> 
                           <span>${tax.toFixed(2)}</span> </div> </div> {/* Discount Code */} <div className="mt-4 space-y-2"> 
                            <label htmlFor="discountCode" className="h5-regular" > Apply Discount Code </label> <div className="flex gap-2"> 
                              <Input id="discountCode" type="text" className="!max-w-full" /> <button className="h4-medium border border-black px-4 rounded">Apply</button> 
                              </div> </div> {/* Total */} <div className="mt-4 flex justify-between h3-secondary"> <span>Order total</span> <span>${total.toFixed(2)}
                                </span> </div>
        </div>
      </div>
    </div>

  );
};

export default CheckoutComponent;
