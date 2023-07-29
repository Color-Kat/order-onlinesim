import React, {memo, useState} from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link, NavLink} from "react-router-dom";
import {useTSelector} from "@hooks/redux.ts";
import {useLogoutMutation} from "@/store/auth/auth.api.ts";
import {BorderRightLineEffect} from "@UI/Effects";
import {twJoin} from "tailwind-merge";

const HeaderNavItem: React.FC<{ title: string, link: string }> = memo(({
                                                                           title,
                                                                           link
                                                                       }) => {
    return (
        <NavLink to={link} className="">
            {({isActive}) => (
                <BorderRightLineEffect as="li" active={isActive}>
                    {title}
                </BorderRightLineEffect>
            )}
        </NavLink>
    );
});

export const Header = memo(() => {
    const user = useTSelector(state => state.auth.user);
    const [logout] = useLogoutMutation();

    // Replace javascript:void(0) path with your path
    const navigation = [
        {title: "Тест", link: "/test"},
        {title: "Главная", link: "/"},
    ];

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header>
            <nav className="items-center py-1 h-16 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between">
                    <a href="javascript:void(0)">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <button className="text-gray-500 outline-none md:hidden"
                            onClick={() => setShowMobileMenu(prev => !prev)}
                    >
                        {
                            showMobileMenu ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${showMobileMenu ? '' : 'hidden'}`}>
                    <li className="order-2 pb-5 md:pb-0">
                        <a href="javascript:void(0)" className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline">
                            Sign In
                        </a>
                    </li>
                    <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        }
                    </div>
                </ul>
            </nav>
        </header>
    )

    return (
        <header>
            <nav className="flex md:flex-row flex-col items-center justify-between py-1 px-4 sm:px-8 h-16 container mx-auto">

                <Logo/>


                <ul className={twJoin(
                    `flex-1 justify-between mt-12 flex md:mt-0 ${showMobileMenu ? '' : 'hidden'}`,
                )}>
                    <div
                        className="flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item) => (
                                <HeaderNavItem {...item} key={item.link}/>
                            ))
                        }
                    </div>
                </ul>

               <div>
                   <div className="flex items-center">
                       {
                           user
                               ? <button onClick={() => logout()}>Выйти</button>
                               : <Link to="/login" className="hover:underline">Войти</Link>
                       }
                   </div>

                   <button className="text-gray-500 outline-none md:hidden"
                           onClick={() => setShowMobileMenu(prev => !prev)}
                   >
                       {
                           showMobileMenu ? (
                               <div>open</div>
                           ) : (
                               <div>close</div>
                           )
                       }
                   </button>
               </div>
            </nav>
        </header>
    );

    return (
        <header className="flex justify-center items-center h-16 px-5 py-1 shrink-0 w-full bg-gray-100 text-gray-800">
            <div className="container flex justify-evenly items-center">
                <Link to="/test" className="hover:underline">Test</Link>

                <Logo/>

                {
                    user
                        ? <button onClick={() => logout()}>Выйти</button>
                        : <Link to="/login" className="hover:underline">Войти</Link>
                }
            </div>
        </header>
    );
});