import classes from './CustomModal.module.css'
import {ReactNode} from "react";

type PropsType = {
    children: ReactNode
    visible: boolean
    setVisible: (visible: boolean) => void
}

export const CustomModal = ({visible, children, setVisible}: PropsType) => {

    const rootClasses = [classes.modal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    const deactivateModalWindow = () => {
        setVisible(false)
    }

    return (
        // <div className={visible ? [classes.modal, classes.active].join(' ') : classes.modal} onClick={deactivateModalWindow}>
            <div className={rootClasses.join(' ')} onClick={deactivateModalWindow}>
                <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
    );
};
