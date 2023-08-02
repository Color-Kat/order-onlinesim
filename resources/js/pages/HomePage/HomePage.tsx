import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import React from "react";
import {HeroSection} from "@pages/HomePage/modules/HeroSection.tsx";
import {FeaturesSection} from "@pages/HomePage/modules/FeaturesSection.tsx";

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

            <HeroSection />

            <FeaturesSection />
        </div>
    );
};