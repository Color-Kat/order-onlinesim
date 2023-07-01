import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import {Loader} from "@UI/Loaders/Loader.tsx";
import {StandardButton} from "@UI/Buttons";

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    ButtonComponent?: any;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
                                                  children,
                                                  ButtonComponent = StandardButton,
                                                  ...props
                                              }) => {

    return (
        <ButtonComponent
            {...props}
        >
            {/* Ripple effect */}
            {!props.disabled && <div
                className="ripple-effect top-0 left-0 h-full w-full rounded-xl absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-500 ease-out">
            </div>}

            {children}
        </ButtonComponent>
    );
}