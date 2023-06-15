import Page from '@/components/PageTemplates/Page';
import {Helmet} from "react-helmet";

export const HomePage = () => {
    return (
        <Page
            title="Hey, are you my master?"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000" />
            </Helmet>

            <div className="p-10">
                <div className="animate-slide-up ">
                    Hello, new project ;)
                </div>
            </div>
        </Page>
    );
};