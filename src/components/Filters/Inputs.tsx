import { ChangeEvent, FC, useState } from 'react'
import styles from './Filters.module.scss'
import Input from '@/components/UI/Input/Input'

const Inputs: FC = () => {
	const [director, setDirector] = useState<string>('')
	const [actor, setActor] = useState<string>('')
	return (
		<div className={styles.filters__column}>
			<Input
				type={'text'}
				name={'actor'}
				label={'Поиск по актеру '}
				placeholder={'Введите имя актера '}
				value={actor}
				onChange={(e: ChangeEvent) => setActor(e.target.value)}
			/>
			<Input
				type={'text'}
				name={'director'}
				label={'Поиск по режиссеру'}
				placeholder={'Введите имя режиссера'}
				value={director}
				onChange={(e: ChangeEvent) => setDirector(e.target.value)}
			/>
		</div>
	)
}

export default Inputs