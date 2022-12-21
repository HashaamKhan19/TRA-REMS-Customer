import React from 'react'
import carouselImage from '../../../assets/images/carousel-house.png'
import locationFilledIcon from '../../../assets/icons/location-filled.png'
import bluePrintIcon from '../../../assets/icons/blueprint.png'
import bedroomIcon from '../../../assets/icons/bedroom-dark-icon.png'
import bathTubIcon from '../../../assets/icons/bath-with-person-icon.png'

export const HotFlatCard = ({ property }) => {
  return (
    <>
      <div class="card group flex-1 hover:cursor-pointer duration-500 bg-slate-100 rounded-lg hover:bg-accentRed hover:rounded-lg p-1 border">
        <div class="image-container relative overflow-hidden rounded-[10px] h-[250px]">
          <img
            src={property?.images[0]}
            alt=""
            class="object-cover"
            // height={200}
          />
          {property?.propertyIs === 'For Sale' ? (
            <p class="overlay absolute top-0 left-0 flex h-[36px] w-[100px] items-center rounded-br-[74px] bg-accentRed pl-[15px] text-[16px] font-medium text-white sm:h-[50px] sm:w-[150px] sm:pl-[20px] sm:text-[24px] md:h-[36px] md:w-[100px] md:text-[16px] lg:h-[50px] lg:w-[150px] lg:pl-[20px] lg:text-[24px] xl:h-[36px] xl:w-[100px] xl:text-[16px] 2xl:h-[50px] 2xl:w-[140px] 2xl:pl-[20px] 2xl:text-[24px]">
              {property?.propertyIs}
            </p>
          ) : (
            <p class="overlay absolute top-0 left-0 flex h-[36px] w-[100px] items-center rounded-br-[74px] bg-accentRed pl-[15px] text-[16px] font-medium text-white sm:h-[50px] sm:w-[150px] sm:pl-[20px] sm:text-[24px] md:h-[36px] md:w-[100px] md:text-[16px] lg:h-[50px] lg:w-[150px] lg:pl-[20px] lg:text-[24px] xl:h-[36px] xl:w-[100px] xl:text-[16px] 2xl:h-[50px] 2xl:w-[190px] 2xl:pl-[20px] 2xl:text-[24px]">
              {property?.propertyIs}
            </p>
          )}
        </div>
        <div class="details mt-[16px] sm:mt-[32px] md:mt-[16px] lg:mt-[32px] xl:mt-[16px] 2xl:mt-[32px]">
          <h2 class="mb-[10px] text-[22px] font-medium text-dividerBlack sm:mb-[14px] sm:text-[27px] md:mb-[10px] md:text-[22px] lg:mb-[14px] lg:text-[27px] xl:mb-[10px] xl:text-[22px] 2xl:mb-[14px] 2xl:text-[27px] group-hover:text-white">
            {property?.propertyCity}
          </h2>
          {property?.propertySubCategory === 'flat' ||
          property?.propertySubCategory === 'plot' ? (
            <h3 class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px] group-hover:text-white">
              <img
                class="inline-block w-[22px] sm:w-[28px]"
                src={locationFilledIcon}
                alt=""
              />
            </h3>
          ) : (
            <h3 class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px] group-hover:text-white">
              <img
                class="inline-block w-[22px] sm:w-[28px]"
                src={locationFilledIcon}
                alt=""
              />
              {property?.streetNumber}
              {', '}
              {property?.houseNumber}
            </h3>
          )}
          <div class="features mt-[16px] flex gap-[30px]">
            <p class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px] group-hover:text-white">
              <img
                class="inline-block w-[22px] sm:w-[28px] md:w-[22px] lg:w-[28px] xl:w-[22px] 2xl:w-[28px]"
                src={bluePrintIcon}
                alt=""
              />
              {property?.areaSize}
              {''}
              {property?.areaSizeUnit}
            </p>
            <p class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px] group-hover:text-white">
              <img
                class="inline-block w-[22px] sm:w-[28px] md:w-[22px] lg:w-[28px] xl:w-[22px] 2xl:w-[28px]"
                src={bedroomIcon}
                alt=""
              />
              {property?.noOfBedRooms}
            </p>
            <p class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px] group-hover:text-white">
              <img
                class="inline-block w-[22px] sm:w-[28px] md:w-[22px] lg:w-[28px] xl:w-[22px] 2xl:w-[28px]"
                src={bathTubIcon}
                alt=""
              />
              {property?.noOfBathrooms}
            </p>
          </div>
          <div class="flex justify-between ">
            <p class="mt-[16px] text-[28px] font-bold text-accentRed sm:mt-[22px] sm:text-[40px] md:mt-[16px] md:text-[28px] lg:mt-[22px] lg:text-[40px] xl:mt-[16px] xl:text-[28px] 2xl:mt-[22px] 2xl:text-[40px] group-hover:text-white">
              Rs. {property?.totalPrice}
            </p>
            {/* <p class="">{property.propertySubCategory}</p> */}
          </div>
        </div>
      </div>
    </>
  )
}
