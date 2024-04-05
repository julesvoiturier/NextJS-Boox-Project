"use client"

import React, {useEffect, useState, useRef} from 'react'
import Login from '../ui/connection/Login'
import CreateAccount from '../ui/connection/CreateAccount'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"


export default function Page() {

  const [toggle, setToggle] = useState(false)
  const logged = useSelector((state) => state.connection.logged);
  const goBack = useRef(null);
  
  //! every time the value of "logged" changes, click on go back button if it's true / do nothing if it's false
  useEffect(() => {
    logged ? goBack.current.click() : null
  }, [logged]);

  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black z-50 text-white w-full max-sm:h-full p-6'>
      <Link ref={goBack} href="/" className='bg-[#1b1b1b] px-4 py-2 rounded-full'>Go back</Link>
      <div className=' flex flex-col justify-center h-full items-center w-full'>
        <div className='flex mb-5 rounded-full overflow-hidden'>
          <button className={`${!toggle ? 'text-violet-500' :''} px-6 py-1 border-r-[0.5px] border-white`} onClick={()=> setToggle(false)}>Log In</button>
          <button className={`${toggle ? 'text-violet-500' :''} px-6 py-1 border-l-[0.5px] border-white`} onClick={()=> setToggle(true)}>Create Account</button>
        </div>
        <div className='h-[450px] w-full flex justify-center overflow-hidden'>
          <div className={`${toggle ? 'translate-y-[-450px]' : ''} transition-all delay-75 ease-in w-full`}>
            <div className={`${toggle ? 'opacity-50':'opacity-100'} transition-all h-[450px] flex items-start justify-center `}>
              <Login/>
            </div>
            <div className={`${!toggle ? 'opacity-50':'opacity-100'} transition-all h-[450px] w-full flex items-start justify-center`}>
              <CreateAccount/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}