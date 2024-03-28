// import { createSlice } from '@reduxjs/toolkit'

// export const dataSlice = createSlice({
//   name: 'data',
//   initialState: {
//     data: []
//   },
//   reducers: {
//     setData: (state, action) => {
//         state.data = action.payload
//         // state.data.splice(-2, 2)
//     }
//   }
// })

// export const { setData } = dataSlice.actions
// export default dataSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
}

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios('https:/example-data.draftbit.com/books')
    const data = await res.data
    return data
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false
      state.contents = action.payload
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export default dataSlice.reducer