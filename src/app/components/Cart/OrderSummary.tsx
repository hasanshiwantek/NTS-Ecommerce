import React from "react";

const OrderSummary = () => {
  return (
    <div className="border       rounded-lg ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>

      <div className="text-sm text-gray-700 mb-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$1200.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping (FedEx Priority)</span>
          <span>$240.00</span>
        </div>
        <div className="flex justify-between font-semibold text-red-600 border-t pt-2">
          <span>Order Total</span>
          <span>$1440.00</span>
        </div>
      </div>

      {/* Discount Code */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Apply Discount Code"
          className="flex-grow border border-gray-300 rounded-l px-3 py-2 text-sm"
        />
        <button className="bg-[#F15939] text-white px-4 py-2 rounded-r text-sm font-semibold">
          Apply
        </button>
      </div>

      {/* Checkout Buttons */}
      <button className="w-full bg-[#F15939] text-white py-3 font-semibold rounded mb-3">
        Proceed to Checkout
      </button>

      <button className="w-full bg-black text-white py-3 font-semibold rounded mb-3">
        G Pay
      </button>

      <button className="w-full bg-[#3B5BFF] text-white py-3 font-semibold rounded mb-3">
        Pay over time with
      </button>

      <button className="w-full border border-gray-300 py-3 font-semibold rounded">
        Debit or Credit Card
      </button>
    </div>
  );
};

export default OrderSummary;
