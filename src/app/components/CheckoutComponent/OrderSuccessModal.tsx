import React from 'react';

interface OrderSuccessModalProps {
  open: boolean;
  onClose: () => void;
  data?: any;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ open, onClose, data }) => {
  if (!open || !data) return null;

  // Extract data from API response
  const orderData = {
    date: new Date(data.createdAt).toLocaleDateString(), // format date nicely
    orderNumber: data.orderNumber,
    paymentMethod: data.billingInformation?.paymentMethod || "N/A",
    items: data.products?.map((item: any) => ({
      id: item.id,
      name: item.name,
      size: item.optionSet || "Default",
      quantity: item.quantity,
      price: Number(item.price),
      image: item.image?.[0]?.path || "📦"
    })) || [],
    billing: {
      name: `${data.billingInformation?.firstName} ${data.billingInformation?.lastName}`,
      address: `${data.billingInformation?.addressLine1}${data.billingInformation?.addressLine2 ? ", " + data.billingInformation.addressLine2 : ""}, ${data.billingInformation?.city}, ${data.billingInformation?.state}, ${data.billingInformation?.zip}, ${data.billingInformation?.country}`,
      phone: data.billingInformation?.phone,
      email: data.billingInformation?.email
    },
    subTotal: data.products?.reduce((acc: number, item: any) => acc + Number(item.price) * item.quantity, 0) || 0,
    shipping: Number(data.shippingCost || 0),
    tax: 0, // If API provides tax, replace here
    total: Number(data.totalAmount || 0)
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">

          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Thank you for your purchase!
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Billing address</h2>
              <div className="space-y-3">
                <div className="flex"><span className="text-gray-600 w-20">Name</span><span className="text-gray-900 font-medium">{orderData.billing.name}</span></div>
                <div className="flex"><span className="text-gray-600 w-20">Address</span><span className="text-gray-900">{orderData.billing.address}</span></div>
                <div className="flex"><span className="text-gray-600 w-20">Phone</span><span className="text-gray-900">{orderData.billing.phone}</span></div>
                <div className="flex"><span className="text-gray-600 w-20">Email</span><span className="text-gray-900">{orderData.billing.email}</span></div>
              </div>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Track Your Order
            </button>
          </div>

          {/* Right Section - Order Summary */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div><p className="text-gray-500 mb-1">Date</p><p className="text-gray-900 font-semibold">{orderData.date}</p></div>
              <div><p className="text-gray-500 mb-1">Order Number</p><p className="text-gray-900 font-semibold">{orderData.orderNumber}</p></div>
              <div><p className="text-gray-500 mb-1">Payment Method</p><p className="text-gray-900 font-semibold">{orderData.paymentMethod}</p></div>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              {orderData.items.map((item:any) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-300 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg"/> : "📦"}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.size}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-6">
              <div className="flex justify-between text-gray-600"><span>Sub Total</span><span>${orderData.subTotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-600"><span>Shipping</span><span>${orderData.shipping.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-600"><span>Tax</span><span>${orderData.tax.toFixed(2)}</span></div>
            </div>

            <div className="flex justify-between text-xl font-bold text-gray-900 border-t-2 border-gray-300 pt-4">
              <span>Order Total</span>
              <span>${orderData.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-600 text-3xl leading-none z-50"
        >
          ×
        </button>
      </div>
    </div>
  );
};
