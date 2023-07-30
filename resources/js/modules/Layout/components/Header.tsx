import React, {memo, ReactNode, useCallback, useState} from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link, NavLink} from "react-router-dom";
import {useTSelector} from "@hooks/redux.ts";
import {useLogoutMutation} from "@/store/auth/auth.api.ts";
import {BorderRightLineEffect} from "@UI/Effects";
import {twJoin} from "tailwind-merge";
import {Button} from "@components/Buttons";
import {Dropdown} from "@components/Dropdowns";

const HeaderNavItem: React.FC<{ children: ReactNode, link: string }> = memo(({
                                                                                 children,
                                                                                 link
                                                                             }) => {
    return (
        <NavLink to={link} className="">
            {({isActive}) => (
                <BorderRightLineEffect as="li" active={isActive}>
                    {children}
                </BorderRightLineEffect>
            )}
        </NavLink>
    );
});

const AuthButton: React.FC = memo(() => {

    const user = useTSelector(state => state.auth.user);
    const [logout] = useLogoutMutation();

    if(user) return (
        <div className="flex items-center gap-3">
            {user.name}
            {/*<Dropdown*/}
            {/*    title={user.name}*/}
            {/*    items={[*/}
            {/*        {*/}
            {/*            text: '123'*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
        </div>
    );

    return (
        <Link to="/login">
            <Button>Войти</Button>
        </Link>
    );

    // {
    //     user
    //         ? <button onClick={() => logout()}>Выйти</button>
    //         : <Link to="/login" className="hover:underline">Войти</Link>
    // }
});

export const Header = memo(() => {
    // Replace javascript:void(0) path with your path
    const navigation = [
        {title: "Тест", link: "/test"},
        {title: "Главная", link: "/"},
    ];

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="flex shrink-0 w-screen bg-app">
            <nav className="flex justify-between items-center gap-6 py-1 h-16 page-container w-full">

                {/* Logo (Left) */}
                <Logo/>

                {/* Links (center) */}
                <ul
                    className="flex items-center gap-5"
                >
                    {
                        navigation.map((item) => (
                            <HeaderNavItem link={item.link} key={item.link}>
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
                        className="md:hidden flex relative py-1 w-8 h-8 rounded-md flex-col items-center justify-evenly ml-2 focus-visible:ring-2 ring-black/20 outline-none "
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
            {/*<nav*/}
            {/*    className={`*/}
            {/*            block md:hidden fixed top-0 ${showMobileMenu ? 'right-0' : '-right-full'} transition-all*/}
            {/*            h-screen w-full sm:w-1/2 app-bg-dark pt-20 shadow-2xl z-20*/}
            {/*        `}*/}
            {/*>*/}
            {/*    <ul className="flex flex-col pl-5 ">*/}
            {/*        {navigation.map((item) => (*/}
            {/*            <MobileHeaderLink name={item.link} key={i}>*/}
            {/*                <span>{link.text}</span>*/}
            {/*            </MobileHeaderLink>*/}
            {/*        ))}*/}
            {/*    </ul>*/}

            {/*    <div className="mt-24">*/}
            {/*        <div id="yandex_rtb_R-A-1834268-6"></div>*/}
            {/*    </div>*/}

            {/*    <span className="text-center w-full absolute bottom-5 text-app-dark">*/}
            {/*        @copyright ColorBit-mining <br/> by ColorKat. <br/> All rights reserved.*/}
            {/*    </span>*/}
            {/*</nav>*/}

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