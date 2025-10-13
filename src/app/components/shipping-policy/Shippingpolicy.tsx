import React from 'react'
import Image from "next/image";
import banner from '@/assets/privacy-banner.png'
const Shippingpolicy = () => {
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
          <h2 className="h1-secondary-medium mb-2 text-[#4A4A4A]">Shipping Policy</h2>

          {/* Section: Eligibility and Return Policy */}
          <p className="h5-regular leading-[28px] mb-4">
            We at New Town Spares Inc. are committed to giving you excellent items at
             competitive costs and working hard to make sure your experience is satisfying.
              We provide you with the ease of returning the item in the unlikely event that
               you obtain anything that doesn't live up to your expectations or has problems.
                Please refer to our return policy for more information. Our top priority
                 continues to be making you happy.
          </p>
          {/* Section: Easy Return Process */}
          <h3 className="h2-medium mb-3 text-[#4A4A4A]">Shipping</h3>
          <p className="h5-regular leading-[28px] mb-6">
            Offering both domestic and international shipping services makes us happy. You may
             be confident that we offer shipping choices that are suited to your needs for our
              customers in the USA. For extra convenience, FedEx is also linked with our shipping
               services. No matter where you are, we promise to give you a thorough shipping experience.
                Please Note: be ware that some products are subject to restrictions and that some things
                 cannot be sent to foreign countries. We appreciate your understanding and embrace of
                  these restrictions.
          </p>

          {/* Section: Restocking Fees */}
          <p className="h5-regular leading-[28px] mb-6">
           We will provide you a delivery estimate based on the items' availability
            once you place your order. For your information, delivery time frame
             estimations are available on the checkout page.
          </p>

          {/* Section: Return Shipping Charges */}
          <p className="h5-regular leading-[28px] mb-6">
            Please note that the shipping costs for the products we sell are given as estimations
             only. Feel free to contact our sales department for more help if you need a special
              shipping solution or would rather use your own shipping account. We care about your
               choices and comfort.
          </p>

          {/* Section: Items Not Returnable */}
          <p className="h5-regular leading-[28px] mb-6">
           If the order is placed before 2:00 PM Eastern routine Time, products usually ship the 
           same day as a routine procedure. Please be aware that a handling time of 1 to 2  days
            is required. Please contact our Sales Department if you need a delivery to be made more 
            quickly. We value the urgent delivery needs that you have.
          </p>
          <p className="h5-regular leading-[28px]">
           For dependable delivery services, we work with reputable shipping companies like 
           FedEx, UPS, USPS, Royal Mail, and DHL. Please be aware that we do not process orders 
           on weekends or public holidays. We advise getting in touch with our Sales Department
            if you have questions about Saturday delivery. Our top priority is your comfort
          </p>
        </div>
      </div>
    </div>
  )
}

export default Shippingpolicy