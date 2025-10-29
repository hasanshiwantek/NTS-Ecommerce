import React from 'react';
// Next.js के लिए: Image कंपोनेंट को इंपोर्ट करें
import Image from 'next/image';
import { Input } from '@/components/ui/input';

const GetInTouch: React.FC = () => {

  return (

      <div className="w-full max-w-full mx-auto py-16 md:px-[7%] lg:px-[5.2%] xl:px-[5.2%] 2xl:px-[5.2%] px-[7%] bg-[#FAFAFA]">
      <div className="flex flex-col lg:flex-row gap-10 bg-[#FAFAFA] rounded-lg overflow-hidden">
        
        {/* Left Section: Form */}
        <div className="w-full 2xl:w-[54.7%] relative">
          {/* Dotted background pattern */}
          
          <div className="relative z-10">
            <h1 className="text-5xl font-medium text-[#2A2A2A] mb-4">
              Let's Get In Touch <span className="text-[#F15939]">with Us</span>
            </h1>
            <p className="h3-regular !text-[#666666] mb-8 max-w-3xl">
              Have questions about our products, need expert advice, or want a custom IT hardware solution?
            </p>

            <form className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block h5-regular">
                  Full Name <span className='text-[#F15939]'>*</span>
                </label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="mt-3 block !max-w-full h-[60px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              {/* Email & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block h5-regular">
                    Email  <span className='text-[#F15939]'>*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-3 block !max-w-full h-[60px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block h5-regular">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="mt-3 block !max-w-full h-[60px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Company, Part number, Required QTY */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="company" className="block h5-regular">
                    Company <span className='text-[#F15939]'>*</span>
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="mt-3 block !max-w-full h-[60px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="partNumber" className="block h5-regular">
                    Part number
                  </label>
                  <Input
                    type="text"
                    id="partNumber"
                    name="partNumber"
                    className="mt-3 block !max-w-full h-[60px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="requiredQty" className="block h5-regular">
                    Required QTY <span className='text-[#F15939]'>*</span>
                  </label>
                  <Input
                    type="number"
                    id="requiredQty"
                    name="requiredQty"
                    required
                    className="mt-3 block !max-w-full h-[60px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full lg:w-64 xl:w-[21.6%] px-6 py-5 border border-transparent rounded-full h4-medium !text-white bg-[#F15939] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section: Image */}
       <div className="w-full 2xl:w-[43.9%] h-[380px] xs:h-[450px] md:h-[500px] lg:h-[555px] relative bg-[#2A2A2A] min-h-[380px]">
          <Image
              src={'/form-image.png'}
            alt="Customer support representative with headset smiling"
            // Using layout="fill" to ensure the image covers the container completely
            layout="fill"
            objectFit="cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;