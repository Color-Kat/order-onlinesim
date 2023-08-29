import React, {memo} from 'react';
import {ICountry} from "@/types/ICountry.ts";

interface ServiceCountriesTableProps {
    countries: ICountry[];
}

export const ServiceCountriesTable: React.FC<ServiceCountriesTableProps> = ({
                                                                                countries
                                                                            }) => {


    return (
        <tr className="rounded-xl px-3 bg-blue-500/10 ">
            <td></td>
            <td colSpan={6} className="px-6 pb-16 pt-4">

                <table className="w-full table-auto text-sm text-left">
                    <tbody className="text-blue-100 divide-y divide-slate-600">
                    {countries.map(country => {
                        return (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img className="w-7 h-7 mr-3 rounded-lg" src={country.image}
                                             alt={country.name}/>
                                        <div className="font-bold text-lg">
                                            {country.name}
                                        </div>
                                    </div>
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