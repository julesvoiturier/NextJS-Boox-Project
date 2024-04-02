"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '@/app/reduxLib/features/connection/connectionSlice'

export default function header() {

  const [disconnectToggle, setDisconnectToggle] = useState(false)
  
  const dispatch = useDispatch()
  const logged = useSelector((state) => state.connection.logged);
  const loggedAccount = useSelector((state) => state.connection.loggedAccount);

  return (
    <div className='w-full h-[70px] bg-[#101010] flex justify-between items-center px-6 text-white fixed z-20'>
        <Link href="/" className='font-bold text-[25px]'>Boox</Link>
        {logged 
          ?
          <div className='flex'>
            {/* <button onClick={()=> dispatch(logOut())} className={`${disconnectToggle ? 'w-[120px]': 'w-[0px]'} overflow-hidden transition-all hover:text-red-500 z-20 left-[-140px] bg-black py-2 h-[40px] rounded-full`}>Disconnect</button> */}
            <button onMouseEnter={()=>setDisconnectToggle(!disconnectToggle)} onMouseLeave={()=>setDisconnectToggle(!disconnectToggle)} className='relative bg-black px-6 rounded-full py-2 h-[40px] transition-all '>{loggedAccount.userName}
              <button onClick={()=> dispatch(logOut())} className={`${disconnectToggle ? 'opacity-[100%]': 'opacity-[0%]'} absolute overflow-hidden transition-all text-red-500 z-20 left-[-130px] bg-black w-[120px] py-2 top-0 bottom-0 rounded-full`}>Disconnect</button>
            </button> 
          </div>
          :<Link className='bg-black px-4 py-2 rounded-full ' href='/login'>Log in</Link>
        }
    </div>
  )
}
