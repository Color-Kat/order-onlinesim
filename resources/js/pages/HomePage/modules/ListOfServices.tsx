import React, {memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {ServiceCard} from "@components/Cards";
import {IService} from "@components/Cards/ServiceCard.tsx";

interface ListOfServicesProps {

}

const services: IService[] = [
    {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100,
        isActive: true
    },
    {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        availablePhones: 100
    },
    {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100
    },
    {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        availablePhones: 100
    },
    {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100
    },
    {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        availablePhones: 100
    },
    {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100
    },
    {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        availablePhones: 100
    },
    {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100
    },
    {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        availablePhones: 100
    },
    {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100
    },
    {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        availablePhones: 100
    },
    {
        id: 1,
        name: 'Vkontakte',
        image: '/storage/serviceLogos/vk.svg',
        availablePhones: 100
    },
    {
        id: 2,
        name: 'Telegram',
        image: '/storage/serviceLogos/telegram.svg',
        availablePhones: 100
    },
];

export const ListOfServices: React.FC<ListOfServicesProps> = memo(({}) => {
    const [data, setData] = useState({
        search: ''
    });

    const sortedServices = useMemo(() => {
        if(!data.search) return services;

        return services.filter(service => service.name.toLowerCase().includes(data.search.toLowerCase()));
    }, [data.search]);

    const clickServiceHandle = useCallback((id: number) => {
        //
    }, []);

    return (
        <div className="mb-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/*<H3>List of services.</H3>*/}

                <div className="flex items-center justify-between ">
                    <H3 className="">
                        List of services
                    </H3>

                    <SimpleInput
                        data={data}
                        setData={setData}
                        name="search"
                        placeholder="Поиск"
                        className="w-56"
                    />
                </div>

                <div className="mt-6 max-h-64 overflow-y-auto scroll-container">
                    <ul className="flex gap-3 flex-wrap items-center justify-center relaive">
                    {/*<ul className="grid gap-3 relaive grid-flow-col">*/}
                        {sortedServices.map((service, i) => {
                            return (
                                <ServiceCard service={service} onClick={clickServiceHandle} key={i}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
});