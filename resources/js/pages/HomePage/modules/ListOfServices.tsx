import React, {memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {ServiceCard} from "@components/Cards";
import {IService} from "@/types/IService.ts";

interface ListOfServicesProps {
    services: { [key: number]: IService };
    activeId: number;
    setActiveId: (id: number) => void;
}

export const ListOfServices: React.FC<ListOfServicesProps> = memo(({
                                                                       services,
                                                                       activeId,
                                                                       setActiveId
                                                                   }) => {
    const [data, setData] = useState({
        search: ''
    });

    const sortedServices = useMemo(() => {
        if (!data.search) return Object.values(services);

        return Object.values(services).filter(service => service.name.toLowerCase().includes(data.search.toLowerCase()));
    }, [data.search]);

    const clickServiceHandle = useCallback((id: number) => {
        setActiveId(id);
    }, []);

    return (
        <section className="mb-12 max-w-screen-xl mx-auto px-4 md:px-8">

            <div className="flex items-center justify-between ">
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
                                isActive={service.id === activeId}
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