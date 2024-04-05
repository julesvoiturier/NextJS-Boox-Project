'use client'

//! created a storeProvider component to wrap the rootLayout
import { Provider } from 'react-redux'
import { store } from './reduxLib/store'

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}