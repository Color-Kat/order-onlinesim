import React, {memo, useCallback, useState} from 'react';
import {RainbowLoader} from "@UI/Loaders";
import {Button, LoadingButton, RippleButton} from "@components/Buttons";
import {
    BlueButton,
    BorderedButton, BorderedPurpleButton, BorderedRedButton,
    GrayButton,
    LimeButton,
    PinkButton,
    PurpleButton,
    SuccessButton,
    WhiteButton
} from "@UI/Buttons";
import {FilledRedButton} from "@UI/Buttons/FilledRedButton.tsx";
import {TgIcon, VkIcon, YoutubeIcon, YtIcon} from "@UI/Icons/Social";

interface RowProps {

}

export const Col2: React.FC<RowProps> = memo(({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const toggleLoading = useCallback(() => setIsLoading(prev => !prev), []);

    return (
        <div className="flex items-center justify-center flex-col gap-8">

           <div className="flex flex-wrap gap-2 max-w-xs">
               <VkIcon />
               <YtIcon className="w-10 h-10"/>
               <TgIcon className="w-10 h-10"/>
               <YoutubeIcon />
               <YoutubeIcon dark />
           </div>

        </div>
    );
});