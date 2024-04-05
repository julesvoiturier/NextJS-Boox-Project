import { createSlice } from '@reduxjs/toolkit'

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    accounts: [],
    loggedAccount: {},
    logged: false
  },
  reducers: {

    //! adds action.payload to loggedAccount
    logIn: (state, action) => {
      state.loggedAccount = action.payload
      state.logged = true
    },

    logOut: (state) => {
      state.accounts = state.accounts.map((element, index) => {
         if (element.userName == state.loggedAccount.userName) {
           return state.loggedAccount;
         }
         return element;
      });
      state.loggedAccount = {};
      state.logged = false;
    },

    createAccount: (state, action) => {
        state.logged = true
        state.accounts.push(action.payload)
        state.loggedAccount = action.payload
        state.accounts.forEach((element, key)=> {
        })
    },

    //! add/remove favourites
    updateFavs: (state, action) => {
      if (state.loggedAccount.favourites.some(element => element.title === action.payload.title)) {
         //! If the payload is already in favourites, remove it
         state.loggedAccount.favourites = state.loggedAccount.favourites.filter(element => element.title !== action.payload.title);
      } else {
         //! If the payload is not in favourites, add it
         state.loggedAccount.favourites = [...state.loggedAccount.favourites, action.payload];
      }
    }
  }
})

export const { logIn, logOut, createAccount, updateFavs } = connectionSlice.actions
export default connectionSlice.reducer