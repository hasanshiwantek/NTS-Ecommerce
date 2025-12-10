"use client"
import React, { useEffect, useState } from 'react';
import { Check, Package, ChevronRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { fetchOrderDetails } from '@/redux/slices/cartSlice';

export interface OrderData {
  id: number;
  orderNumber: string;
  status: string;
  totalAmount: string;
  shippingCost: string;
  billingInformation: {
    firstName: string;
    lastName: string;
    phone: string;
    companyName: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    zip: string;
    country: string;
    paymentMethod: string;
    email: string;
  };
  products: Array<{
    id: number;
    name: string;
    sku: string;
    price: string;
    msrp: string;
    image: Array<{
      path: string;
      isPrimary: number;
      altText: string;
    }>;
  }>;
  shippingDestinations: Array<{
    address: {
      firstName: string;
      lastName: string;
      phone: string;
      companyName: string;
      addressLine1: string;
      addressLine2: string | null;
      city: string;
      state: string;
      zip: string;
      country: string;
      email: string;
    };
    products: Array<{
      productId: number;
      quantity: number;
      price: string;
    }>;
  }>;
}

export default function OrderConfirmation() {
  const params = useParams();
  const orderNumber = params?.slug as string;
  const dispatch = useAppDispatch();

  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrderDetails = async () => {
      if (!orderNumber) {
        setError("Order number not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await dispatch(
          fetchOrderDetails({ orderId: orderNumber })
        ).unwrap();

        if (res?.order?.length > 0) {
          setOrder(res.order[0]);
        } else {
          setError("Order not found");
        }
      } catch (err) {
        setError("Failed to load order details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadOrderDetails();
  }, [orderNumber]);

  if (loading) {
    return (
      <div className="py-6 max-w-full mx-auto flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-b-blue-600 border-gray-300 mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="py-6 max-w-full mx-auto">
        <div className="border rounded-md p-6 text-center text-red-600">
          {error || "Order not found"}
        </div>
      </div>
    );
  }

  // Calculate subtotal
  const subtotal =
    order.shippingDestinations[0]?.products.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0
    ) || 0;

  const shippingCost = parseFloat(order.shippingCost) || 0;
  const total = parseFloat(order.totalAmount);

  const shippingAddress = order.shippingDestinations[0]?.address;
  const billingAddress = order.billingInformation;

  const getProductQuantity = (productId: number) => {
    const product = order.shippingDestinations[0]?.products.find(
      (p) => p.productId === productId
    );
    return product?.quantity || 1;
  };

  const handleGoToOrders = () => {
    console.log('Redirecting to orders page...');
  };

  const handleTrackOrder = () => {
    console.log('Track order:', order.orderNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Thank you for your purchase!
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing address</h2>
              <div className="space-y-4">
                <div className="flex">
                  <span className="text-gray-500 w-24 flex-shrink-0">Name</span>
                  <span className="text-gray-900 font-medium">{billingAddress.firstName} {billingAddress.lastName}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24 flex-shrink-0">Address</span>
                  <span className="text-gray-900">{billingAddress.addressLine1}, {billingAddress.addressLine2 && billingAddress.addressLine2}, {billingAddress.city}, {billingAddress.state}, {billingAddress.zip}, {billingAddress.country}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24 flex-shrink-0">Phone</span>
                  <span className="text-gray-900">{billingAddress.phone}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24 flex-shrink-0">Email</span>
                  <span className="text-gray-900">{billingAddress.email}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleTrackOrder}
              className="mt-8 w-full md:w-auto bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              Track Your Order
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Section - Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="grid grid-cols-3 gap-4 text-sm mb-6 pb-6 border-b border-gray-200">
              <div>
                <p className="text-gray-500 mb-1">Date</p>
                <p className="font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Order Number</p>
                <p className="font-semibold text-gray-900">{order.orderNumber}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Payment Method</p>
                <p className="font-semibold text-gray-900">{billingAddress.paymentMethod}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-6 mb-6">
              {order.products.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-300 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {item.image[0]?.path ? (
                      <img src={item.image[0].path} alt={item.image[0].altText} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl">📦</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {getProductQuantity(item.id)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${parseFloat(item.price).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Sub Total</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-medium">$0.00</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Order Total</span>
                  <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* View All Orders Button */}
            <button
              onClick={handleGoToOrders}
              className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
