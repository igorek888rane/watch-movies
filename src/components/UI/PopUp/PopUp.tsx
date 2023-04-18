import React from 'react'
import styles from './PopUp.module.scss'
import { sortList } from './PopUpItem'

export const PopUp: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const [selected, setSelected] = React.useState<number>(0)
	const sortRef = React.useRef<HTMLDivElement>(null)

	const selectedName = sortList[selected]

	const onClickSort = (idx: number) => {
		setSelected(idx)
		setOpen(false)
	}

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const path = event.composedPath ? event.composedPath() : null

			if (sortRef.current && !path?.includes(sortRef.current)) {
				setOpen(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)
	}, [])

	return (
		<div className={styles.wrapper}>
			<div
				ref={sortRef}
				onClick={() => setOpen(!open)}
				className={styles.popUpWrapper}
			>
				<div className={styles.filter_burg}>
					<div className={styles.solid_1}></div>
					<div className={styles.solid_2}></div>
					<div className={styles.solid_3}></div>
				</div>
				<div>
					<span className={styles.sort_name}>
						{selectedName.includes('По') ? selectedName : 'По ' + selectedName}
					</span>
				</div>
				<div>
					<img
						src='/arrow_down.svg'
						width={16}
						className={!open ? styles.svg_arrowDown : styles.svg_arrowUp}
					/>
				</div>
			</div>
			{open && (
				<div className={styles.list_item}>
					<div className={styles.default_item}>
						<span>Сортировать</span>
					</div>
					{sortList.map((elm, idx) => (
						<div
							onClick={() => onClickSort(idx)}
							className={styles.item}
							key={idx}
						>
							<span className={selected === idx ? styles.light : ''}></span>
							<p>{elm}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
