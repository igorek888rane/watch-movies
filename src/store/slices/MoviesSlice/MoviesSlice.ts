import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {IMovie} from "@/store/slices/MoviesSlice/types";
import movie from '../../../data/MoviesCardsData.json'

interface MoviesState {
    movies: IMovie[]
}

const initialState:MoviesState = {
    movies: movie
}

const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload
        }
    },
})

export const {} = moviesSlice.actions
export default moviesSlice.reducer