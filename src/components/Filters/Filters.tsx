import { FC } from 'react'
import styles from './Filters.module.scss'
import Selects from '@/components/Filters/Selects'
import Inputs from '@/components/Filters/Inputs'
import StepSliders from '@/components/Filters/StepSliders'

const Filters: FC = () => {
	return (
		<div className={styles.filters}>
			<Selects />
			<StepSliders />
			<Inputs />
		</div>
	)
}

export default Filters