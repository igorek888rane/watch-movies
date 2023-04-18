import { FC, useRef, useState } from 'react'
import styles from './StepSlider.module.scss'
import { computePosition } from './../../../utils/computePosition'

interface StepSliderProps {
	steps: number[]
	value: number
	name: string
	setValue: (value: number) => void
}

const StepSlider: FC<StepSliderProps> = ({ steps, value, name, setValue }) => {
	const segment = steps.length
	const defaultLeft = (value / segment) * 100
	const defaultWidth = (value / segment) * 100

	const [left, setLeft] = useState(defaultLeft)
	const [width, setWidth] = useState(defaultWidth)
	const [dragging, setDragging] = useState('grab')

	const sliderRef = useRef(null)

	const handleClick = e => {
		setValue(computePosition(e, sliderRef, segment).valueRound)
		setWidth(computePosition(e, sliderRef, segment).valuePercents)
		setLeft(computePosition(e, sliderRef, segment).valuePercents)
	}

	const moveUp = () => {
		document.onpointermove = e => {
			e.preventDefault()
			setValue(computePosition(e, sliderRef, segment).valueRound)
			setWidth(computePosition(e, sliderRef, segment).relativePercents)
			setLeft(computePosition(e, sliderRef, segment).relativePercents)
		}
		document.onpointerup = e => {
			document.onpointerup = null
			document.onpointermove = null
			setDragging('grab')
			setValue(computePosition(e, sliderRef, segment).valueRound)
			setWidth(computePosition(e, sliderRef, segment).valuePercents)
			setLeft(computePosition(e, sliderRef, segment).valuePercents)
		}
	}

	const pointerDown = e => {
		e.preventDefault()
		setDragging('grabbing')
		moveUp()
	}

	return (
		<>
			<p className={styles.name}>{name}</p>
			<div className={styles.slider} ref={sliderRef} onClick={handleClick}>
				<div
					className={styles.slider__thumb}
					style={{ left: `${left}%`, cursor: `${dragging} ` }}
					onDragStart={() => false}
					onPointerDown={pointerDown}
				>
					<span className={styles.slider__value}>{value}</span>
				</div>

				<div
					className={styles.slider__progress}
					style={{ width: `${width}%` }}
				></div>

				<div className={styles.slider__steps}>
					{steps.map(el => (
						<span key={el}></span>
					))}
				</div>
			</div>
		</>
	)
}

export default StepSlider