import React, {useCallback, useState} from 'react';
import {Switch} from "@headlessui/react";
import {twJoin, twMerge} from "tailwind-merge";

interface SwitchProps {
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;

    disabled?: boolean;

    className?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    containerClassName?: string;
}

export const Toggle: React.FC<SwitchProps> = ({
                                                  data,
                                                  setData,
                                                  name,

                                                  disabled = false,

                                                  className,
                                                  activeClassName,
                                                  inactiveClassName,
                                                  containerClassName
                                              }) => {

    const onChangeHandler = useCallback((value: boolean) => {
        setData((prev: any) => ({...prev, [name]: value}));
    }, [name]);

    const [enabled, setEnabled] = useState(false)
    return (
        <div className={twMerge(
            "",
            containerClassName
        )}>
            <Switch
                checked={data[name]}
                onChange={onChangeHandler}
                className={twMerge(
                    "relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                    data[name] ? 'bg-app-accent' : 'bg-black/40 shadow-inner',
                    data[name] ? activeClassName : inactiveClassName,
                    className
                )}
                disabled={disabled}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={twJoin(
                        data[name] ? 'translate-x-[24px]' : 'translate-x-0',
                        "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                    )}
                />
            </Switch>
        </div>
    )
}