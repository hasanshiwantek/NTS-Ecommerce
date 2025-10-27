'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Banner = () => {
  return (
<div className="flex items-center justify-center bg-[#f9f9f9]">
  <div className="relative w-full max-h-screen">
    <Image
      src="/banner-image.png"
      alt="Server Rack"
      width={1920}
      height={1080}
      className="w-full h-auto"
      priority
    />
  </div>
</div>





  );
};

export default Banner;
