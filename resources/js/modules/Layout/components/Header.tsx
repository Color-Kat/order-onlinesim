import React from 'react';
import { Logo } from "@UI/Elements/Logo/Logo";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <header className="flex justify-center items-center h-16 px-5 py-1 w-full bg-gray-100 text-gray-800">
            <div className="container flex justify-evenly items-center">
                <Link to="/favourites" className="hover:underline">Another page</Link>

                <Logo/>

                <Link to="/login" className="hover:underline">Войти</Link>
            </div>
        </header>
    );
};