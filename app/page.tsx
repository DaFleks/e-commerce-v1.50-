import JumbotronCarousel from "@/components/JumbotronCarousel";
import { CarouselItem } from "@/components/ui/carousel";

import carousel1 from "@/public/images/carousel1.jpg";
import carousel2 from "@/public/images/carousel2.jpg";
import carousel3 from "@/public/images/carousel3.jpg";

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
      <main></main>
    </>
  );
}
