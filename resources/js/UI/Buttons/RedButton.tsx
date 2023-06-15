import React from 'react';

interface RedButtonProps {
    children: string;
    filled: boolean;
    onClick?: () => void;
}

export const RedButton: React.FC<RedButtonProps> = ({
                                                        children,
                                                        filled = true,
                                                        onClick
                                                    }) => {


    return (
        <button className={
            `mx-auto uppercase border border-app-accent rounded cursor-pointer p-3.5 sm:w-[200px] h-[47px] flex justify-center transition-colors text-13
                ${filled
                ? 'bg-app-accent hover:bg-transparent text-white hover:text-app-accent'
                : 'bg-transparent hover:bg-app-accent text-app-accent hover:text-white'}`
        }
                onClick={onClick}
        >
            {children}
        </button>
    );
}