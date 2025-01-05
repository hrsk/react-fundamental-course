import {InputHTMLAttributes} from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>

export const CustomInput = ({value, type, className, onChange, placeholder}: CustomInputProps) => {
    return (
        <input value={value} type={type} className={className} onChange={onChange} placeholder={placeholder}/>
    );
};
