import React from "react";
import {twMerge} from "tailwind-merge";
import {PageProps} from "@modules/PageTemplates/types/pageTypes.ts";

/**
 * Page component adds paddings for pretty content displaying.
 */
export const BigPage: React.FC<PageProps> = ({children, className}) => {
    return ( 
        <div className={twMerge(
            'container px-2 sm:px-5 mx-auto',
            'py-36',
            className
        )}>

            {children}

        </div>
    );
};