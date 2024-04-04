"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '@/app/reduxLib/features/connection/connectionSlice'

export default function Header() {

  const [disconnectToggle, setDisconnectToggle] = useState(false)

  const dispatch = useDispatch()

  const logged = useSelector((state) => state.connection.logged);
  const loggedAccount = useSelector((state) => state.connection.loggedAccount);

  return (
    <div className='w-full max-sm:w-screen h-[70px] backdrop-blur-lg bg-gradient-to-r from-[#000000] via-[#000000] to-violet-500 flex justify-between items-center px-6 text-white fixed z-40'>
        <Link href="/" className='font-bold text-[30px] text-violet-500'>Boox</Link>
        {logged 
          ?
          <div className='flex'>
            {/* <button onClick={()=> dispatch(logOut())} className={`${disconnectToggle ? 'w-[120px]': 'w-[0px]'} overflow-hidden transition-all hover:text-red-500 z-20 left-[-140px] bg-black py-2 h-[40px] rounded-full`}>Disconnect</button> */}
            <button onMouseEnter={()=>setDisconnectToggle(true)} onMouseLeave={()=>setDisconnectToggle(false)} className=' font-light relative bg-black px-6 rounded-full py-2 h-[40px] transition-all '>{loggedAccount.userName}
              <button onClick={()=> dispatch(logOut())} className={`${disconnectToggle ? 'opacity-[100%]': 'opacity-[0%]'} font-light absolute overflow-hidden transition-all text-red-500 z-20 left-[-130px] bg-black px-4 py-2 top-0 bottom-0 rounded-full`}>Disconnect</button>
            </button> 
          </div>
          :<Link className='bg-black px-4 py-2 rounded-full hover:text-violet-500 transition-all font-light ' href='/connection'>Connection</Link>
        }
    </div>
  )
}