import React from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link} from "react-router-dom";

import logo from "@assets/logo.png";

export const Header = () => {

    return (
        <header className="flex justify-center items-center h-24 px-5 py-1 w-full bg-white text-gray-800">
            <div className="container flex justify-between items-center">

                <div className="logo flex justify-between items-end">
                    <div className="flex items-center justify-center flex-col">
                        <img src={logo} alt="logo"/>
                        <h2 className="font-bold text-app-darkest hover:text-app-dark text-xl font-oswold">АЭРОДОМ</h2>
                    </div>

                    <p className="ml-3 border-l border-gray-300 text-xs leading-4 pl-1.5 text-app-darkest font-medium">
                        Современный <br/>
                        комплекс класса А
                    </p>
                </div>

                <nav className="">

                </nav>

                <div className="phone">

                </div>

            </div>
        </header>
    );

    return (
        <header className="flex justify-center items-center h-16 px-5 py-1 w-full bg-gray-100 text-gray-800">
            <div className="container flex justify-evenly items-center">
                <Link to="/favourites" className="hover:underline">Another page</Link>

                <Logo/>

                <a href="https://github.com/" target="_blank" className="hover:underline">GitHub</a>
            </div>
        </header>
    );
};