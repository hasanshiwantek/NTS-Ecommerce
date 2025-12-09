"use client";

import React from "react";
import Image from "next/image";

const SingerOrder = () => {
  // Sample data (replace with actual data)
  const order = {
    items: [
      {
        id: 1,
        sku: "99-00521-01",
        name: "Asante - FriendlyNET FS7108 8 x 10/100Base-TX, 1 x 1000Base-SX Fast Ethernet Switch",
        quantity: 1,
        price: 1564.04,
        image: "/default-product-image.svg", // replace with actual image
      },
    ],
    subtotal: 1564.04,
    total: 1564.04,
    orderDate: "Dec 02, 2025",
    status: "Awaiting fulfillment",
    shippingAddress: {
      name: "Syed Hassan Asif",
      street: "Gulistan e Johar",
      city: "Karachi",
      postal: "7500",
      country: "Pakistan",
    },
    billingAddress: {
      name: "Syed Hassan Asif",
      street: "Gulistan e Johar",
      city: "Karachi",
      postal: "7500",
      country: "Pakistan",
    },
  };

  return (
    <div className="py-6 max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Order Contents */}
      <div className="lg:col-span-2 border rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Order Contents</h2>
        <p className="text-gray-500 mb-4">
          Items shipped to {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.postal}, {order.shippingAddress.country}
        </p>

        <div className="border-t border-b divide-y">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain bg-white p-2"
                  />
                </div>
                <div>
                  <p className="font-medium">
                    {item.quantity} × {item.sku} - {item.name}
                  </p>
                </div>
              </div>
              <p className="font-medium">${item.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="flex flex-col items-end mt-6 gap-1">
          <p>Subtotal: ${order.subtotal.toLocaleString()}</p>
          <p className="text-lg font-semibold">Grand total: ${order.total.toLocaleString()}</p>
        </div>
      </div>

      {/* Order Details, Ship To, Bill To */}
      <div className="flex flex-col gap-6">
        {/* Order Details */}
        <div className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Order Details</h2>
          <p>Order status: {order.status}</p>
          <p>Order date: {order.orderDate}</p>
          <p>Order total: ${order.total.toLocaleString()}</p>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            PRINT INVOICE
          </button>
        </div>

        {/* Ship To */}
        <div className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Ship To</h2>
          <p>{order.shippingAddress.name}</p>
          <p>{order.shippingAddress.street}</p>
          <p>{order.shippingAddress.city}, {order.shippingAddress.postal}</p>
          <p>{order.shippingAddress.country}</p>
        </div>

        {/* Bill To */}
        <div className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Bill To</h2>
          <p>{order.billingAddress.name}</p>
          <p>{order.billingAddress.street}</p>
          <p>{order.billingAddress.city}, {order.billingAddress.postal}</p>
          <p>{order.billingAddress.country}</p>
        </div>
      </div>
    </div>
  );
};

export default SingerOrder;
