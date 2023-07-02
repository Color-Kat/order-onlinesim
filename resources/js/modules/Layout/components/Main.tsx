import React, {useState} from 'react';
import classNames from "classnames";
import {PurpleButton} from "@UI/Buttons";

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        const [theme, setTheme] = useState('light');

        return (
            <>
                <main
                    className={classNames(
                        "flex-auto flex-shrink-0 flex justify-center w-full",
                        theme == 'light' && "bg-app bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-app-dark",
                        theme == 'dark' && "bg-app bg-gradient-to-tr from-black via-gray-800 to-zinc-700 text-violet-50",
                    )}
                >
                    <div className="relative container px-2 sm:px-5 flex justify-center py-5">
                        {children}

                        <PurpleButton
                            className="!rounded-full h-12 top-5 left-5 absolute opacity-50 hover:opacity-75"
                            onClick={() => setTheme(prev => prev == 'light' ? 'dark' : 'light')}
                        >Theme</PurpleButton>
                    </div>
                </main>
            </>

        );
    };

export default React.memo(Main);