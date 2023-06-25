import React, {ComponentType, FunctionComponent, InputHTMLAttributes, useState} from "react";
import {BsPerson} from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;
    Icon?: any;
    label?: string;
    description?: string;
}

const Input: FunctionComponent<InputProps> = ({
                                                  data,
                                                  setData,
                                                  name,
                                                  Icon = false,
                                                  label,
                                                  description,
                                                  ...props
                                              }) => {

    return (
        <div className="relative w-full text-lg">
            <label htmlFor={name}>
                {label && <div className={`leading-4 ${description ? 'mb-1' : 'mb-2'}`}>{label}:</div>}
                {description && <div className="mb-2 text-sm text-gray-100">{description}:</div>}

                <input
                    {...props}
                    className={`w-full bg-white/30 backdrop-blur-xl text-gray-700 placeholder-gray-700 py-2 px-4 ${Icon && 'pl-12'} h-[48px] rounded flex items-center outline-none shadow border border-app-accent ` + props.className}
                    value={data[name]}
                    name={name}
                    id={name}
                    onChange={
                        (e) => setData((prev: any) => ({
                            ...prev,
                            [name]: e.target.value
                        }))
                    }
                />

                {Icon &&
                    <Icon className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 text-2xl" />
                }
            </label>
        </div>
    );
};

export default Input;