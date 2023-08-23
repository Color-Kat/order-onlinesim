import React, {memo} from 'react';
import {ITypographyElement} from "./types.tsx";
import {twJoin} from "tailwind-merge";

export const H2: React.FC<ITypographyElement> = memo(({
                                                          children,
                                                          className,
                                                          ...props
                                                      }) => {

    return (
        <h2
            className={twJoin(
                "text-3xl sm:text-4xl text-blue-100 font-bold",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    );
});