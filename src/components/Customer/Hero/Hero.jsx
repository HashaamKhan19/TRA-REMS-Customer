import React from 'react'
import Listings from '../Listings/Listings'
import locationIcon from '../../../assets/icons/location-icon.svg'
import homeIcon from '../../../assets/icons/home-icon.svg'
import dollarIcon from '../../../assets/icons/dollar-icon.svg'

export default function Hero() {
  return (
    <main class="mb-[50px] flex flex-col items-center pt-[100px] sm:mb-[60px] md:mb-[70px] lg:mb-[80px] xl:mb-[90px] 2xl:mb-[100px] 2xl:pt-[150px]">
      <section class="flex w-full flex-col items-center bg-[url('/src/assets/images/home-page-cover.png')] bg-right-bottom bg-no-repeat">
        <div class="content isolate mt-[120px] w-[90%] max-w-[1430px]">
          <div class="text relative after:absolute after:top-[-10px] after:bottom-[-10px] after:left-[-10px] after:right-[-10px] after:-z-10 after:block after:bg-headingBackground/50 after:bg-bottom after:bg-no-repeat after:blur-[30px] after:content-[''] after:md:hidden">
            <h1 class="relative overflow-visible text-[40px] font-bold leading-[50px] sm:text-[47px] sm:leading-[60px] md:text-[55px] md:leading-[70px] lg:text-[70px] lg:leading-[80px] xl:text-[90px] xl:leading-[110px] 2xl:text-[135px] 2xl:leading-[150px]">
              Find your
              <br />
              dream home
              <span class="absolute top-[-10%] left-[-10%] -z-10 block h-[100%] w-[33%] rounded-[650px_650px_500px_500px] border-2 bg-headingBackground blur-[230px]"></span>
              <span class="absolute top-[-5%] left-[15%] -z-10 h-[100%] w-[33%] rounded-[650px_650px_500px_500px] bg-headingBackground blur-[230px]"></span>
              <span class="absolute top-[-20%] right-0 -z-10 block h-[100%] w-[33%] rounded-[650px_650px_500px_500px] bg-headingBackground blur-[230px] sm:right-[45%]"></span>
            </h1>
            <p class="mt-[20px] text-[20px] leading-normal text-dividerBlack sm:mt-[25px] sm:text-[23px] md:mt-[30px] md:text-[27px] lg:mt-[35px] lg:text-[30px] xl:mt-[50px] xl:text-[32px] 2xl:mt-[75px] 2xl:text-[35px]">
              This is where you can find a dream
              <br />
              home of your choice without stress
            </p>
          </div>

          <div class="search-box relative mt-[80px] w-full rounded-[10px] border-2 border-accentRed bg-white p-[30px] sm:mt-[100px] sm:p-[40px] md:rounded-[15px] md:p-[48px] lg:p-[56px] xl:rounded-[20px] xl:p-[64] 2xl:p-[70px]">
            <div class="buttons xl-left-[60px] absolute top-[-15px] left-[10px] flex gap-[10px] overflow-x-auto sm:top-[-20px] sm:left-[20px] sm:gap-[20px] md:left-[30px] lg:top-[-22px] lg:left-[45px] xl:top-[-26px] 2xl:left-[70px]">
              <a
                href="/"
                class="inline-flex h-[30px] w-[80px] items-center justify-center rounded-[7px] border-2 border-accentRed bg-accentRed text-[15px] font-bold text-white sm:h-[40px] sm:w-[120px] sm:text-[18px] lg:h-[45px] lg:w-[150px] lg:text-[22px] xl:h-[52px] xl:w-[170px] xl:text-[24px]"
              >
                Buy
              </a>
              <a
                href="/"
                class="inline-flex h-[30px] w-[80px] items-center justify-center rounded-[7px] border-2 border-accentRed bg-white text-[15px] font-bold text-accentRed sm:h-[40px] sm:w-[120px] sm:text-[18px] lg:h-[45px] lg:w-[150px] lg:text-[22px] xl:h-[52px] xl:w-[170px] xl:text-[24px]"
              >
                Sell
              </a>
              <a
                href="/"
                class="inline-flex h-[30px] w-[80px] items-center justify-center rounded-[7px] border-2 border-accentRed bg-white text-[15px] font-bold text-accentRed sm:h-[40px] sm:w-[120px] sm:text-[18px] lg:h-[45px] lg:w-[150px] lg:text-[22px] xl:h-[52px] xl:w-[170px] xl:text-[24px]"
              >
                Exchange
              </a>
              <a
                href="/"
                class="inline-flex h-[30px] w-[80px] items-center justify-center rounded-[7px] border-2 border-accentRed bg-white text-[15px] font-bold text-accentRed sm:h-[40px] sm:w-[120px] sm:text-[18px] lg:h-[45px] lg:w-[150px] lg:text-[22px] xl:h-[52px] xl:w-[170px] xl:text-[24px]"
              >
                Rent
              </a>
            </div>
            <div class="content flex h-full flex-col justify-between">
              <p class="mb-[16px] text-[20px] font-medium sm:mb-[22px] sm:text-[22px] md:mb-[28px] md:text-[24px] lg:mb-[36px] lg:text-[26px] xl:mb-[44px] xl:text-[27px] 2xl:mb-[60px]">
                Search the price you are looking for here
              </p>
              <div class="flex flex-col items-center justify-between gap-[14px] sm:gap-[16px] md:gap-[18px] lg:h-[60px] lg:flex-row lg:gap-[20px] xl:gap-[35px] 2xl:h-[85px] 2xl:gap-[55px]">
                <div class="relative h-[33%] w-full flex-1 sm:h-full">
                  <input
                    type="text"
                    placeholder="Location"
                    class="h-full w-full rounded-[14px] border-2 border-inputBorder p-[10px] pr-[40px] text-[15px] sm:p-[15px] sm:pr-[45px] sm:text-[18px] md:p-[20px] md:pr-[50px] md:text-[20px] lg:pr-[50px] lg:text-[22px] xl:p-[30px] xl:pr-[50px] xl:text-[24px] 2xl:pr-[50px] 2xl:text-[27px]"
                  />
                  <div class="absolute right-0 top-0 flex h-full items-center pr-[1rem]">
                    <img
                      src={locationIcon}
                      class="h-auto w-[18px] sm:w-[24px]"
                      alt=""
                    />
                  </div>
                </div>
                <div class="relative h-[33%] w-full flex-1 sm:h-full">
                  <input
                    type="text"
                    placeholder="Type"
                    class="h-full w-full rounded-[14px] border-2 border-inputBorder p-[10px] pr-[40px] text-[15px] sm:p-[15px] sm:pr-[45px] sm:text-[18px] md:p-[20px] md:pr-[50px] md:text-[20px] lg:pr-[50px] lg:text-[22px] xl:p-[30px] xl:pr-[50px] xl:text-[24px] 2xl:pr-[50px] 2xl:text-[27px]"
                  />
                  <div class="absolute right-0 top-0 flex h-full items-center pr-[1rem]">
                    <img
                      src={homeIcon}
                      class="h-auto w-[18px] sm:w-[24px]"
                      alt=""
                    />
                  </div>
                </div>
                <div class="relative h-[33%] w-full flex-1 sm:h-full">
                  <input
                    type="text"
                    placeholder="Price"
                    class="h-full w-full rounded-[14px] border-2 border-inputBorder p-[10px] pr-[40px] text-[15px] sm:p-[15px] sm:pr-[45px] sm:text-[18px] md:p-[20px] md:pr-[50px] md:text-[20px] lg:pr-[50px] lg:text-[22px] xl:p-[30px] xl:pr-[50px] xl:text-[24px] 2xl:pr-[50px] 2xl:text-[27px]"
                  />
                  <div class="absolute right-0 top-0 flex h-full items-center pr-[1rem]">
                    <img
                      src={dollarIcon}
                      class="h-auto w-[18px] sm:w-[24px]"
                      alt=""
                    />
                  </div>
                </div>
                <button class="inline-flex h-full max-w-[230px] items-center justify-center rounded-[7px] bg-accentRed p-[10px_20px] text-[16px] text-white sm:rounded-[14px] sm:text-[27px]">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Listing row --> */}
      {/* <Listings /> */}
    </main>
  )
}
