import { configureStore } from '@reduxjs/toolkit'
import contentSlice from './features/content/contentSlice'
import filterSlice from './features/filters/filterSlice'
import connectionSlice from './features/connection/connectionSlice'
import themeSlice from './features/theme/themeSlice'

export const store = configureStore({
  reducer:{
    content: contentSlice,
    filters: filterSlice,
    connection: connectionSlice,
    theme: themeSlice,
  },
})