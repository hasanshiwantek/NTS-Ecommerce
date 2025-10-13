"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import banner from "@/assets/privacy-banner.png";

const Privacy = () => {
  // Enable smooth scroll globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

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
              <h2 className="h1-secondary-medium mb-2 text-[#4A4A4A]">Privacy Policy</h2>
    
              {/* Section: Eligibility and Return Policy */}
              <p className="h5-regular leading-[28px] mb-4">
                Privacy Policy at New Town Spares, Inc.: Protecting Your Data transparently
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Transparent Data Collection</h3>
              <p className="h5-regular leading-[28px] mb-6">
               At New Town Spares, Inc., we place a high priority on upholding the integrity of
                the way we collect and manage the personal data of our valued clients. Your name,
                 address, phone number, and payment information are among the most important components
                  of this. We are resolute in disclosing the methods by which we obtain this information,
                   whether they are obtained through interactions with our website, conversations with our
                    consumers, or other means.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Utilization of Personal Data</h3>
              <p className="h5-regular leading-[28px] mb-6">
             We are committed to being transparent, and this commitment extends to how we use the personal
              information we gather. This includes making sure that everything is flawless in addition to
               improving our products and services.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Mobile/ Phone Number Policy</h3>
              <p className="h5-regular leading-[28px] mb-6">
             No mobile information will be shared with third parties/affiliates for marketing/promotional
              purposes. All the above categories exclude text messaging originator opt-in data and consent;
               this information will not be shared with any third parties.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Sharing and Protecting Personal Data</h3>
              <p className="h5-regular leading-[28px] mb-6">
            We value the confidence you place in us and are dedicated to protecting your privacy. Our
             privacy policy fully describes the situations and organizations with which we might
              share your data. Collaborations with service providers and other significant participants
               in our supply chain for goods and services are part of this. We also go into detail about
                the strong security procedures we have in place to protect your personal information when
                 it is shared with third parties.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Secure Your Data</h3>
              <p className="h5-regular leading-[28px] mb-6">
             Our security measures for data: We take data security very seriously and take every precaution
              to protect your information. Our multifaceted strategy includes physical safeguards, administrative
               controls, and technical safeguards. We are prepared to act quickly in the event of data breaches.
                We also use our knowledge to give you advice on safeguarding your private data from outside threats.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Giving You Control Over Your Personal Data:</h3>
              <p className="h5-regular leading-[28px] mb-6">
            We provide instructions on how to view, edit, or delete your personal data to ensure your empowerment.
             In order to protect your personal data, we adhere to strict identification verification measures before
              allowing access to such sensitive information.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Protecting children's privacy</h3>
              <p className="h5-regular leading-[28px] mb-6">
             Children under the age of 13 are not permitted to use our products or services. We don't
              purposefully target this demographic, and we don't intentionally collect any personal
               data from them.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Updates to the Privacy Policy</h3>
              <p className="h5-regular leading-[28px] mb-6">
             Evolving with You Our privacy policy may be updated as we continue to improve our procedures. 
             In order to keep you informed at every stage, we'll provide details about the procedure for 
             changing our policy as well as how we'll let you know about these changes.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">We Put Your Privacy First</h3>
              <p className="h5-regular leading-[28px] mb-6">
            Your personal information is gathered, handled with the utmost care, and transferred 
            securely thanks to our compliance with applicable legal frameworks and our privacy 
            policies. Maintaining your privacy and sense of security goes beyond a promise.
              </p>
              {/* Section: Easy Return Process */}
              <h3 className="h2-medium mb-3 text-[#4A4A4A]">Connect with Us</h3>
              <p className="h5-regular leading-[28px] mb-6">
             The following channels are where you may reach us if you have any
              questions or concerns about our commitment to privacy or the handling
               of your personal information:
              </p>

               <ul className="list-disc pl-6 h5-regular space-y-[14px] mb-6">
        <li> Phone: +1 (209) 651-6864</li>
        <li>Website: www.newtownspares.com</li>
        <li>Email: info@newtownspares.com / orders@newtownspares.com</li>
      </ul>
     
      <p className="h5-regular leading-[28px] mb-6">
             The following channels are where you may reach us if you have any
              questions or concerns about our commitment to privacy or the handling
               of your personal information:
              </p>
            </div>
          </div>
        </div>

  );
};

export default Privacy;
