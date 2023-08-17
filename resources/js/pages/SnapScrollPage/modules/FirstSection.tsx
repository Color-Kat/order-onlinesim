import React, {memo} from 'react';
interface FirstSectionProps {

}

export const FirstSection: React.FC<FirstSectionProps> = memo(({}) => {


    return (
        <div
            className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center image-overlay"
            data-anchor="page-1"
            id="page-1-anchor"
        >
            <div className="flex flex-col justify-between">
                <h1 className="font-metapro lg:text-8xl md:text-6xl xs:text-5xl text-4xl text-center font-bold lg:mb-16 mb-8">
                   Snap Scroll
                </h1>

                <div className="text-right text-lg">
                    <p>
                        Красивый эффект скроллинга
                    </p>
                </div>
            </div>

            <div className="section-overlay hidden lg:block"/>
        </div>
    );
});