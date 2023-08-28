import React, {memo, ReactNode} from 'react';
import {Page} from "@modules/PageTemplates";
import {Helmet} from "react-helmet";

interface AdminTabContentProps {
    children: ReactNode;
}

export const AdminTabContent: React.FC<AdminTabContentProps> = memo(({
    children
                                                                     }) => {


    return (
        <Page
            className="py-12 mt-6 px-0"
        >

            <Helmet>
                <title>Admin panel</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + "/admin"}/>
            </Helmet>

            {children}
        </Page>
    );
});