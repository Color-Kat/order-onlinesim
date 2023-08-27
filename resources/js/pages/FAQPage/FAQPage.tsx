import {Helmet} from "react-helmet";
import React, {useRef, useState} from "react";
import {Page} from "@modules/PageTemplates";
import {BsDashLg, BsPlusLg} from "react-icons/bs";
import {H1, H2} from "@UI/Typography";
import {useTranslation} from "react-i18next";

const FaqsCard = ({faqsList}: {faqsList: {question: string, answer: string}}) => {

    const answerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState('0px');

    const handleOpenAnswer = () => {
        if(!answerRef.current) return;

        const answerElH = (answerRef.current.childNodes[0] as any).offsetHeight;
        setIsOpen(prev => !prev);
        setAnswerHeight(`${answerElH + 20}px`);
    };

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
        >
            <h4
                className="cursor-pointer pb-5 flex items-center justify-between text-lg text-blue-100 font-medium"
                onClick={handleOpenAnswer}
            >
                {faqsList.question}
                {
                    isOpen
                        ? <BsDashLg className="h-7 w-7 shrink-0 text-blue-200 ml-2"/>
                        : <BsPlusLg className="h-7 w-7 shrink-0 text-blue-200 ml-2"/>
                }
            </h4>

            <div
                ref={answerRef}
                className="duration-300"
                style={isOpen ? {height: answerHeight} : {height: '0px'}}
            >
                <div>
                    <p className="text-slate-300">
                        {faqsList.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const FAQPage = () => {

    const {t, } = useTranslation();

    const faqsList: {
        question: string,
        answer: string
    }[] = t('FAQPage') as any;

    return (
        <Page
            className="w-screen pt-0"
        >
            <Helmet>
                <title>FAQ</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + "/faq"}/>
            </Helmet>

            <section className="leading-relaxed max-w-screen-xl mt-32 mx-auto px-4 md:px-8">

                <div className="space-y-3 text-center">
                    <H1 className="">
                        FAQ
                    </H1>

                    <H2>
                        Frequently asked questions
                    </H2>
                </div>

                <div className="mt-14 max-w-2xl mx-auto">
                    {
                        faqsList.map((item, i) => (
                            <FaqsCard
                                key={i}
                                faqsList={item}
                            />
                        ))
                    }
                </div>

            </section>
        </Page>
    );
};