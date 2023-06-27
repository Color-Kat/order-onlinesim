import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {BsPerson} from "react-icons/bs";
import {IValidatorErrors} from "@/types/laravelEntities/IValidatorErrors.ts";
import {useForgotPasswordMutation} from "@/store/auth/auth.api.ts";
import {useUser} from "@hooks/auth.ts";


export const ForgotPassword: React.FC = ({}) => {
    const user = useUser();

    const [forgotPassword, {isLoading}] = useForgotPasswordMutation();

    const [data, setData] = useState({
        email: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState<IValidatorErrors>({
        errors: {},
        message: ''
    });
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrors({
            errors: {},
            message: ''
        });

        const result = await forgotPassword(data);

        // Handle validator error
        if ('error' in result)
            return 'data' in result.error
                ? setErrors((result.error.data as IValidatorErrors))
                : false;

        if('data' in result)
            setSuccessMessage('Ссылка для сброса пароля была отправлена Вам на почту');
    }

    return (
        <div className="flex items-center justify-center w-full h-full">
            <form
                className="max-w-md w-full login text-center backdrop-blur-2xl bg-white/10 shadow-2xl shadow-black/10 md:px-16 md:py-20 px-8 py-16 rounded-3xl animate-slide-up"
            >
                <div className="mb-8 ">
                    <h1 className="text-3xl font-bold font-kids tracking-widest animate-slide-up-slow">Восстановить
                        пароль</h1>
                    <p className="leading-tight text-sm mt-5">
                        Мы отправим письмо с ссылкой для восстановления пароля на указанный email
                    </p>

                    {successMessage && <p className="leading-tight text-emerald-500 mt-2">
                        {successMessage}
                    </p>}
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
                </div>

                <Button
                    filled={true}
                    className="mt-5 w-full"
                    onClick={handleSubmit}
                    isLoading={isLoading}
                >
                    Отправить письмо
                </Button>

                <div className="mt-8">
                    <Link to="/login" className="underline text-right text-neutral-600">
                        Войти
                    </Link>
                </div>
            </form>
        </div>
    );
}