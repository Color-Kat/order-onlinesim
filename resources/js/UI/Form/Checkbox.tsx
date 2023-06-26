import React, {FunctionComponent, InputHTMLAttributes, ReactNode} from "react";

interface CheckboxProps extends InputHTMLAttributes<any>{
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;

    children: ReactNode;
    className?: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({children, data, setData, name, className, ...props}) => {
    return (
        <label htmlFor={name} className="text-sm text-neutral-800 flex items-center pl-0.5">

            <input
                id={name}
                name={name}
                type="checkbox"
                checked={data[name]}

                onChange={() => {
                    setData((prev: any) => ({
                        ...prev,
                        [name]: !prev[name]
                    }))
                }}

                className="mr-2 accent-app-accent w-3.5 h-3.5"
                {...props}
            />

            {children}
        </label>
    );
};

export default Checkbox;