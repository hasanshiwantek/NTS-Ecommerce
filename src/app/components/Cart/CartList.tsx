"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import Link from "next/link";
const CartList = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.items);
  console.log(cart);

  const increase = () => setValue((prev) => prev + 1);
  const decrease = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <div className="border border-[#D6D6D6] rounded-lg w-full 2xl:w-full">
      {/* Header: hidden below xl */}
      <div className="hidden xl:flex justify-between font-semibold py-5 px-8 bg-[#F6F6F6]">
        <span className="h3-secondary">Items</span>
        <span className="flex justify-between xl:w-[31.8%] 2xl:w-[31.2%]">
          <span className="h5-20px-regular">Price</span>
          <span className="h5-20px-regular">Qty</span>
          <span className="h5-20px-regular">Subtotal</span>
        </span>
      </div>

      {/* Product row */}

      {cart?.map((val, ind) => {
        return (
          <div
            key={ind}
            className="
      flex flex-col xl:flex-row items-start xl:items-center justify-between 
      p-4 gap-4 xl:gap-0
    "
          >
            {/* Product info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full xl:w-[65.1%] 2xl:w-[64.5%]">
              <div className="w-[45%] sm:w-[30%] xl:w-[18.1%] 2xl:w-[18%] mx-auto sm:mx-0">
                <Image
                  width={98}
                  height={105}
                  src={val?.image[0]?.path}
                  alt="Product"
                  className="
            w-full 
            xl:w-[87.6%] 2xl:w-[53%] 
            xl:h-[6.5rem] 2xl:h-[8.8rem] 
            object-contain border rounded-md
          "
                />
              </div>

              <div className="w-full sm:w-[70%] xl:w-[82.1%] 2xl:w-[82%]">
                <p className="h5-medium-20px-medium text-base sm:text-lg">
                  SKU: {val?.sku}
                </p>
                <p className="h5-medium text-sm sm:text-base xl:w-[91.7%] 2xl:w-[100%] leading-snug">
                  {val?.name}
                </p>
              </div>
            </div>

            {/* Price / Qty / Subtotal */}
            <div
              className="
        flex flex-col sm:flex-row xl:flex-row justify-between items-center 
        w-full xl:w-[33%] 2xl:w-[32%] gap-3 sm:gap-5 xl:gap-0
      "
            >
              <p className="h5-regular text-base sm:text-lg">${val?.price}</p>

              {/* Quantity */}
              <div
                className="
          flex items-center border border-gray-300 overflow-hidden 
          w-[130px] sm:w-[120px] xl:w-[27.9%] 2xl:w-[28.1%]
        "
              >
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="
            w-[60%] text-center py-2 xl:px-2 2xl:px-4 outline-none h5-medium 
            [appearance:textfield] 
            [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none
          "
                />
                <div className="flex flex-col justify-center items-center border-l border-gray-300 xl:w-[51%] 2xl:w-[48.9%]">
                  <button
                    type="button"
                    onClick={increase}
                    className="flex items-center justify-center w-2.5 h-5 hover:bg-gray-100 text-[#AEAEAE]"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    onClick={decrease}
                    className="flex items-center justify-center w-2.5 h-6 hover:bg-gray-100 text-[#AEAEAE]"
                  >
                    ▼
                  </button>
                </div>
              </div>

              <p className="h5-regular text-base sm:text-lg">${"1200.00"}</p>
            </div>
          </div>
        );
      })}

      {/* Divider */}
      <div className="w-[97%] mx-auto h-[1px] bg-gray-300"></div>

      {/* Buttons */}
      <div
        className="
      flex flex-col sm:flex-row justify-between items-center gap-3 
      my-7 px-3 sm:px-5 xl:px-6
    "
      >
        <Link href={"/products"}>
        <button
          className="
          h3-regular w-full sm:w-auto xl:w-64 2xl:w-80 py-2 px-4 rounded-lg 
          border border-[#4A4A4A] hover:text-[#F15939] transition
          "
          >
          Continue Shopping
        </button>
          </Link>
        <button
          className="
        h3-regular w-full sm:w-auto xl:w-44 2xl:w-52 py-2 px-5 border 
        border-[#4A4A4A] rounded-lg hover:bg-gray-100 transition
      "
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
