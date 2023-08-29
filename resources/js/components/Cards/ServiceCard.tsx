import React, {memo, useMemo} from 'react';
import {twJoin} from "tailwind-merge";
import {IService} from "@/types/IService.ts";

interface ServiceCardProps {
    service: IService;
    isSelected: boolean;
    onClick?: (id: number) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = memo(({service, isSelected, onClick}) => {

    const availablePhones = useMemo(() => {
        return Object.values(service.countries).reduce(
            (acc, country) => acc + country.availablePhones,
            0
        );
    }, []);

    const minPrice = useMemo(() => {
        return Object.values(service.countries).reduce(
            (acc, country) => acc < country.price ? acc : country.price,
            Infinity
        );
    }, []);

    return (
        <li
            className={twJoin(
                "relative rounded-xl py-2 pl-3 pr-2 w-56 cursor-pointer",
                isSelected ? "bg-blue-600/60" : "bg-blue-600/30 hover:bg-blue-600/50"
            )}
            onClick={() => onClick ? onClick(service.id) : null}
        >
            <div className="flex items-center justify-between">
                <div className="font-bold text-lg">{service.name}</div>
                <img className="w-7 h-7 ml-5" src={service.image} alt={service.name}/>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-blue-300 text-sm">Available: {availablePhones}</div>
                <div className="text-blue-50 font-medium text-base mt-1">
                    <span className="text-xs text-blue-200">From</span> {minPrice} ₽
                </div>
            </div>
        </li>
    );
});