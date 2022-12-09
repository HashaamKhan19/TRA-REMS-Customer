import React from 'react'
import { Carousel } from '@mantine/carousel';
import { Card } from '../Card/Card';

export const PremiereHouseCarousel = () => {
  return (
    <Carousel
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
      controlSize={36}
      controlsOffset="xs"
      styles={{
        control: {
            color: "white",
            backgroundColor: "#D92228",
            ':hover': {
                backgroundColor: "#D92228",
                borderColor: "#D92228"
            },
        },
      }}
    >
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  )
}
