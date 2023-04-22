import Button from '../Button/Button'
import arrowSvg from '../../../assets/img/icons/arrow.svg'
import styles from './Slider.module.scss'
import { useResize } from '@/hooks/useResize'
import { useEffect, useState } from 'react'
import { FC, PropsWithChildren } from 'react'
import { SliderPropsTypes } from './types'

const Slider: FC<PropsWithChildren<SliderPropsTypes>> = ({
	children,
	widthItem,
	count,
}) => {
	const [margin, setMargin] = useState(0)
	const [widthGap, setWidthGap] = useState(0)
	const [widthSwap, setwidthSwap] = useState(0)
	let width = useResize().width

	useEffect(() => {
		function calcGap() {
			let widthSlider
			margin === 0
				? (widthSlider = width >= 1300 ? 1160 : width - 140)
				: (widthSlider = width >= 1300 ? 1120 : width - 180)

			let countItemsRendered = Math.floor(widthSlider / widthItem) - 1
			let widthGap =
				(widthSlider - countItemsRendered * widthItem) /
				(countItemsRendered - 1)

			console.log(widthSlider)
			setWidthGap(widthGap)
			setwidthSwap(widthSlider - widthItem)
		}
		calcGap()
		setMargin(0)
	}, [width])

	function slider(action: string) {
		if (action === 'next' && margin > -(count * widthItem)) {
			setMargin(margin - widthSwap)
		} else if (action === 'prev' && margin < 0) {
			setMargin(margin + widthSwap)
		}
	}

	return (
		<div
			className={styles.slider}
			style={{
				width: `${width - 100}px`,
			}}
		>
			{margin === 0 ? (
				''
			) : (
				<Button
					onClick={() => slider('prev')}
					imgLeft={arrowSvg}
					imgLeftContainer={styles.arrowLeft}
				/>
			)}
			<div className={styles.slider__list}>
				<div
					className={styles.slider__item}
					style={{
						marginLeft: `${margin}px`,
						gap: `${widthGap}px`,
					}}
				>
					{children}
				</div>
			</div>
			<Button
				onClick={() => slider('next')}
				imgRight={arrowSvg}
				imgRightContainer={styles.arrowRight}
			/>
		</div>
	)
}

export default Slider
