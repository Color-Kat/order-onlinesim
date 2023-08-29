import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {HeroSection} from "@pages/HomePage/modules/HeroSection.tsx";
import {FeaturesSection} from "@pages/HomePage/modules/FeaturesSection.tsx";
import {CTASection} from "@pages/HomePage/modules/CTASection.tsx";
import {Page} from "@modules/PageTemplates";
import {ListOfServices} from "@pages/HomePage/modules/ListOfServices.tsx";
import {ListOfCountries} from "@pages/HomePage/modules/ListOfCountries.tsx";
import {H2} from "@UI/Typography";

import {IService} from "@/types/IService.ts";
import {OrderNumber} from "@pages/HomePage/modules/OrderNumber.tsx";


let services: { [key: number]: IService } = {
    1: {
        id: 1,
        short_name: 'vk',
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        countries: [
            {
                id: 1,
                code: 'RU',
                short_name: 0,
                name: 'Russia',
                image: '/storage/flags/ru.svg',
                price: 10,
                availablePhones: 1000
            },
            {
                id: 2,
                code: 'US',
                short_name: 12,
                name: 'USA',
                image: '/storage/flags/us.svg',
                price: 100,
                availablePhones: 23
            },
        ],
    },
    2: {
        id: 2,
        short_name: 'tg',
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        countries: [
            {
                id: 2,
                code: 'US',
                short_name: 12,
                name: 'USA',
                image: '/storage/flags/us.svg',
                price: 100,
                availablePhones: 23
            },
            {
                id: 3,
                code: 'CN',
                short_name: 3,
                name: 'China',
                image: '/storage/flags/cn.svg',
                price: 50,
                availablePhones: 15
            }
        ],
    },
};

services[3] = {...services[2], id: 3};
services[4] = {...services[1], id: 4};
services[5] = {...services[2], id: 5};
services[6] = {...services[1], id: 6};
services[7] = {...services[2], id: 7};
services[8] = {...services[1], id: 8};

// const countries: { [key: number]: ICountry } = {
//     1: {
//         id: 1,
//         code: 'RU',
//         short_name: 1,
//         name: 'Russia',
//         image: '/storage/flags/ru.svg',
//     },
//     2: {
//         id: 2,
//         code: 'DE',
//         short_name: 10,
//         name: 'Germany',
//         image: '/storage/flags/de.svg',
//     },
//     3: {
//         id: 3,
//         code: 'US',
//         short_name: 12,
//         name: 'USA',
//         image: '/storage/flags/us.svg',
//     },
//     4: {
//         id: 4,
//         code: 'CH',
//         short_name: 3,
//         name: 'China',
//         image: '/storage/flags/cn.svg',
//     },
// };

export const HomePage = () => {
    const {user, isAuth} = useTSelector(state => state.auth);

    /* --- Smooth scrolling --- */
    // Refs for smooth scrolling to the next section
    const listOfServicesRef = useRef<HTMLDivElement>(null);
    const listOfCountriesRef = useRef<HTMLDivElement>(null);
    const orderNumberRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', block: "start"});
        }
    };
    /* --- Smooth scrolling --- */

    const [orderData, setOrderData] = useState<{
        countryId: number,
        serviceId: number,
    }>({
        countryId: 0,
        serviceId: 0,
    });

    const setSelectedServiceId = (id: number) => {
        setSelectedCountryId(0); // Reset country
        setOrderData(prev => ({...prev, serviceId: id}));
        scrollToSection(listOfCountriesRef);
    };

    const setSelectedCountryId = (id: number) => {
        setOrderData(prev => ({...prev, countryId: id}));
        scrollToSection(orderNumberRef);
    };

    return (
        <Page
            className="w-screen pt-0"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL}/>
            </Helmet>

            {!isAuth && <HeroSection/>}

            <H2 className="page-container mt-12 font-bold leading-snug">
                Choose Service {'->'} Choose Country {'->'} Click Order
            </H2>

            {/*<div className="page-container text-slate-400 text-base mt-12">*/}
            {/*   */}
            {/*</div>*/}

            <ListOfServices
                services={services}
                selectedId={orderData.serviceId}
                setSelectedId={setSelectedServiceId}
            />

            <div
                ref={listOfCountriesRef}
                className={orderData.serviceId === 0 ? 'opacity-0' : 'opacity-100' + ' scroll-mt-5'}
            >
                {orderData.serviceId !== 0 &&
                    <ListOfCountries
                        countries={services[orderData.serviceId].countries}
                        selectedId={orderData.countryId}
                        setSelectedId={setSelectedCountryId}
                    />
                }
            </div>

            <div
                ref={orderNumberRef}
                className={orderData.countryId === 0 ? 'opacity-0' : 'opacity-100' + ' scroll-mt-5'}
            >
                {orderData.countryId !== 0 &&
                    <OrderNumber
                        country={services[orderData.serviceId].countries.find(country => country.id === orderData.countryId)}
                        service={services[orderData.serviceId]}
                    />
                }
            </div>

            {!isAuth && <FeaturesSection/>}

            {/*<CTASection/>*/}
        </Page>
    );
};