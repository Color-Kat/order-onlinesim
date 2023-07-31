import {memo} from "react";

import {Header} from "./Header/Header.tsx";
import Main from "./Main";
import Footer from "./Footer";
import {twJoin} from "tailwind-merge";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {
    return (
        <div
            className="scroll-container flex flex-col h-screen overflow-auto overflow-x-hidden font-inter bg-app-dark"
        >

            <Header/>

            <Main>
                <div className={twJoin(
                    "flex-1",
                    // "max-w-4xl",
                )}>
                    {children}
                </div>
            </Main>

            <Footer/>

        </div>
    );
});