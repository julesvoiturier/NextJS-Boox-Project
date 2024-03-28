"use client"

import React from 'react'

export default function page() {
  return (
    <div className='text-white h-screen flex justify-center items-center'>
      <div className='w-1/2 h-1/2 bg-[#313131] rounded-lg p-6'>
        <div className='w-full h-full'>
          <input className='w-[100px] h-[30px] bg-white' type="text" placeholder='hello' />
          <input className='w-[100px] h-[30px] bg-white' type="text" placeholder='hello' />
          <input className='w-[100px] h-[30px] bg-white' type="text" placeholder='hello' />
          <input className='w-[100px] h-[30px] bg-white' type="text" placeholder='hello' />
        </div>
      </div>
    </div>
  )
}
