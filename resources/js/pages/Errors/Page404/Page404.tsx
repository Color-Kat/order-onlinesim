import {BsArrowLeft} from "react-icons/bs";
import {useBack} from "@hooks/navigation.ts";

import illustration_404 from '../assets/404.png';
import {BigPage, Page} from "@modules/PageTemplates";
import {Helmet} from "react-helmet";
import React from "react";

export const Page404 = () => {
    const back = useBack();

    return (
        <BigPage className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-start md:px-8 pt-24">
            <Helmet>
                <title>404 - page not found</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + "/404"}/>
            </Helmet>

            <div
                className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex"
            >
                <div className="flex-1 max-w-lg">
                    <img src={illustration_404}/>
                </div>
                <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
                    <h3 className="text-app-secondary font-semibold">
                        Error 404
                    </h3>
                    <p className="text-slate-300 text-4xl font-semibold sm:text-5xl">
                        Page not fount
                    </p>
                    <p className="text-blue-200">
                        Sorry, but the page you are looking for does not exist.
                    </p>
                    <button
                        className="text-app-secondary duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
                        onClick={back}
                    >
                        <BsArrowLeft/> Go back
                    </button>
                </div>
            </div>
        </BigPage>
    )
}