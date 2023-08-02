import React, {memo} from 'react';
import {ILinkProps} from "./types.ts";
import {Link} from "react-router-dom";
import {FaAngleRight} from "react-icons/fa";
import {shallowEqual} from "react-redux";
import {twMerge} from "tailwind-merge";

export const FilledLink: React.FC<ILinkProps> = memo(({
                                                          children,
                                                          to,
                                                          href,
                                                          className,
                                                          ...props
                                                      }) => {
    if (to)
        return (
            <Link
                to={to}
                className={twMerge(
                    "flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex",
                    className
                )}
                {...props}
            >
                {children}
                <FaAngleRight/>
            </Link>
        );
});