import React, {InputHTMLAttributes, useCallback} from 'react';
import classNames from "classnames";
import {SimpleInputProps} from "@components/Inputs/Input/types.ts";

export const SimpleInput: React.FC<SimpleInputProps> = ({
                                                      data,
                                                      setData,
                                                      name,

                                                      onChange,

                                                      isError,

                                                      className,
                                                      ...props
                                                  }) => {

    const changeHandler = onChange
        ? onChange
        : useCallback(
            (e: any) => setData((prev: any) => ({
                ...prev,
                [name]: e.target.value
            })),
            []
        );

    return (
        <input
            {...props}

            id={name}
            name={name}
            value={data[name]}
            onChange={changeHandler}

            className={classNames(
                "w-full border border-gray-300 block p-2.5",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
                "bg-white/70 backdrop-blur-xl text-gray-900 text-sm rounded-lg",
                "placeholder-gray-400",
                isError && "border-red-500 shadow-red-300 shadow-sm",
                className
            )}
        />
    );
}