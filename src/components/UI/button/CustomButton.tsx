import {ReactNode} from "react";
import classes from "./CustomButton.module.css"

type PropsType = {
    children: ReactNode
    onClick: (e: any) => void
    className?: string | undefined
}

export const CustomButton = ({children, className, ...props}: PropsType) => {
    return (
        <button {...props} className={className ? className : classes.button}>
            {children}
        </button>
    );
};
