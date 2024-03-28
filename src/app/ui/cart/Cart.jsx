import React from 'react'

export default function Cart() {

    const openCart = true

  return (
    <div className={`${!openCart ? 'right-0' : '-right-full'} transition-all bottom-0 top-0  bg-[#343434b1] backdrop-blur-lg w-[400px] fixed z-20`}>
      
    </div>
  )
}
