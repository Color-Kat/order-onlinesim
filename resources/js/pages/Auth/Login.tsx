import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Input} from "@components/Inputs";
import {BsPerson} from "react-icons/bs";
import {BiLockAlt} from "react-icons/bi";
import {IValidatorErrors} from "@/types/laravelEntities/IValidatorErrors.ts";
import {useLoginMutation} from "@/store/auth/auth.api.ts";
import {Checkbox} from "@components/Inputs";
import {LoadingButton} from "@components/Buttons";
import {StandardFilledButton} from "@UI/Buttons";
import {Helmet} from "react-helmet";

export const Login: React.FC = ({}) => {
    const [login, {error, isLoading}] = useLoginMutation();

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

    return (
        <div className="flex items-center justify-center w-full h-full py-48">
            <Helmet>
                <title>Login</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + "/login"}/>
            </Helmet>

            <form
                className="max-w-md w-full login text-center backdrop-blur-2xl bg-white/10 shadow-2xl shadow-black/10 md:px-16 md:py-20 px-8 py-16 rounded-3xl animate-slide-up"
            >
                <div className=" mb-8 ">
                    <h1 className="text-3xl font-bold tracking-widest animate-slide-up-slow">
                        Login
                    </h1>

                    {
                        (error as any)?.status === 429 &&
                            <p className="text-sm text-red-500 mt-5 leading-tight">
                                Too many requests. Try again later.
                            </p>
                    }
                </div>

                <div className="flex flex-col gap-3">
                    <Input
                        data={data}
                        setData={setData}
                        name="email"
                        type="email"
                        placeholder="Email"
                        Icon={BsPerson}
                        errorMessages={errors?.errors?.email}
                    />
                    <Input
                        data={data}
                        setData={setData}
                        name="password"
                        type="password"
                        placeholder="Password"
                        Icon={BiLockAlt}
                        errorMessages={errors?.errors?.password}
                    />

                    <div className="flex justify-between items-center mt-1" >
                        <Checkbox
                            data={data}
                            setData={setData}
                            name="remember"
                        >
                            Remember me
                        </Checkbox>

                        <Link to="/register" className="text-sm underline text-right text-blue-100">
                            Registration
                        </Link>
                    </div>
                </div>

                <LoadingButton
                    className="mt-8 w-full"
                    isLoading={isLoading}
                    onClick={handleSubmit}
                    ButtonComponent={StandardFilledButton}
                >
                    Login
                </LoadingButton>

               <div className={`mt-8 ${errors.message ? 'animate-pulse text-base text-slate-300' : 'text-sm text-slate-300'}`}>
                   <Link to="/forgot-password" className="underline text-right">
                       Forgot password?
                   </Link>
               </div>
            </form>
        </div>
    );
}