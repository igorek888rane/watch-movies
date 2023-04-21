import { IMovie } from '@/store/slices/MoviesSlice/types'
import { ReactNode } from 'react'

export interface SliderPropsTypes {
	children: React.ReactNode
	widthItem: number
	count: number
}
