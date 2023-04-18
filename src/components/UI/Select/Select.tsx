import React, { FC, useState, MouseEvent } from 'react'
import styles from './Select.module.scss'

interface SelectProps {
	name: string
	options: string[]
}

const Select: FC<SelectProps> = ({ name, options }) => {
	const [visibility, setVisibility] = useState<boolean>(false)
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		if (e.target.closest(`#${name}`)) {
			setVisibility(!visibility)
		}
	}
	return (
		<div className={styles.select}>
			<button
				id={name}
				onClick={handleClick}
				className={`${styles.select__btn} ${visibility ? styles.active : ''}`}
			>
				<p className={styles.select__name}>{name}</p>
				<div
					className={`${styles.select__arrow} ${visibility ? styles.up : ''}`}
				>
					<img src='/arrow_down.svg' width={16} />
				</div>
			</button>
			{visibility && (
				<div className={styles.select_popUp}>
					{options.map(item => (
						<p key={item} className={styles.select__item}>
							{item}
						</p>
					))}
				</div>
			)}
		</div>
	)
}

export default Select