import {Page} from '@modules/PageTemplates';
import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import {
    PurpleButton,
    BlueButton,
    SuccessButton,
    StandardButton,
    PinkButton,
    LimeButton,
    GrayButton,
    WhiteButton, BorderedButton, BorderedPurpleButton, BorderedRedButton
} from "@UI/Buttons";
import {RainbowLoader} from "@UI/Loaders";
import {LoadingButton, Button, RippleButton} from "@components/Buttons";
import {useCallback, useState} from "react";

export const HomePage = () => {
    const user = useTSelector(state => state.auth.user);

    const [isLoading, setIsLoading] = useState(false);
    const toggleLoading = useCallback(() => setIsLoading(prev => !prev), []);

    return (
        <Page
            title="Hey, are you my master?"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000"/>
            </Helmet>

            <div className="p-10 text-center">
                <div className="animate-slide-up ">
                    Hello, {user
                    ? user.name
                    : 'new project'
                } ;)
                </div>

                <div className="p-10 flex items-center justify-center flex-col gap-8">

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
                        <Button ButtonComponent={BorderedPurpleButton} className="bg-pink-200">Purple</Button>
                        <Button ButtonComponent={BorderedRedButton}>Red</Button>
                    </div>

                </div>
            </div>
        </Page>
    );
};