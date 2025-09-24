'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-30  bg-[#f9f9f9]">
      {/* Left: Server Banner Image & Text */}
      <div className="flex-1 p-6 rounded-md">
        <div className="mt-6">
          <Image
            src="https://cdn11.bigcommerce.com/s-4jpol1blth/images/stencil/1920w/carousel/63/empowering__96778_1.jpg?c=1" // update this path to your real image
            alt="Server Rack"
            width={700}
            height={600}
            objectFit='contain'
            className="mx-auto w-full"
          />
        </div>
      </div>


    </div>
  );
};

export default Banner;
