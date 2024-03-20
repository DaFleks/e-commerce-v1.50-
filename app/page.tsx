import { HeadsetIcon, SparklesIcon, TruckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import JumbotronCarousel from "@/components/JumbotronCarousel";
import JumbotronItem from "@/components/JumbotronItem";
import SectionHeader from "@/components/SectionHeader";
import ProductList from "@/components/ProductList";
import Advertisement from "@/components/Advertisement";
import Highlight from "@/components/Highlight";

import carousel1 from "@/public/images/carousel1.jpg";
import carousel2 from "@/public/images/carousel2.jpg";
import carousel3 from "@/public/images/carousel3.jpg";

import discountBg from "@/public/images/discount-bg.jpg";

export default function Home() {
  return (
    <>
      <header>
        <JumbotronCarousel>
          <JumbotronItem backgroundImage={carousel1.src} alt="">
            <div className="p-8 flex flex-col justify-center gap-4 h-full w-full">
              <h1 className="text-3xl xl:text-4xl text-white font-semibold ">Unbeatable Deals Await, Don&apos;t Miss Out!</h1>
              <Button className="w-fit">Explore Deals</Button>
            </div>
          </JumbotronItem>
          <JumbotronItem backgroundImage={carousel2.src} alt="">
            <div className="p-8 flex flex-col justify-center gap-4 h-full w-full text-white font-semibold text-3xl xl:text-4xl">
              <h1>Shop. Click. Smile.</h1>
              <Button className="w-fit">Explore Products</Button>
            </div>
          </JumbotronItem>
          <JumbotronItem backgroundImage={carousel3.src} alt="">
            <div className="p-8 flex flex-col justify-center gap-4 h-full w-full text-white font-semibold text-3xl xl:text-4xl">
              <h1>Your Wishlist Awaits.</h1>
              <Button className="w-fit">See Wishlist</Button>
            </div>
          </JumbotronItem>
        </JumbotronCarousel>
      </header>

      <main className="p-4">
        <SectionHeader title="BEST SELLERS" className="mb-4"/>
        <ProductList className="mb-8" />

        <Advertisement backgroundImage={discountBg.src} className="mb-8">
          <h1 className="text-2xl text-white font-semibold">Save big by checking out our discounted items.</h1>
          <Button className="w-fit">See Discounts</Button>
        </Advertisement>

        <SectionHeader title="PLATFORMS" className="mb-4"/>


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
      </main>
    </>
  );
}
