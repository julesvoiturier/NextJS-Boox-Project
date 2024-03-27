import { configureStore } from '@reduxjs/toolkit'
import connectionSlice from './features/connection/connectionSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        connection: connectionSlice,
    }
  })
}

export default makeStore;