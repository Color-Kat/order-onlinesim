import React, {memo} from 'react';
import {twJoin} from "tailwind-merge";
import {ICountry} from "@/types/ICountry.ts";
import {IService} from "@/types/IService.ts";


interface CountryCardProps {
    country: IService["countries"][number];
    isSelected: boolean;
    onClick?: (id: number) => void;
}

export const CountryCard: React.FC<CountryCardProps> = memo(({
                                                                 country,
                                                                 isSelected,
                                                                 onClick
}) => {
    return (
        <li
            className={twJoin(
                "relative rounded-xl py-2 pl-3 pr-2 w-56 cursor-pointer",
                isSelected ? "bg-blue-600/60" :"bg-blue-600/30 hover:bg-blue-600/50"
            )}
            onClick={() => onClick ? onClick(country.id) : null}
        >
            <div className="flex items-center justify-between">
                <div className="font-bold text-lg">{country.name}</div>
                <img className="w-7 h-7 ml-5 rounded-lg" src={country.image} alt={country.name}/>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-blue-300 text-sm">Available: {country.availablePhones}</div>
                <div className="text-blue-50 font-medium text-base mt-1">{country.price} ₽</div>
            </div>

        </li>
    );
});