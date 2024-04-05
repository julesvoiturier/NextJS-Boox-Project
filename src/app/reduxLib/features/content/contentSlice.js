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

    //! Loops on Data, push every object.genre to "genres", do nothing if object.genre is already in "genres"
    //! Makes an array containing each genre only once (used for the filter selector button)
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
      //! if action.payload = all : filteredData = Data
      if (action.payload.genre != "all") {
          state.filteredData = state.contents.filter(book => 
              book.genres.toLowerCase().includes(action.payload.genre.toLowerCase())
          );
          state.neutralData = state.filteredData
      } else {
        //! if action.payload = genre-name : filterData = Data without books not corresponding to genre-name
          state.filteredData = state.contents
          state.neutralData = state.contents
      }
    },

    setDateFilter: (state, action) => {
        state.selectedDateFilter = action.payload
    },

    //! Rate (higher/lower/all) filter
    setRateFilter: (state, action) => {
        state.selectedRateFilter = action.payload
        if (action.payload == "lowest") {
          //! if filter chosen = lowest: creates an array with the value of filteredData sorted from lowest to highest rate
          const sortedDataLowest = [...state.filteredData].sort((a, b) => a.rating - b.rating);
          state.filteredData = sortedDataLowest
        } else if (action.payload == "highest") {
          //! if filter chosen = lowest: creates an array with the value of filteredData sorted from highest to lowest rate
          const sortedDataHighest = [...state.filteredData].sort((a, b) => b.rating - a.rating);
          state.filteredData = sortedDataHighest
        } else if (action.payload == "all") {
          //! if filter chosen = lowest: replaces the value of filteredData with neutralData (which is the initial value of filteredData (only with genres sorting))
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