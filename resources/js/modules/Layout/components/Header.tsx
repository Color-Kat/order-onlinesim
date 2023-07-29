import React from 'react';
import { Logo } from "@UI/Elements/Logo/Logo";
import { Link } from "react-router-dom";
import {useTSelector} from "@hooks/redux.ts";
import {useLogoutMutation} from "@/store/auth/auth.api.ts";

export const Header = () => {
    const user = useTSelector(state => state.auth.user);
    const [logout] = useLogoutMutation();

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
};