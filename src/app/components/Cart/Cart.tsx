import React from "react";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  return (
    <main className="w-full flex justify-center  py-1">
      {/* Fixed container centered on screen */}
      <div
        className="
         2xl:w-[1720px]  px-3
          flex flex-col gap-10
        "
      >
        {/* Heading Section */}
        <div className="2xl:max-w-[755px]">
          <h1 className="h1-secondary-medium ">Shopping Cart</h1>
          <p className="h5-20px-regular text-gray-600">
            Log in to synchronize the items in your shopping cart.{" "}
            <span className="text-[#F15939] cursor-pointer hover:underline">
              Log In Now
            </span>
          </p>
        </div>

        {/* Main Content */}
        <div
          className="
            flex flex-col lg:flex-row justify-between gap-6
            w-full
          "
        >
          {/* Left: Cart List */}
          <div className="w-full lg:w-[68%]">
            <CartList />
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-[32%]">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
