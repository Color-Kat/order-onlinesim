import React, {memo} from "react";
import {H1} from "@UI/Typography";
import {FilledArrowLink, TextArrowLink} from "@UI/Links";

import heroImage from '../assets/hero-screen.png';
import {useTSelector} from "@hooks/redux.ts";

// https://floatui.com/components/heroes
export const HeroSection: React.FC = memo(({}) => {
    const {isAuth} = useTSelector(state => state.auth);

    return (
        <section className="">
            <div
                className="page-container md:pt-16 md:pb-6 sm:py-20 pt-8 pb-16 lg:gap-12 gap-6 text-blue-100 overflow-hidden md:flex"
            >
                <div className="flex-none lg:max-w-2xl max-w-xl my-auto animate-slide-down">
                    {/*<a*/}
                    {/*    href="https://colorbit.ru"*/}
                    {/*    target="_blank"*/}
                    {/*    className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"*/}
                    {/*>*/}
                    {/*    <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">*/}
                    {/*        Спонсор*/}
                    {/*    </span>*/}
                    {/*    <p className="flex items-center gap-1">*/}
                    {/*        Colorbit.ru - симулятор майнинга*/}
                    {/*        <FaAngleRight/>*/}
                    {/*    </p>*/}
                    {/*</a>*/}

                    <H1 className="">
                        Get online SMS to virtual numbers easy and fast
                    </H1>

                    <p className="mt-10 mb-6">
                        {isAuth
                            ? 'Select the country of the number and the service for which you want to receive sms. Then press the buy button to get your virtual phone number and you will be able to receive sms to this number within 20 minutes.'
                            : 'It takes less than a minute to register account, buy number, use it and receive SMS.'

                        }
                    </p>

                    {!isAuth &&
                        <div
                            className="flex items-center gap-x-3 sm:text-sm first-letter:capitalize animate-slide-up-slow"
                        >
                            <FilledArrowLink to="/login">
                                Login
                            </FilledArrowLink>

                            <TextArrowLink to="/register">
                                Registration
                            </TextArrowLink>
                        </div>
                    }
                </div>

                <div className="flex-1 hidden lg:flex items-center">
                    <img
                        src={heroImage}
                        className="w-full mx-auto md:w-10/12 lg:w-full"
                    />
                </div>
            </div>
        </section>
    );
});