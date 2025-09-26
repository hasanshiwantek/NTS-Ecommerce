"use client";

import React from "react";
import Image from "next/image";
import banner from '@/assets/privacy-banner.png'

const Privacy = () => {
  return (
    <div className="w-full">
      {/* Row 1: Banner */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image
          src={banner} // apna banner image dalna (public folder me rakho)
          alt="Privacy Policy Banner"
          fill
          className="object-cover"
        />
        {/* Overlay */}
      </div>

      {/* Row 2: Grid Layout */}
      <div className="max-w-8xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Sidebar (2/10) */}
        <div className="lg:col-span-2 bg-gray-100 p-5 rounded-lg">
          <h2 className="font-semibold text-lg mb-4">Sidebar</h2>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li className="hover:text-blue-600 cursor-pointer">Section 1</li>
            <li className="hover:text-blue-600 cursor-pointer">Section 2</li>
            <li className="hover:text-blue-600 cursor-pointer">Section 3</li>
          </ul>
        </div>

        {/* Content (8/10) */}
     <div className="lg:col-span-8">
  {/* Page Heading */}
  <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#4A4A4A]">Return Policy</h2>
  <p className="text-gray-500 text-lg mb-6">Last Updated: May 26, 2025</p>

  {/* Section: Eligibility and Return Policy */}
  <h3 className="text-3xl font-semibold mb-3 text-[#4A4A4A]">Eligibility and Return Policy</h3>
  <p className="text-gray-700 text-lg leading-7 mb-4">
    We do not sell or rent your personal data. We may share data with trusted
    third parties for the purposes listed above, including payment processors,
    logistics providers, or IT service providers—always under strict data
    protection obligations.
  </p>
  <p className="text-gray-700 text-lg leading-7 mb-4">
    We comply with the high standards of applicable data protection regulations,
    including the General Data Protection Regulation (GDPR) (Regulation (EU)
    2016/679). We ensure that GDPR standards are embedded in our daily
    operations when handling personal data of EU citizens, as required under the
    GDPR.
  </p>
  <p className="text-gray-700 text-lg leading-7 mb-6">
    We may also disclose personal data if required by law or to protect our
    rights, safety, or users.
  </p>

  {/* Section: Easy Return Process */}
  <h3 className="text-3xl font-semibold mb-3 text-[#4A4A4A]">Easy Return Process</h3>
  <p className="text-black font-semibold leading-7 mb-2">
    We collect personal data in the following ways:
  </p>
  <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2 mb-6">
    <li>Enhance your browsing and shopping experience</li>
    <li>Automatically, through your interactions with our website.</li>
    <li>From third-party partners who help us support your business needs.</li>
    <li>
      Directly from you, when you register, request a quote, place an order, or
      contact us.
    </li>
  </ul>

  {/* Section: Restocking Fees */}
  <h3 className="text-3xl font-semibold mb-3 text-[#4A4A4A]">Restocking Fees</h3>
  <p className="text-gray-700 text-lg leading-7 mb-6">
    We value your feedback and are always looking to improve our policies and
    services. If you have any suggestions or comments on how we can enhance your
    shopping experience, please don't hesitate to reach out. Your insights are
    crucial for us to better serve you and future customers.
  </p>

  {/* Section: Return Shipping Charges */}
  <h3 className="text-3xl font-semibold mb- text-[#4A4A4A]">Return Shipping Charges</h3>
  <p className="text-gray-700 text-lg leading-7 mb-6">
    We value your feedback and are always looking to improve our policies and
    services. If you have any suggestions or comments on how we can enhance your
    shopping experience, please don't hesitate to reach out. Your insights are
    crucial for us to better serve you and future customers.
  </p>

  {/* Section: Items Not Returnable */}
  <h3 className="text-3xl font-semibold mb-3 text-[#4A4A4A]">Items Not Returnable</h3>
  <p className="text-gray-700 text-lg leading-7 mb-4">
    Some items may be considered <span className="italic">"final sale,"</span>{" "}
    making them unsuitable for exchange or refund. As per our policy, we
    diligently designate such things on our website and do not accept returns
    for them.
  </p>
  <p className="text-gray-700 text-lg leading-7">
    We prioritize your pleasure and work to tailor our policies to meet your
    needs. Do not hesitate to get in touch with us if you need any additional
    information or support.
  </p>
</div>

      </div>
    </div>
  );
};

export default Privacy;
