import React, { memo } from 'react';

const Footer: React.FC = () => {


    return (
        <footer className="flex justify-center bg-gray-10 shadow-xl pb-5 pt-6 font-roboto">
            <div className="container px-5 flex-col md:flex-row flex justify-between gap-5">

                <div className="text-gray-800 flex-1">
                    This project is made for quick setup this big technology stack (laravel, react, ts, tailwind, auth and many components). <br/>
                    Use it and rejoice!
                </div>

                <div className="text-gray-700 text-sm text-center">
                    <h3>
                        Made by <a href="https://vk.com/color_kat" target="_blank" className="underline">@ColorKat</a>
                    </h3>
                    <h4>
                        powered by <a href="https://colorbit.ru" target="_blank" className="underline">Colorbit.ru</a>
                    </h4>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);