"use client"

import React from 'react'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BottomBar from "./../ui/bottomBar/BottomBar"

export default function page() {

  const Data = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)

  if (isLoading) {return <div className="text-white text-[100px]">isLoading</div>}
  if (error) {return error}

  return (
    <div className='p-6'>
      {Data && Data.map((book, key)=> {
        return(
            <div key={key} className='text-white'>{book.authors}</div>
        )
      })}
      <BottomBar/>
    </div>
  )
}