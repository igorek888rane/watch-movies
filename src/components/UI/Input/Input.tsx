import { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
	name: string
	type: string
	label: string
	placeholder: string
	value: string
	onChange: (e: ChangeEvent) => void
}

const Input: FC<InputProps> = ({
	name,
	type,
	label,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<div className={styles.input__block}>
			<label htmlFor={name}>{label}</label>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{value && <div className={styles.input__help}>{value}</div>}
		</div>
	)
}

export default Input