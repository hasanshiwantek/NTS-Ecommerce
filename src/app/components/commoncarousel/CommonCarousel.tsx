import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
interface CarouselItemType {
  name: string;
  logo: string;
}

interface CommonCarouselProps {
  items?: CarouselItemType[];
}

const CommonCarousel: React.FC<CommonCarouselProps> = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <>
      <div
        className="
          text-left 
         
        "
      >
        {/* Your Carousel implementation */}
        <Carousel className="w-full">
          <CarouselContent className="">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 2xl:basis-1/8"
              >
                <Card className="border-none shadow-none flex justify-center items-center">
                  <CardContent className="flex items-center justify-center p-6 w-full 2xl:w-[123.6%] h-[12.5rem]">
                    <div className="xl:w-44 xl:h-44  2xl:w-44 2xl:h-44 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 w-30 h-30">
                      {/* Product Image with Hover Effect */}
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={250}
                        height={250}
                        className="
      object-contain
      transition-all
      duration-700
      ease-in-out
      hover:scale-105
      hover:opacity-70
      cursor-pointer
      w-full
      h-full
    "
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default CommonCarousel;
