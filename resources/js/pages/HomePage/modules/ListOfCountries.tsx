import React, {ForwardedRef, forwardRef, memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {CountryCard} from "@components/Cards";
import {IService} from "@/types/IService.ts";

interface ListOfCountriesProps {
    countries: { [key: number]: IService["countries"][number] };
    selectedId: number;
    setSelectedId: (id: number) => void;
}

export const ListOfCountries: React.FC<ListOfCountriesProps> = memo(({
                                                                         countries,
                                                                         selectedId,
                                                                         setSelectedId
                                                                     }) => {
    const [data, setData] = useState({
        search: ''
    });

    const sortedCountries = useMemo(() => {
        if (!data.search) return Object.values(countries);

        return Object.values(countries).filter(country => country.name.toLowerCase().includes(data.search.toLowerCase()));
    }, [data.search, countries]);

    const clickCountryHandle = useCallback((id: number) => {
        setSelectedId(id);
    }, []);

    return (
        <section className="mb-20 max-w-screen-xl mx-auto sm:px-8 px-2">
            {/*<H3>List of services.</H3>*/}

            <div className="flex items-center justify-between sm:flex-row flex-col gap-2">
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
                                isSelected={country.id === selectedId}
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