import { MouseEventHandler } from 'react'

export interface ButtonPropsTypes {
	onClick?: MouseEventHandler
	type?: string
	url?: string
	imgLeft?: string
	imgRight?: string
	text?: string
	container?: any // ТИП
	imgLeftContainer?: any // ТИП
	imgRightContainer?: any // ТИП
	children?: React.ReactNode
}
