import React, {FunctionComponent, InputHTMLAttributes, ReactNode, useCallback} from "react";
import {useChangeHandler} from "@components/Inputs/hooks/useChangeHandler.ts";

interface CheckboxProps extends InputHTMLAttributes<any>{
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;

    onChange?: (e: any) => void;

    children: ReactNode;
    className?: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({children, name, data, setData, onChange, className, ...props}) => {
    const changeHandler = onChange
        ? onChange
        : useCallback(
            (e: any) => setData((prev: any) => ({
                ...prev,
                [name]: !prev[name]
            })),
            []
        );

    return (
        <label htmlFor={name} className="text-sm text-neutral-800 flex items-center pl-0.5">

            <input
                id={name}
                name={name}
                type="checkbox"
                checked={data[name]}

                onChange={changeHandler}

                className="mr-2 accent-app-accent w-3.5 h-3.5"
                {...props}
            />

            {children}
        </label>
    );
};

export default Checkbox;