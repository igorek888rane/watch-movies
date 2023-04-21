import { FC } from 'react'
import styles from './Movies.module.scss'
import { PopUp } from '../UI/PopUp/PopUp'
import Filters from '@/components/Filters/Filters'
import MoviesCards from '@/components/MoviesCards/MoviesCards'
import { useAppSelector } from '@/hooks/useApp'

const MoviesContainer: FC = () => {
	const { movies } = useAppSelector(state => state.movies)

	return (
		<div className={`${styles.movies} container`}>
			<PopUp />
			<Filters />
			<MoviesCards movies={movies} />
		</div>
	)
}

export default MoviesContainer
