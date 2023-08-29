import React, {memo} from 'react';
import {SimpleInput} from "@components/Inputs";
import {SimpleInputProps} from "@components/Inputs/Input/types.ts";

type EditableDivProps = {
    isEdit: boolean;
} & SimpleInputProps;

export const EditableDiv: React.FC<EditableDivProps> = ({
                                                            isEdit,
                                                            data,
                                                            setData,
                                                            name,
                                                            ...props
                                                        }) => {

    if (!isEdit)
        return data[name];

    if (isEdit)
        return (
            <SimpleInput
                {...props}
                data={data}
                setData={setData}
                name={name}
            />
        );
};