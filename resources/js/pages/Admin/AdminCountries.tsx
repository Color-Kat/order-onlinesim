import React, {useCallback, useEffect, useState} from 'react';
import {Page} from "@modules/PageTemplates";
import {Link} from "react-router-dom";
import {AdminTabContent} from "@pages/Admin/components/AdminTabContent.tsx";
import {
    useCreateCountryMutation,
    useDeleteCountryMutation,
    useGetAllCountriesQuery, useUpdateCountryMutation
} from "@/store/admin/countries/countries.api.ts";
import {H3} from "@UI/Typography";
import {Input, SimpleInput} from "@components/Inputs";
import {BlueButton, RedButton, SuccessButton} from "@UI/Buttons";
import {ICountry} from "@/types/ICountry.ts";
import {Modal} from "@UI/Modals";
import {RippleButton} from "@components/Buttons";
import {EditableDiv} from "@components/Inputs/Input/EditableDiv.tsx";

const AdminCountryRow: React.FC<{ country: ICountry }> = ({country}) => {
    const [deleteCountry, {error: deleteError}] = useDeleteCountryMutation();
    const [updateCountry, {error: updateError}] = useUpdateCountryMutation();

    // Delete country
    const handleDeleteCountry = useCallback(() => {
        deleteCountry({
            id: country.id
        });
    }, []);

    // On\off edit mode
    const [isEdit, setIsEdit] = useState(false);
    const [editCountryData, setEditCountryData] = useState({
        id: country.id,
        name: country.name,
        code: country.code,
        short_name: country.short_name,
    });

    // Turn on the edit mode
    const handleEditCountry = useCallback(() => {
        setIsEdit(true);
    }, []);

    // Update country and turn off the edit mode
    const handleUpdateCountry = () => {
        setIsEdit(false);
        updateCountry(editCountryData);
    }

    // Error handling
    useEffect(() => {
        let error = (deleteError as any)?.data?.message ?? (updateError as any)?.data?.message;

        if (error)
            alert(error);

    }, [
        (deleteError as any)?.data?.message,
        (updateError as any)?.data?.message,
    ]);

    return (
        <tr className="rounded-xl p-3 bg-blue-500/10">
            {/* Flag + name */}
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <img className="w-7 h-7 mr-3 rounded-lg" src={country.image} alt={country.name}/>
                    <div className="font-bold text-lg">
                       <EditableDiv
                            isEdit={isEdit}
                            data={editCountryData}
                            setData={setEditCountryData}
                            name="name"
                        />
                    </div>
                </div>
            </td>

            {/* Code */}
            <td className="px-6 py-4 whitespace-nowrap">
                <EditableDiv
                    isEdit={isEdit}
                    data={editCountryData}
                    setData={setEditCountryData}
                    name="code"
                />
            </td>

            {/* Short Name */}
            <td className="px-6 py-4 whitespace-nowrap">
                <EditableDiv
                    isEdit={isEdit}
                    data={editCountryData}
                    setData={setEditCountryData}
                    name="short_name"
                    // type="number"
                />
            </td>

            <td className="text-right px-6 whitespace-nowrap text-base space-x-2">
                <button
                    className="py-1.5 px-3 font-medium text-blue-500 hover:text-blue-100 duration-150 hover:bg-blue-500/30 rounded-lg"
                    onClick={isEdit ? handleUpdateCountry : handleEditCountry}
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
                    text="Are you sure you want to delete this country?"
                    actionText="Delete"
                    callback={handleDeleteCountry}
                />
            </td>
        </tr>
    );
};

export const AdminCountries: React.FC = ({}) => {
    const {data: countries} = useGetAllCountriesQuery();
    const [createCountry, {data, error}] = useCreateCountryMutation();

    const [newCountry, setNewCountry] = useState({
        name: '',
        code: '',
        short_name: '',
    });

    const handleCreateCountry = useCallback(async () => {
        await createCountry(newCountry as any);
    }, [newCountry]);

    console.log(countries);

    return (
        <AdminTabContent>

            <div className="flex flex-col gap-2 border-b border-slate-600 pb-5">
                <H3>Add new country</H3>

                <div className="text-red-500 text-sm">
                    {(error as any)?.data?.message}
                </div>

                <div className="flex gap-5 items-center mt-2">
                    <Input
                        data={newCountry}
                        setData={setNewCountry}
                        name="name"
                        placeholder="Country name"
                        className="py-1.5"
                    />

                    <Input
                        data={newCountry}
                        setData={setNewCountry}
                        name="code"
                        placeholder="Country code (ru, us, cn)"
                        className="py-1.5"
                    />

                    <Input
                        data={newCountry}
                        setData={setNewCountry}
                        name="short_name"
                        type="number"
                        placeholder="Country numeric code"
                        className="py-1.5"
                    />

                    <BlueButton onClick={handleCreateCountry}>
                        Create
                    </BlueButton>
                </div>
            </div>

            <div className="mt-10">
                <H3>List of countries</H3>

                <div className="rounded-xl overflow-x-auto mt-2">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-blue-500/10 text-blue-50 font-medium border-b border-slate-500 whitespace-nowrap">
                        <tr>
                            <th className="py-3 px-6">Country</th>
                            <th className="py-3 px-6">Code</th>
                            <th className="py-3 px-6">Short name</th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6"></th>
                        </tr>
                        </thead>
                        <tbody className="text-blue-100 divide-y divide-slate-600">
                        {
                            countries?.data.map((country, i) => (
                                <AdminCountryRow country={country} key={country.id}/>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </AdminTabContent>
    );
};