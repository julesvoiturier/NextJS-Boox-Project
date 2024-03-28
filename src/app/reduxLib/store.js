import { configureStore } from '@reduxjs/toolkit'
import contentSlice from './features/content/contentSlice'

export const store = configureStore({
  reducer: {
    content: contentSlice,
  },
})