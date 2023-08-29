import React, {memo, useCallback, useMemo} from 'react';
import {ICountry} from "@/types/ICountry.ts";
import {IService} from "@/types/IService.ts";
import {arrayToObjectWithId} from "@/utils/arrays/arrayToObjectWithId.ts";
import {SimpleInput} from "@components/Inputs";
import {twJoin} from "tailwind-merge";
import {IEditServiceData} from "@pages/Admin/modules/Services/ServiceTableRow.tsx";

interface ServiceCountriesTableProps {
    isEdit: boolean;
    countries: ICountry[];                   // List of all countries
    serviceCountries: IService['countries']; // List of the countries that is related to the service
    editServiceData: IEditServiceData;

    changePriceByCountryId: (countryId: number, price: number) => void;
    changeIsActiveByCountryId: (countryId: number, is_active: boolean) => void;
}

export const ServiceCountriesTable: React.FC<ServiceCountriesTableProps> = ({
                                                                                isEdit,
                                                                                // countries,
                                                                                // serviceCountries,
                                                                                editServiceData,

                                                                                changePriceByCountryId,
                                                                                changeIsActiveByCountryId
                                                                            }) => {




    return (
        <tr className="rounded-xl px-3 bg-blue-500/10 ">
            <td></td>
            <td colSpan={6} className="px-6 pb-16 pt-4">

                <table className="w-full table-auto text-sm text-left">
                    <tbody className="text-blue-100 divide-y divide-slate-600">
                    {Object.values(editServiceData.countries).map(country => {
                        // const isActive = Object.keys(countriesWithPrices).includes(country.id.toString());

                        return (
                            <tr key={country.id}>
                                <td>
                                    {country.is_active && <div className="rounded-full w-2 h-2 bg-blue-500"></div>}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img
                                            className="w-7 h-7 mr-3 rounded-lg"
                                            src={country.image}
                                            alt={country.name}
                                        />
                                        <div className="font-bold text-lg">
                                            {country.name}
                                        </div>
                                    </div>
                                </td>

                                <td className="text-sm">
                                    <div>Available: {country._availablePhones}</div>
                                </td>

                                <td className="px-6 py-4">
                                    <input
                                        className={twJoin(
                                            "border-1 border-blue-400 block py-0.5 px-2.5 w-16",
                                            "focus:outline-none focus:ring-2 focus:ring-app-accent/50",
                                            "bg-slate-200 text-gray-900 text-base rounded-lg",
                                        )}
                                        disabled={!isEdit}
                                        type="checkbox"
                                        onChange={(e) => changeIsActiveByCountryId(country.id, e.target.checked)}
                                        defaultChecked={country.is_active}
                                    />
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-lg">
                                        <input
                                            className={twJoin(
                                                "border-1 border-blue-400 block py-0.5 px-2.5 w-16",
                                                "focus:outline-none focus:ring-2 focus:ring-app-accent/50",
                                                "bg-slate-200 text-gray-900 text-base rounded-lg",
                                                "disabled:bg-transparent disabled:text-blue-100"
                                            )}
                                            disabled={!isEdit}
                                            type="number"
                                            onChange={(e) => changePriceByCountryId(country.id, +e.target.value)}
                                            value={country.price}
                                        />
                                        <div>₽</div>
                                    </div>
                                </td>

                                <td className="px-6 py-4">

                                </td>

                                <td className="px-6 py-4">

                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </td>
        </tr>
    );
};