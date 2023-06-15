import React from "react";

interface PageProps {
    title: string;
    children: React.ReactNode;
}
 
export const Page: React.FC<PageProps> = ({title, children}) => {
    return ( 
        <div className="py-10 flex items-center flex-col">
            <h1 className="text-center text-xl font-bold mb-5">{title}</h1>

            {children}

        </div>
    );
};