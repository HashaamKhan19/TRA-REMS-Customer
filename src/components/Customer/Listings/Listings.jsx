import React from 'react'
import { HotFlatCarousel } from '../Carousel/HotFlatCarousel'
import FeaturedAgenciesCarousel from '../Carousel/FeaturedAgenciesCarousel'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom'

const Listings = () => {
  return (
    <>
      <Hero />
      <div>
        {/* Premiere House Listings */}
        <div class="listings mt-[80px] w-full px-[5%] md:mt-[100px] lg:mt-[120px] xl:mt-[140px] 2xl:mt-[170px]">
          <div class="mb-[30px] flex items-center justify-between sm:mb-[35px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px]">
            <h1 class="text-[22px] font-bold text-dividerBlack sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
              Premiere House Listings
            </h1>
            <Link
              to={'/'}
              class="text-[16px] font-bold text-accentRed hover:underline sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px]"
            >
              See all
            </Link>
          </div>

          {/* Carousel Component here */}
          <HotFlatCarousel />
        </div>

        {/* Hot Flat Listings */}
        <div class="listings mt-[80px] w-full px-[5%] md:mt-[100px] lg:mt-[120px] xl:mt-[140px] 2xl:mt-[170px]">
          <div class="mb-[30px] flex items-center justify-between sm:mb-[35px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px]">
            <h1 class="text-[22px] font-bold text-dividerBlack sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
              Hot Flat Listings
            </h1>
            <Link
              to={'/'}
              class="text-[16px] font-bold text-accentRed hover:underline sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px]"
            >
              See all
            </Link>
          </div>
          <HotFlatCarousel />
        </div>

        {/* Latest Plot Listings */}
        <div class="listings mt-[80px] w-full px-[5%] md:mt-[100px] lg:mt-[120px] xl:mt-[140px] 2xl:mt-[170px]">
          <div class="mb-[30px] flex items-center justify-between sm:mb-[35px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px]">
            <h1 class="text-[22px] font-bold text-dividerBlack sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
              Latest Plot Listings
            </h1>
            <Link
              to={'/'}
              class="text-[16px] font-bold text-accentRed hover:underline sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px]"
            >
              See all
            </Link>
          </div>
          <HotFlatCarousel />
        </div>

        {/* Featured Commercial Listings */}
        <div class="listings mt-[80px] w-full px-[5%] md:mt-[100px] lg:mt-[120px] xl:mt-[140px] 2xl:mt-[170px]">
          <div class="mb-[30px] flex items-center justify-between sm:mb-[35px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px]">
            <h1 class="text-[22px] font-bold text-dividerBlack sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
              Featured Commercial Listings
            </h1>
            <Link
              to={'/'}
              class="text-[16px] font-bold text-accentRed hover:underline sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px]"
            >
              See all
            </Link>
          </div>
          <HotFlatCarousel />
        </div>

        {/* Featured Agencies Listings */}
        <div class="listings mt-[80px] w-full px-[5%] md:mt-[100px] lg:mt-[120px] xl:mt-[140px] 2xl:mt-[170px]">
          <div class="mb-[30px] flex items-center justify-between sm:mb-[35px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px]">
            <h1 class="text-[22px] font-bold text-dividerBlack sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
              Featured Agencies Listings
            </h1>
            <Link
              to={'/'}
              class="text-[16px] font-bold text-accentRed hover:underline sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px]"
            >
              See all
            </Link>
          </div>
          <FeaturedAgenciesCarousel />
        </div>
      </div>
    </>
  )
}

export default Listings
