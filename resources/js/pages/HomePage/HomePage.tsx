import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import React from "react";

export const HomePage = () => {
    const user = useTSelector(state => state.auth.user);

    return (
        <div
            className="w-screen"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000"/>
            </Helmet>

            <h1 className="text-center text-xl font-bold mb-5">Hey, are you my master?</h1>

            <div className="w-full p-10 text-center">
                <div className="animate-slide-up mb-5">
                    Hello, {user
                    ? user.name
                    : 'new project'
                } ;)
                </div>




            </div>
        </div>
    );
};