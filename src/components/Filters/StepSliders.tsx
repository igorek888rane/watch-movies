import { FC, useState } from 'react'
import styles from './Filters.module.scss'
import StepSlider from '@/components/UI/StepSlider/StepSlider'

const StepSliders: FC = () => {
	const [ratingValue, setRatingValue] = useState(2)
	const [amountValue, setAmountValue] = useState(2)
	return (
		<div className={`${styles.filters__row}`}>
			<div className={styles.slider__item}>
				<StepSlider
					steps={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
					value={ratingValue}
					name={'Рейтинг:'}
					setValue={setRatingValue}
				/>
			</div>
			<div className={styles.slider__item}>
				<StepSlider
					steps={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
					value={amountValue}
					name={'Количество оценок:'}
					setValue={setAmountValue}
				/>
			</div>
		</div>
	)
}

export default StepSliders