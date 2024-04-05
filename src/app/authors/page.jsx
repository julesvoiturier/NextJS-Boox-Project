"use client"

import React from 'react'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import BottomBar from "./../ui/bottomBar/BottomBar"
import Link from 'next/link'
import Aos from "aos"
import "./../../../node_modules/aos/dist/aos.css"

export default function Page() {

  useEffect(() => {
    Aos.init({ duration: 1000  });
  }, []);

  const Data = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)
  const theme = useSelector((state) => state.theme.themeColor);

  let authorsArray = Data.map(book => book.authors).sort();
  //! Making sure all authors names are defined
  const newArray = [...new Set(authorsArray)].filter(name => name !== undefined);

  //! creates 4 arrays from newArray, each one starting and ending with a specific letter
  const namesCol = Data && [
    newArray.filter(name => name.charCodeAt(0) >= 'A'.charCodeAt(0) && name.charCodeAt(0) <= 'E'.charCodeAt(0)),
    newArray.filter(name => name.charCodeAt(0) >= 'F'.charCodeAt(0) && name.charCodeAt(0) <= 'K'.charCodeAt(0)),
    newArray.filter(name => name.charCodeAt(0) >= 'L'.charCodeAt(0) && name.charCodeAt(0) <= 'P'.charCodeAt(0)),
    newArray.filter(name => name.charCodeAt(0) >= 'Q'.charCodeAt(0) && name.charCodeAt(0) <= 'Z'.charCodeAt(0))
  ];

  if (isLoading) {return <div className="text-white text-[100px]">isLoading</div>}
  if (error) {return error}
  if (!Data) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={`flex justify-between pt-[70px] text-[14px] max-sm:flex-col ${theme.bgColor1}`}>
      {namesCol && namesCol.map((column, index) => (
        <div key={index} className="p-6 w-[25%] max-sm:w-full flex flex-col">
            <div className='text-white text-[20px] font-bold sticky top-[70px] z-30 h-[70px] bg-black py-6 border-b-[0.5px] border-[#4d4d4d] mb-2'>
              {column && column[0] && typeof column[0] === 'string' ? column[0].charAt(0) : ''} - 
              {column && column[column.length-1] && typeof column[column.length-1] === 'string' ? column[column.length-1].charAt(0) : ''}
            </div>
            {column.map(name => (
              <Link data-aos="fade-in" href={`/authors/${name}`} className='text-white font-light hover:text-violet-500 transition-all hover:translate-x-[3px] tracking-wide pb-2 mb-2 border-b-[0.5px] border-[#262626]' key={name}>{name}</Link>
            ))}
        </div>
      ))}
      <BottomBar/>
    </div>
  )
}