'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BottomBar from '../ui/bottomBar/BottomBar';
import { updateFavs } from '../reduxLib/features/connection/connectionSlice';
import Link from 'next/link';

export default function Page() {

  const dispatch = useDispatch()
  const loggedAccount = useSelector((state) => state.connection.loggedAccount);
  const favs = loggedAccount.favourites

  return (
    <div className='w-full flex text-white pt-[70px]'>
      <div className='flex flex-wrap w-full h-full p-4'>
        {favs && favs.map((book, key)=> {
          return(
            <div key={key} className='w-1/2 max-sm:w-full max-sm:h-[200px] h-[400px] p-4 group transition-all'>
              <div className='flex w-full h-full bg-[#0f0f0f] rounded-lg overflow-hidden border-[1px] transition-all border-[#202020] '>
                <div className='w-1/3 h-full bg-[#202020] overflow-hidden'>
                  <img className='w-full h-full object-cover scale-105' src={book.image_url} alt="" />
                </div>
                <div className='w-2/3 h-full px-5 p-4'>
                  <div className='flex justify-between'>
                    <div>
                      <div className='font-bold text-[20px] max-sm:text-[15px]'>
                        {book.title}
                      </div>
                      <div className='opacity-50 font-light'>
                        {book.authors}
                      </div>
                    </div>
                    <button onClick={()=> dispatch(updateFavs(book))} className='h-fit px-4 py-1 max-sm:text-[12px] rounded-full bg-violet-500 max-sm:ml-4'>Remove</button>
                  </div>
                  <hr className='my-4 opacity-10 max-sm:hidden' />
                  <div className='flex flex-col gap-2 overflow-ellipsis max-sm:hidden'>
                    <div className='flex justify-between'> 
                      <div className=' font-light'>Your review - <span className='font-bold text-violet-500 ml-2'>5/5</span></div>
                      <Link href={`/shop/${book.id-1}`} className='h-fit px-4 py-1 bg-black rounded-full text-violet-500 max-sm:hidden'>Edit</Link>
                    </div>
                    <div className='font-light opacity-50 max-sm:hidden'>
                      {book.review == "" ? 'No review added yet' : book.review}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <BottomBar/>
    </div>
  )
}