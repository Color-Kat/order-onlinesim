import React, {ReactNode} from 'react';
import ReactFullpage, {fullpageOptions} from "@fullpage/react-fullpage";

import './fullpage.scss';

export function FullPageHOC(WrappedComponent: any, options?: fullpageOptions) {
    return () => {
        return (
            <div className="lg:overflow-hidden relative w-full lg:will-change-transform">
                <ReactFullpage
                    licenseKey = {'YOUR_KEY_HERE'}
                    scrollingSpeed = {700} /* Options here */
                    anchors={options?.anchors ?? []}
                    navigation={true}
                    navigationPosition="left"

                    // responsiveWidth={1024}
                    responsive={1024}
                    menu="#mobile-menu"
                    autoScrolling={true}

                    credits={{
                        enabled: true,
                    }}
                    render={({ fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <WrappedComponent fullpageApi={fullpageApi}/>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}