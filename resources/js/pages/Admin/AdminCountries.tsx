import React, {useCallback, useState} from 'react';
import {Page} from "@modules/PageTemplates";
import {Link} from "react-router-dom";
import {AdminTabContent} from "@pages/Admin/components/AdminTabContent.tsx";
import {useCreateCountryMutation, useGetAllCountriesQuery} from "@/store/admin/countries/countries.api.ts";
import {H3} from "@UI/Typography";
import {Input} from "@components/Inputs";
import {BlueButton} from "@UI/Buttons";

export const AdminCountries: React.FC = ({}) => {
    const {data: countries} = useGetAllCountriesQuery();
    const [createCountry, {data, error}] = useCreateCountryMutation();

    const [newCountry, setNewCountry] = useState({
        name: '',
        code: '',
        short_name: '',
    });

    const handleCreateCountry = useCallback(async () => {
        await createCountry(newCountry);
    }, [newCountry]);

    console.log(data, error);


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

            </div>

        </AdminTabContent>
    );
}