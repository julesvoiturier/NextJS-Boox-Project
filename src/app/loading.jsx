import React from 'react'


export default function Loading() {
  return (
    <div className='bg-black absolute bottom-0 top-0 left-0 right-0 flex justify-center items-center z-50'>
       <div className={`text-white size-[50px] rounded-full bg-gradient-to-t animate-spin from-black via-black to-violet-500`}></div>
    </div>
  )
}
