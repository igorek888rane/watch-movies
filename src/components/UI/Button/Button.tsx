import { FC, PropsWithChildren} from 'react';
import { ButtonPropsTypes } from '@/components/UI/Button/types';
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<ButtonPropsTypes>> = ({url, children}) => {
    return (
        <a href={url} target="_blank" className={styles.button}>
            {children}
        </a>
    );
};

export default Button;