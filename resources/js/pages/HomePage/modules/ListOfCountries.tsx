import React, {memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {CountryCard} from "@components/Cards";
import {ICountry} from "@/types/ICountry.ts";
import {IService} from "@/types/IService.ts";

interface ListOfCountriesProps {
    countries: { [key: number]: IService["countries"][number] };
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
    }, [data.search, countries]);

    const clickCountryHandle = useCallback((id: number) => {
        setActiveId(id);
    }, []);

    return (
        <section className="mb-20 max-w-screen-xl mx-auto px-4 md:px-8">
            {/*<H3>List of services.</H3>*/}

            <div className="flex items-center justify-between ">
                <H3 className="text-xl">
                    Choose a country
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
        </section>
    );
});