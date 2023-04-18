import {FC} from 'react';
import styles from './MoviesCards.module.scss';
import MovieCard from "@/components/MoviesCards/MovieCard";
import {useAppSelector} from "@/hooks/useApp";

const MoviesCards: FC = () => {
    const {movies} = useAppSelector(state => state.movies)
    return (
        <div className={styles.cart_container}>
            <div className={styles.wrapper}>
                <ul>
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                </ul>
            </div>
        </div>
    );
};

export default MoviesCards