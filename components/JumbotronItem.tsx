"use client";

import Image from "next/image";
import { CarouselItem } from "./ui/carousel";

const JumbotronItem = ({ backgroundImage, alt = "", children }: { backgroundImage?: string; alt?: string; children?: React.ReactNode }) => {
  return (
    <CarouselItem className="relative h-full w-full">
      {children}
      {backgroundImage && <Image className="-z-20" src={backgroundImage} alt="" fill style={{ objectFit: "cover", objectPosition: "50% 50%" }} />}
      <div className="absolute h-full w-full bg-black bg-opacity-50 top-0 left-0 -z-20"></div>
    </CarouselItem>
  );
};

export default JumbotronItem;
