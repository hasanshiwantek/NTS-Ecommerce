import React from "react";

const CartList = () => {
  return (
<div>


    <div className="border border-[#D6D6D6] rounded-lg ">

      <div className="flex justify-between font-semibold border-b p-4 mb-3">
        <span>Items</span>
        <span className="flex w-[60%] justify-between">
          <span>Price</span>
          <span>Qty</span>
          <span>Subtotal</span>
        </span>
      </div>

      {/* Example product row */}
      <div className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center gap-3 w-[40%]">
          <img
            src="/images/sample-product.jpg"
            alt="Product"
            className="w-20 h-20 object-contain border"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              SKU: ZY110AY
            </p>
            <p className="text-sm text-gray-600">
              Paragon 7200TB 1.4MB PC 14pin Type A Male...
            </p>
          </div>
        </div>

        <div className="flex w-[60%] justify-between items-center">
          <p className="text-sm font-medium text-gray-800">$400.00</p>
          <div className="flex items-center border border-gray-300 rounded">
            <button className="px-2 text-gray-500">-</button>
            <span className="px-3 border-x border-gray-300">3</span>
            <button className="px-2 text-gray-500">+</button>
          </div>
          <p className="text-sm font-semibold text-gray-800">$1200.00</p>
        </div>
      </div>

      {/* Continue + Update */}
      <div className="flex justify-between items-center mt-4">
        <button className="text-sm text-gray-600 hover:text-[#F15939] transition">
          Continue Shopping
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded text-sm font-semibold hover:bg-gray-100 transition">
          Update Cart
        </button>
      </div>
    </div>
</div>

  );
};

export default CartList;
