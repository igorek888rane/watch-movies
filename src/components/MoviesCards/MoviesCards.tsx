import { FC, PropsWithChildren } from 'react'
import styles from './MoviesCards.module.scss'
import MovieCard from '@/components/MovieCard/MovieCard'
import { MoviesCardsPropsTypes } from './types'

const MoviesCards: FC<PropsWithChildren<MoviesCardsPropsTypes>> = ({
	movies,
}) => {
	return (
		<div className={styles.cards}>
			<ul className={styles.cards__list}>
				{movies.map(movie => (
					<li key={movie.id} className={styles.cards__item}>
						<MovieCard movie={movie} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default MoviesCards
