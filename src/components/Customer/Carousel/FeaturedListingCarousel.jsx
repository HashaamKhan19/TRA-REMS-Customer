import { Carousel } from '@mantine/carousel';
import { Card } from '../Card/Card';
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';


export const FeaturedListingCarousel = () => {

  return (
    <Carousel
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
      controlSize={36}
      // controlsOffset="xs"
      nextControlIcon={<ChevronRightIcon sx={{color: "red"}}/>}
      previousControlIcon={<ChevronLeftIcon sx={{color: "red"}}/>}
    >
      <Carousel.Slide>
        <Link to={'/productpage'}>
          <Card />
        </Link>
      </Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      <Carousel.Slide><Card /></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}