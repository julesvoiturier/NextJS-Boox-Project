import React from 'react'

export default function loading() {
  return (
    <div className='bg-black absolute bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20'>
       <div className='text-white'>Loading...</div>
    </div>
  )
}
