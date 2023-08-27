
import {BigPage, Page} from "@modules/PageTemplates";
import {Helmet} from "react-helmet";
import React, {useEffect, useState} from "react";

import ReactMarkdown from "react-markdown";

export const Policy = () => {
    const [policyContent, setPolicyContent] = useState('');

    useEffect(() => {
        const fetchPolicyContent = async () => {
            try {
                const response = await fetch('/storage/policy.md');
                const data = await response.text();
                setPolicyContent(data);
            } catch (error) {
                console.error('Error fetching policy content:', error);
            }
        };

        fetchPolicyContent();
    }, []);

    return (
        <BigPage className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8 sm:pt-16 prose">
            <Helmet>
                <title>Policy</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_URL + "/policy"}/>
            </Helmet>

            <ReactMarkdown className="markdown text-blue-100">
                {policyContent}
            </ReactMarkdown>
        </BigPage>
    )
}