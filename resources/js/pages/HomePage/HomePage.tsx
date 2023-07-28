import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import React, {useState} from "react";
import {
    FileInput,
} from "@components/Inputs";
import {Col1} from "@pages/HomePage/modules/Col1.tsx";
import {Col2} from "@pages/HomePage/modules/Col2.tsx";
import {Col3} from "@pages/HomePage/modules/Col3.tsx";
import {Col4} from "@pages/HomePage/modules/Col4.tsx";

export const HomePage = () => {
    const user = useTSelector(state => state.auth.user);

    const [data, setData] = useState({
        images: [],
    });

    return (
        <div
            className="w-screen"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000"/>
            </Helmet>

            <h1 className="text-center text-xl font-bold mb-5">Hey, are you my master?</h1>

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

                <div className="w-full py-10 flex justify-between items-start gap-8 overflow-x-aut no-scrollbar">

                    <Col1 />

                    <Col2 />

                    <Col3 />

                    <Col4 />
                </div>
            </div>
        </div>
    );
};