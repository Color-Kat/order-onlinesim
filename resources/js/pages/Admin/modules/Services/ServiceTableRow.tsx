import React, {useCallback, useState} from "react";
import {IService} from "@/types/IService.ts";
import {ICountry} from "@/types/ICountry.ts";
import {BsDashLg, BsPlusLg} from "react-icons/bs";
import {EditableDiv} from "@components/Inputs/Input/EditableDiv.tsx";
import {Toggle} from "@components/Inputs";
import {Modal} from "@UI/Modals";
import {ServiceCountriesTable} from "@pages/Admin/modules/Services/ServiceCountriesTable.tsx";

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

    /* ---- Edit Service Data --- */
    // Change price of all countries at once
    const [commonPrice, setCommonPrice] = useState({commonPrice: 7});
    const [editServiceData, setEditServiceData] = useState({
        id: service.id,
        name: service.name,
        short_name: service.short_name,
        image: null,
        is_active: service.is_active,
        countries: Object.values(service.countries).map(country => country.id)
    });

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
                    countries={countries}
                />
            }
        </>
    );
};
