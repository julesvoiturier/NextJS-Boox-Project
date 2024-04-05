"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '@/app/reduxLib/features/connection/connectionSlice'
import { toggleTheme } from '@/app/reduxLib/features/theme/themeSlice'
import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  const [disconnectToggle, setDisconnectToggle] = useState(false)

  const dispatch = useDispatch()

  const logged = useSelector((state) => state.connection.logged);
  const loggedAccount = useSelector((state) => state.connection.loggedAccount);
  const theme = useSelector((state) => state.theme.themeColor);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`w-full max-sm:w-screen h-[70px] bg-gradient-to-r ${theme.fromColor} ${theme.viaColor} to-violet-500 flex justify-between items-center px-6 text-white fixed z-40 border-b-[1px] border-[#2e1848]`}>
        <Link href="/" className='font-bold text-[30px] text-violet-500'>Boox</Link>
        <div className='flex items-center gap-5'>
          {logged 
            ?
            <div className='flex'>
              {/* <button onClick={()=> dispatch(logOut())} className={`${disconnectToggle ? 'w-[120px]': 'w-[0px]'} overflow-hidden transition-all hover:text-red-500 z-20 left-[-140px] bg-black py-2 h-[40px] rounded-full`}>Disconnect</button> */}
              <button onMouseEnter={()=>setDisconnectToggle(true)} onMouseLeave={()=>setDisconnectToggle(false)} className=' font-light relative bg-black px-6 rounded-full py-2 h-[40px] transition-all '>{loggedAccount.userName}
                <button onClick={()=> dispatch(logOut())} className={`${disconnectToggle ? 'opacity-[100%]': 'opacity-[0%]'} font-light absolute overflow-hidden transition-all text-red-500 z-20 left-[-130px] bg-black px-4 py-2 top-0 bottom-0 rounded-full`}>Disconnect</button>
              </button> 
            </div>
            :<Link className={`${theme.bgColor1} ${theme.textColor1} px-4 py-2 rounded-full hover:text-violet-500 font-light`} href='/connection'>Connection</Link>
          }
          <button onClick={()=> dispatch(toggleTheme())}>
            {
              darkMode ?
              <FontAwesomeIcon className='text-[30px] text-black w-[40px]' icon={faMoon} />
              : <FontAwesomeIcon className='text-[30px] text-[#f2f2f2] w-[40px]' icon={faSun} />
            }
            
          </button>
        </div>
        
    </div>
  )
}