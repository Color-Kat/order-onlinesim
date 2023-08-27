import React, {memo} from 'react';
import {Logo} from "@UI/Elements/Logo/Logo.tsx";
import {currentYear} from "@/utils/date/dates.ts";
import {Link} from "react-router-dom";

export const SimpleFooter: React.FC = memo(() => {
    const navigation = [
        {
            link: '/policy',
            title: 'Policy'
        },
        {
            link: '/terms',
            title: 'Terms and conditions'
        },
        {
            link: '/faq',
            title: 'FAQ'
        },
        {
            link: '/api',
            title: 'API'
        },
        {
            link: '/request-new-service',
            title: 'Request new service'
        },
    ];

    return (
        <footer className="text-indigo-100 bg-app px-4 py-5 w-screen md:px-8">
            {/* Text */}
            <div className="max-w-xl mx-auto text-center">
                <Logo className="h-16" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Get online SMS to virtual numbers easy and fast.
                </p>
            </div>

            {/* Links */}
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    navigation.map((item, i) => (
                        <li className="hover:text-blue-200" key={i}>
                            <Link to={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* Rights, made by */}
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="sm:mt-0 w-full flex justify-between md:items-end md:flex-row flex-col-reverse">
                    <div className="mt-4">&copy; {currentYear} Color template. All rights reserved.</div>

                    <div className="flex flex-col">
                        <div>
                            Made by <a href="https://vk.com/color_kat" target="_blank" className="underline">
                                @ColorKat
                            </a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
});