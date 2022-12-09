import React from 'react'
import { Rating, Group } from '@mantine/core';
import locationFilledIcon from "../../../assets/icons/location-filled.png"
import backgroundImage from "../../../assets/images/main-carousel-image.png"
import mapImage from "../../../assets/images/location-map.png"
import bluePrintIcon from "../../../assets/icons/blueprint.png"
import bedroomIcon from "../../../assets/icons/bedroom-dark-icon.png"
import garageIcon from "../../../assets/icons/garage-icon.png"
import bathTubIcon from "../../../assets/icons/bath-with-person-icon.png"
import callIcon from "../../../assets/icons/call-icon.png"
import chatIcon from "../../../assets/icons/chat-icon.png"
import bookingIcon from "../../../assets/icons/booking-icon.png"
import heartIcon from "../../../assets/icons/heart-icon.png"
import shareIcon from "../../../assets/icons/share-icon.png"
import playIcon from "../../../assets/icons/play-icon.png"
import listIcon from "../../../assets/icons/list-icon.png"
import checkListIcon from "../../../assets/icons/check-list.png"
import { Link } from 'react-router-dom';

const ProductPage = () => {
    return (
        <div>
            <main class="flex flex-col items-center pt-[100px] 2xl:pt-[150px]">
                <section
                    class="details mt-[32px] grid w-full items-start justify-between px-[30px] sm:flex lg:px-[50px] 2xl:px-[120px]"
                >
                    <div class="details">
                        <h1
                            class="text-[22px] font-medium leading-none text-accentRed sm:text-[26px] md:text-[28px] lg:text-[34px] xl:text-[40px] 3xl:text-[50px]"
                        >
                            5 Marla House For Sale
                        </h1>
                        <p
                            class="mt-[10px] flex items-center gap-[10px] text-[14px] text-headingBlue/50 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 3xl:text-[25px]"
                        >
                            <img
                                src={locationFilledIcon}
                                alt="Location icon"
                                class="aspect-square xl:w-[21px] 3xl:w-[24px]"
                            />
                            Gulshan Abad, Rawalpindi
                        </p>
                        <div class="stars mt-[20px] flex gap-[5px]">
                            <Rating value={3.5} fractions={2} readOnly size="xl" />
                        </div>
                    </div>
                    <h2
                        class="text-right text-[25px] font-medium leading-none text-headingBlue before:relative before:top-[-8px] before:text-[12px] before:text-headingBlue/70 before:content-['PKR'] sm:text-left sm:text-[30px] before:sm:top-[-10px] before:sm:text-[15px] md:text-[35px] before:md:top-[-12px] before:md:text-[17px] lg:text-[40px] before:lg:top-[-14px] before:lg:text-[20px] xl:text-[50px] before:xl:top-[-18px] before:xl:text-[25px] 3xl:text-[70px] before:3xl:text-[37px]"
                    >
                        5.80 Lac
                    </h2>
                    <div
                        class="actions col-span-2 flex items-end justify-between sm:flex-col"
                    >
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
                            <button
                                class="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accentRed/10 lg:h-[44px] lg:w-[44px]"
                            >
                                <img
                                    src={heartIcon}
                                    class="w-[18px] lg:w-[22px]"
                                    alt="Heart Icon"
                                />
                            </button>
                            <button
                                class="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accentRed/10 lg:h-[44px] lg:w-[44px]"
                            >
                                <img
                                    src={shareIcon}
                                    class="w-[18px] lg:w-[22px]"
                                    alt="Share Icons"
                                />
                            </button>
                        </div>
                    </div>
                </section>
                <section
                    class="carousel mt-[25px] px-[30px] md:mt-[30px] lg:mt-[40px] lg:px-[50px] 2xl:mt-[50px]"
                >
                    <div class="main-image relative aspect-[2] w-full">
                        <img
                            src={backgroundImage}
                            alt="Main Carousel Image"
                            class="h-full w-full object-cover"
                        />
                        <div
                            class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center"
                        >
                            <img
                                src={playIcon}
                                alt="Play Icon"
                                class="w-[50px] sm:w-[75px] md:w-[100px] lg:w-[120px] xl:w-[150px]"
                            />
                        </div>
                    </div>
                    <div
                        class="slider mt-[10px] flex items-stretch justify-between gap-[15px] sm:mt-[15px] sm:gap-[20px] md:mt-[20px] md:gap-[25px] lg:mt-[25px] lg:gap-[30px] xl:mt-[30px] xl:gap-[42px]"
                    >
                        <div class="relative flex-1 overflow-hidden rounded-[7px]">
                            <img
                                src={backgroundImage}
                                class="h-full w-full object-cover"
                                alt=""
                            />
                            <div
                                class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center"
                            >
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
                        </div>
                    </div>
                </section>
                <section
                    class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]"
                >
                    <h2
                        class="text-[22px] font-medium text-accentRed sm:text-[26px] md:text-[28px] lg:text-[34px] xl:text-[40px] 3xl:text-[50px]"
                    >
                        About this property
                    </h2>
                    <p
                        class="text-[14px] text-headingBlue/50 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 3xl:text-[25px]"
                    >
                        Posted on June 24, 2022
                    </p>
                    <div
                        class="features mt-[60px] flex h-[120px] items-stretch justify-between sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px]"
                    >
                        <div
                            class="feature grid flex-1 place-content-center place-items-center"
                        >
                            <img
                                src={bedroomIcon}
                                alt="Bathroom Icon"
                                class="w-[75px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]"
                            />
                            <p
                                class="mt-[16px] text-[14px] font-medium text-dividerBlack sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px]"
                            >
                                3 Bedrooms
                            </p>
                        </div>
                        <div
                            class="feature grid flex-1 place-content-center place-items-center"
                        >
                            <img
                                src={bathTubIcon}
                                alt="Bath Icon"
                                class="w-[75px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]"
                            />
                            <p
                                class="mt-[16px] text-[14px] font-medium text-dividerBlack sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px]"
                            >
                                4 Bathrooms
                            </p>
                        </div>
                        <div
                            class="feature grid flex-1 place-content-center place-items-center"
                        >
                            <img
                                src={garageIcon}
                                alt="Garage Icon"
                                class="w-[75px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]"
                            />
                            <p
                                class="mt-[16px] text-[14px] font-medium text-dividerBlack sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px]"
                            >
                                1 Garage
                            </p>
                        </div>
                    </div>
                </section>
                <section class="mt-[70px] px-[30px] lg:px-[50px] 2xl:px-[120px]">
                    <h2
                        class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]"
                    >
                        14 Marla House For Sale in G-13/3, Islamabad
                    </h2>
                    <p
                        class="mt-[20px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px]"
                    >
                        A grand 14 marla house for sale in G-13/3, Islamabad. It comprises of
                        6 bedrooms, 7 washrooms, spacious TV lounge, drawing & dining room,
                        store room, servant quarter and car parking space is also available.
                        The surrounding area of this property includes commercial area,
                        restaurants/food outlets, medical care, hospital, gym and
                        health/sports center, all within 1-2 KMs distance. Kashmir Highway can
                        be used for daily commute.
                    </p>
                </section>
                <section
                    class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]"
                >
                    <h2
                        class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]"
                    >
                        Key Features:
                    </h2>
                    <ul
                        class="mt-[16px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px]"
                    >
                        <li class="mb-[5px] flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            6 Bedrooms
                        </li>
                        <li class="mb-[5px] flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            7 Washrooms
                        </li>
                        <li class="mb-[5px] flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            TV lounge
                        </li>
                        <li class="mb-[5px] flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            Drawing and Dining room
                        </li>
                        <li class="mb-[5px] flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            Kitchen (premium quality and well-maintained fixtures)
                        </li>
                        <li class="mb-[5px] flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            Store Room
                        </li>
                        <li class="mb-[5px] flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            Servant Quarter
                        </li>
                        <li class="flex items-center gap-[16px]">
                            <img src={listIcon} alt="" />
                            Parking Space
                        </li>
                    </ul>
                    <p
                        class="mt-[20px] text-[17px] text-headingBlue/50 sm:mt-[25px] sm:text-[20px] md:mt-[30px] md:text-[20px] lg:mt-[40px] lg:text-[25px] xl:mt-[50px] xl:text-[30px]"
                    >
                        We highly recommend viewing this property.
                    </p>
                </section>
                <section
                    class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]"
                >
                    <h2
                        class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]"
                    >
                        Features
                    </h2>
                    <div class="mt-[16px] grid grid-cols-2 gap-y-[24px] md:grid-cols-3">
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Dining Room
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Kitchen
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Drawing Room
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            TV Lounge
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Store Room
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Servant Quarter
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Laundry Room
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Gas
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Water
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Electricity
                        </div>
                        <div
                            class="flex items-center gap-[10px] text-[17px] text-headingBlue/50 sm:text-[20px] md:text-[20px] lg:gap-[16px] lg:text-[25px] xl:text-[30px]"
                        >
                            <img src={checkListIcon} alt="" />
                            Parking Space
                        </div>
                    </div>
                </section>
                <section
                    class="mt-[35px] w-full px-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] lg:px-[50px] xl:mt-[100px] 2xl:px-[120px]"
                >
                    <h2
                        class="text-[20px] font-medium text-accentRed sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px]"
                    >
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
export default ProductPage;