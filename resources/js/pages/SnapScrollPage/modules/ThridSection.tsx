import React, {memo} from 'react';
interface FirstSectionProps {

}

export const ThirdSection: React.FC<FirstSectionProps> = memo(({}) => {


    return (
        <div
            className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center"
            data-anchor="page-3"
        >
            <div className="flex flex-col gap-5">
                <h1 className="font-metapro lg:text-8xl md:text-6xl xs:text-5xl text-4xl text-center font-bold lg:mb-16 mb-8">
                   Финиш
                </h1>

                <div className="text-right text-lg">
                    <p>
                        Это последняя секция snap scroll'а.
                    </p>
                </div>
            </div>
        </div>
    );
});