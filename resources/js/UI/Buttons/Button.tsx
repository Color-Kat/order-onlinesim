import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import {Loader} from "@UI/Loaders/Loader.tsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    filled?: boolean;
    colorClass?: string;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  filled = true,
                                                  colorClass = 'app-accent',
                                                  isLoading = false,
                                                  ...props
                                              }) => {


    return (
        <button
            {...props}
            className={
                `mx-auto uppercase border border-${colorClass} rounded-md cursor-pointer p-3.5 sm:min-w-[200px] h-[47px] flex justify-center items-center transition-colors shadow
                ${filled
                    ? `bg-${colorClass} hover:bg-transparent text-white hover:text-${colorClass}`
                    : `bg-transparent hover:bg-${colorClass} text-${colorClass} hover:text-white`}
                     ${props.className}`
            }
        >
            {/* Tailwind class loader*/}
            <div className="hidden bg-red-500 border-red-500 bg-app-accent hover:text-app-accent"></div>

            {/*{children}*/}

            {isLoading
                ? <span className="normal-case"><Loader />Загрузка...</span>
                : children
            }
        </button>
    );
}