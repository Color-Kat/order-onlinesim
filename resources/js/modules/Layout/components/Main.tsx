import React, {useState} from 'react';
import {PurpleButton} from "@UI/Buttons";
import {twJoin} from "tailwind-merge";
import {useTSelector} from "@hooks/redux.ts";
import {RainbowLoader} from "@UI/Loaders";

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        const {isLoading} = useTSelector(state => state.auth);
        // const [theme, setTheme] = useState('light');

        return (
            <main
                className={twJoin(
                    "relative w-full flex flex-auto justify-center",
                    // theme == 'light' && "bg-app bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-app-dark",
                    // theme == 'dark' && "bg-app bg-gradient-to-tr from-black via-gray-800 to-zinc-700 text-violet-50",
                )}
            >
                {
                    isLoading
                        ? <RainbowLoader />
                        : <>{children}</>
                }

                {/*<PurpleButton*/}
                {/*    className="!rounded-full h-12 top-5 left-5 absolute opacity-50 hover:opacity-75"*/}
                {/*    onClick={() => setTheme(prev => prev == 'light' ? 'dark' : 'light')}*/}
                {/*>Theme</PurpleButton>*/}
            </main>
        );
    };

export default React.memo(Main);