import React, { FC } from 'react'
import styles from './PersonFilms.module.scss'
import PersonFilm from '@/components/PersonFilm/PersonFilm'

const PersonFilms: FC = () => {
	return (
		<ul className={styles.films}>
			<PersonFilm />
			<PersonFilm />
			<PersonFilm />
			<PersonFilm />
			<PersonFilm />
			<PersonFilm />
			<PersonFilm />
			<PersonFilm />
		</ul>
	)
}

export default PersonFilms
