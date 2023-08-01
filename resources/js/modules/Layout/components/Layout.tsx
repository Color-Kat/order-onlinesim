import {memo} from "react";

import {Header} from "./Header/Header.tsx";
import Main from "./Main";
import Footer from "./Footer";
import {twJoin} from "tailwind-merge";
import {MobileBottomMenu} from "@modules/Layout/components/MobileBottomMenu.tsx";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {
    return (
        <div
            className={twJoin(
                "scroll-container h-screen flex flex-col overflow-y-auto overflow-x-hidden",
                // "md:h-screen h-[calc(100vh-4.4rem)]", // For MobileBottomMenu
                "pt-16",// For header
                "pb-[4.4rem] md:pb-0",// For MobileBottomMenu
                "bg-app-dark font-inter"
            )}
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

            <MobileBottomMenu />

        </div>
    );
});