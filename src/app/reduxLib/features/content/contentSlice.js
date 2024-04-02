import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
  filteredData: [],
  genres: [],
  selectedGenre: "all",
  selectedDateFilter: "all",
  selectedRateFilter: "all",
  neutralData: []
}

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios('https://example-data.draftbit.com/books')
    const data = await res.data
    return data
  }
)

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {

    setGenres: (state) => {
        state.contents.forEach((book) => {
            const genresArray = book.genres.split(", ")
            genresArray.forEach((genre) => {
                if (!state.genres.includes(genre)) {
                    state.genres.push(genre);
                    state.genres.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
                }
            });
        });
    },

    filterData: (state, action) => {
      state.selectedGenre = action.payload.genre
      if (action.payload.genre != "all") {
          state.filteredData = state.contents.filter(book => 
              book.genres.toLowerCase().includes(action.payload.genre.toLowerCase())
          );
          state.neutralData = state.filteredData
      } else {
          state.filteredData = state.contents
          state.neutralData = state.contents
      }
    },

    setDateFilter: (state, action) => {
        state.selectedDateFilter = action.payload
    },

    setRateFilter: (state, action) => {
        state.selectedRateFilter = action.payload
        if (action.payload == "lowest") {
          const sortedDataLowest = [...state.filteredData].sort((a, b) => a.rating - b.rating);
          console.log(sortedDataLowest);
          state.filteredData = sortedDataLowest
        } else if (action.payload == "highest") {
          const sortedDataHighest = [...state.filteredData].sort((a, b) => b.rating - a.rating);
          state.filteredData = sortedDataHighest
        } else if (action.payload == "all") {
          state.filteredData = state.neutralData
        }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false
      state.contents = action.payload
      state.filteredData = action.payload
      state.neutralData = action.payload
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export const { filterData, setGenres, setDateFilter, setRateFilter } = contentSlice.actions
export default contentSlice.reducer