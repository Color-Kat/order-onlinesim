import React, {memo, ReactNode, useCallback, useEffect, useState} from 'react';
import {Logo} from "@UI/Elements/Logo/Logo.tsx";
import {Link, NavLink, useLocation} from "react-router-dom";
import {AuthButton} from "@modules/Layout/components/Header/AuthButton.tsx";
import {twJoin} from "tailwind-merge";
import {HeaderNavItem, MobileHeaderLink} from "@modules/Layout/components/Header/HeaderLinks.tsx";
import {useLogoutMutation} from "@/store/auth/auth.api.ts";
import {useTSelector} from "@hooks/redux.ts";

export const Header = memo(() => {
    const {user, isLoading, isAuth} = useTSelector(state => state.auth);
    const [logout] = useLogoutMutation();

    // Replace javascript:void(0) path with your path
    const navigation = [
        {title: "Home", link: "/", display: isAuth},
        {title: "My numbers", link: "/my-numbers", display: isAuth},
        {title: "History", link: "/history", display: isAuth},
        {title: "Finance", link: "/finance", display: isAuth},
    ];

    const location = useLocation();
    useEffect(() => {
        setShowMobileMenu(false);
    }, [location]);

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="inset-x-0 flex shrink-0 w-screen bg-app z-20 animate-slide-down">
            <nav className="flex justify-between items-center gap-6 py-1 h-16 page-container w-full z-30">

                {/* Logo (Left) */}
                <Logo/>

                {/* Links (center) */}
                <ul
                    className="md:flex hidden items-center gap-5"
                >
                    {
                        navigation.map((item) => (
                            <HeaderNavItem link={item.link} display={item.display} key={item.link}>
                                {item.title}
                            </HeaderNavItem>
                        ))
                    }
                </ul>

                {/* Auth button + burger menu (Right) */}
                <div className="flex-center">

                    <AuthButton />

                    {/* Burger menu with animation */}
                    <button
                        onClick={useCallback(() => setShowMobileMenu(prev => !prev), [])}
                        id="mobile-menu-toggle"
                        className="md:hidden flex relative p-1 w-9 h-9 rounded-md flex-col items-center justify-evenly bg-indigo-50 ml-5 focus-visible:ring-2 ring-black/20 outline-none"
                    >
                        <div
                            className={`w-2/3 h-0.5 rounded-full bg-app-accent transition-all ${showMobileMenu ? 'absolute rotate-45 top-1/2' : ''}`}
                        />
                        <div
                            className={`h-0.5 rounded-full bg-app-accent transition-all ${showMobileMenu ? 'absolute w-0' : 'w-2/3'}`}
                        />
                        <div
                            className={`w-2/3 h-0.5 rounded-full bg-app-accent transition-all ${showMobileMenu ? 'absolute -rotate-45 top-1/2' : ''}`}
                        />
                    </button>
                </div>
            </nav>

            {/*  Mobile menu  */}
            <nav
                className={twJoin(
                    "fixed transition-all top-0",
                    showMobileMenu ? 'right-0' : '-right-full',
                    "flex flex-col items-center text-right md:hidden ",
                    "h-screen w-full sm:w-1/2 bg-app-dark pt-20 shadow-2xl z-20"
                )}
            >
                <ul className="flex flex-col justify-evenly w-full pr-20 pt-32 gap-16 text-2xl font-semibold text-slate-400">
                    {navigation.map((item, i) => (
                        <MobileHeaderLink link={item.link} display={item.display} key={i}>
                            {item.title}
                        </MobileHeaderLink>
                    ))}
                </ul>

                {/*<div className="mt-24">*/}
                {/*    <div id="yandex_rtb_R-A-1834268-6"></div>*/}
                {/*</div>*/}

                <span className="text-center text-slate-700 w-full absolute bottom-5 text-app-dark">
                    Made by @ColorKat.
                    {/*@copyright ColorTemplate <br/> by ColorKat. <br/> All rights reserved.*/}
                </span>
            </nav>

            <div
                onClick={() => setShowMobileMenu(false)}
                className={`w-screen h-screen absolute ${showMobileMenu ? "pointer-events-auto" : "pointer-events-none"} z-10`}
            />
        </header>
    )

    return (
        <header className="flex justify-center items-center h-16 px-5 py-1 shrink-0 w-full bg-gray-100 text-gray-800">
            <div className="container flex justify-evenly items-center">
                <Link to="/test" className="hover:underline">Test</Link>

                <Logo/>
            </div>
        </header>
    );
});