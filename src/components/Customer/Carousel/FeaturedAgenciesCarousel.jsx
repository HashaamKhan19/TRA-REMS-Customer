import React from 'react'
import { Carousel } from '@mantine/carousel'
import zameenImage from '../../../assets/images/zameen.com-logo.png'
import graanaImage from '../../../assets/images/graana-logo.png'
import agency21Image from '../../../assets/images/agency-21-logo.png'
import shahbazImage from '../../../assets/images/shahbaz-logo.png'
import bahriaTownImage from '../../../assets/images/bahria-town-logo.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

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
      styles={{
        controls: {},
        control: {
          ':hover': {
            backgroundColor: 'white',
          },
          border: '1px solid red',
          backgroundColor: 'white',
          color: 'blue',
        },
      }}
      nextControlIcon={<ChevronRightIcon sx={{ color: 'red' }} />}
      previousControlIcon={<ChevronLeftIcon sx={{ color: 'red' }} />}
    >
      <Carousel.Slide>
        <div class="agency">
          <img src={zameenImage} class="h-full w-auto object-contain" alt="" />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency">
          <img src={graanaImage} class="h-full w-auto object-contain" alt="" />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency hidden xs:block">
          <img
            src={agency21Image}
            class="h-full w-auto object-contain"
            alt=""
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency hidden md:block">
          <img src={shahbazImage} class="h-full w-auto object-contain" alt="" />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="agency hidden lg:block">
          <img
            src={bahriaTownImage}
            class="h-full w-auto object-contain"
            alt=""
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  )
}

export default FeaturedAgenciesCarousel
