import { combineReducers, configureStore } from '@reduxjs/toolkit'
import movies from './slices/MoviesSlice/MoviesSlice'

const rootReducer = combineReducers({
	movies,
})

export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']