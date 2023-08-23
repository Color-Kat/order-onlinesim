import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import React, {useCallback, useState} from "react";
import {HeroSection} from "@pages/HomePage/modules/HeroSection.tsx";
import {FeaturesSection} from "@pages/HomePage/modules/FeaturesSection.tsx";
import {CTASection} from "@pages/HomePage/modules/CTASection.tsx";
import {Page} from "@modules/PageTemplates";
import {ListOfServices} from "@pages/HomePage/modules/ListOfServices.tsx";
import {FaqSection} from "@pages/HomePage/modules/FAQSection.tsx";
import {ListOfCountries} from "@pages/HomePage/modules/ListOfCountries.tsx";
import {H2} from "@UI/Typography";
import {ICountry} from "@components/Cards/CountryCard.tsx";
import {IService} from "@components/Cards/ServiceCard.tsx";

const services: {[key: number]: IService} = {
    1: {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100,
        price: 10,
    },
    2: {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        price: 10,
        availablePhones: 100
    },
    3: {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        price: 10,
        availablePhones: 100
    },
    4: {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        price: 10,
        availablePhones: 100
    },
    5: {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        price: 10,
        availablePhones: 100
    },
    6: {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        price: 10,
        availablePhones: 100
    },
    7: {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        price: 10,
        availablePhones: 100
    },
    8: {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        price: 10,
        availablePhones: 100
    },
};

const countries: {[key: number]: ICountry} = {
    1: {
        id: 1,
        name: 'Russia',
        image: '/storage/flags/ru.svg',
        availablePhones: 100,
        price: 20.4,
    },
    2: {
        id: 2,
        name: 'Germany',
        image: '/storage/flags/de.svg',
        availablePhones: 100,
        price: 15,
    },
    3: {
        id: 3,
        name: 'USA',
        image: '/storage/flags/us.svg',
        availablePhones: 100,
        price: 15,
    },
    4: {
        id: 4,
        name: 'China',
        image: '/storage/flags/cn.svg',
        availablePhones: 100,
        price: 35,
    },
};

export const HomePage = () => {
    const user = useTSelector(state => state.auth.user);

    const [orderData, setOrderData] = useState<{
        countryId: number,
        serviceId: number,
    }>({
        countryId: 3,
        serviceId: 0,
    });

    const setActiveServiceId = useCallback((id: number) => {
        setOrderData(prev => ( {...prev, serviceId: id}));
    }, []);

    const setActiveCountryId = useCallback((id: number) => {
        setOrderData(prev => ( {...prev, countryId: id}));
    }, []);

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

            <ListOfServices
                services={services}
                activeId={orderData.serviceId}
                setActiveId={setActiveServiceId}
            />

            <ListOfCountries
                countries={countries}
                activeId={orderData.countryId}
                setActiveId={setActiveCountryId}
            />

            <FeaturesSection />

            <FaqSection />

            <CTASection />
        </Page>
    );
};