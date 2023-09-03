import React, {memo, useCallback} from 'react';
import {Page} from "@modules/PageTemplates";
import {H1, H2} from "@UI/Typography";
import {Button} from "@components/Buttons";
import {useIncreaseBalanceMutation} from "@/store/wallet/wallet.api.ts";

interface FinancePageProps {

}

export const FinancePage: React.FC<FinancePageProps> = memo(({}) => {
    const [increaseBalance] = useIncreaseBalanceMutation();
    
    const handleIncreaseBalance = useCallback(() => {
        increaseBalance({
            amount: 10
        });
    }, []);

    return (
        <Page
            className="pt-10"
        >
            <div className="pb-3 border-b border-slate-700">
                <H2>Finance</H2>
            </div>

            <div className="pt-16 whitespace-nowrap">
                <Button className="mx-0 w-max" onClick={handleIncreaseBalance}>Пополнить баланс</Button>
            </div>
        </Page>
    );
});