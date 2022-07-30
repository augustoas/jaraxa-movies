import { configureStore } from '@reduxjs/toolkit'
import setMovieReducer from './slices/movieSlice'

export default configureStore({
  reducer: {
    setModalMovie:setMovieReducer
  }
})