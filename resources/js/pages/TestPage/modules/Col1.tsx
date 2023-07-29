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

interface Col1Props {

}

export const Col1: React.FC<Col1Props> = memo(({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const toggleLoading = useCallback(() => setIsLoading(prev => !prev), []);

    return (
        <div className="flex items-center justify-center flex-col gap-8">

            <RainbowLoader/>

            <div className="flex gap-3">

                <Button onClick={toggleLoading}>Hello</Button>
                <Button ButtonComponent={SuccessButton}>Success</Button>
            </div>

            <div className="flex gap-3">
                <LoadingButton
                    isLoading={isLoading}
                    ButtonComponent={PurpleButton}
                    onClick={toggleLoading}
                    type="submit"
                >Submit</LoadingButton>

                <LoadingButton
                    isLoading={isLoading}
                    onClick={toggleLoading}
                    ButtonComponent={BlueButton}
                >Send</LoadingButton>
            </div>

            <div className="flex gap-3">
                <RippleButton
                    ButtonComponent={SuccessButton}
                >
                    Ripple Effect
                </RippleButton>

                <LoadingButton
                    isLoading={isLoading}
                    onClick={toggleLoading}
                    ButtonComponent={PinkButton}
                    className='relative' // For ripple effect
                >
                    <RippleButton
                        ButtonComponent={({children}: any) => <>{children}</>}
                    >
                        Ripple + loading
                    </RippleButton>
                </LoadingButton>
            </div>

            <div className="flex gap-3">
                <RippleButton ButtonComponent={PinkButton}>Pinky</RippleButton>
                <Button ButtonComponent={LimeButton}>Lime</Button>
            </div>

            <div className="flex gap-3">
                <RippleButton ButtonComponent={GrayButton}>Gray</RippleButton>
                <Button ButtonComponent={WhiteButton} className="text-indigo-400 ">Mr.White?</Button>
            </div>

            <div className="flex gap-3">
                <Button ButtonComponent={BorderedButton}>There's no borders</Button>
                <Button ButtonComponent={WhiteButton}>Mr.White?</Button>
            </div>

            <div className="flex gap-3">
                <Button ButtonComponent={BorderedPurpleButton}>Purple</Button>
                <Button ButtonComponent={BorderedRedButton}>Red</Button>
            </div>

            <div className="flex gap-3">
                <Button ButtonComponent={FilledRedButton}>Filled</Button>
                {/*<Button ButtonComponent={BorderedRedButton}>Red</Button>*/}
            </div>

        </div>
    );
});