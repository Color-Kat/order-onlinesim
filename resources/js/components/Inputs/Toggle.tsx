import React, {useCallback, useState} from 'react';
import classNames from "classnames";
import {Switch} from "@headlessui/react";

interface SwitchProps {
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;

    containerClassName?: string;
}

export const Toggle: React.FC<SwitchProps> = ({
                                                  data,
                                                  setData,
                                                  name,
                                                  containerClassName
                                              }) => {

    const onChangeHandler = useCallback((value: boolean) => {
        setData((prev: any) => ({...prev, [name]: value}));
    }, [name]);

    console.log(data)


    const [enabled, setEnabled] = useState(false)
    return (
        <div className={classNames(
            "",
            containerClassName
        )}>
            <Switch
                checked={data[name]}
                onChange={onChangeHandler}
                className={classNames(
                    "relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                    data[name] ? 'bg-indigo-500' : 'bg-black/40 shadow-inner'
                )}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={classNames(
                        data[name] ? 'translate-x-9' : 'translate-x-0',
                        "pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                    )}
                />
            </Switch>
        </div>
    )
}