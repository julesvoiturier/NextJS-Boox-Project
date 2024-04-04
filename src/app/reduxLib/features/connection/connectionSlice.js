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
      state.loggedAccount = action.payload
      state.logged = true
        // state.accounts.map((account, key)=> {
        //   if (account.password == action.payload.password && account.userName == action.payload.userName) {
        //     state.loggedAccount = account
        //     state.logged = true
        //   }
        // })
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
          alert(element.userName)
        })
    },

    deleteAccount: (state, action) => {
        state.accounts.map((element, key)=> {
          if (element.name == loggedAccount.name && element.password == loggedAccount.password ) {
            state.accounts.splice(key, 1)
          }
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

export const { logIn, logOut, createAccount, deleteAccount, updateFavs } = connectionSlice.actions
export default connectionSlice.reducer