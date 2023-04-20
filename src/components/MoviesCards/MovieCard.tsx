import React, { FC } from 'react'
import styles from './MoviesCards.module.scss'

const MovieCard: FC = ({ movie }) => {
	return (
		<li>
			<a href='#'>
				<div className={styles.carts_wrapper}>
					<div className={styles.cart}>
						<div className={styles.image_section}>
							<div className={styles.image_div}>
								<img src={movie.imageUrl} alt={movie.title} />
								<div className={styles.hover_div}>
									<div className={styles.up_hov}>
										<div className={styles.icons}>
											<img src='/save.svg' alt='save' />
											<div className={styles.icons_abs_1}>Смотреть позже</div>
										</div>
										<div className={styles.icons_2}>
											<img src='/magic.svg' alt='magic' />
											<div className={styles.icons_abs_1}>Похожее</div>
										</div>
										<div className={styles.icons_3}>
											<img src='/star.svg' alt='star' />
											<div className={styles.icons_abs_1}>
												Уже смотрел оценить
											</div>
										</div>
										<div className={styles.icons_4}>
											<img src='/circle-off.svg' alt='cancel' />
											<div className={styles.icons_abs_1}>
												Не нравится такое
											</div>
										</div>
									</div>
									<div className={styles.down_hov}>
										<div className={styles.section_0}>
											<div className={styles.section_0_left}>
												<span className={styles.big_s}>
													{movie.rating.toString()[0]}
												</span>
												<span className={styles.small_s}>
													<span>
														{movie.rating.toString()[1].replace('.', ',')}
													</span>
													{movie.rating.toString()[2]}
												</span>
											</div>
											<div className={styles.section_0_right}>
												<div className={styles.child}>
													<div className={styles.child_rating_1}></div>
												</div>
												<div className={styles.child}>
													<div className={styles.child_rating_2}></div>
												</div>
												<div className={styles.child}>
													<div className={styles.child_rating_2}></div>
												</div>
												<div className={styles.child}>
													<div className={styles.child_rating_3}></div>
												</div>
											</div>
										</div>

										<div className={styles.section_1}>
											<span>{movie.typesS}</span>
											<div className={styles.section_1_rating}>
												<div></div>
											</div>
										</div>
										<div className={styles.section_2}>
											<p>
												{movie.yearIssue},{movie.country}
											</p>
											<p>{movie.genre}</p>
										</div>
										<div className={styles.section_2_child}>
											<p>{movie.duration} минуты</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.text_section}>
							<div className={styles.title_div}>
								{movie.title.length > 17 ? (
									<span>{movie.title.slice(0, 16) + '...'}</span>
								) : (
									<span>{movie.title}</span>
								)}
							</div>
							{movie.types === 0 ? (
								<div className={styles.types_div}>
									<span>Подписка</span>
								</div>
							) : (
								<div className={styles.types_div_2}>
									<span>Бесплатно</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</a>
		</li>
	)
}

export default MovieCard
