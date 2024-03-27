import { createSlice } from '@reduxjs/toolkit'

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    logIn: false,
    signIn: false
  },
  reducers: {
    log: (state) => {
        state.logIn = true
    },
    sign: (state) => {
        state.signIn = true
    },
  }
})

export const { log, sign } = connectionSlice.actions
export default connectionSlice.reducer