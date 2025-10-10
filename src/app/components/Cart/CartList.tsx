"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { decreaseQty, increaseQty, updateQty } from "@/redux/slices/cartSlice";
const CartList = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.items);
 const [quantities, setQuantities] = useState<{ [key: string]: number | string }>({});

const handleChange = (id: string, value: string) => {
  if (value === "" || /^\d*$/.test(value)) {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  }
};

const handleManualQtyUpdate = (
  e: React.KeyboardEvent<HTMLInputElement>,
  id: string
) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const inputValue = quantities[id];
    const parsed = Number(inputValue);

    const newQty = parsed > 0 ? parsed : 1;

    dispatch(updateQty({ id, quantity: newQty }));

    setQuantities((prev) => ({
      ...prev,
      [id]: newQty,
    }));

    e.currentTarget.blur();
  }
};

  return (
    <div className="border border-[#D6D6D6] rounded-lg 2xl:w-full">
      <div className="hidden  xl:flex justify-between font-semibold py-5 px-8 bg-[#F6F6F6]">
        <span className="h3-secondary">Items</span>
        <span className="flex justify-between xl:w-[31.8%] 2xl:w-[31.2%]">
          <span className="h5-20px-regular">Price</span>
          <span className="h5-20px-regular">Qty</span>
          <span className="h5-20px-regular">Subtotal</span>
        </span>
      </div>
      {
        cart?.map((item,index)=>
          <>
             {/* Example product row */}
      <div key={index} className="flex flex-col xl:flex-row items-center justify-between p-4">
        <div className="flex flex-col xl:flex-row items-center xl:w-[65.1%] 2xl:w-[64.5%]">
          <div className="w-full xl:w-[18.1%] 2xl:w-[18%]">
            <Image
              width={98}
              height={105}
              src={item.image?.[0]?.path || "/checkouticon/orderimg.png"}
                  alt={item.name}
              className="xl:w-[87.6%] 2xl:w-[53%] xl:h-[6.5rem] 2xl:h-[8.8rem] object-contain border m-auto"
            />
          </div>
          <div className="w-full xl:w-[82.1%] 2xl:w-[82%]">
            <p className="h5-medium-20px-medium text-center xl:text-start">
              SKU: {item.sku || "N/A"}
            </p>
            <p className="h5-medium  mx-auto text-center w-[100%] sm:w-[60%]  md:w-[70%] lg:w-[80%] xl:text-start xl:w-[91.7%] 2xl:w-[100%]">
               {item.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 xl:gap-0 xl:w-[33%]  2xl:w-[32%] justify-between">
          <p className="h5-regular">${Number(item.price).toFixed(2)}</p>
          <div className="flex items-center border border-gray-300 overflow-hidden xl:w-[27.9%] 2xl:w-[28.1%]">
            {/* Number Input */}
            <input
              type="number"
                value={
    quantities[item.id] === undefined
      ? item.quantity
      : quantities[item.id]
  }
  onChange={(e) => handleChange(item.id, e.target.value)}
  onKeyDown={(e) => handleManualQtyUpdate(e, item.id)}
              className="w-10 xl:w-[51%] 2xl:w-[48.9%] text-center py-2 xl:px-2 2xl:px-4 outline-none h5-medium [appearance:textfield] 
                   [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            {/* Buttons */}
            <div className="flex flex-col justify-center items-center border-l border-gray-300 w-10 xl:w-[51%] 2xl:w-[48.9%]">
              <button
                type="button"
                 onClick={() => dispatch(increaseQty(item.id))}

                className="flex items-center justify-center w-2.5 h-5 hover:bg-gray-100 text-[#AEAEAE]"
              >
                ▲
              </button>
              <button
                type="button"
                onClick={() => dispatch(decreaseQty(item.id))}
                className="flex items-center justify-center w-2.5 h-6 hover:bg-gray-100 text-[#AEAEAE]"
              >
                ▼
              </button>
            </div>
          </div>
          <p className="h5-regular"> ${Number(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>

      {/* line grey */}
      <div className="w-[97%] mx-auto h-[1px] bg-gray-300"></div>
          </>
        )
      }
   

      {/* Continue + Update */}
      <div className="flex justify-between items-center my-7 px-6">
        <button className="h3-regular xl:w-64 2xl:w-80 py-2 px-4 rounded-lg border border-[#4A4A4A] hover:text-[#F15939] transition">
          Continue Shopping
        </button>
        <button className="h3-regular xl:w-44 2xl:w-52 py-2 px-5 border border-[#4A4A4A] rounded-lg hover:bg-gray-100 transition">
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
