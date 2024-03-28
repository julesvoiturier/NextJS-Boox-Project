"use client"
import React from 'react'
import Link from 'next/link'

export default function header() {
  return (
    <div className='w-full h-[70px] bg-[#1a1a1a] flex justify-end mb-12 relative px-12 text-white'>
        <div className='left-12 bottom-[-45px] bg-slate-200 size-[90px] absolute rounded-full'></div>
        <Link href='/login'>Log in</Link>
    </div>
  )
}
