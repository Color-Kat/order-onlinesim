import React, {useCallback} from 'react';
import classNames from "classnames";
import {InputProps} from "@components/Inputs/Input/types.ts";
import {SimpleInput} from "@components/Inputs/Input/SimpleInput.tsx";
import {BsExclamationCircleFill} from "react-icons/bs";



export const Input: React.FC<InputProps> = ({
                                                        data,
                                                        setData,
                                                        name,
                                                        onChange,

                                                        errorMessages,

                                                        label,
                                                        description,

                                                        Icon,

                                                        className,
                                                        containerClassName,
                                                        ...props
                                                    }) => {


    return (
        <div className={classNames(
            "w-full text-left",
            containerClassName
        )}>
            {label && <label
                htmlFor="first_name"
                className="block text-base font-medium text-gray-600"
            >
                {label}
            </label>}

            {description && <div className="block text-xs text-gray-600">{description}</div>}

            <div className={classNames("relative", (label || description) && 'mt-2')}>
                <SimpleInput
                    data={data}
                    setData={setData}
                    name={name}
                    onChange={onChange ?? undefined}

                    isError={!!errorMessages}

                    className={classNames(
                        className,
                        Icon && 'pl-12'
                    )}
                    {...props}
                />

                {Icon &&
                    <Icon className="absolute left-3 text-app-accent top-1/2 -translate-y-1/2 h-6 w-6" />
                }
            </div>

            {errorMessages && <div className="text-red-500 text-sm flex items-center gap-1.5 py-0.5">
                <BsExclamationCircleFill /> {errorMessages[0]}
            </div>}
        </div>
    );
}