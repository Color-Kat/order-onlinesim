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
import React, {useCallback, useMemo, useState} from "react";
import {DoubleDropdown, Dropdown, SecondaryDropdown} from "@components/Dropdowns";
import {BsFillTrashFill} from "react-icons/bs";
import {Autocomplete, FileInput, RadioGroup, SecondarySelect, Select, Toggle} from "@components/Inputs";
import {Modal, SecondaryModal} from "@UI/Modals";
import {Dialog} from "@headlessui/react";
import {Popover} from "@UI/Popover";
import {AiFillIeSquare} from "react-icons/ai";

export const HomePage = () => {
    const user = useTSelector(state => state.auth.user);

    const [isLoading, setIsLoading] = useState(false);
    const toggleLoading = useCallback(() => setIsLoading(prev => !prev), []);

    const [data, setData] = useState({
        images: [],
        select: 'Option 1',
        autocomplete: 'Anaconda',
        agree: true,
        radio: 2
    });

    console.log(data)

    return (
        <Page
            title="Hey, are you my master?"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000"/>
            </Helmet>

            <div className="w-full p-10 text-center">
                <div className="animate-slide-up mb-5">
                    Hello, {user
                    ? user.name
                    : 'new project'
                } ;)
                </div>

                <FileInput
                    data={data}
                    setData={setData}
                    name="images"

                    buttonText="Выберите фото"
                    dragAndDropText="Перетащите фото сюда"
                />

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
                                        {text: 'group 0'},
                                    ],
                                    1: [
                                        {
                                            text: 'click me 1',
                                            onClick: () => alert("Stop clicking on me!!!"),
                                            Icon: BsFillTrashFill
                                        }
                                    ],
                                    2: [
                                        {text: 'group 2',},
                                        {text: 'group 2',}
                                    ],
                                    3: [
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

                        <div className="flex flex-col gap-3 w-full">
                            <Select
                                data={data}
                                setData={setData}
                                name="select"
                                options={[
                                    'Option 1',
                                    'Opinion 2',
                                    'Onion 3'
                                ]}
                                containerClassName="w-full"
                            />

                            <SecondarySelect
                                data={data}
                                setData={setData}
                                name="select"
                                options={[
                                    'Option 1',
                                    'Opinion 2',
                                    'Onion 3'
                                ]}
                                containerClassName="w-full"

                            />
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <Autocomplete
                                data={data}
                                setData={setData}
                                name="autocomplete"
                                options={[
                                    'Anaconda',
                                    'Banana',
                                    'Banana 2',
                                    'Colorbit.ru'
                                ]}
                                containerClassName="w-full"
                            />
                        </div>

                        <div className="flex flex-wrap justify-between gap-3 w-full">
                            <Toggle data={data} setData={setData} name='agree' />

                            <Modal
                                ButtonComponent={({onClick}: any) => (
                                    <RippleButton ButtonComponent={SuccessButton} onClick={onClick}>
                                        Оплатить
                                    </RippleButton>
                                )}
                                title="Payment successful"
                                text="Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."
                                actionText="Got it, thanks!"
                                callback={() => console.log('Payment action')}
                            />

                            <Modal
                                buttonText="Модалька"

                                CustomLayout={({closeModal}) => (
                                    <>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl font-medium leading-6 text-indigo-900"
                                        >
                                            Успех
                                        </Dialog.Title>

                                        <div className="mt-4">
                                            <p className="text-base text-indigo-500">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus porro reprehenderit veritatis.
                                            </p>
                                        </div>

                                        <div className="mt-4 flex gap-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-lg border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Закройся
                                            </button>

                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-lg border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Скройся
                                            </button>
                                        </div>
                                    </>
                                )}
                            />


                            <SecondaryModal
                                ButtonComponent={({onClick}: any) => (
                                    <PurpleButton onClick={onClick}>
                                        Заказать
                                    </PurpleButton>
                                )}
                                title="Заказ создан"
                                text="Ваш заказ успешно размещён. Оплатите его, и скоро мы отправим его вам!"
                                actionText="Ок"
                            />
                        </div>

                        <div className="flex flex-wrap justify-between gap-3 w-full">
                            <Popover
                                items={[
                                    {
                                        name: 'Insights',
                                        description: 'Measure actions your users take',
                                        href: '##',
                                        icon: AiFillIeSquare,
                                    },
                                    {
                                        name: 'Второй элемент',
                                        description: 'Гугл',
                                        href: 'https://google.com',
                                        icon: AiFillIeSquare,
                                    },
                                    {
                                        name: 'Reports',
                                        description: 'Keep track of your growth',
                                        href: '##',
                                        icon: AiFillIeSquare,
                                    },
                                ]}
                            >
                                {(item, close) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={close}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        <div
                                            className="flex h-16 w-16 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 bg-indigo-300 rounded-md"
                                        >
                                            <item.icon aria-hidden="true" className="h-10 w-10 rounded-sm"/>
                                        </div>

                                        <div className="ml-4 text-left">
                                            <p className="text-sm font-medium text-gray-900">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </a>
                                )}
                            </Popover>

                            <div className="flex gap-3 w-full">
                                <RadioGroup
                                    data={data}
                                    setData={setData}
                                    name="radio"
                                    options={[
                                        {title: 'First', description: "Don't select this!", value: 1},
                                        {title: 'Second', description: "Don't select this!", value: 2},
                                        {title: 'Third', description: "Don't select this!", value: 3},
                                    ]}
                                    containerClassName="w-full"
                                ></RadioGroup>

                                <RadioGroup
                                    data={data}
                                    setData={setData}
                                    name="radio"
                                    options={[
                                        {title: 'First', description: "Don't select this!", value: 1},
                                        {title: 'Second', description: "Don't select this!", value: 2},
                                        {title: 'Third', description: "Don't select this!", value: 3},
                                    ]}
                                    containerClassName="w-full p-1.5 rounded-xl bg-slate-800"
                                    textClassName="text-gray-200"
                                ></RadioGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};