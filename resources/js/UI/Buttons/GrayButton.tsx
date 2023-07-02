import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const GrayButton: React.FC<ButtonProps> = ({
                                                  children,
                                                  ...props
                                              }) => {
    return (
        <button
            {...props}
            className={classNames(
                `mx-auto uppercase  text-center cursor-pointer flex justify-center items-center`,
                'text-sm shadow-md rounded-lg px-5 py-2.5 w-36',
                'text-black hover:bg-gray-100 bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-200',
                'disabled:bg-gray-300 disabled:shadow-inner',
                props.className
            )}
        >

            {children}

        </button>
    );
}