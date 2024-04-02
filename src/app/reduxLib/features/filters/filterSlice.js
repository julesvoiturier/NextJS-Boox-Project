import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    openFilter: false,
    search: "",
    genre: "all",
    date: "newest",
    rating: "highest"
  },
  reducers: {
    newSearch: (state, action) => {
        state.search = action.payload
    },
    genreFilter: (state, action) => {
        state.genre = action.payload
    },
    dateFilter: (state, action) => {
        state.date = action.payload
    },
    ratingFilter: (state, action) => {
        state.rating = action.payload
    },
    toggleFilter: (state) => {
        state.openFilter = !state.openFilter
    },
  }
})

export const { newSearch, genreFilter, dateFilter, ratingFilter, toggleFilter } = filterSlice.actions
export default filterSlice.reducer