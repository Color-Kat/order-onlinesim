import React, {memo, useCallback, useState} from 'react';
import {Input, SimpleFileInput} from "@components/Inputs";
import {BlueButton} from "@UI/Buttons";
import {useCreateServiceMutation} from "@/store/admin/services/services.api.ts";
import {toFormData} from "@/utils/toFormData.ts";

interface CreateServiceProps {

}

export const CreateService: React.FC<CreateServiceProps> = memo(({}) => {
    const [createService, {error}] = useCreateServiceMutation();

    const [newService, setNewService] = useState({
        name: '',
        short_name: '',
        image: null,
        default_price: ''
    });

    const handleCreateService = useCallback(async () => {
        await createService(toFormData(newService));
    }, [newService]);

    return (
        <>
            <div className="text-red-500 text-sm">
                {(error as any)?.data?.message}
            </div>

            <div className="flex gap-5 items-center mt-2">
                <SimpleFileInput
                    data={newService}
                    setData={setNewService}
                    name="image"
                    buttonText="Select icon"
                />

                <Input
                    data={newService}
                    setData={setNewService}
                    name="name"
                    placeholder="Service name"
                    className="py-1.5"
                />

                <Input
                    data={newService}
                    setData={setNewService}
                    name="short_name"
                    placeholder="Short name"
                    className="py-1.5"
                />

                <Input
                    data={newService}
                    setData={setNewService}
                    name="default_price"
                    type="number"
                    placeholder="Default price"
                    className="py-1.5"
                />

                <BlueButton onClick={handleCreateService}>
                    Create
                </BlueButton>
            </div>
        </>
    );
});