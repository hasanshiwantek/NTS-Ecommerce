"use client";

import React from "react";
import Image from "next/image";
import banner from '@/assets/privacy-banner.png'

const Privacy = () => {
  return (
    <div className="w-full">
  {/* Row 1: Banner */}
  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] 2xl:h-[400px]">
    <Image
      src={banner}
      alt="Privacy Policy Banner"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/10" />
  </div>

  {/* Row 2: Grid Layout */}
  <div className="max-w-[1920px] mx-auto py-10 px-[7%] md:px-[6%] lg:px-[5%] xl:px-[4.5%] 2xl:px-[100px] flex flex-col lg:flex-row gap-8">
    {/* Sidebar (2/10) */}
    <div className="w-full lg:w-[28%] xl:w-[23.6%] 2xl:w-[412px] bg-gray-100 p-[1.25rem] rounded-xl">
      <h2 className="font-semibold text-lg mb-4">Sidebar</h2>
      <ul className="space-y-2 h5-regular">
        <li className="hover:text-blue-600 cursor-pointer">Section 1</li>
        <li className="hover:text-blue-600 cursor-pointer">Section 2</li>
        <li className="hover:text-blue-600 cursor-pointer">Section 3</li>
      </ul>
    </div>

    {/* Content (8/10) */}
    <div className="w-full lg:w-[68%] xl:w-[72.2%] 2xl:w-[1260px] px-[3%] md:px-[2.5%] xl:px-[2%] 2xl:px-[24px]">
      {/* Page Heading */}
      <h2 className="h1-secondary-medium mb-2 text-[#4A4A4A]">Return Policy</h2>
      <p className="h4-regular text-[#666666] mb-6">Last Updated: May 26, 2025</p>

      {/* Section: Eligibility and Return Policy */}
      <h3 className="h2-medium text-[#4A4A4A] mb-3">Eligibility and Return Policy</h3>
      <p className="h5-regular leading-[28px] mb-4">
        We do not sell or rent your personal data. We may share data with trusted
        third parties for the purposes listed above, including payment processors,
        logistics providers, or IT service providers—always under strict data
        protection obligations.
      </p>
      <p className="h5-regular leading-[28px] mb-4">
        We comply with the high standards of applicable data protection regulations,
        including the General Data Protection Regulation (GDPR) (Regulation (EU)
        2016/679). We ensure that GDPR standards are embedded in our daily
        operations when handling personal data of EU citizens, as required under the
        GDPR.
      </p>
      <p className="h5-regular leading-[28px] mb-6">
        We may also disclose personal data if required by law or to protect our
        rights, safety, or users.
      </p>

      {/* Section: Easy Return Process */}
      <h3 className="h2-medium mb-3 text-[#4A4A4A]">Easy Return Process</h3>
      <p className="h5-bold leading-7 mb-4">
        We collect personal data in the following ways:
      </p>
      <ul className="list-disc pl-6 h5-regular space-y-[14px] mb-6">
        <li>Enhance your browsing and shopping experience</li>
        <li>Automatically, through your interactions with our website.</li>
        <li>From third-party partners who help us support your business needs.</li>
        <li>
          Directly from you, when you register, request a quote, place an order, or
          contact us.
        </li>
      </ul>

      {/* Section: Restocking Fees */}
      <h3 className="h2-medium mb-3 text-[#4A4A4A]">Restocking Fees</h3>
      <p className="h5-regular leading-[28px] mb-6">
        We value your feedback and are always looking to improve our policies and
        services. If you have any suggestions or comments on how we can enhance your
        shopping experience, please don't hesitate to reach out. Your insights are
        crucial for us to better serve you and future customers.
      </p>

      {/* Section: Return Shipping Charges */}
      <h3 className="h2-medium mb-3 text-[#4A4A4A]">Return Shipping Charges</h3>
      <p className="h5-regular leading-[28px] mb-6">
        We value your feedback and are always looking to improve our policies and
        services. If you have any suggestions or comments on how we can enhance your
        shopping experience, please don't hesitate to reach out. Your insights are
        crucial for us to better serve you and future customers.
      </p>

      {/* Section: Items Not Returnable */}
      <h3 className="h2-medium mb-3 text-[#4A4A4A]">Items Not Returnable</h3>
      <p className="h5-regular leading-[28px] mb-4">
        Some items may be considered <span className="italic">"final sale"</span>,
        making them unsuitable for exchange or refund. As per our policy, we
        diligently designate such things on our website and do not accept returns
        for them.
      </p>
      <p className="h5-regular leading-[28px]">
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
