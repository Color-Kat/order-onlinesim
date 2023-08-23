import React, {memo} from 'react';
import {twJoin} from "tailwind-merge";

export interface IService {
    id: number;
    name: string;
    image: string;
    availablePhones: number;
    price: number,
    isActive?: boolean;
}

interface ServiceCardProps {
    service: IService;
    onClick?: (id: number) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = memo(({service, onClick}) => {


    return (
        <li
            className={twJoin(
                "relative rounded-xl py-2 pl-3 pr-2 w-56 cursor-pointer",
                service.isActive ? "bg-blue-600/50" :"bg-blue-600/30 hover:bg-blue-600/50"
            )}
            onClick={() => onClick ? onClick(service.id) : null}
        >
            <div className="flex items-center justify-between">
                <div className="font-bold text-lg">{service.name}</div>
                <img className="w-7 h-7 ml-5" src={service.image} alt={service.name}/>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-blue-300 text-sm">Available: {service.availablePhones}</div>
                <div className="text-blue-50 font-medium text-base mt-1">
                    <span className="text-xs text-blue-200">From</span> {service.price} ₽
                </div>
            </div>
        </li>
    );
});