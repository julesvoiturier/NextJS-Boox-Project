import { createSlice } from '@reduxjs/toolkit'

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    accounts: [],
    loggedAccount: {}
  },
  reducers: {
    logIn: (state) => {
        //map in accounts, if name match, verify if password matches too. if yes, reset "loggedAcount" and push the new account, else: throw error
    },
    createAccount: (state, action) => {
        accounts.push(action.payload)
    },
    deleteAccount: (state, action) => {
        //map in accounts, if action.payload.name && action.payload.password match, else: throw error
    },
  }
})

export const { logIn, createAccount, deleteAccount } = connectionSlice.actions
export default connectionSlice.reducer