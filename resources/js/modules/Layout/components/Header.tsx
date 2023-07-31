import React, {memo, ReactNode, useCallback, useState} from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link, NavLink} from "react-router-dom";
import {useTSelector} from "@hooks/redux.ts";
import {useLogoutMutation} from "@/store/auth/auth.api.ts";
import {BorderRightLineEffect} from "@UI/Effects";
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
            <Dropdown
                title={<div>{user.name}</div>}
                buttonClassName="bg-indigo-500 hover:bg-indigo-500/90"
                header="List"
                containerClassName="w-32"
                items={[
                    {text: 'Item 1'},
                    {text: 'Item 2'},
                    {text: 'Item 3'},
                    {text: 'Item 4'},
                    {text: 'Item 5'},
                ]}
            />
                {/*<Dropdown*/}
                {/*    align="right"*/}
                {/*    width="48"*/}
                {/*    renderTrigger={() =>*/}
                {/*        <span className="inline-flex rounded-md ">*/}
                {/*        <button*/}
                {/*            type="button"*/}
                {/*            className="relative inline-flex items-center px-3 py-2 border border-transparent text-md leading-4 font-medium rounded-md text-gray-300 app-bg-dark hover:text-gray-200 focus:outline-none transition"*/}
                {/*        >*/}
                {/*            {user.name}*/}

                {/*            /!* Friend notification *!/*/}
                {/*            {user.pending_friends_from_count ?*/}
                {/*                <div*/}
                {/*                    className="rounded-full bg-red-500 w-[16px] h-[16px] absolute top-0 left-0 flex items-center justify-center text-gray-100 text-sm font-bold font-mono">*/}
                {/*                    {user.pending_friends_from_count}*/}
                {/*                </div> : null*/}
                {/*            }*/}
                {/*        </button>*/}

                {/*        <button*/}
                {/*            className="hidden md:flex text-sm border-2 border-transparent rounded-full transition border-red-500">*/}
                {/*            <img*/}
                {/*                className="h-9 w-9 rounded-full object-cover"*/}
                {/*                src={user.profile_photo_url}*/}
                {/*                alt={user.name}*/}
                {/*            />*/}
                {/*        </button>*/}
                {/*    </span>*/}
                {/*    }*/}
                {/*>*/}
                {/*    /!* <!-- Account Management --> *!/*/}
                {/*    <div className="block px-4 py-2 text-xs md:text-sm text-black font-semibold">*/}
                {/*        Управление аккаунтом*/}
                {/*    </div>*/}

                {/*    <DropdownLink href={route('profile.show')}>*/}
                {/*        Профиль*/}
                {/*    </DropdownLink>*/}

                {/*    <DropdownLink href={route('leaderboard')}>*/}
                {/*        Таблица лидеров*/}
                {/*    </DropdownLink>*/}

                {/*    <DropdownLink href={route('user.friends')}>*/}
                {/*        <div className="relative w-max">*/}
                {/*            Друзья*/}

                {/*            /!* Friend notification *!/*/}
                {/*            {user.pending_friends_from_count ?*/}
                {/*                <div*/}
                {/*                    className="rounded-full bg-red-500 w-[18px] h-[18px] absolute -top-1 -right-5 flex items-center justify-center text-base font-bold font-mono text-gray-200">*/}
                {/*                    {user.pending_friends_from_count}*/}
                {/*                </div> : null*/}
                {/*            }*/}
                {/*        </div>*/}
                {/*    </DropdownLink>*/}

                {/*    {isAdmin && (*/}
                {/*        <DropdownLink href={route('admin.dashboard')}>*/}
                {/*            Админ панель*/}
                {/*        </DropdownLink>*/}
                {/*    )}*/}

                {/*    /!* <!-- Authentication --> *!/*/}
                {/*    <div onClick={logout} className="border-gray-400 border-t-2">*/}
                {/*        <DropdownLink>Выйти</DropdownLink>*/}
                {/*    </div>*/}
                {/*</Dropdown>*/}
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