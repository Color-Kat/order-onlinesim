import react from 'react';
import { Link } from "react-router-dom";
import React from "react";

export const Logo = () => {
    return (
        <div className="logo font-ubuntu-mono text-3xl font-bold text-gray-900 flex items-center justify-center hover:saturate-150">
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
};