import React from 'react';
import {Page} from "@modules/PageTemplates";
import {Link, NavLink, Outlet} from "react-router-dom";
import {twJoin} from "tailwind-merge";

interface AdminIndexPageProps {

}

export const AdminPage: React.FC<AdminIndexPageProps> = ({}) => {
    const tabs = [
        {
            title: "Countries",
            link: "/admin/countries"
        },
        {
            title: "Prices",
            link: "/admin/prices"
        }
    ];

    return (
        <Page
            className="py-6"
        >
            <ul role="tablist" className="w-full mx-auto border-b border-slate-600 flex items-center gap-1.5 sm:gap-3 overflow-x-auto text-sm md:text-base">
                {
                    tabs.map((item, i) => (
                        <li key={item.title}>
                            <NavLink
                                to={item.link}
                                className={({isActive}) => twJoin(
                                    "block py-2",
                                    isActive ? "border-app-primary border-b-2 text-app-secondary" : "text-slate-400"
                                )}
                                role="tab"
                                aria-controls={`tabpanel-${i + 1}`}
                            >
                                <div className="py-2.5 px-2 sm:px-4 rounded-lg duration-150 hover:text-app-primary hover:bg-slate-800 active:bg-slate-800 font-medium">
                                    {item.title}
                                </div>

                            </NavLink>
                        </li>
                    ))
                }
            </ul>

            <Outlet />

        </Page>
    );
}