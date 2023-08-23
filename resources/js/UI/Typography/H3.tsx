import React, {memo} from 'react';
import {ITypographyElement} from "./types.tsx";
import {twJoin, twMerge} from "tailwind-merge";

export const H3: React.FC<ITypographyElement> = memo(({
                                                          children,
                                                          className,
                                                          ...props
                                                      }) => {

    return (
        <h3
            className={twMerge(
                "text-2xl sm:text-3xl text-blue-200 font-medium",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
});