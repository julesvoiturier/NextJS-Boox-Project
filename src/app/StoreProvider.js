'use client'

//! created a storeProvider component to wrap the rootLayout
import { Provider } from 'react-redux'
import { store } from './reduxLib/store'
// import { useDispatch, useSelector } from "react-redux"

export default function StoreProvider({ children }) {
  // const theme = useSelector((state) => state.theme.themeColor);
  return <Provider store={store}>{children}</Provider>
}