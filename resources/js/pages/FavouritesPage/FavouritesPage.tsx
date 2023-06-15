import {Helmet} from "react-helmet";
import {Page} from '@modules/PageTemplates';


export const FavouritesPage = () => {

    return (
        <Page
            title="I am another page"
        >
            <Helmet>
                <title>Another page</title>
                <link rel="canonical" href="http://127.0.0.1:8000" />
            </Helmet>

            Hi, another page ;)
        </Page>
    );
};