import React from 'react';
import {AdminTabContent} from "@pages/Admin/components/AdminTabContent.tsx";
import {H3} from "@UI/Typography";
import {CreateService} from "./modules/Services";
import {ServicesTable} from "./modules/Services";

export const AdminServices: React.FC = ({}) => {
    return (
        <AdminTabContent>

            <div className="flex flex-col gap-2 border-b border-slate-600 pb-5">
                <H3>Add new service</H3>

                <CreateService />
            </div>

            <div className="mt-10">
                <H3>List of services</H3>

                <div className="rounded-xl overflow-x-auto mt-2">
                    <ServicesTable />
                </div>
            </div>

        </AdminTabContent>
    );
};