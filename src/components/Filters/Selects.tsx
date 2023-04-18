import { FC } from 'react'
import styles from './Filters.module.scss'
import Select from '@/components/UI/Select/Select'

const Selects: FC = () => {
	return (
		<div className={styles.filters__row}>
			<Select
				name={'Жанры'}
				options={[
					'Вестерн',
					'Боевик',
					'Фантастика',
					'Комедия',
					'Детектив',
					'Триллер',
				]}
			/>
			<Select
				name={'Страны'}
				options={[
					'Россия',
					'США',
					'Герамания',
					'Франция',
					'Италия',
					'Южная Корея',
				]}
			/>
			<Select
				name={'Годы'}
				options={['2023', '2022', '2021', '2020', '2019', '2018']}
			/>
		</div>
	)
}

export default Selects