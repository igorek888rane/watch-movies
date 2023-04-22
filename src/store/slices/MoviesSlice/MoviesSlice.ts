import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IMovie } from '@/store/slices/MoviesSlice/types'
import movies from '../../../data/MoviesCardsData.json'

interface movieState {
	movies: IMovie[]
}

const initialState: movieState = {
	movies,
}

const moviesSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setMovies: (state, action: PayloadAction<IMovie[]>) => {
			state.movies = action.payload
		},
	},
})

export const { setMovies } = moviesSlice.actions
export default moviesSlice.reducer
