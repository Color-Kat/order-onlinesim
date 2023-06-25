import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {BsPerson} from "react-icons/bs";
import {BiLockAlt, BiLockOpenAlt} from "react-icons/bi";
import {FiMail} from "react-icons/fi";
import {useSanctum} from "react-sanctum";
import {useRegisterMutation} from "@/store/auth/auth.api.ts";


export const Register: React.FC = ({}) => {
    const [register] = useRegisterMutation();
    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({});
    const handleSubmit =  async (e: any) => {
        e.preventDefault();

        const res = await register(data);
        console.log(res)
    }

    // if(user) return <Navigate to="/" />;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <form className="login text-center backdrop-blur-2xl bg-white/10 shadow-2xl shadow-black/10 md:px-16 md:py-20 px-8 py-16 rounded-3xl animate-slide-up animate">
                <div className="text-3xl font-bold font-kids tracking-widest mb-8 animate-slide-up-slow">
                    <h1>Регистрация</h1>
                </div>

                <div className="space-y-5">
                    <Input
                        data={data}
                        setData={setData}
                        name="name"
                        placeholder="Имя"
                        Icon={BsPerson}
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        type="email"
                        placeholder="Email"
                        Icon={FiMail}
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        Icon={BiLockOpenAlt}
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="password_confirmation"
                        type="password"
                        placeholder="Повторите пароль"
                        Icon={BiLockAlt}
                    />
                </div>

                <div className="mt-3 text-sm underline text-right text-black">
                    <Link to="/login">
                        Уже зарегистрированы?
                    </Link>
                </div>

                <Button
                    filled={true}
                    className="mt-6 w-full"
                    onClick={handleSubmit}
                >
                    Создать аккаунт
                </Button>
            </form>
        </div>
    );
}