import React, {ForwardedRef, forwardRef, memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {ServiceCard} from "@components/Cards";
import {IService} from "@/types/IService.ts";

interface ListOfServicesProps {
    services: { [key: number]: IService };
    selectedId: number;
    setSelectedId: (id: number) => void;
}

export const ListOfServices: React.FC<ListOfServicesProps> = memo(({
                                                                           services,
                                                                           selectedId,
                                                                           setSelectedId
                                                                       }) => {
    const [data, setData] = useState({
        search: ''
    });

    const sortedServices = useMemo(() => {
        if (!data.search) return Object.values(services);

        return Object.values(services).filter(service => service.name.toLowerCase().includes(data.search.toLowerCase()));
    }, [data.search]);

    const clickServiceHandle = useCallback((id: number) => {
        setSelectedId(id);
    }, []);

    return (
        <section className="mb-12 mt-10 max-w-screen-xl mx-auto sm:px-8 px-2">

            <div className="flex items-center justify-between sm:flex-row flex-col gap-2">
                <H3 className="text-xl">
                    Choose a service
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
                    {sortedServices.map((service, i) => {
                        return (
                            <ServiceCard
                                service={service}
                                isSelected={service.id === selectedId}
                                onClick={clickServiceHandle}
                                key={service.id}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
});