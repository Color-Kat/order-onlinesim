import React, {useCallback} from 'react';
import {SimpleInputProps} from "@components/Inputs/Input/types.ts";
import {twMerge} from "tailwind-merge";

// Maskable input https://github.com/Color-Kat/victory-park-order/blob/master/resources/js/UI/Form/Input.tsx

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

            className={twMerge(
                "w-full border-2 border-blue-400 block py-2 px-2.5",
                "focus:outline-none focus:ring-2 focus:ring-app-accent/50",
                "bg-slate-200 text-gray-900 text-base rounded-xl",
                "placeholder-slate-600",
                isError && "border-red-500 shadow-red-300 shadow-sm",
                className
            )}
        />
    );
}