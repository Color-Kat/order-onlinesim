import React from 'react';

/**
 * Google like loader
 */
export const RainbowLoader: React.FC = ({}) => {
    // You can add width to props
    return (
        <div className="rainbow-loader">
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
        </div>
    );
}