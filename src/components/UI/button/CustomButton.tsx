import {ReactNode} from "react";

type PropsType = {
    children: ReactNode
    onClick: (e: any) => void
    className: string | undefined
}

export const CustomButton = ({children, className, ...props}: PropsType) => {
    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
};
