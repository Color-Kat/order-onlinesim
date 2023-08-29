import React, {ChangeEvent, DragEvent, useCallback, useRef} from 'react';
import {BsFillTrashFill} from "react-icons/bs";
import {PinkButton} from "@UI/Buttons";
import {twMerge} from "tailwind-merge";

export interface FileInputProps extends Partial<HTMLInputElement> {

    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;

    buttonText?: string;
    dragAndDropText?: string;
    containerClassName?: string;
}

export const SimpleFileInput: React.FC<FileInputProps> = ({
                                                        data,
                                                        setData,
                                                        name,

                                                        buttonText = "Select photo",
                                                        containerClassName,
                                                        ...props
                                                    }) => {
    /**
     * Add files to list by Browse button.
     */
    const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);
        setData((prev: any) => ({
            ...prev,
            [name]: [
                ...prev[name],
                ...files
            ]
        }));
    }, []);

    /**
     * Delete one file.
     * @param file
     */
    const deleteFile = useCallback((file: File) => {
        setData((prev: any) => ({
            ...prev,
            [name]: prev[name].filter((prevFile: File) => prevFile !== file)
        }));
    }, []);

    /**
     * Clear all files
     */
    const clearFiles = useCallback(() => {
        setData((prev: any) => ({
            ...prev,
            [name]: []
        }));
    }, []);

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
                    id="photoInput"
                    type="file"
                    accept={props.accept ?? 'image/*'}
                    multiple={props.multiple === undefined ?? true}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>

            <label htmlFor="photoInput" className="text-lg tracking-wide font-roboto cursor-pointer">
                <PinkButton className="w-max h-max pointer-events-none">
                    {buttonText}
                </PinkButton>
            </label>
        </div>
    );
}