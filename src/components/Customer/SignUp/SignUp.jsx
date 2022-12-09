import React from 'react'

export const SignUp = () => {
    return (
        <div>
            <main class="flex flex-col items-center pt-[100px] 2xl:pt-[150px]">
                <p
                    class="w-full pt-[20px] text-center text-[15px] xs:text-[17px] sm:pt-[20px] sm:pr-[40px] sm:text-end sm:text-[18.5px] xl:pt-[31.5px] xl:pr-[77.5px]"
                >
                    Already have an account?
                    <a href="#" class="ml-[15px] font-medium text-accentRed hover:underline"
                    >Sign in!</a
                    >
                </p>
                <h1
                    class="mt-[50px] text-[36px] font-medium sm:mt-[70px] sm:text-[48px] lg:mt-[90px] xl:mt-[120px]"
                >
                    Get Started With Maker
                </h1>
                <p class="text-[20px] text-subTextBlack sm:text-[24px]">
                    Getting started is easy
                </p>
                <div class="social-logins mt-[52px] mb-[49px] flex">
                    <button
                        class="mr-[18px] flex h-[50px] w-[142px] items-center justify-center rounded-[7px] border-[1.33px] border-borderLightGray text-[14px] font-medium text-black duration-300 hover:border-borderGreen sm:h-[59px] sm:w-[168px] sm:text-[16px]"
                    >
                        <img
                            src="/src/assets/icons/google-icon.png"
                            alt="Google Icon"
                            class="mr-[11px] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]"
                        />
                        Google
                    </button>
                    <button
                        class="flex h-[50px] w-[142px] items-center justify-center rounded-[7px] border-[1.33px] border-borderLightGray text-[14px] font-medium text-black duration-300 hover:border-borderGreen sm:h-[59px] sm:w-[168px] sm:text-[16px]"
                    >
                        <img
                            src="/src/assets/icons/facebook-icon.png"
                            alt="Facebook Icon"
                            class="mr-[11px] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]"
                        />
                        Facebook
                    </button>
                </div>
                <p
                    class="mb-[46px] flex items-center justify-center text-[13px] before:mr-[10px] before:block before:h-[1.33px] before:w-[100px] before:bg-borderLightGray before:content-[''] after:ml-[10px] after:block after:h-[1.33px] after:w-[100px] after:bg-borderLightGray after:content-[''] xs:before:w-[120px] xs:after:w-[120px] sm:text-[16px] sm:before:mr-[15px] sm:before:w-[174px] sm:after:ml-[15px] sm:after:w-[174px]"
                >
                    Or continue with
                </p>

                <form
                    action="none"
                    class="w-[calc(100vw-10%)] xs:w-[calc(100vw-20%)] sm:w-min"
                >
                    <input
                        type="text"
                        class="mb-[20px] h-[70px] w-[100%] rounded-[10px] border-[1.33px] border-borderLightGray px-[32px] text-[14px] focus-visible:outline-red-50 sm:mb-[30px] sm:h-[94px] sm:w-[534px] sm:text-[100%] lg:mb-[50px]"
                        placeholder="Full Name"
                    />
                    <input
                        type="text"
                        class="mb-[20px] h-[70px] w-[100%] rounded-[10px] border-[1.33px] border-borderLightGray px-[32px] text-[14px] sm:mb-[30px] sm:h-[94px] sm:w-[534px] sm:text-[100%] lg:mb-[50px]"
                        placeholder="Enter Email"
                    />
                    <input
                        type="text"
                        class="mb-[20px] h-[70px] w-[100%] rounded-[10px] border-[1.33px] border-borderLightGray px-[32px] text-[14px] sm:mb-[30px] sm:h-[94px] sm:w-[534px] sm:text-[100%] lg:mb-[50px]"
                        placeholder="Mobile Number"
                    />
                    <div
                        class="password-input relative mb-[20px] sm:mb-[30px] lg:mb-[50px]"
                    >
                        <input
                            type="password"
                            class="h-[70px] w-[100%] rounded-[10px] border-[1.33px] border-borderLightGray px-[32px] text-[14px] sm:h-[94px] sm:w-[534px] sm:text-[100%]"
                            placeholder="Enter Password"
                        />
                        <input
                            type="checkbox"
                            name="show-password"
                            id="show-password"
                            class="peer hidden"
                        />
                        <label
                            for="show-password"
                            class="padding-[30px] peer-checked:padding-[20px] absolute top-0 right-0 mr-[30px] inline-block h-full w-[24px] bg-[url('./src/assets/icons/hide.png')] bg-center bg-no-repeat peer-checked:bg-[url('./assets/icons/show.png')]"
                        ></label>
                    </div>
                    <div class="password-input relative">
                        <input
                            type="password"
                            class="h-[70px] w-[100%] rounded-[10px] border-[1.33px] border-borderLightGray px-[32px] text-[14px] sm:h-[94px] sm:w-[534px] sm:text-[100%]"
                            placeholder="Confirm Password"
                        />
                        <input
                            type="checkbox"
                            name="show-confirm"
                            id="show-confirm"
                            class="peer hidden"
                        />
                        <label
                            for="show-confirm"
                            class="padding-[30px] peer-checked:padding-[20px] absolute top-0 right-0 mr-[30px] inline-block h-full w-[24px] bg-[url('./assets/icons/hide.png')] bg-center bg-no-repeat peer-checked:bg-[url('./assets/icons/show.png')]"
                        ></label>
                    </div>

                    <div class="align-center mt-[28px] mb-[46px] flex justify-between">
                        <div class="toggle flex items-center">
                            <label
                                for="remember-me"
                                class="relative block h-[22px] w-[46px] cursor-pointer sm:h-[26px] sm:w-[54px]"
                            >
                                <input type="checkbox" id="remember-me" class="peer sr-only" />
                                <span
                                    class="absolute inset-0 rounded-full border-[0.67px] border-borderDarkGray bg-borderLightGray transition peer-checked:border-accentRed peer-checked:bg-accentRed"
                                ></span>
                                <span
                                    class="absolute inset-0 m-[2px] h-[18px] w-[18px] rounded-full bg-white drop-shadow-sm transition peer-checked:translate-x-[24px] sm:h-[22px] sm:w-[22px] sm:peer-checked:translate-x-[28px]"
                                ></span>
                            </label>
                            <label
                                for="remember-me"
                                class="ml-[10px] text-[14px] sm:text-[16px]"
                            >Remember Me</label
                            >
                        </div>
                        <a
                            href="#"
                            class="text-[14px] text-accentRed no-underline duration-100 hover:underline sm:text-[16px]"
                        >Recover Password</a
                        >
                    </div>

                    <button
                        type="submit"
                        class="h-[65px] w-full rounded-[14px] bg-accentRed text-[18px] font-bold text-white sm:h-[74px] sm:text-[24px]"
                    >
                        Create an account
                    </button>
                </form>
            </main>
        </div>
    )
}
