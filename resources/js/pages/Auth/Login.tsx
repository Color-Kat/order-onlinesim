import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {BsPerson} from "react-icons/bs";
import {BiLockAlt} from "react-icons/bi";
import {IValidatorErrors} from "@/types/laravelEntities/IValidatorErrors.ts";
import {useLoginMutation} from "@/store/auth/auth.api.ts";
import Checkbox from "@UI/Form/Checkbox.tsx";
import {useUser} from "@hooks/auth.ts";

export const Login: React.FC = ({}) => {
    const user = useUser();

    const [login] = useLoginMutation();

    const [data, setData] = useState({
        email: '',
        password: '',
        remember: true
    });

    const [errors, setErrors] = useState<IValidatorErrors>({
        errors: {},
        message: ''
    });
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErrors({
            errors: {},
            message: ''
        });

        const result = await login(data);

        // Handle validator error
        if ('error' in result)
            return 'data' in result.error
                ? setErrors((result.error.data as IValidatorErrors))
                : false;
    }

    // Auth guard
    if (user) return <Navigate to="/"/>;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <form
                className="max-w-md w-full login text-center backdrop-blur-2xl bg-white/10 shadow-2xl shadow-black/10 md:px-16 md:py-20 px-8 py-16 rounded-3xl animate-slide-up"
            >
                <div className="text-3xl font-bold font-kids tracking-widest mb-8 animate-slide-up-slow">
                    <h1>Войти</h1>
                </div>

                <div className="flex flex-col gap-3">
                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        type="email"
                        placeholder="Почта"
                        Icon={BsPerson}
                        errorMessages={errors?.errors?.email}
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        Icon={BiLockAlt}
                        errorMessages={errors?.errors?.password}
                    />

                    <div className="flex justify-between items-center mt-1" >
                        <Checkbox
                            data={data}
                            setData={setData}
                            name="remember"
                        >
                            Запомнить меня
                        </Checkbox>

                        <Link to="/register" className="text-sm underline text-right text-black">
                            Регистрация
                        </Link>
                    </div>
                </div>

                <Button
                    filled={true}
                    className="mt-8 w-full"
                    onClick={handleSubmit}
                >
                    Войти
                </Button>

               <div className={`mt-8 ${errors.message ? 'animate-pulse text-base text-neutral-800' : 'text-sm text-neutral-600'}`}>
                   <Link to="/forgot-password" className="underline text-right">
                       Забыли пароль?
                   </Link>
               </div>
            </form>
        </div>
    );
}