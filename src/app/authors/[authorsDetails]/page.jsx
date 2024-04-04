"use client"

import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page({params}) {

    const authorName = params.authorsDetails.replaceAll("%20", " ")
    const Data = useSelector((state) => state.content.contents)

  return (
        <div className='w-full flex justify-center flex-wrap rounded-lg p-4 pt-[120px]'>
            <div className='w-[100%] text-[25px] text-white font-bold flex whitespace-nowrap items-center px-4 mb-6'>{authorName} <hr className='w-full ml-10 opacity-20' /></div>
            <div className='w-[100%] flex flex-wrap rounded-lg'>
                {Data.map((book, index)=> {
                    return(
                        book.authors == authorName &&
                        <Link key={index} href={`/shop/${book.id-1}`} className='w-1/6 p-4 group'>
                            <div className='w-full aspect-[2/3] overflow-hidden rounded-lg flex justify-center group-hover:translate-y-[-6px] transition-all'>
                                <img className='w-full' src={book.image_url} alt="" />
                            </div>
                            <hr className='mt-4 opacity-20 group-hover:border-violet-500 transition-all' />
                            <div className='text-white font-light mt-4 group-hover:text-violet-500 transition-all'>{book.title}</div>
                        </Link>
                    )
                })}
            </div>
    </div>
  )
}