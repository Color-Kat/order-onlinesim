import {memo, useState} from "react";

import {HiOutlineMenu, HiX} from 'react-icons/hi';

import {Header} from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import logo from "@assets/logo.png";
import phone from "@assets/phone.png";
import {RedButton} from "@UI/Buttons";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div
            className="scroll-container flex h-screen overflow-auto overflow-x-hidden font-circle bg-gray-200"
        >

            <header className="relative flex justify-center lg:items-center lg:w-[300px] w-full h-max lg:px-0 px-4 bg-white">

                <nav className="flex lg:flex-col lg:pt-8 lg:pb-0 pt-3 pb-3 justify-between items-center lg:h-screen w-full">

                    {/* Open mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        className="absolute xs:relative lg:hidden text-3xl p-2 border bg-app text-app-accent h-max"
                    >{
                        isMobileMenuOpen
                            ? <HiX/>
                            : <HiOutlineMenu/>
                    }</button>

                    {/* Logo block */}
                    <div className="flex flex-col items-center lg:pb-8 lg:border-b lg:ml-0 xs:ml-[13%] mx-auto xs:mx-0 border-gray-200">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-fit object-contain"
                        />

                        <p className="text-gray-400 mt-3 font-light" style={{fontSize: '13px'}}>
                            Современный комплекс класса B+
                        </p>
                    </div>

                    {/* Phone block */}
                    <div className="hidden xs:flex items-center flex-col">
                        <div className="mb-3 flex gap-1.5 items-center">
                            <img className="h-4" src={phone} alt="phone"/>
                            <span className="sm:text-lg font-bold cursor-pointer">
                                +7 (495) 21-21-799
                            </span>
                        </div>

                        <RedButton filled={false}>
                            Заказать звонок
                        </RedButton>
                    </div>

                    {/* Navigation */}
                    <div className="hidden lg:flex ">

                    </div>

                    {/* footer block */}
                    <div className="hidden lg:flex bg-app px-[50px] pb-5 pt-10 text-[#3b4256] flex-col">
                        <a href="" className="mb-9 uppercase text-xs">Инфраструктура</a>

                        <RedButton filled={true}>
                            Оставить заявку
                        </RedButton>

                        <div className="copyright text-center text-13 mt-14">
                            <span>
                                © 2023 Бизнес-центр<br/>
                                Victory Park.<br/>
                                Все права защищены
                            </span>
                        </div>
                    </div>
                </nav>

                {/*  Mobile menu  */}
                <nav className={`lg:hidden flex ${isMobileMenuOpen ? 'h-64' : 'h-0'} w-full absolute bottom-0 translate-y-full bg-white  transition-all overflow-hidden z-10 px-4`}>
                    213
                </nav>

                {/* Mobile menu overlay */}
                {isMobileMenuOpen &&
                    <div className="w-screen h-screen absolute top-0 left-0" onClick={() => setIsMobileMenuOpen(false)}/>
                }
            </header>

            {/*<Header/>*/}

            {/*<Main>*/}
            {/*    <div className="max-w-4xl flex-1">*/}
            {/*        {children}*/}
            {/*    </div>*/}
            {/*</Main>*/}

            {/*<Footer/>*/}

        </div>
    );
});