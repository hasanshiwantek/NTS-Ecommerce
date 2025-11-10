"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
// Stripe publishable key
const stripePromise = loadStripe(
  "pk_test_51Rix9HQGYDEwUNjEf6i9jqnw8hsenUB057dlMUpafqy04GCVkmYrQcSrwtO7OpZqjhd27dciwptoxrnjLgAjq8gT00FBh1ZmjP"
);

interface CheckoutFormValues {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  zip: string;
  shippingMethod: string;
  orderComment: string;
  paymentMethod: string;
  billingSame: boolean;
}

// Inner component that uses Stripe hooks
const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.items);
  const [itemToDelete, setItemToDelete] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const stripe = useStripe();
  const elements = useElements();
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      paymentMethod: "credit_card",
      billingSame: true,
    },
  });

  const watchedPaymentMethod = watch("paymentMethod") || "credit_card";

  // subtotal calculate (price string → number)
  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0
  );

  const shipping = cart.length > 0 ? 240 : 0; // static example
  const tax = 0; // static example
  const total = subtotal + shipping + tax;

  const confirmDelete = () => {
    if (itemToDelete) {
      dispatch(removeFromCart(itemToDelete.id));
      setItemToDelete(null);
    }
    setIsDialogOpen(false);
  };

  const onSubmit = async (data: CheckoutFormValues) => {
    console.log("Form submitted:", data);
    
    // If credit card payment method is selected, process with Stripe
    if (watchedPaymentMethod === "credit_card" && stripe && elements) {
      setIsProcessing(true);
      
      const cardNumberElement = elements.getElement(CardNumberElement);
      
      if (!cardNumberElement) {
        console.error("Card element not found");
        setIsProcessing(false);
        return;
      }

      try {
        // Create payment method
        const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardNumberElement,
          billing_details: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            address: {
              line1: data.address1,
              line2: data.address2,
              city: data.city,
              state: data.state,
              postal_code: data.zip,
              country: data.country,
            },
          },
        });

        if (pmError) {
          console.error("Payment method error:", pmError);
          alert(pmError.message);
          setIsProcessing(false);
          return;
        }

        if (paymentMethod) {
          // Log payment method ID
          console.log("✅ Payment Method ID:", paymentMethod.id);
          console.log("✅ Payment Method Details:", paymentMethod);
          
          // Here you would typically send paymentMethod.id to your backend
          // to create a payment intent and confirm the payment
          // For now, we're just logging the ID as requested
          
          alert(`Payment method created successfully! ID: ${paymentMethod.id}`);
        }
      } catch (err) {
        console.error("Error processing payment:", err);
        alert("An error occurred while processing your payment.");
      } finally {
        setIsProcessing(false);
      }
    } else {
      // Handle other payment methods (Google Pay, Affirm, etc.)
      console.log("Processing other payment method:", watchedPaymentMethod);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
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

              <div className="space-y-6">
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="h5-regular mb-2">
                  Email <span className="text-[#F15939]">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  className={`w-full h-[60px] !max-w-full ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="h5-regular mb-2">
                    First Name <span className="text-[#F15939]">*</span>
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    className={`w-full h-[60px] !max-w-full ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="h5-regular mb-2">
                    Last Name <span className="text-[#F15939]">*</span>
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    className={`w-full h-[60px] !max-w-full ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Other Fields */}
              <div className="flex flex-col">
                <label htmlFor="company" className="h5-regular mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  className="w-full h-[60px] !max-w-full"
                  {...register("company")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="h5-regular mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="text"
                  className="w-full h-[60px] !max-w-full"
                  {...register("phone")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address1" className="h5-regular mb-2">
                  Address Line 1 <span className="text-[#F15939]">*</span>
                </label>
                <Input
                  id="address1"
                  type="text"
                  className={`w-full h-[60px] !max-w-full ${
                    errors.address1 ? "border-red-500" : ""
                  }`}
                  {...register("address1", {
                    required: "Address Line 1 is required",
                  })}
                />
                {errors.address1 && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.address1.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="address2" className="h5-regular mb-2">
                  Address Line 2
                </label>
                <Input
                  id="address2"
                  type="text"
                  className="w-full h-[60px] !max-w-full"
                  {...register("address2")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="h5-regular mb-2">
                  City <span className="text-[#F15939]">*</span>
                </label>
                <Input
                  id="city"
                  type="text"
                  className={`w-full h-[60px] !max-w-full ${
                    errors.city ? "border-red-500" : ""
                  }`}
                  {...register("city", {
                    required: "City is required",
                  })}
                />
                {errors.city && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label htmlFor="country" className="h5-regular mb-2">
                  Country <span className="text-[#F15939]">*</span>
                </label>
                <select
                  id="country"
                  className={`border rounded px-3 py-2 w-full h-[60px] text-gray-600 ${
                    errors.country ? "border-red-500" : ""
                  }`}
                  {...register("country", {
                    required: "Country is required",
                  })}
                >
                  <option value="">Select your country *</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
                {errors.country && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="state" className="h5-regular mb-2">
                  State/Province
                </label>
                <Input
                  id="state"
                  type="text"
                  className="w-full h-[60px] !max-w-full"
                  {...register("state")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="zip" className="h5-regular mb-2">
                  Zip/Postcode <span className="text-[#F15939]">*</span>
                </label>
                <Input
                  id="zip"
                  type="text"
                  className={`w-full h-[60px] !max-w-full ${
                    errors.zip ? "border-red-500" : ""
                  }`}
                  {...register("zip", {
                    required: "Zip/Postcode is required",
                  })}
                />
                {errors.zip && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.zip.message}
                  </p>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="billingSame"
                  {...register("billingSame")}
                  defaultChecked
                />
                <label
                  htmlFor="billingSame"
                  className="h6-regular !text-[#4A4A4A]"
                >
                  My Billing address is the same as my Shipping address
                </label>
              </div>
              </div>
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
                  <input
                    type="radio"
                    value="own_account"
                    {...register("shippingMethod", {
                      required: "Please select a shipping method",
                    })}
                    className="text-red-600"
                  />
                  <span className="h3-secondary">$00</span>
                </div>
                <div className="h5-regular">
                  Ship on my Company/Own shipping account (Add shipping account
                  in the comments box)
                </div>
              </label>

              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4">
                <label className="flex flex-col items-center border rounded px-4 py-3 cursor-pointer flex-1 has-[:checked]:border-orange-500">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="fedex_economy"
                      {...register("shippingMethod", {
                        required: "Please select a shipping method",
                      })}
                      className="text-orange-500 focus:ring-orange-500"
                    />
                    <Image
                      src="/checkouticon/fedex.png"
                      alt="FedEx"
                      width={74}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 h3-secondary text-center">
                    $199.48 <br />
                    <span className="h5-regular">(International Economy)</span>
                  </span>
                </label>

                <label className="flex flex-col items-center border rounded px-4 py-3 cursor-pointer flex-1 has-[:checked]:border-orange-500">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="fedex_priority"
                      {...register("shippingMethod", {
                        required: "Please select a shipping method",
                      })}
                      className="text-orange-500 focus:ring-orange-500"
                    />
                    <Image
                      src="/checkouticon/fedex.png"
                      alt="FedEx"
                      width={74}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 h3-secondary text-center">
                    $239.91 <br />
                    <span className="h5-regular">(International Priority)</span>
                  </span>
                </label>
              </div>
              {errors.shippingMethod && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.shippingMethod.message}
                </p>
              )}

              <div className="mt-4">
                <label htmlFor="orderComment" className="h5-regular mb-4">
                  Order Comment
                </label>
                <Input
                  id="orderComment"
                  type="text"
                  className="w-full h-[60px] !max-w-full"
                  {...register("orderComment")}
                />
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
                  <input
                    type="radio"
                    value="credit_card"
                    {...register("paymentMethod", {
                      required: "Please select a payment method",
                    })}
                    checked={watchedPaymentMethod === "credit_card"}
                    onChange={(e) => {
                      setValue("paymentMethod", "credit_card");
                    }}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <span className="h3-secondary">Credit Card</span>
                </div>
                <Image
                  src="/checkouticon/card.png"
                  alt="Card"
                  width={207}
                  height={35}
                  className="object-contain"
                />
              </div>

              {watchedPaymentMethod === "credit_card" && (
                <div className="space-y-6 py-3">
                  {/* Card Number */}
                  <div>
                    <label className="h5-regular mb-4 block">
                      Credit Card Number <span className="text-[#F15939]">*</span>
                    </label>
                    <div className="border border-[#d1d0d4] rounded-md p-4 mt-3 hover:border-[#86848c] focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-300">
                      <CardNumberElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "#333333",
                              fontFamily: "inherit",
                              "::placeholder": {
                                color: "#aab7c4",
                              },
                            },
                            invalid: {
                              color: "#fa755a",
                              iconColor: "#fa755a",
                            },
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Expiration and CVC */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="h5-regular mb-4 block">
                        Expiration <span className="text-[#F15939]">*</span>
                      </label>
                      <div className="border border-[#d1d0d4] rounded-md p-4 hover:border-[#86848c] focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-300">
                        <CardExpiryElement
                          options={{
                            style: {
                              base: {
                                fontSize: "16px",
                                color: "#333333",
                                fontFamily: "inherit",
                                "::placeholder": {
                                  color: "#aab7c4",
                                },
                              },
                              invalid: {
                                color: "#fa755a",
                                iconColor: "#fa755a",
                              },
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2">
                      <label className="h5-regular mb-4 block">
                        CVC <span className="text-[#F15939]">*</span>
                      </label>
                      <div className="border border-[#d1d0d4] rounded-md p-4 hover:border-[#86848c] focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-300">
                        <CardCvcElement
                          options={{
                            style: {
                              base: {
                                fontSize: "16px",
                                color: "#333333",
                                fontFamily: "inherit",
                                "::placeholder": {
                                  color: "#aab7c4",
                                },
                              },
                              invalid: {
                                color: "#fa755a",
                                iconColor: "#fa755a",
                              },
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Test card: 4242 4242 4242 4242 | Any future date | Any 3 digits
                  </p>
                </div>
              )}
            </label>

            {/* Google Pay */}
            <label className="flex flex-col mt-4 sm:flex-row items-center justify-between border rounded px-3 py-3 cursor-pointer w-full gap-3 has-[:checked]:border-orange-500">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  value="google_pay"
                  {...register("paymentMethod", {
                    required: "Please select a payment method",
                  })}
                  checked={watchedPaymentMethod === "google_pay"}
                  onChange={(e) => {
                    setValue("paymentMethod", "google_pay");
                  }}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <Image
                  src="/checkouticon/googlepay.png"
                  alt="Google Pay"
                  width={80}
                  height={25}
                  className="object-contain my-2"
                />
              </div>
              <Image
                src="/checkouticon/card.png"
                alt="Card"
                width={133}
                height={45}
                className="object-contain"
              />
            </label>

            {/* Affirm */}
            <label className="flex flex-col mt-4 sm:flex-row items-center justify-between border rounded px-3 py-3 cursor-pointer w-full gap-3 has-[:checked]:border-orange-500">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  value="affirm"
                  {...register("paymentMethod", {
                    required: "Please select a payment method",
                  })}
                  checked={watchedPaymentMethod === "affirm"}
                  onChange={(e) => {
                    setValue("paymentMethod", "affirm");
                  }}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <Image
                  src="/checkouticon/affirm.png"
                  alt="Affirm"
                  width={80}
                  height={15}
                  className="object-contain mb-2"
                />
              </div>
              <span className="h5-regular">(Pay over time)</span>
            </label>
            {errors.paymentMethod && (
              <p className="text-sm text-red-500 mt-1">
                {errors.paymentMethod.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isProcessing || !stripe}
              className="!mt-4 w-full h-[57px] btn-primary !rounded-full !font-medium 2xl:text-[20px] xl:text-[15px] text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Processing..." : "PLACE YOUR ORDER"}
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
          {/* Cart Items */}{" "}
          <div className="space-y-5">
            {cart.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col sm:flex-row items-center gap-3 p-3 border"
              >
                <Image
                  src={item.image?.[0]?.path || "/checkouticon/orderimg.png"}
                  alt={item.name}
                  width={116}
                  height={35}
                  className="object-cover"
                />
                <div className="flex-1">
                  <p className="h6-medium !text-[#333333] line-clamp-2">
                    {item.name}
                  </p>
                  <p className="h6-regular !text-[#4A4A4A]">
                    ${Number(item.price).toFixed(2)}{" "}
                  </p>
                  <div className="flex  w-[120.39999389648438px] sm:w-[146.39999389648438px] h-[48px] items-center justify-center border border-gray-300 rounded-full">
                    {/* Decrease Button */}
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="flex items-center justify-center w-16 h-10 h5-medium"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    {/* Quantity Display */}
                    <span className="h5-medium border-x h-[48px] border-gray-300 px-6 flex items-center justify-center select-none">
                      {item.quantity}{" "}
                    </span>
                    {/* Increase Button */}{" "}
                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="flex items-center justify-center w-16 h-10 h5-medium "
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    {/* Remove Button (trash icon) */}
                  </div>

                  <button
                    onClick={() => {
                      setItemToDelete(item);
                      setIsDialogOpen(true);
                    }}
                    className="absolute right-6 bottom-9 ml-auto text-gray-500 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Totals */}
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between h5-regular">
              <span>Cart Subtotal</span> <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between h5-regular">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between h5-regular">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>
          {/* Discount Code */}
          <div className="mt-4 space-y-2">
            <label htmlFor="discountCode" className="h5-regular">
              Apply Discount Code
            </label>
            <div className="flex gap-2 my-2">
              <Input
                id="discountCode"
                type="text"
                className="h-[60px] !max-w-full "
              />
              <button className="h4-medium border border-black px-4 rounded">
                Apply
              </button>
            </div>
          </div>
          {/* Total */}
          <div className="mt-4 flex justify-between h3-secondary">
            <span>Order total</span> <span>${total.toFixed(2)}</span>{" "}
          </div>
        </div>
        </div>
      </form>
      {/* ShadCN Dialog for Delete Confirmation */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove{" "}
              <strong>{itemToDelete?.name}</strong> from your cart? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="!p-4 !text-lg"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="!p-4 !text-lg"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Main component with Stripe Elements provider
const CheckoutComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutComponent;
