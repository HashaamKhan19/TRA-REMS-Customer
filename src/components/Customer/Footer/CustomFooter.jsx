import React from 'react'
import googleDownloadImage from "../../../assets/icons/Google-Download-Button.png"
import appleDownloadImage from "../../../assets/icons/Apple-Download-Button.png"
import facebookIcon from "../../../assets/icons/facebook-dark.png"
import twitterIcon from "../../../assets/icons/twitter-dark.png"
import instagramIcon from "../../../assets/icons/instagram-dark.png"
import youtubeIcon from "../../../assets/icons/youtube-dark.png"
import pinterestIcon from "../../../assets/icons/pinterest-dark.png"
import backgroundImage from "../../../assets/images/Background.png"


export const CustomFooter = () => {
  return (
    <>
    <footer
      class="relative flex flex-col items-center bg-white px-[10px] shadow-[0px_-1px_30px_rgba(0,0,0,0.05)]"
    >
      {/* <!-- Quick Links --> */}
      <div
        class="quick-links mt-[114px] flex flex-wrap justify-center gap-y-[10px] px-[10px] text-navBlack sm:px-[30px]"
      >
        <a
          href=""
          class="border-r border-dividerBlack pr-[10px] text-[14px] duration-300 hover:text-accentRed xs:pr-[15px] xs:text-[15px] sm:pr-[20px] sm:text-[18px] lg:pr-[35px] xl:pr-[50px] xl:text-[22px] 3xl:pr-[65px] 3xl:text-[24px]"
          >Home</a>
        <a
          href=""
          class="border-r border-dividerBlack px-[10px] text-[14px] duration-300 hover:text-accentRed xs:px-[15px] xs:text-[15px] sm:px-[20px] sm:text-[18px] lg:px-[35px] xl:px-[50px] xl:text-[22px] 3xl:px-[65px] 3xl:text-[24px]"
          >Buy</a>
        <a
          href="#"
          class="border-r border-dividerBlack px-[10px] text-[14px] duration-300 hover:text-accentRed xs:px-[15px] xs:text-[15px] sm:px-[20px] sm:text-[18px] lg:px-[35px] xl:px-[50px] xl:text-[22px] 3xl:px-[65px] 3xl:text-[24px]"
          >Sell</a>
        <a
          href="#"
          class="border-r border-dividerBlack px-[10px] text-[14px] duration-300 hover:text-accentRed xs:px-[15px] xs:text-[15px] sm:px-[20px] sm:text-[18px] lg:px-[35px] xl:px-[50px] xl:text-[22px] 3xl:px-[65px] 3xl:text-[24px]"
          >Exchange</a>
        <a
          href="#"
          class="border-r border-dividerBlack px-[10px] text-[14px] duration-300 hover:text-accentRed xs:px-[15px] xs:text-[15px] sm:px-[20px] sm:text-[18px] lg:px-[35px] xl:px-[50px] xl:text-[22px] 3xl:px-[65px] 3xl:text-[24px]"
          >Rent</a>
        <a
          href="#"
          class="pl-[10px] text-[14px] duration-300 hover:text-accentRed xs:pl-[15px] xs:text-[15px] sm:pl-[15px] sm:text-[18px] md:pl-[20px] lg:pl-[35px] xl:pl-[50px] xl:text-[22px] 3xl:pl-[65px] 3xl:text-[24px]"
          >News & Insights</a>
      </div>
      {/* <!-- App links --> */}
      <div class="app-links mt-[55px] flex gap-[20px]">
        <button
          class="h-[40px] w-[128px] overflow-hidden rounded-[8px] duration-150 hover:scale-105 sm:h-[47px] sm:w-[150px]"
        >
          <img
            src={appleDownloadImage}
            alt="Apple App Store Download Button"
            class="w-full"
          />
        </button>
        <button
          class="h-[40px] w-[128px] overflow-hidden rounded-[8px] duration-150 hover:scale-105 sm:h-[47px] sm:w-[150px]"
        >
          <img
            src={googleDownloadImage}
            alt="Google Play Store Download Button"
            class="w-full"
          />
        </button>
      </div>
      {/* <!-- Social Links --> */}
      <div
        class="social-links mt-[34px] mb-[70px] flex gap-[30px] lg:mb-[100px] xl:mb-[150px]"
      >
        <a href="#"
          ><img
            class="w-[24px] duration-150 hover:scale-105"
            src={facebookIcon}
            alt=""
        /></a>
        <a href="#"
          ><img
            class="w-[24px] duration-150 hover:scale-105"
            src={twitterIcon}
            alt=""
        /></a>
        <a href="#"
          ><img
            class="w-[24px] duration-150 hover:scale-105"
            src={instagramIcon}
            alt=""
        /></a>
        <a href="#"
          ><img
            class="w-[24px] duration-150 hover:scale-105"
            src={youtubeIcon}
            alt=""
        /></a>
        <a href="#"
          ><img
            class="w-[24px] duration-150 hover:scale-105"
            src={pinterestIcon}
            alt=""
        /></a>
      </div>
      {/* <!-- Background image at the bottom --> */}
      <img
        src={backgroundImage}
        alt="City Silhouette"
        class="absolute bottom-0 -z-10 object-cover"
      />
    </footer>
    </>
  )
}
