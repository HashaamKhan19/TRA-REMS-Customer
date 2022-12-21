import { Carousel } from '@mantine/carousel'
import { HotFlatCard } from '../Card/HotFlatCard'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Skeleton from '@mui/material/Skeleton'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const HotFlatCarousel = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [allProperties, setAllProperties] = useState([])

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user/getAllProperties',
      )
      .then((data) => {
        setIsLoaded(true)
        setAllProperties(data.data.body)
      })
      .catch((error) => {
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <>
        <Skeleton height={'150px'} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    )
  } else {
    return (
      <>
        {allProperties.length !== 0 && (
          <Carousel
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
            controlSize={36}
            controlsOffset={0}
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
            {allProperties.map((property) => (
              <Carousel.Slide>
                <Link
                  to={`/productpage/${property?._id}`}
                  state={{ data: property }}
                >
                  <HotFlatCard property={property} />
                </Link>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </>
    )
  }
}
