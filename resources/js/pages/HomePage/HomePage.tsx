import {Page} from '@modules/PageTemplates';
import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import {
    PurpleButton,
    BlueButton,
    SuccessButton,
    PinkButton,
    LimeButton,
    GrayButton,
    WhiteButton, BorderedButton, BorderedPurpleButton, BorderedRedButton
} from "@UI/Buttons";
import {RainbowLoader} from "@UI/Loaders";
import {LoadingButton, Button, RippleButton} from "@components/Buttons";
import {useCallback, useState} from "react";
import {DoubleDropdown, Dropdown, SecondaryDropdown} from "@components/Dropdowns";
import {BsFillTrashFill} from "react-icons/bs";

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

            <div className="w-full p-10 text-center">
                <div className="animate-slide-up ">
                    Hello, {user
                    ? user.name
                    : 'new project'
                } ;)
                </div>

                <div className="w-full flex justify-between items-start gap-8">
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
                            <Button ButtonComponent={BorderedPurpleButton} className="bg-pink-200">Purple</Button>
                            <Button ButtonComponent={BorderedRedButton}>Red</Button>
                        </div>

                    </div>

                    <div className="p-10 flex items-center justify-center flex-col gap-5">

                        <div className="flex gap-3 items-end">
                            <Dropdown
                                title="Dropdown"
                                header="List"
                                buttonClassName="bg-blue-500/100 hover:bg-blue-400"
                                containerClassName="w-32"
                                items={[
                                    {text: 'Item 1'},
                                    {text: 'Item 2'},
                                    {text: 'Item 3'},
                                    {text: 'Item 4'},
                                    {text: 'Item 5'},
                                ]}
                            />

                            <Dropdown
                                title="Dropdown With Groups"
                                header="Pop-pup ;)"
                                containerClassName="bg-indigo-100"
                                groups={{
                                    0: [
                                        {text: 'group 1', onClick: () => alert("I'm one"),},
                                        {text: 'group 1'}
                                    ],
                                    2: [
                                        {text: 'group 2',}
                                    ],
                                    3: [
                                        {
                                            text: 'click me',
                                            onClick: () => alert("Stop clicking on me!!!"),
                                            Icon: BsFillTrashFill,
                                            disabled: true
                                        }
                                    ]
                                }}
                            />
                        </div>

                        <div className="flex gap-3 w-full">
                            <DoubleDropdown
                                title="Double Dropdown"
                                header="Choose your side"
                                groups={{
                                    0: [
                                        {text: 'group 1'},
                                    ],

                                    2: [
                                        {
                                            text: 'click me',
                                            onClick: () => alert("Stop clicking on me!!!"),
                                            Icon: BsFillTrashFill
                                        }
                                    ],
                                    3: [
                                        {text: 'group 2',},
                                        {text: 'group 2',}
                                    ],
                                    4: [
                                        {text: 'group 4',},
                                        {text: 'group 4',}
                                    ],
                                }}
                            />

                            <SecondaryDropdown
                                title="Secondary"
                                header="Header"
                                className="ml-auto"
                                groups={{
                                    0: [
                                        {text: 'group 1', onClick: () => alert("I'm one"),},
                                        {text: 'group 1'}
                                    ],
                                    2: [
                                        {text: 'group 2',}
                                    ],
                                    3: [
                                        {
                                            text: 'click me',
                                            onClick: () => alert("Stop clicking on me!!!"),
                                            Icon: BsFillTrashFill
                                        }
                                    ]
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </Page>
    );
};