import React, {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    filled?: boolean;
    colorClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  filled = true,
                                                  colorClass = 'app-accent',
                                                  ...props
                                              }) => {


    return (
        <button
            {...props}
            className={
                `mx-auto uppercase border border-${colorClass} rounded cursor-pointer p-3.5 sm:min-w-[200px] h-[47px] flex justify-center items-center transition-colors shadow
                ${filled
                    ? `bg-${colorClass} hover:bg-transparent text-white hover:text-${colorClass}`
                    : `bg-transparent hover:bg-${colorClass} text-${colorClass} hover:text-white`}
                     ${props.className}`
            }
        >
            {/* Tailwind class loader*/}
            <div className="hidden bg-red-500 border-red-500 bg-app-accent hover:text-app-accent"></div>

            {children}
        </button>
    );
}