import React, {memo} from 'react';
import {useGetAllServicesQuery} from "@/store/admin/services/services.api.ts";
import {AdminServiceRow} from "@pages/Admin/modules/Services/ServiceTableRow.tsx";

interface ServicesTableProps {

}

export const ServicesTable: React.FC<ServicesTableProps> = memo(({}) => {
    const {data: servicesData} = useGetAllServicesQuery();

    console.log(servicesData);

    return (
        <table className="w-full table-auto text-sm text-left">
            <thead
                className="bg-blue-500/10 text-blue-50 font-medium border-b border-slate-500 whitespace-nowrap">
            <tr>
                <th className="py-3 px-2"></th>
                <th className="py-3 px-6">Service name</th>
                <th className="py-3 px-6">short name</th>
                <th className="py-3 px-6">isActive</th>
                <th className="py-3 px-6">Common price</th>
                <th className="py-3 px-6"></th>
                <th className="py-3 px-6"></th>
            </tr>
            </thead>
            <tbody className="text-blue-100 divide-y divide-slate-600">
            {
                servicesData?.data?.services.map((service, i) => (
                    <AdminServiceRow
                        service={service}
                        countries={servicesData.data.countries}
                        key={service.id}
                    />
                ))
            }
            </tbody>
        </table>
    );
});