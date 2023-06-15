import {Page} from '@modules/PageTemplates';

export const HomePage = () => {
    return (
        <Page
            title="Hey, are you my master?"
        >
            <div className="p-10">
                <div className="animate-slide-up ">
                    Hello, new project ;)
                </div>
            </div>
        </Page>
    );
};