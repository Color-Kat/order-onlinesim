import React, {memo} from 'react';
import {IFeature} from "@UI/Features/types.ts";


export const SecondaryFeatureItem: React.FC<{feature: IFeature}> = memo(({feature}) => {
    return (
        <li className="space-y-3 text-center max-w-sm mx-auto">
            <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                <feature.Icon className="h-8 w-8" />
            </div>

            <h4 className="text-lg text-blue-500 font-semibold">
                {feature.title}
            </h4>

            <p>
                {feature.description}
            </p>
        </li>
    );
});