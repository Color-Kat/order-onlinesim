import React, {memo} from 'react';
interface FirstSectionProps {

}

export const SecondSection: React.FC<FirstSectionProps> = memo(({}) => {


    return (
        <div
            className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center"
            data-anchor="page-2"
        >
            <div className="flex flex-col justify-between max-w-2xl mx-auto">
                <h1 className="font-metapro lg:text-8xl md:text-6xl xs:text-5xl text-4xl text-center font-bold lg:mb-16 mb-8">
                    Sección número dos
                </h1>

                <div className="text-right text-lg">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequatur cumque error ipsum labore magnam placeat. A beatae cumque debitis est harum ipsa laboriosam maxime necessitatibus non praesentium qui, voluptates.
                    </p>
                </div>
            </div>
        </div>
    );
});