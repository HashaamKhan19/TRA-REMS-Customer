import React from 'react'

const Booking = () => {
    return (
        <div>
            <main
                class="flex flex-col items-center pt-[100px] font-open-sans 2xl:pt-[150px] mb-20"
            >
                <div
                    class="mt-[66px] flex w-full flex-col gap-[42px] px-[5%] xl:flex-row xl:px-[30px] 2xl:px-[120px]"
                >
                    <div class="flex-[3.5]">
                        <div class="personal-info">
                            <form action="none">
                                <div
                                    class="part-1 grid grid-cols-2 gap-x-[30px] gap-y-[30px] rounded-[7px] bg-white p-[35px] drop-shadow-xl sm:gap-y-[50px]"
                                >
                                    <h1
                                        class="col-span-2 mb-[10px] text-[20px] font-bold sm:mb-[20px] sm:text-[24px] md:mb-[30px] md:text-[26px] lg:mb-[40px] lg:text-[28px]"
                                    >
                                        Personal Information
                                    </h1>
                                    <div class="relative col-span-2 lg:col-span-1">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >Your Name</label
                                        >
                                        <input
                                            type="text"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                    </div>
                                    <div class="relative col-span-2 lg:col-span-1">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >Father Name</label
                                        >
                                        <input
                                            type="text"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                    </div>
                                    <div class="relative col-span-2">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >Email Address</label
                                        >
                                        <input
                                            type="email"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                        <div
                                            class="icon-container absolute top-0 right-0 hidden h-full items-center pr-[26px]"
                                        >
                                            <img
                                                src="/src/assets/icons/input-correct.png"
                                                alt="Correct Input Tick Icon"
                                                class="h-[24px] w-[24px]"
                                            />
                                        </div>
                                    </div>
                                    <div class="relative col-span-2">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >Street Address</label
                                        >
                                        <input
                                            type="text"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                    </div>
                                    <div class="relative col-span-2">
                                        <input
                                            type="text"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                    </div>
                                    <div class="relative col-span-2 lg:col-span-1">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >State/Province</label
                                        >
                                        <select
                                            class="w-full appearance-none rounded-[7px] border-2 border-inputBorder bg-white bg-[url('./assets/icons/chevron-down.png')] bg-[center_right_1rem] bg-no-repeat px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        >
                                            <option value="">Islamabad</option>
                                            <option value="">Punjab</option>
                                            <option value="">Sindh</option>
                                            <option value="">Khyber Pakhtunkhwa</option>
                                            <option value="">Balochistan</option>
                                            <option value="">Gilgit Baltistan</option>
                                        </select>
                                    </div>
                                    <div class="relative col-span-2 lg:col-span-1">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >City</label
                                        >
                                        <input
                                            type="text"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                    </div>
                                    <div class="relative col-span-2 lg:col-span-1">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >Zip/Postal Code</label
                                        >
                                        <input
                                            type="text"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                    </div>
                                    <div class="relative col-span-2 lg:col-span-1">
                                        <label
                                            for=""
                                            class="sm:top[-16px] absolute top-[-14px] left-[12px] bg-white px-[10px] text-[14px] text-labelColor sm:text-[16px] md:top-[-18px] md:text-[18px] lg:top-[-20px] lg:text-[20px]"
                                        >Phone</label
                                        >
                                        <input
                                            type="text"
                                            class="w-full rounded-[7px] border-2 border-inputBorder px-[22px] py-[20px] text-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                                        />
                                    </div>

                                    <div class="col-span-2 flex items-center gap-[14px]">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="create-account"
                                            class="h-[14px] w-[14px] font-semibold text-dividerBlack accent-accentRed focus:border-none sm:h-[20px] sm:w-[20px]"
                                        />
                                        <label for="create-account" class="text-[14px] sm:text-[20px]"
                                        >Create an account for later use</label
                                        >
                                    </div>
                                </div>
                                <div
                                    class="part-2 mt-[60px] rounded-[7px] bg-white p-[20px] drop-shadow-lg sm:p-[35px]"
                                >
                                    <h1
                                        class="mb-[20px] text-[20px] font-bold sm:mb-[30px] sm:text-[24px] md:mb-[45px] md:text-[26px] lg:mb-[60px] lg:text-[28px]"
                                    >
                                        Payment Type
                                    </h1>
                                    <div
                                        class="select-payment grid grid-cols-2 gap-y-[20px] pl-[20px] sm:gap-y-[48px] sm:pl-[35px]"
                                    >
                                        <div class="input flex items-center">
                                            <input
                                                type="radio"
                                                name="payment-type"
                                                id="full-payment"
                                                class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                            />
                                            <label
                                                for="full-payment"
                                                class="text-[16px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[27px]"
                                            >Full Payment</label
                                            >
                                        </div>
                                        <div class="input flex items-center">
                                            <input
                                                type="radio"
                                                name="payment-type"
                                                id="down-payment"
                                                class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                            />
                                            <label
                                                for="down-payment"
                                                class="text-[16px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[27px]"
                                            >Down Payment</label
                                            >
                                        </div>
                                        <div class="input flex items-center">
                                            <input
                                                type="radio"
                                                name="payment-type"
                                                id="half-payment"
                                                class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                            />
                                            <label
                                                for="half-payment"
                                                class="text-[16px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[27px]"
                                            >Half Payment</label
                                            >
                                        </div>
                                        <div class="input flex items-center">
                                            <input
                                                type="radio"
                                                name="payment-type"
                                                id="token-money"
                                                class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                            />
                                            <label
                                                for="token-money"
                                                class="text-[16px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[27px]"
                                            >Token Money</label
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="part-3 mt-[60px] rounded-[7px] bg-white p-[35px] drop-shadow-lg"
                                >
                                    <h1
                                        class="mb-[20px] text-[20px] font-bold sm:mb-[30px] sm:text-[24px] md:mb-[45px] md:text-[26px] lg:mb-[60px] lg:text-[28px]"
                                    >
                                        Payment Method
                                    </h1>

                                    <div class="options flex flex-col gap-[35px]">
                                        <div
                                            class="option flex flex-1 justify-between gap-[25px] rounded-[7px] border-2 border-inputBorder p-[16px] sm:p-[35px]"
                                        >
                                            <div
                                                class="flex flex-col gap-[10px] md:flex-row md:gap-[20px]"
                                            >
                                                <div class="flex items-center whitespace-nowrap">
                                                    <input
                                                        type="radio"
                                                        name="payment-method"
                                                        id="easypaisa"
                                                        class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                                    /><label
                                                        for="easypaisa"
                                                        class="text-[20px] font-semibold lg:text-[22px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px]"
                                                    >Easypaisa</label
                                                    >
                                                </div>
                                                <p
                                                    class="text-[16px] text-dividerBlack lg:text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px]"
                                                >
                                                    You will be redirected to the Easypaisa website after
                                                    submitting your order
                                                </p>
                                            </div>
                                            <div
                                                class="grid h-[46px] w-[65px] shrink-0 place-items-center rounded-[7px] border-2 border-inputBorder 3xl:h-[52px] 3xl:w-[74px]"
                                            >
                                                <img src="/src/assets/icons/easypaisa-icon.png" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            class="option flex flex-1 justify-between gap-[25px] rounded-[7px] border-2 border-inputBorder p-[16px] sm:p-[35px]"
                                        >
                                            <div
                                                class="flex flex-col gap-[10px] md:flex-row md:gap-[20px]"
                                            >
                                                <div class="flex items-center whitespace-nowrap">
                                                    <input
                                                        type="radio"
                                                        name="payment-method"
                                                        id="mobicash"
                                                        class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                                    /><label
                                                        for="mobicash"
                                                        class="text-[20px] font-semibold lg:text-[22px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px]"
                                                    >MobiCash</label
                                                    >
                                                </div>
                                                <p
                                                    class="text-[16px] text-dividerBlack lg:text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px]"
                                                >
                                                    You will be redirected to the Easypaisa website after
                                                    submitting your order
                                                </p>
                                            </div>
                                            <div
                                                class="grid h-[46px] w-[65px] shrink-0 place-items-center rounded-[7px] border-2 border-inputBorder 3xl:h-[52px] 3xl:w-[74px]"
                                            >
                                                <img src="/src/assets/icons/mobicash-icon.png" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            class="option flex flex-1 justify-between gap-[25px] rounded-[7px] border-2 border-inputBorder p-[16px] sm:p-[35px]"
                                        >
                                            <div
                                                class="flex flex-col gap-[10px] md:flex-row md:gap-[20px]"
                                            >
                                                <div class="flex items-center whitespace-nowrap">
                                                    <input
                                                        type="radio"
                                                        name="payment-method"
                                                        id="bank"
                                                        class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                                    /><label
                                                        for="bank"
                                                        class="whitespace-nowrap text-center text-[18px] font-semibold lg:text-[22px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px]"
                                                    >Bank Transfer</label
                                                    >
                                                </div>
                                                <p
                                                    class="text-[16px] text-dividerBlack lg:text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px]"
                                                >
                                                    You will be redirected to the Easypaisa website after
                                                    submitting your order
                                                </p>
                                            </div>
                                            <div
                                                class="grid h-[46px] w-[65px] shrink-0 place-items-center rounded-[7px] border-2 border-inputBorder 3xl:h-[52px] 3xl:w-[74px]"
                                            >
                                                <img src="/src/assets/icons/hbl-icon.png" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            class="option flex flex-1 justify-between gap-[25px] rounded-[7px] border-2 border-inputBorder p-[16px] sm:p-[35px]"
                                        >
                                            <div
                                                class="flex flex-col gap-[10px] md:flex-row md:gap-[20px]"
                                            >
                                                <div class="flex items-center whitespace-nowrap">
                                                    <input
                                                        type="radio"
                                                        name="payment-method"
                                                        id="cash"
                                                        class="mr-[14px] h-[16px] w-[16px] accent-accentRed sm:h-[24px] sm:w-[24px]"
                                                    /><label
                                                        for="cash"
                                                        class="text-[20px] font-semibold lg:text-[22px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px]"
                                                    >Cash</label
                                                    >
                                                </div>
                                                <p
                                                    class="text-[16px] text-dividerBlack lg:text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px]"
                                                >
                                                    You will be redirected to the Easypaisa website after
                                                    submitting your order
                                                </p>
                                            </div>
                                            <div
                                                class="grid h-[46px] w-[65px] shrink-0 place-items-center rounded-[7px] border-2 border-inputBorder 3xl:h-[52px] 3xl:w-[74px]"
                                            >
                                                <img src="/src/assets/icons/money-icon.png" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            class="option flex flex-1 items-center gap-[25px] rounded-[7px] py-[10px]"
                                        >
                                            <img
                                                src="/src/assets/icons/protect-icon.png"
                                                alt=""
                                                class="h-[35px] w-[35px] sm:h-[48px] sm:w-[48px]"
                                            />
                                            <p
                                                class="text-[14px] text-dividerBlack lg:text-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px]"
                                            >
                                                We protect your payment information using encryption to
                                                provide bank-level security.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="flex-[2.5]">
                        <details
                            class="inventory rounded-[7px] bg-white p-[35px] drop-shadow-lg"
                            open
                        >
                            <summary class="flex items-center justify-between">
                                <h1
                                    class="mb-[6px] text-[20px] font-bold sm:text-[24px] md:text-[26px] lg:text-[28px]"
                                >
                                    Booking Review
                                </h1>
                                <img
                                    src="/src/assets/icons/chevron-filled.png"
                                    alt="Chevron Down Icon"
                                    class="h-[10px] w-[14px] rotate-180 sm:w-[16px] sm:first:before:h-[12px]"
                                />
                            </summary>
                            <div>
                                <p class="text-[18px] sm:text-[21px]">1 item in card</p>

                                <div
                                    class="card relative mt-[20px] mb-[27px] flex gap-[20px] pr-[18px] sm:mt-[27px] sm:mb-[35px] sm:gap-[24px] sm:pr-[20px]"
                                >
                                    <img
                                        src="/src/assets/images/card-house.png"
                                        alt=""
                                        class="h-[100px] w-[100px] rounded-[7px] border-[7px] border-[#E8EFFA] sm:h-[124px] sm:w-[124px]"
                                    />
                                    <div class="details flex flex-col justify-between">
                                        <h2
                                            class="font-dm-sans text-[18px] font-medium leading-[25px] sm:text-[21px] sm:leading-[28px]"
                                        >
                                            5 Marla House For Sale
                                            <span
                                                class="block font-dm-sans text-[16px] font-normal text-detailsColor sm:text-[18px]"
                                            >
                                                Gulshan Abad, Rawalpindi
                                            </span>
                                        </h2>

                                        <div
                                            class="featues align-center flex flex-wrap justify-between gap-[15px]"
                                        >
                                            <div class="feature flex items-center gap-[10px]">
                                                <img src="/src/assets/icons/bedroom-icon.png" alt="" />
                                                <p
                                                    class="text-[14px] font-bold text-detailsColor sm:text-[16px]"
                                                >
                                                    3
                                                </p>
                                            </div>
                                            <div class="feature flex items-center gap-[10px]">
                                                <img src="/src/assets/icons/bedroom-icon.png" alt="" />
                                                <p
                                                    class="text-[14px] font-bold text-detailsColor sm:text-[16px]"
                                                >
                                                    3
                                                </p>
                                            </div>
                                            <div class="feature flex items-center gap-[10px]">
                                                <img src="/src/assets/icons/bedroom-icon.png" alt="" />
                                                <p
                                                    class="text-[14px] font-bold text-detailsColor sm:text-[16px]"
                                                >
                                                    3
                                                </p>
                                            </div>
                                            <div class="feature flex items-center gap-[10px]">
                                                <img src="/src/assets/icons/bath-icon.png" alt="" />
                                                <p
                                                    class="text-[14px] font-bold text-detailsColor sm:text-[16px]"
                                                >
                                                    3
                                                </p>
                                            </div>
                                            <div class="feature flex items-center gap-[10px]">
                                                <img src="/src/assets/icons/garage-icon.png" alt="" />
                                                <p
                                                    class="text-[14px] font-bold text-detailsColor sm:text-[16px]"
                                                >
                                                    3
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            class="text-[22px] font-semibold text-accentRed sm:text-[26px]"
                                        >
                                            PKR 5.80 Lac
                                        </p>
                                    </div>
                                    <img
                                        src="/src/assets/icons/close-hamburger-menu.png"
                                        alt=""
                                        class="absolute top-0 right-0 mt-[3px] h-[18px] w-[18px] bg-white sm:mt-[5px] sm:h-[20px] sm:w-[20px]"
                                    />
                                </div>
                                <hr />
                            </div>
                        </details>
                        <button
                            class="mt-[64px] w-full rounded-[14px] bg-accentRed py-[26px] text-[16px] font-bold text-white sm:py-[29px] sm:text-[18px] md:py-[32px] md:text-[20px] lg:text-[22px] xl:text-[24px]"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Booking;