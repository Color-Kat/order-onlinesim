import React, {memo, useCallback, useMemo, useState} from 'react';
import {H3} from "@UI/Typography";
import {SimpleInput} from "@components/Inputs";
import {CountryCard} from "@components/Cards";
import {ICountry} from "@/types/ICountry.ts";
import {IService} from "@/types/IService.ts";
import {BsCash} from "react-icons/bs";
import {Button, LoadingButton} from "@components/Buttons";
import {useNavigate} from "react-router-dom";

interface PlaceOrderProps {
    country: IService["countries"][number];
    service: IService;
}

export const OrderNumber: React.FC<PlaceOrderProps> = memo(({
                                                                country,
                                                                service
                                                            }) => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const handleOrder = () => {
        setIsLoading(true);
        console.log('order is placed');

        setTimeout(() => {
            setIsLoading(false);
            navigate('/my-numbers');
        }, 2000);
    }

    return (
        <section className="mb-20 px-8 flex gap-10 justify-between max-w-screen-xl mx-auto">

            <div className="text-slate-400 text-lg max-w-xl">
                <p>
                    Now you need to pay for the virtual number and we will send you the number. <br/>
                    It will be displayed on the My numbers page.
                    There you can see the list of sms messages.
                </p>
            </div>

            <div className="w-max bg-blue-600/30 rounded-xl sm:p-5 p-3 max-w-[380px]">
                <div className="flex items-center justify-between mb-5">
                    <H3 className="text-xl sm:text-2xl">
                        Order a virtual phone number
                    </H3>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                        <img className="w-9 h-9 mr-5 rounded-lg" src={country.image} alt={country.name}/>
                        <div className="font-semibold text-lg">{country.name}</div>
                    </div>

                    <div className="flex items-center">
                        <img className="w-9 h-9 mr-5" src={service.image} alt={service.name}/>
                        <div className="font-semibold text-lg">{service.name}</div>
                    </div>

                    <div className="flex items-center">
                        <BsCash className="w-9 h-9 mr-5 text-green-400" />
                        <div className="font-semibold text-lg">{country.price} ₽</div>
                    </div>

                    <LoadingButton
                        className="w-full mx-0"
                        onClick={handleOrder}
                        isLoading={isLoading}
                    >
                        Order
                    </LoadingButton>
                </div>
            </div>
        </section>
    );
});