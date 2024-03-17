import Highlight from "@/components/Highlight";
import JumbotronCarousel from "@/components/JumbotronCarousel";
import Products from "@/components/Products";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import carousel1 from "@/public/images/carousel1.jpg";
import carousel2 from "@/public/images/carousel2.jpg";
import carousel3 from "@/public/images/carousel3.jpg";
import { HeadsetIcon, SparkleIcon, SparklesIcon, TruckIcon } from "lucide-react";

import discountBg from "@/public/images/discount-bg.jpg";

export default function Home() {
  return (
    <>
      <header>
        <JumbotronCarousel>
          <CarouselItem>
            <div
              className="relative h-full w-full"
              style={{ backgroundImage: `url(${carousel1.src})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="relative h-full w-full"
              style={{ backgroundImage: `url(${carousel2.src})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="relative h-full w-full"
              style={{ backgroundImage: `url(${carousel3.src})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}
            ></div>
          </CarouselItem>
        </JumbotronCarousel>
      </header>
      <main className="p-4">
        <h3 className="font-bold text-lg xl:text-xl mb-2">FEATURED PRODUCTS</h3>
        <Separator className="bg-gradient-to-r from-gray-300 to-white mb-8" />
        <Products className="mb-8" />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 text-white text-center text-2xl font-semibold mb-8">
          <Highlight
            icon={<TruckIcon size={64} />}
            title="RAPID SHIPPING"
            text="Expedited shipping options with reliable tracking to ensure prompt delivery of orders."
          />
          <Highlight
            icon={<HeadsetIcon size={64} />}
            title="DEDICATED CUSTOMER SUPPORT"
            text="Responsive customer support through various channels."
          />
          <Highlight
            icon={<SparklesIcon size={64} />}
            title="PERSONALIZED EXPERIENCE"
            text="Recommendations and exclusive promotions based on customer preferences and purchase history."
          />
        </div>

        <h3 className="font-bold text-lg xl:text-xl mb-2">BEST SELLERS</h3>
        <Separator className="bg-gradient-to-r from-gray-300 to-white mb-8" />
        <Products page={2} className="mb-8" />

        <div
          className="bg-slate-700 p-8 h-[300px] flex justify-center flex-col gap-4 relative shadow-[0px_0px_15px_-4px_rgba(0,0,0,0.75)]"
          style={{ backgroundImage: `url(${discountBg.src})`, backgroundSize: "cover", backgroundPositionY: "100%" }}
        >
          <h1 className="text-2xl text-white font-semibold">Save big by checking out our discounted items.</h1>
          <Button className="w-fit">See Discounts</Button>
        </div>
      </main>
    </>
  );
}
