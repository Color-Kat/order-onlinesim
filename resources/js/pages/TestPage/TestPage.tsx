import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";
import React, {useState} from "react";
import {
    FileInput,
} from "@components/Inputs";
import {Col1} from "./modules/Col1.tsx";
import {Col2} from "./modules/Col2.tsx";
import {Col3} from "./modules/Col3.tsx";
import {Col4} from "./modules/Col4.tsx";
import {FloatingScrollbar} from "@components/Scrolls";

export const TestPage = () => {
    const user = useTSelector(state => state.auth.user);

    const [data, setData] = useState({
        images: [],
    });

    return (
        <div
            className="w-screen"
        >
            <Helmet>
                <title>Тест компонентов</title>
                <link rel="canonical" href="http://127.0.0.1:8000/test"/>
            </Helmet>

            <div className="w-full p-10 text-center">
                <FileInput
                    data={data}
                    setData={setData}
                    name="images"

                    buttonText="Выберите фото"
                    dragAndDropText="Перетащите фото сюда"
                />

                <FloatingScrollbar
                    className="w-full px-1.5 py-10 flex justify-between items-start gap-8 overflow-x-auto no-scrollbar relative"
                >

                    <Col1 />

                    <Col2 />

                    <Col3 />

                    <Col4 />
                </FloatingScrollbar>


            </div>
        </div>
    );
};