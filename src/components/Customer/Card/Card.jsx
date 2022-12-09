import React from 'react'

export const Card = () => {
  return (
    <>
    <div class="card flex-1">
            <div
              class="image-container relative overflow-hidden rounded-[10px]"
            >
              <img
                src="/src/assets/images/carousel-house.png"
                alt=""
                class="object-cover"
              />
              <p
                class="overlay absolute top-0 left-0 flex h-[36px] w-[100px] items-center rounded-br-[74px] bg-accentRed pl-[15px] text-[16px] font-medium text-white sm:h-[50px] sm:w-[150px] sm:pl-[20px] sm:text-[24px] md:h-[36px] md:w-[100px] md:text-[16px] lg:h-[50px] lg:w-[150px] lg:pl-[20px] lg:text-[24px] xl:h-[36px] xl:w-[100px] xl:text-[16px] 2xl:h-[50px] 2xl:w-[150px] 2xl:pl-[20px] 2xl:text-[24px]"
              >
                For Sale
              </p>
            </div>
            <div
              class="details mt-[16px] sm:mt-[32px] md:mt-[16px] lg:mt-[32px] xl:mt-[16px] 2xl:mt-[32px]"
            >
              <h2
                class="mb-[10px] text-[22px] font-medium text-dividerBlack sm:mb-[14px] sm:text-[27px] md:mb-[10px] md:text-[22px] lg:mb-[14px] lg:text-[27px] xl:mb-[10px] xl:text-[22px] 2xl:mb-[14px] 2xl:text-[27px]"
              >
                Songgoriti villa aduhai
              </h2>
              <h3
                class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px]"
              >
                <img
                  class="inline-block w-[22px] sm:w-[28px]"
                  src="/src/assets/icons/location-filled.png"
                  alt=""
                />
                Songgoriti, Gang macan
              </h3>
              <div class="features mt-[16px] flex gap-[30px]">
                <p
                  class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px]"
                >
                  <img
                    class="inline-block w-[22px] sm:w-[28px] md:w-[22px] lg:w-[28px] xl:w-[22px] 2xl:w-[28px]"
                    src="/src/assets/icons/blueprint.png"
                    alt=""
                  />
                  1629 sqft
                </p>
                <p
                  class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px]"
                >
                  <img
                    class="inline-block w-[22px] sm:w-[28px] md:w-[22px] lg:w-[28px] xl:w-[22px] 2xl:w-[28px]"
                    src="/src/assets/icons/bedroom-dark-icon.png"
                    alt=""
                  />4
                </p>
                <p
                  class="flex items-center gap-[5px] text-[18px] text-dividerBlack sm:gap-[10px] sm:text-[24px] md:gap-[5px] md:text-[18px] lg:gap-[10px] lg:text-[24px] xl:gap-[5px] xl:text-[18px] 2xl:gap-[10px] 2xl:text-[24px]"
                >
                  <img
                    class="inline-block w-[22px] sm:w-[28px] md:w-[22px] lg:w-[28px] xl:w-[22px] 2xl:w-[28px]"
                    src="/src/assets/icons/bath-with-person-icon.png"
                    alt=""
                  />2
                </p>
              </div>
              <p
                class="mt-[16px] text-[28px] font-bold text-accentRed sm:mt-[22px] sm:text-[40px] md:mt-[16px] md:text-[28px] lg:mt-[22px] lg:text-[40px] xl:mt-[16px] xl:text-[28px] 2xl:mt-[22px] 2xl:text-[40px]"
              >
                $ 2779
              </p>
            </div>
          </div>
    </>
  )
}
