import {FC} from 'react';
import styles from './Filters.module.scss'
import Selects from "@/components/Filters/Selects";
import Inputs from "@/components/Filters/Inputs";

const Filters: FC = () => {
    return (
        <div className={styles.filters}>
            <Selects/>
            <Inputs/>
        </div>
    );
};

export default Filters;