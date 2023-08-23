import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import React from "react";
import {HeroSection} from "@pages/HomePage/modules/HeroSection.tsx";
import {FeaturesSection} from "@pages/HomePage/modules/FeaturesSection.tsx";
import {CTASection} from "@pages/HomePage/modules/CTASection.tsx";
import {Page} from "@modules/PageTemplates";
import {ListOfServices} from "@pages/HomePage/modules/ListOfServices.tsx";
import {FaqSection} from "@pages/HomePage/modules/FAQSection.tsx";
import {ListOfCountries} from "@pages/HomePage/modules/ListOfCountries.tsx";
import {H2} from "@UI/Typography";

export const HomePage = () => {
    const user = useTSelector(state => state.auth.user);

    return (
        <Page
            className="w-screen pt-0"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000"/>
            </Helmet>

            <HeroSection />

            <H2 className="page-container mb-5 font-bold">Configure your phone number:</H2>

            <ListOfServices />

            <ListOfCountries />

            <FeaturesSection />

            <FaqSection />

            <CTASection />
        </Page>
    );
};