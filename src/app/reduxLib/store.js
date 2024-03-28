import { configureStore } from '@reduxjs/toolkit'
import connectionSlice from './features/connection/connectionSlice'
import dataSlice from './features/data/dataSlice'

export const makeStore = () => {

  return configureStore({
    reducer: {
        connection: connectionSlice,
        data: dataSlice
    }
  })
}

export default makeStore;