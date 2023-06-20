import React, {useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import Input from "@UI/Form/Input.tsx";
import {Button} from "@UI/Buttons/Button.tsx";
import {BsPerson} from "react-icons/bs";


export const Login: React.FC = ({}) => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit =  async (e: any) => {
        e.preventDefault();
        // const result = await login(data);
        //
        // if('data' in result)
        //     dispatch(setUser(result.data));
    }

    // if(user) return <Navigate to="/" />;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <form className="login text-center backdrop-blur bg-white/20 px-8 py-16 rounded-xl">
                <div className="text-3xl font-bold font-kids tracking-widest mb-8">
                    <h1>Войти</h1>
                </div>

                <div className="space-y-5">
                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        placeholder="Почта"
                        Icon={BsPerson}
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                    />
                </div>

                <div className="mt-3 text-sm underline text-right">
                    <Link to="/registration">
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