"use client"

import React from 'react'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BottomBar from "./../ui/bottomBar/BottomBar"
import Link from 'next/link'

export default function Page() {

  const Data = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)

  let authorsArray = Data.map(book => book.authors).sort()
  const newArray = [...new Set(authorsArray)];

  const namesCol = [
    newArray.filter(name => name.charCodeAt(0) >= 'A'.charCodeAt(0) && name.charCodeAt(0) <= 'E'.charCodeAt(0)),
    newArray.filter(name => name.charCodeAt(0) >= 'F'.charCodeAt(0) && name.charCodeAt(0) <= 'K'.charCodeAt(0)),
    newArray.filter(name => name.charCodeAt(0) >= 'L'.charCodeAt(0) && name.charCodeAt(0) <= 'P'.charCodeAt(0)),
    newArray.filter(name => name.charCodeAt(0) >= 'Q'.charCodeAt(0) && name.charCodeAt(0) <= 'Z'.charCodeAt(0))
  ];

  if (isLoading) {return <div className="text-white text-[100px]">isLoading</div>}
  if (error) {return error}

  return (
    <div className='p-6 flex justify-between pt-[140px]'>
      {namesCol.map((column, index) => (
        <div key={index} className="p-6 w-[25%] flex flex-col">
          <div className='text-white text-[20px] font-bold'>{column[0].charAt(0)} - {column[column.length-1].charAt(0)}</div>
          <hr className='py-4 opacity-30' />
          {column.map(name => (
            <Link href="/" className='text-white font-light hover:text-violet-500 transition-all hover:translate-x-[3px] tracking-wide pb-2 mb-2 border-b-[0.5px] border-[#262626]' key={name}>{name}</Link>
          ))}
          <hr className=' opacity-30 mt-6'/>
        </div>
      ))}
      <BottomBar/>
    </div>
  )
}