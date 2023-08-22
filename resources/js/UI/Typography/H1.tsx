import React, {memo} from 'react';
import {ITypographyElement} from "./types.tsx";
import {twJoin} from "tailwind-merge";

export const H1: React.FC<ITypographyElement> = memo(({
                                                          children,
                                                          className,
                                                          ...props
                                                      }) => {

    return (
        <h1
            className={twJoin(
                "text-4xl text-indigo-50 font-extrabold sm:text-5xl",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
});