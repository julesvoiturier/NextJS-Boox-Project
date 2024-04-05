"use client"

import Link from 'next/link';
import React from 'react'

export default function FromThisAuthor({booksId, currentBook}) {
  return (
    <div className='text-white mt-[70px] max-md:mt-[35px] rounded-lg'>
        <div className='px-4 py-4 text-[20px] font-bold'>From the same author:</div>
        <div className='w-full flex flex-wrap bg-[#101010] rounded-lg p-4'>
            {booksId.map((book, index)=> {
                return(
                    book.title != currentBook && 
                    <Link href={`/shop/${book.id-1}`} className='w-1/5 max-sm:w-1/2 max-md:w-1/3 p-4 group'>
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
