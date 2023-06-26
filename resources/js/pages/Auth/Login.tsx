import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {BsPerson} from "react-icons/bs";
import {BiLockAlt} from "react-icons/bi";
import {IValidatorErrors} from "@/types/laravelEntities/IValidatorErrors.ts";
import {useGetUserQuery, useLoginMutation, useLogoutMutation} from "@/store/auth/auth.api.ts";
import {useTSelector} from "@hooks/redux.ts";


export const Login: React.FC = ({}) => {
    const [login] = useLoginMutation();
    const [logout] = useLogoutMutation();
    // const {data: user } = useGetUserQuery();
    const user = useTSelector(state => state.auth.user);

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        console.log(user);
        // logout();
    }, [user]);

    const [errors, setErrors] = useState<IValidatorErrors|{}>({});
    const handleSubmit =  async (e: any) => {
        e.preventDefault();
        setErrors({});

        const result = await login(data);

        // Handle validator error
        if ('error' in result)
            return 'data' in result.error
                ? setErrors((result.error.data as IValidatorErrors))
                : false;
    }

    // if(user) return <Navigate to="/" />;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <form className="login text-center backdrop-blur-2xl bg-white/10 shadow-2xl shadow-black/10 md:px-16 md:py-20 px-8 py-16 rounded-3xl">
                <div className="text-3xl font-bold font-kids tracking-widest mb-8">
                    <h1>Войти</h1>
                </div>

                <div className="space-y-5">
                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        type="email"
                        placeholder="Почта"
                        Icon={BsPerson}
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        Icon={BiLockAlt}
                    />
                </div>

                <div className="mt-3 text-sm underline text-right text-black">
                    <Link to="/register">
                        Регистрация
                    </Link>
                </div>

                <Button
                    filled={true}
                    className="mt-6 w-full"
                    onClick={handleSubmit}
                >
                    Войти
                </Button>
            </form>
        </div>
    );
}