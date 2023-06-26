import {Page} from '@modules/PageTemplates';
import {Helmet} from "react-helmet";
import {useTSelector} from "@hooks/redux.ts";

export const HomePage = () => {
    const user = useTSelector(state => state.auth.user);

    return (
        <Page
            title="Hey, are you my master?"
        >
            <Helmet>
                <title>Главная</title>
                <link rel="canonical" href="http://127.0.0.1:8000"/>
            </Helmet>

            <div className="p-10">
                <div className="animate-slide-up ">
                    Hello, {user
                        ? user.name
                        : 'new project'
                    } ;)
                </div>
            </div>
        </Page>
    );
};