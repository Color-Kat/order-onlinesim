
import {BigPage, Page} from "@modules/PageTemplates";
import {Helmet} from "react-helmet";
import React, {useEffect, useState} from "react";

import ReactMarkdown from "react-markdown";

export const Terms = () => {
    const [termsContent, setTermsContent] = useState('');

    useEffect(() => {
        const fetchPolicyContent = async () => {
            try {
                const response = await fetch('/storage/terms.md');
                const data = await response.text();
                setTermsContent(data);
            } catch (error) {
                console.error('Error fetching terms and conditions content:', error);
            }
        };

        fetchPolicyContent();
    }, []);

    return (
        <BigPage className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8 sm:pt-16 prose">
            <Helmet>
                <title>Policy</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + "/terms"}/>
            </Helmet>

            <ReactMarkdown className="markdown text-blue-100">
                {termsContent}
            </ReactMarkdown>
        </BigPage>
    )
}