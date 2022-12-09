import React from "react";
import { Carousel } from "@mantine/carousel";

const FeaturedAgenciesCarousel = () => {
  return (
    <Carousel
      slideSize="33%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
      controlSize={36}
      controlsOffset="xs"
    >
      <Carousel.Slide>
        <div class="agency">
          <img
            src="/src/assets/images/zameen.com-logo.png"
            class="h-full w-auto object-contain"
            alt=""
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency">
          <img
            src="/src/assets/images/graana-logo.png"
            class="h-full w-auto object-contain"
            alt=""
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency hidden xs:block">
          <img
            src="/src/assets/images/agency-21-logo.png"
            class="h-full w-auto object-contain"
            alt=""
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency hidden md:block">
          <img
            src="/src/assets/images/shahbaz-logo.png"
            class="h-full w-auto object-contain"
            alt=""
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency hidden lg:block">
          <img
            src="/src/assets/images/bahria-town-logo.png"
            class="h-full w-auto object-contain"
            alt=""
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default FeaturedAgenciesCarousel;