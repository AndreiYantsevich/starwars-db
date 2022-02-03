import React, {FC, MouseEvent} from 'react';
import styles from './Button.module.css';

type PropsType = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    style?: {}
}

const Button: FC<PropsType> = ({children, ...props}) => {
    return (
        <button {...props} className={styles.myBtn}>
            {children}
        </button>
    );
};

export default Button;