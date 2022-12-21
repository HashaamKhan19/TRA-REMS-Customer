import React from 'react'
import { Rating } from '@mantine/core'
import locationFilledIcon from '../../../assets/icons/location-filled.png'
import backgroundImage from '../../../assets/images/main-carousel-image.png'
import mapImage from '../../../assets/images/location-map.png'
import callIcon from '../../../assets/icons/call-icon.png'
import chatIcon from '../../../assets/icons/chat-icon.png'
import bookingIcon from '../../../assets/icons/booking-icon.png'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'
import heartIcon from '../../../assets/icons/heart-icon.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import shareIcon from '../../../assets/icons/share-icon.png'
import playIcon from '../../../assets/icons/play-icon.png'
import { Link } from 'react-router-dom'
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined'
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { Carousel } from '@mantine/carousel'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { useLocation } from 'react-router-dom'

const ProductPage = () => {
  const location = useLocation()
  const [property, setProperty] = React.useState({})
  React.useEffect(() => {
    console.log(location.state)
    setProperty(location.state?.data)
  }, [location])

  return (
    <div>
      <main class="flex flex-col items-center pt-[100px] 2xl:pt-[150px]">
        <section class="details mt-[32px] grid w-full items-start justify-between px-[30px] sm:flex lg:px-[50px] 2xl:px-[120px]">
          <div class="details">
            <h1 class="text-[22px] font-medium leading-none text-accentRed sm:text-[26px] md:text-[28px] lg:text-[34px] xl:text-[40px] 3xl:text-[50px]">
              {property?.propertyTitle || 'Property Title Here'}
            </h1>
            <p class="mt-[10px] flex items-center gap-[10px] text-[14px] text-headingBlue/50 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 3xl:text-[25px]">
              <img
                src={locationFilledIcon}
                alt="Location icon"
                class="aspect-square xl:w-[21px] 3xl:w-[24px]"
              />
              {property?.propertyCity || 'City Name Here'}
            </p>
            <div class="stars mt-[20px] flex gap-[5px]">
              <Rating value={3.5} fractions={2} readOnly size="xl" />
            </div>
          </div>
          <h2 class="text-right text-[25px] font-medium leading-none text-headingBlue before:relative before:top-[-8px] before:text-[12px] before:text-headingBlue/70 before:content-['PKR'] sm:text-left sm:text-[30px] before:sm:top-[-10px] before:sm:text-[15px] md:text-[35px] before:md:top-[-12px] before:md:text-[17px] lg:text-[40px] before:lg:top-[-14px] before:lg:text-[20px] xl:text-[50px] before:xl:top-[-18px] before:xl:text-[25px] 3xl:text-[70px] before:3xl:text-[37px]">
            {property?.totalPrice || 'Price Here'}
          </h2>
          <div class="actions col-span-2 flex items-end justify-between sm:flex-col">
            <div class="buttons flex gap-[10px] xl:gap-[15px] 3xl:gap-[20px]">
              <a
                class="text-medium inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-accentRed/10 text-accentRed md:h-[50px] md:w-[50px] lg:h-[45px] lg:w-[100px] lg:rounded-[10px] xl:h-[50px] xl:w-[140px] xl:rounded-[10px] xl:text-[22px] 3xl:h-[65px] 3xl:w-[180px] 3xl:rounded-[16px] 3xl:text-[32px]"
                href=""
              >
                <span class="hidden lg:inline">Call</span>
                <span class="inline lg:hidden">
                  <img
                    src={callIcon}
                    alt="Call Icon"
                    class="w-[22px] md:w-[30px]"
                  />
                </span>
              </a>
              <a
                class="text-medium inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-accentRed/10 text-accentRed md:h-[50px] md:w-[50px] lg:h-[45px] lg:w-[100px] lg:rounded-[10px] xl:h-[50px] xl:w-[140px] xl:rounded-[10px] xl:text-[22px] 3xl:h-[65px] 3xl:w-[180px] 3xl:rounded-[16px] 3xl:text-[32px]"
                href=""
              >
                <span class="hidden lg:inline">Chat</span>
                <span class="inline lg:hidden">
                  <img
                    src={chatIcon}
                    alt="Chat Icon"
                    class="w-[22px] md:w-[30px]"
                  />
                </span>
              </a>
              <Link
                class="text-medium inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-accentRed/10 text-accentRed md:h-[50px] md:w-[50px] lg:h-[45px] lg:w-[100px] lg:rounded-[10px] xl:h-[50px] xl:w-[140px] xl:rounded-[10px] xl:text-[22px] 3xl:h-[65px] 3xl:w-[180px] 3xl:rounded-[16px] 3xl:text-[32px]"
                to="/booking"
              >
                <span class="hidden lg:inline">Booking</span>
                <span class="inline lg:hidden">
                  <img
                    src={bookingIcon}
                    alt="Booking Icon"
                    class="w-[22px] md:w-[30px]"
                  />
                </span>
              </Link>
            </div>
            <div class="actions mt-[30px] flex gap-[14px]">
              <button class="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accentRed/10 lg:h-[44px] lg:w-[44px]">
                <img
                  src={heartIcon}
                  class="w-[18px] lg:w-[22px]"
                  alt="Heart Icon"
                />
              </button>
              <button class="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accentRed/10 lg:h-[44px] lg:w-[44px]">
                <img
                  src={shareIcon}
                  class="w-[18px] lg:w-[22px]"
                  alt="Share Icons"
                />
              </button>
            </div>
          </div>
        </section>
        {/* Carousel */}
        <section class="carousel mt-[25px] px-[30px] md:mt-[30px] lg:mt-[40px] lg:px-[50px] 2xl:mt-[50px]">
          <div class="main-image relative aspect-[2] w-full">
            <img
              src={backgroundImage}
              alt="Main Carousel Image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="slider mt-[10px] flex items-stretch justify-between gap-[15px] sm:mt-[15px] sm:gap-[20px] md:mt-[20px] md:gap-[25px] lg:mt-[25px] lg:gap-[30px] xl:mt-[30px] xl:gap-[42px]">
            {/* {console.log('====================================')}
            {console.log(Object.keys(property).length)}
            {console.log('====================================')} */}

            {Object.keys(property)?.length !== 0 && (
              <Carousel
                height={200}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="center"
                slidesToScroll={5}
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
                {property?.images?.map((image) => (
                  <Carousel.Slide key={image}>
                    <img src={image} alt="" />
                  </Carousel.Slide>
                ))}
              </Carousel>
            )}
            {/* <div class="relative flex-1 overflow-hidden rounded-[7px]">
              <img
                src={backgroundImage
                class="h-full w-full object-cover"
                alt=""
              />
              <div class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center">
                <img
                  src={playIcon}
                  class="w-[25px] sm:w-[30px] md:w-[35px] lg:w-[42px]"
                  alt="Play Icon"
                />
              </div>
            </div>
            <div class="flex-1 overflow-hidden rounded-[7px]">
              <img
                src={backgroundImage}
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div class="flex-1 overflow-hidden rounded-[7px]">
              <img
                src={backgroundImage}
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div class="hidden flex-1 overflow-hidden rounded-[7px] md:block">
              <img
                src={backgroundImage}
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div class="hidden flex-1 overflow-hidden rounded-[7px] lg:block">
              <img
                src={backgroundImage}
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div class="hidden flex-1 overflow-hidden rounded-[7px] xl:block">
              <img
                src={backgroundImage}
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div class="hidden flex-1 overflow-hidden rounded-[7px] 2xl:block">
              <img
                src={backgroundImage}
                class="h-full w-full object-cover"
                alt=""
              />
            </div> */}
          </div>
        </section>
        {/* About */}
        <section class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]">
          <h2 class="text-[22px] text-accentRed sm:text-[26px] md:text-[28px] lg:text-[34px] xl:text-[40px] 3xl:text-[50px]">
            About this property
          </h2>
          <br />
          <p class="text-[14px] text-headingBlue/100 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 3xl:text-[25px]">
            PROPERTY CATEGORY:
            <p class="text-accentRed/70">{property?.propertyCategory} </p>
            PROPERTY SUB CATEGORY:{' '}
            <p class="text-accentRed/70">{property?.propertySubCategory}</p>
          </p>
          <br />
          <p class="text-[14px] text-headingBlue/50 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 3xl:text-[25px]">
            Posted on June 24, 2022
          </p>
          <div class="features mt-[60px] flex h-[120px] items-stretch justify-between sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px]">
            <div class="feature grid flex-1 place-content-center place-items-center">
              <HotelOutlinedIcon style={{ fontSize: '200px' }} />
              <p class="mt-[16px] text-[14px] font-medium text-dividerBlack sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px]">
                {property?.noOfBedRooms + ' Bedrooms' || 'noOfBedRooms here'}
              </p>
            </div>
            <div class="feature grid flex-1 place-content-center place-items-center">
              <BathtubOutlinedIcon style={{ fontSize: '200px' }} />
              <p class="mt-[16px] text-[14px] font-medium text-dividerBlack sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px]">
                {property?.noOfBathrooms + ' Bathrooms' || 'noOfBathrooms here'}
              </p>
            </div>
            <div class="feature grid flex-1 place-content-center place-items-center">
              <WarehouseOutlinedIcon style={{ fontSize: '200px' }} />
              <p class="mt-[16px] text-[14px] font-medium text-dividerBlack sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px]">
                {property?.parkingSpace + ' Garages' || 'noOfGarages here'}
              </p>
            </div>
          </div>
        </section>
        <section class="mt-[70px] px-[30px] lg:px-[50px] 2xl:px-[120px] w-full">
          <h2 class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
            {property?.propertyTitle || 'Property Title here'}
          </h2>
          <p class="mt-[20px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
            {property?.propertyDescription || 'Property Description here'}
          </p>
        </section>
        <section class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]">
          <h2 class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
            Key Features:
          </h2>
          <ul class="mt-[16px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
            <li class="mb-[5px] flex items-center gap-[16px]">
              {property?.noOfBedRooms == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.noOfBedRooms} Bedrooms
                </>
              )}
            </li>
            <li class="mb-[5px] flex items-center gap-[16px]">
              {property?.noOfBathrooms == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.noOfBathrooms} Bathrooms
                </>
              )}
            </li>
            <li class="mb-[5px] flex items-center gap-[16px]">
              {property?.lounge == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.lounge} TV Lounge
                </>
              )}
            </li>
            <li class="mb-[5px] flex items-center gap-[16px]">
              {property?.drawingRoom == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.drawingRoom} Drawing Room
                </>
              )}
            </li>
            <li class="mb-[5px] flex items-center gap-[16px]">
              {property?.kitchen == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.kitchen} Kitchen
                </>
              )}
            </li>
            <li class="mb-[5px] flex items-center gap-[16px]">
              {property?.storeRoom == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.storeRoom} Store Room
                </>
              )}
            </li>
            <li class="mb-[5px] flex items-center gap-[16px]">
              {property?.servantQuarters == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.servantQuarters} Servant Quarter
                </>
              )}
            </li>
            <li class="flex items-center gap-[16px]">
              {property?.parkingSpace == 0 ? (
                ''
              ) : (
                <>
                  <DoubleArrowIcon style={{ color: 'red' }} />
                  {property?.parkingSpace} Parking Space
                </>
              )}
            </li>
          </ul>
          <p class="mt-[20px] text-[17px] text-headingBlue/50 sm:mt-[25px] sm:text-[20px] md:mt-[30px] md:text-[20px] lg:mt-[40px] lg:text-[25px] xl:mt-[50px] xl:text-[30px]">
            We highly recommend viewing this property.
          </p>
        </section>
        <section class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]">
          <h2 class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
            Features
          </h2>
          <div class="mt-[16px] grid grid-cols-2 gap-y-[24px] md:grid-cols-3">
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.noOfBedRooms > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Bedroom
            </div>
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.kitchen > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Kitchen
            </div>
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.drawingRoom > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Drawing Room
            </div>
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.lounge > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              TV Lounge
            </div>
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.storeRoom > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Store Room
            </div>
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.servantQuarters > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Servant Quarter
            </div>
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.laundryRoom > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Laundry Room
            </div>
            {/* <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              <img src={checkListIcon} alt="" />
              Gas
            </div> */}
            {/* <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              <img src={checkListIcon} alt="" />
              Water
            </div> */}
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.electricityBackup > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Electricity Backup
            </div>
            <div class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]">
              {property?.parkingSpace > 0 ? (
                <CheckBoxIcon style={{ color: 'red', fontSize: '28px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon style={{ fontSize: '28px' }} />
              )}
              Parking Space
            </div>
          </div>
        </section>
        <section class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]">
          <h2 class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
            Location on Map
          </h2>
          <img
            src={mapImage}
            alt="Location Map"
            class="mt-[16px] w-full object-cover"
          />
        </section>
      </main>
    </div>
  )
}
export default ProductPage
