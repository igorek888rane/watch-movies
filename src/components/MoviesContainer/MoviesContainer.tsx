import {FC} from 'react';
import styles from './Movies.module.scss'
import {PopUp} from '../UI/PopUp/PopUp';
import Filters from '@/components/Filters/Filters';
import MoviesCards from "@/components/MoviesCards/MoviesCards";

const MoviesContainer: FC = () => {
    return (
        <div className={`${styles.movies} container`}>
            <PopUp/>
            <Filters/>
            <MoviesCards/>
            {/*<div className={styles.movies__cards}>*/}
            {/*</div>*/}
        </div>
    );
};

export default MoviesContainer;
