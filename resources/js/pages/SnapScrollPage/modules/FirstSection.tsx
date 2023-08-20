import React, {memo} from 'react';
interface FirstSectionProps {

}

export const FirstSection: React.FC<FirstSectionProps> = memo(({}) => {


    return (
        <section
            className="relative section h-full px-5 flex items-center justify-center"
            data-anchor="page-1"
            id="page-1-anchor"
        >
            <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none"></div>

            <img
                src="https://wallpaperaccess.com/full/1124168.jpg"
                alt="Sea"
                className="absolute inset-0 h-full w-full object-cover -z-[1]"
            />

            <div
                className="relative text-white text-center overflow-y-hidden"
            >
                <h1 className="text-4xl font-bold mb-4">Dive into snap scrolling</h1>
                <p className="text-lg mb-8">Fullpage scroll for doing beautiful things</p>
                <a href="#page-2-anchor" className="block w-max mx-auto bg-white text-cyan-600 px-6 py-3 rounded-full uppercase">Get Started</a>
            </div>

        </section>
    );
});