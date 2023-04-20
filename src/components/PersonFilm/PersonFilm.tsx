import React, { FC } from 'react'
import Link from 'next/link'
import styles from './PersonFilm.module.scss'
import Button from '@/components/UI/Button/Button'

const PersonFilm: FC = () => {
	return (
		<li className={styles.film}>
			<Link href='/movies' className={styles.film__link}>
				<div className={styles.film__container}>
					<img
						className={styles.film__image}
						src='https://tvshowguide.ru/wp-content/uploads/2022/08/a-confession.jpg'
						alt='Постер фильма "Исповедь"'
					/>
					<div className={styles.film__textContainer}>
						<p className={styles.film__year}>2019</p>
						<h3 className={styles.film__title}>Исповедь</h3>
						<div className={styles.film__rate}>Рейтинг Иви&#58;&#160;7,5</div>
						<Button
							type='Link'
							url='/movies'
							text='Подробнее'
							container={`${styles.film__button} ${styles.film__button_type_adaptive}`}
						/>
					</div>
				</div>
				<Button
					type='Link'
					url='/movies'
					text='Подробнее'
					container={`${styles.film__button} ${styles.film__button_type_desktop}`}
				/>
			</Link>
		</li>
	)
}

export default PersonFilm
