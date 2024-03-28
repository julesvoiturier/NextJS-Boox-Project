"use client"

import React from 'react'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { fetchContent } from "./reduxLib/features/data/dataSlice"
import BottomBar from "./../ui/bottomBar/BottomBar"

export default function Authors() {

    const Data = useSelector((state) => state.data.contents)
    const isLoading = useSelector((state) => state.data.isLoading)
    const error = useSelector((state) => state.data.error)
  
    // if (isLoading) {
    //   return 'loading...'
    // }
  
    // if (error) {
    //   return error
    // }

  return (
    <div className='p-6'>
      {Data.map((book, key)=> {
        return(
            <div key={key} className='text-white'>{book.authors}</div>
        )
      })}
      <BottomBar/>
    </div>
  )
}
