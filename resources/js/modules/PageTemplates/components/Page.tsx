import React from "react";
import {twMerge} from "tailwind-merge";
import {PageProps} from "@modules/PageTemplates/types/pageTypes.ts";

/**
 * Page component adds paddings for pretty content displaying.
 */
export const Page: React.FC<PageProps> = ({children, className}) => {
    return ( 
        <div className={twMerge(
            'page-container w-full',
            // 'pt-5 pb-16 px-2 sm:px-5 mx-auto',
            className
        )}>

            {children}

        </div>
    );
};