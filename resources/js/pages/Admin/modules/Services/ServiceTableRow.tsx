import React, {useCallback, useEffect, useMemo, useState} from "react";
import {IService} from "@/types/IService.ts";
import {ICountry} from "@/types/ICountry.ts";
import {BsDashLg, BsPlusLg} from "react-icons/bs";
import {EditableDiv} from "@components/Inputs/Input/EditableDiv.tsx";
import {Toggle} from "@components/Inputs";
import {Modal} from "@UI/Modals";
import {ServiceCountriesTable} from "@pages/Admin/modules/Services/ServiceCountriesTable.tsx";
import {arrayToObjectWithId} from "@/utils/arrays/arrayToObjectWithId.ts";

export interface IEditServiceData {
    id: number;
    name: string;
    short_name: string;
    image: null | string;
    is_active: boolean;
    countries: {
        [key: string | number]: (ICountry & {
            price: number;
            _availablePhones: number;
            is_active: boolean;
        })
    };
}

export const AdminServiceRow: React.FC<{ service: IService, countries: ICountry[] }> = ({
                                                                                            service,
                                                                                            countries
                                                                                        }) => {
    // const [deleteCountry, {error: deleteError}] = useDeleteCountryMutation();
    // const [updateCountry, {error: updateError}] = useUpdateCountryMutation();

    /* --- Open country list --- */
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);
    /* --- Open country list --- */

    /* --- Edit mode --- */
    // On\off edit mode
    const [isEdit, setIsEdit] = useState(false);

    // Turn on the edit mode
    const handleEditService = useCallback(() => {
        setIsEdit(true);
    }, []);
    /* --- Edit mode --- */

    const serviceCountries = useMemo(() => {
        return arrayToObjectWithId(service.countries);
    }, [service.countries]);

    /* ---- Edit Service Data --- */
    // Change price of all countries at once
    const [commonPrice, setCommonPrice] = useState({commonPrice: 0});
    const [editServiceData, setEditServiceData] = useState<IEditServiceData>({
        id: service.id,
        name: service.name,
        short_name: service.short_name,
        image: null,
        is_active: service.is_active,
        countries: arrayToObjectWithId(countries.map(country => {
            // Merge all countries and the countries that attached to this service
            return {
                ...country,
                price: serviceCountries[country.id]?.pivot.price ?? 0,                      // Service-country price
                _availablePhones: serviceCountries[country.id]?.pivot.availablePhones ?? 0, // Available phones is only for interface
                is_active: Object.keys(serviceCountries).includes(country.id.toString())    // Country is attached
            };
        }))
    });

    console.log(editServiceData);

    /**
     * Change any field of the country of the service by countryId
     */
    const changeServiceCountryById = useCallback((countryId: number, field: string, value: any) => {
        setEditServiceData(prev => {
            console.log(prev.countries);
            prev.countries[countryId] = {
                ...prev.countries[countryId] ?? {},
                [field]: value
            };

            return {
                ...prev,
                countries: prev.countries
            };
        });
    }, []);

    /**
     * Change price attribute of the country of the service by id
     */
    const changePriceByCountryId = useCallback((countryId: number, price: number) => {
        changeServiceCountryById(countryId, 'price', price);
    }, []);

    /**
     * Change is_active attribute of the country of the service by id
     */
    const changeIsActiveByCountryId = useCallback((countryId: number, is_active: boolean) => {
        changeServiceCountryById(countryId, 'is_active', is_active);
    }, []);

    /**
     * Change price of all countries of the service
     */
    const changeCommonPrice = useCallback((price: number) => {
        setEditServiceData(prev => {
            // for (const key in prev.countries) {
            //     prev.countries[key].price = price;
            // }
            //
            // return prev;

            const updatedCountries = { ...prev.countries };
            for (const key in updatedCountries) {
                updatedCountries[key].price = price;
            }
            return { ...prev, countries: updatedCountries };

        });
    }, []);
    useEffect(() => {
        if (commonPrice.commonPrice != 0)
            changeCommonPrice(+commonPrice.commonPrice);
    }, [commonPrice.commonPrice]);

    /* ---- Edit Service Data --- */

    // Update country and turn off the edit mode
    const handleUpdateService = () => {
        setIsEdit(false);
        // updateCountry(editCountryData);
    };

    // Delete country
    const handleDeleteService = useCallback(() => {
        // deleteCountry({
        //     id: country.id
        // });
    }, []);

    // // Error handling
    // useEffect(() => {
    //     let error = (deleteError as any)?.data?.message ?? (updateError as any)?.data?.message;
    //
    //     if (error)
    //         alert(error);
    //
    // }, [
    //     (deleteError as any)?.data?.message,
    //     (updateError as any)?.data?.message,
    // ]);

    return (
        <>
            <tr className="rounded-xl p-3 bg-blue-500/10">
                <td className="px-2 py-4">
                    <button className="m-auto flex items-center justify-center" onClick={toggleOpen}>
                        {isOpen
                            ? <BsDashLg className="w-7 h-7"/>
                            : <BsPlusLg className="w-7 h-7"/>
                        }
                    </button>
                </td>

                {/* Icon + name */}
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <img className="w-7 h-7 mr-3 rounded-lg" src={service.image} alt=""/>
                        <div className="font-bold text-lg">
                            <EditableDiv
                                isEdit={isEdit}
                                data={editServiceData}
                                setData={setEditServiceData}
                                name="name"
                            />
                        </div>
                    </div>
                </td>

                {/* Short Name */}
                <td className="px-6 py-4 whitespace-nowrap">
                    <EditableDiv
                        isEdit={isEdit}
                        data={editServiceData}
                        setData={setEditServiceData}
                        name="short_name"
                    />
                </td>

                {/* Is Active */}
                <td className="px-6 py-4 whitespace-nowrap">
                    <Toggle
                        disabled={!isEdit}
                        data={editServiceData}
                        setData={setEditServiceData}
                        name="is_active"
                    />
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <EditableDiv
                        isEdit={isEdit}
                        data={commonPrice}
                        setData={setCommonPrice}
                        name="commonPrice"
                    />
                </td>

                <td className="text-right px-6 whitespace-nowrap text-base space-x-2">
                    <button
                        className="py-1.5 px-3 font-medium text-blue-500 hover:text-blue-100 duration-150 hover:bg-blue-500/30 rounded-lg"
                        onClick={isEdit ? handleUpdateService : handleEditService}
                    >
                        {isEdit ? 'Update' : 'Edit'}
                    </button>
                </td>

                <td className="text-right px-6 whitespace-nowrap text-base space-x-2">
                    <Modal
                        ButtonComponent={({onClick}: any) => (
                            <button
                                className="py-1.5 px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-blue-500/30 rounded-lg"
                                onClick={onClick}
                            >
                                Delete
                            </button>
                        )}
                        title="Are you sure?"
                        text="Are you sure you want to delete this service?"
                        actionText="Delete"
                        callback={handleDeleteService}
                    />
                </td>
            </tr>

            {/* Dropdown table of service countries */}
            {isOpen &&
                <ServiceCountriesTable
                    isEdit={isEdit}
                    countries={countries}
                    serviceCountries={service.countries}
                    editServiceData={editServiceData}

                    changePriceByCountryId={changePriceByCountryId}
                    changeIsActiveByCountryId={changeIsActiveByCountryId}
                />
            }
        </>
    );
};
