import { FC, PropsWithChildren } from 'react'
import { ButtonPropsTypes } from './types'
import Image from 'next/image'

const Button: FC<PropsWithChildren<ButtonPropsTypes>> = ({
	onClick,
	type = 'Button',
	url,
	imgLeft = '',
	imgLeftContainer = '',
	imgRight = '',
	imgRightContainer = '',
	text,
	container = '',
	children,
}) => {
	if (type === 'Button') {
		return (
			<button onClick={onClick} className={container}>
				{imgLeft ? (
					<Image alt='logo' className={imgLeftContainer} src={imgLeft}></Image>
				) : (
					''
				)}
				{text}
				{imgRight ? (
					<Image
						alt='logo'
						className={imgRightContainer}
						src={imgRight}
					></Image>
				) : (
					''
				)}
				{children}
			</button>
		)
	}
	if (type === 'Link') {
		return (
			<a href={url} target='_blank' className={container}>
				{imgLeft ? (
					<Image alt='logo' className={imgLeftContainer} src={imgLeft}></Image>
				) : (
					''
				)}
				{text}
				{imgRight ? (
					<Image
						alt='logo'
						className={imgRightContainer}
						src={imgRight}
					></Image>
				) : (
					''
				)}
				{children}
			</a>
		)
	} else return <div></div>
}

export default Button
