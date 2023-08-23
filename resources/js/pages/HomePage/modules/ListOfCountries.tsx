import React, {memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {CountryCard, ServiceCard} from "@components/Cards";
import {IService} from "@components/Cards/ServiceCard.tsx";
import {ICountry} from "@components/Cards/CountryCard.tsx";

interface ListOfCountriesProps {
    countries: { [key: number]: ICountry };
    activeId: number;
    setActiveId: (id: number) => void;
}

export const ListOfCountries: React.FC<ListOfCountriesProps> = memo(({
                                                                         countries,
                                                                         activeId,
                                                                         setActiveId
                                                                     }) => {
    const [data, setData] = useState({
        search: ''
    });

    const sortedCountries = useMemo(() => {
        if (!data.search) return Object.values(countries);

        return Object.values(countries).filter(country => country.name.toLowerCase().includes(data.search.toLowerCase()));
    }, [data.search]);

    const clickCountryHandle = useCallback((id: number) => {
        setActiveId(id);
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
                        className="w-56 bg-blue-100"
                    />
                </div>

                <div className="mt-6 max-h-64 overflow-y-auto scroll-container">
                    <ul className="flex gap-3 flex-wrap items-center justify-center relaive">
                        {sortedCountries.map((country, i) => {
                            return (
                                <CountryCard
                                    country={country}
                                    isActive={country.id === activeId}
                                    onClick={clickCountryHandle}
                                    key={i}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
});