import React, {ChangeEvent, DragEvent, ReactNode, useCallback, useId, useRef} from 'react';
import {BsFillTrashFill} from "react-icons/bs";
import {PinkButton} from "@UI/Buttons";
import {twMerge} from "tailwind-merge";

export interface FileInputProps extends Partial<HTMLInputElement> {

    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;

    children?: any;

    buttonText?: string;
    containerClassName?: string;
}

export const SimpleFileInput: React.FC<FileInputProps> = ({
                                                              data,
                                                              setData,
                                                              name,

                                                              children,

                                                              buttonText = "Select photo",
                                                              containerClassName,
                                                              ...props
                                                          }) => {
    const imageId = useId();

    /**
     * Add files to list by Browse button.
     */
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        setData((prev: any) => {
            console.log(prev);
            return {
                ...prev,
                [name]: files ? files[0] : null
            };
        });

        // setData((prev: any) => ({
        //     ...prev,
        //     [name]: [
        //         ...prev[name],
        //         ...files
        //     ]
        // }));
    };

    return (
        <div
            className={twMerge(
                "relative flex flex-col items-center",
                'transition-colors duration-300',
                containerClassName
            )}
        >

            <div
                className="flex flex-col items-center justify-center text-center"
            >
                <input
                    {...props as any}
                    id={imageId}
                    type="file"
                    accept={props.accept ?? 'image/*'}
                    multiple={props.multiple === undefined ?? false}
                    className="hidden"
                    onChange={handleFileChange}
                    // disabled={props.disabled}
                />
            </div>

            <label htmlFor={imageId} className="text-lg tracking-wide font-roboto cursor-pointer">
                {children
                    ? children
                    : <PinkButton className="w-max h-max pointer-events-none">
                        {buttonText}
                    </PinkButton>
                }
            </label>
        </div>
    );
};