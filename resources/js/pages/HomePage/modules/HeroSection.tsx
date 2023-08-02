import React, {memo, useState} from "react";
import {BsChevronRight} from "react-icons/bs";
import {FaAngleRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import {H1} from "@UI/Typography";
import {FilledLink, TextLink} from "@UI/Links";

interface HeroSectionProps {

}

export const HeroSection: React.FC<HeroSectionProps> = memo(({}) => {
    const [a, setA] = useState(0);
    console.log(a)
    return (
        <section className="">
            <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">

                <div className="flex-none space-y-5 max-w-xl">

                    <a
                        href="https://colorbit.ru"
                        target="_blank"
                        className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
                    >
                        <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                            Спонсор
                        </span>
                        <p className="flex items-center gap-1">
                            Colorbit.ru - симулятор майнинга
                            <FaAngleRight/>
                        </p>
                    </a>

                    <H1 onClick={() => setA(prev => prev+1)}>
                        Разрабатывайте приложения легко
                    </H1>

                    <p>
                        Готовый шаблон сайта на стеке Ts, React, Tailwind, vite, PHP, Laravel <br/>
                        со всем необходимым, и даже больше, <br/> чтобы вы могли творить удивительные вещи!
                    </p>

                    <div className="flex items-center gap-x-3 sm:text-sm first-letter:capitalize">
                        <FilledLink to="/test">
                            <span className="hidden sm:block">Смотреть</span> компоненты
                        </FilledLink>

                        <TextLink to="/">
                            А это для красоты
                        </TextLink>
                    </div>
                </div>

                <div className="flex-1 hidden md:block">
                    <img
                        src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
                        className="w-full mx-auto sm:w-10/12 lg:w-full"
                    />
                </div>
            </div>
        </section>
    );
});