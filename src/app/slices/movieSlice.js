import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  movie: {},
  open: false
}

export const movieSlice = createSlice({
  name: 'setModalMovie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      console.log('SETTING MOVIE', action)
      state.movie = action.payload
    },
    openModal: (state) => {
      console.log('open modal')
      state.open = true
    },
    closeModal: (state) => {
      state.open = false
    }

    // clearFilter: (state) => {
    //   state.filter = ''
    // }
  },
})

// Action creators are generated for each case reducer function
export const { setMovie, openModal, closeModal } = movieSlice.actions

export default movieSlice.reducer