import React, {useState} from 'react';
import {Input} from "@components/Inputs";
import {BiLockAlt, BiLockOpenAlt} from "react-icons/bi";
import {FiMail} from "react-icons/fi";
import {useResetPasswordMutation} from "@/store/auth/auth.api.ts";
import {IValidatorErrors} from "@/types/laravelEntities/IValidatorErrors.ts";
import {Link, useSearchParams} from "react-router-dom";
import {LoadingButton} from "@components/Buttons";
import {StandardFilledButton} from "@UI/Buttons";

export const PasswordReset: React.FC = ({}) => {
    const [searchParams] = useSearchParams();

    const [resetPassword, {isLoading}] = useResetPasswordMutation();

    const [data, setData] = useState({
        email: searchParams.get('email') ?? '',
        token: searchParams.get('token') ?? '',
        password: '',
        password_confirmation: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState<IValidatorErrors>({
        errors: {},
        message: ''
    });
    const handleSubmit =  async (e: any) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrors({
            errors: {},
            message: ''
        });

        const result = await resetPassword(data);

        // Handle validator error
        if ('error' in result)
            return 'data' in result.error
                ? setErrors((result.error.data as IValidatorErrors))
                : false;

        setSuccessMessage('Ваш пароль был сброшен!');
    }

    return (
        <div className="flex items-center justify-center w-full h-full">
            <form className="login text-center backdrop-blur-2xl bg-white/10 shadow-2xl shadow-black/10 md:px-16 md:py-20 px-8 py-16 rounded-3xl animate-slide-up">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-widest animate-slide-up-slow">Сброс пароля</h1>

                    {successMessage && <div className="text-emerald-500 leading-tight mt-5">
                        <p>{successMessage}</p>
                        <Link to="/login" className="block underline text-lg text-neutral-700 animate-pulse pt-3">
                            Войти
                        </Link>
                    </div>}
                </div>

                <div className="space-y-3.5">
                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        type="email"
                        placeholder="Email"
                        Icon={FiMail}
                        errorMessages={errors?.errors?.email}
                        disabled
                    />

                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        Icon={BiLockOpenAlt}
                        errorMessages={errors?.errors?.password}
                    />

                    <Input
                        data={data}
                        setData={setData}
                        name="password_confirmation"
                        type="password"
                        placeholder="Повторите пароль"
                        Icon={BiLockAlt}
                        errorMessages={errors?.errors?.password_confirmation}
                    />
                </div>

                <LoadingButton
                    className="mt-8 w-full"
                    isLoading={isLoading}
                    onClick={handleSubmit}
                    ButtonComponent={StandardFilledButton}
                >
                    Обновить пароль
                </LoadingButton>
            </form>
        </div>
    );
}