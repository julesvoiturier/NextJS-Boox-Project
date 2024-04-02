import { createSlice } from '@reduxjs/toolkit'

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    accounts: [],
    loggedAccount: {},
    logged: false
  },
  reducers: {
    logIn: (state, action) => {
        state.accounts.map((account, key)=> {
          if (account.password == action.payload.password && account.userName == action.payload.userName) {
            state.loggedAccount = account
            state.logged = true
          }
        })
    },

    logOut: (state) => {
        state.loggedAccount = {}
        state.logged = false
    },

    createAccount: (state, action) => {
        state.logged = true
        state.accounts.push(action.payload)
        state.loggedAccount = action.payload
    },

    deleteAccount: (state, action) => {
        state.accounts.map((element, key)=> {
          if (element.name == loggedAccount.name && element.password == loggedAccount.password ) {
            state.accounts.splice(key, 1)
          }
        })
    },

    updateFavs: (state, action) => {
      state.loggedAccount.favourites && state.loggedAccount.favourites.map((element, index)=> {
        if (element == action.payload) {
          state.loggedAccount.favourites.splice(index, 1)
          return
        }
      })
      state.loggedAccount.favourites.push(action.payload)
    },
  }
})

export const { logIn, logOut, createAccount, deleteAccount, updateFavs } = connectionSlice.actions
export default connectionSlice.reducer