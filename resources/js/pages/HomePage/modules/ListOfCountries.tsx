import React, {memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {CountryCard, ServiceCard} from "@components/Cards";
import {IService} from "@components/Cards/ServiceCard.tsx";
import {ICountry} from "@components/Cards/CountryCard.tsx";

interface ListOfCountriesProps {

}

const countries: ICountry[] = [
    {
        id: 1,
        name: 'Russia',
        image: '/storage/flags/ru.svg',
        availablePhones: 100,
        price: 20.4,
    },
    {
        id: 2,
        name: 'Germany',
        image: '/storage/flags/de.svg',
        availablePhones: 100,
        price: 15,
    },
    {
        id: 3,
        name: 'USA',
        image: '/storage/flags/us.svg',
        availablePhones: 100,
        price: 15,
        isActive: true
    },
    {
        id: 4,
        name: 'China',
        image: '/storage/flags/cn.svg',
        availablePhones: 100,
        price: 35,
    },
];

export const ListOfCountries: React.FC<ListOfCountriesProps> = memo(({}) => {
    const [data, setData] = useState({
        search: ''
    });

    const sortedCountries = useMemo(() => {
        if(!data.search) return countries;

        return countries.filter(country => country.name.toLowerCase().includes(data.search.toLowerCase()));
    }, [data.search]);

    const clickCountryHandle = useCallback((id: number) => {
        //
    }, []);

    return (
        <section className="mb-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/*<H3>List of services.</H3>*/}

                <div className="flex items-center justify-between ">
                    <H3 className="">
                        List of countries
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
                        {sortedCountries.map((country, i) => {
                            return (
                                <CountryCard country={country} onClick={clickCountryHandle} key={i}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
});