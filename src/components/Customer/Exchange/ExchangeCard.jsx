import React from "react";

const ExchangeCard = () => {
    return (
        <div class="ads flex-1">
            <div class="header mb-[30px] flex flex-col items-center justify-between gap-[20px] md:flex-row xl:mb-[45px] 2xl:mb-[60px]">
                <h1 class="text-[35px] font-bold text-dividerBlack xl:text-[42px] 2xl:text-[50px]">
                    Search Results
                </h1>
                <div class="options flex h-[50px] items-center gap-[30px] lg:gap-[50px] xl:gap-[70px] 2xl:gap-[100px]">
                    <div class="sort relative w-fit">
                        <label
                            for="sort"
                            class="absolute top-[-5px] left-[10px] z-10 bg-white px-[10px] text-[11px] font-medium uppercase tracking-wider text-dividerBlack xl:top-[-7px] xl:text-[14px]"
                        >
                            Sort By
                        </label>
                        <select
                            name="sort"
                            id="sort"
                            class="relative inline-block h-full rounded-[6px] border-2 border-inputBorder bg-white p-[11px_17px] text-[15px] xl:text-[20px]"
                        >
                            <option value="">New Listed</option>
                            <option value="">Oldest Listed</option>
                            <option value="">Most Popular</option>
                            <option value="">Least Popular</option>
                            <option value="">Highest Price</option>
                            <option value="">Lowest Price</option>
                        </select>
                    </div>
                    <div class="list-style float-right flex h-full w-[120px] xl:w-[150px] 2xl:w-[194px]">
                        <div class="style h-full w-[50%]">
                            <input
                                type="radio"
                                name="list"
                                id="list"
                                class="peer hidden"
                                checked
                            />
                            <label
                                for="list"
                                class="grid h-full w-full place-items-center rounded-[6px] bg-[#3E4345]/10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] peer-checked:bg-white peer-checked:drop-shadow-[0_5px_5px_rgba(108,16,19,0.25)]"
                            >
                                <img
                                    src="/src/assets/icons/list-view.png"
                                    class="w-[18px] xl:w-[21px] 2xl:w-[25px]"
                                    alt=""
                                />
                            </label>
                        </div>
                        <div class="style h-full w-[50%]">
                            <input type="radio" name="list" id="box" class="peer hidden" />
                            <label
                                for="box"
                                class="grid h-full w-full place-items-center rounded-[6px] bg-[#3E4345]/10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] peer-checked:bg-white peer-checked:drop-shadow-[0_5px_5px_rgba(108,16,19,0.25)]"
                            >
                                <img
                                    src="/src/assets/icons/box-view.png"
                                    class="w-[18px] xl:w-[21px] 2xl:w-[25px]"
                                    alt=""
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ad-listings flex flex-col gap-[30px] md:gap-[40px] xl:gap-[50px] 2xl:gap-[70px]">
                <a href="">
                    <div class="ad group flex w-full flex-col justify-between gap-[15px] rounded-[10px] bg-white p-[15px] drop-shadow-[7px_7px_30px_rgba(0,0,0,0.15)] duration-500 hover:bg-accentRed sm:w-auto sm:flex-row xl:gap-[20px] xl:rounded-[15px] xl:p-[20px] 2xl:gap-[32px] 2xl:rounded-[20px] 2xl:p-[30px]">
                        <img
                            src="/src/assets/images/carousel-house.png"
                            class="aspect-[1.35] h-full min-h-[185px] w-full min-w-[250px] flex-shrink md:min-h-[185px] md:min-w-[350px] lg:min-h-[224px] lg:min-w-[300px] xl:min-h-[300px] xl:min-w-[400px]"
                            alt=""
                        />
                        <div class="details flex flex-col justify-between gap-[15px]">
                            <div class="text">
                                <h1 class="mb-[6px] text-[20px] font-medium text-dividerBlack duration-500 group-hover:text-white xs:text-[25px] sm:text-[20px] md:text-[25px] xl:text-[32px] 2xl:text-[38px]">
                                    1 Kanal Upper portion for Sale
                                </h1>
                                <p class="mb-[10px] flex items-center gap-[12px] text-[16px] duration-500 group-hover:text-white xs:text-[18px] sm:text-[16px] md:text-[18px] xl:mb-[15px] xl:text-[20px] 2xl:mb-[20px] 2xl:text-[22px]">
                                    <img src="assets/icons/location-filled.png" alt="" />
                                    DHA Phase 2, Islamabad
                                </p>
                                <p class="text-[16px] text-dividerBlack duration-500 line-clamp-3 group-hover:text-white xs:text-[18px] sm:text-[16px] md:text-[18px] xl:text-[22px] 2xl:text-[24px]">
                                    Spacious 1 Kanal upper portion for Rent in DHA Phase 2
                                    adjacent to Zaraj Housing Society and Humak Town, Islamabad.
                                    It comprises of 3 bedrooms and 2 bathrooms spanning over an
                                    area of 1629 ft<sup>2</sup>
                                </p>
                            </div>
                            <div class="featues flex gap-[20px] xl:gap-[30px] 2xl:gap-[40px]">
                                <p class="flex items-center gap-[10px] whitespace-nowrap text-[16px] font-medium text-dividerBlack duration-500 group-hover:text-white xs:gap-[15px] xs:text-[18px] sm:gap-[10px] sm:text-[16px] md:text-[18px] xl:gap-[15px] xl:text-[22px] 2xl:gap-[20px] 2xl:text-[25px]">
                                    <img
                                        src="/src/assets/icons/blueprint.png"
                                        alt=""
                                        class="h-auto w-[20px] xs:w-[25px] sm:w-[20px] md:w-[25px] xl:w-[35px] 2xl:w-[40px]"
                                    />
                                    1629 sqft
                                </p>
                                <p class="flex items-center gap-[10px] text-[16px] font-medium text-dividerBlack duration-500 group-hover:text-white md:text-[18px] xl:gap-[15px] xl:text-[22px] 2xl:gap-[20px] 2xl:text-[25px]">
                                    <img
                                        src="/src/assets/icons/bedroom-dark-icon.png"
                                        alt=""
                                        class="h-auto w-[20px] xs:w-[25px] sm:w-[20px] md:w-[25px] xl:w-[35px] 2xl:w-[40px]"
                                    />
                                    4
                                </p>
                                <p class="flex items-center gap-[10px] text-[16px] font-medium text-dividerBlack duration-500 group-hover:text-white md:text-[18px] xl:gap-[15px] xl:text-[22px] 2xl:gap-[20px] 2xl:text-[25px]">
                                    <img
                                        src="/src/assets/icons/bath-with-person-icon.png"
                                        alt=""
                                        class="h-auto w-[20px] xs:w-[25px] sm:w-[20px] md:w-[25px] xl:w-[35px] 2xl:w-[40px]"
                                    />
                                    2
                                </p>
                            </div>
                            <div class="price flex items-center justify-between">
                                <p class="whitespace-nowrap text-[20px] font-bold text-accentRed duration-500 group-hover:text-white xs:text-[25px] sm:text-[20px] md:text-[25px] xl:text-[30px] 2xl:text-[35px]">
                                    $ 2779
                                </p>
                                <p class="text-[14px] text-dividerBlack/50 duration-500 group-hover:text-white/80 xs:text-[16px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[22px]">
                                    Added 3 weeks ago
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default ExchangeCard;
