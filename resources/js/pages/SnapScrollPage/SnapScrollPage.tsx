import {Helmet} from "react-helmet";
import React, {memo} from "react";
import {FullPageHOC, Page} from "@modules/PageTemplates";
import {FirstSection} from "@pages/SnapScrollPage/modules/FirstSection.tsx";
import {fullpageApi} from "@fullpage/react-fullpage";
import {SecondSection} from "@pages/SnapScrollPage/modules/SecondSection.tsx";
import {ThirdSection} from "@pages/SnapScrollPage/modules/ThridSection.tsx";

interface IFullPage {
    fullpageApi: fullpageApi;
}

const SnapScroll= FullPageHOC(({fullpageApi}: IFullPage) => {
    return (
        <>
            <Helmet>
                <title>Snap Scroll</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + "/snap-scroll"}/>
            </Helmet>

            <FirstSection />

            <SecondSection />

            <ThirdSection />
        </>
    );
}, {
    anchors: [
        'page-1',
        'page-2',
        'page-3',
    ].filter(Boolean),
    credits: {}
});



export const SnapScrollPage: React.FC = memo(({}) => {
    return (
        <div className="w-screen h-full">
            <SnapScroll />
        </div>
    );
});