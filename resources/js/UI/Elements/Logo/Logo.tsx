import React, {memo} from 'react';
import {Link} from "react-router-dom";
import {twJoin, twMerge} from "tailwind-merge";

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = memo(({className}) => {
    return (
        <div className={twMerge(
            "logo font-ubuntu-mono text-3xl font-bold text-gray-900 flex items-center justify-center hover:saturate-150",
            className
        )}>
            <Link to="/">
                <img
                    src="https://www.floatui.com/logo.svg"
                    width={120}
                    height={50}
                    alt="Float UI logo"
                />
            </Link>
        </div>
    );
});