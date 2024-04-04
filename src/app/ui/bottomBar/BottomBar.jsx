"use client"

import React from 'react'
import Filters from '../filters/Filters'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function BottomBar() {

  const logged = useSelector((state) => state.connection.logged);

  const links = [
    {
      "name": "Home",
      "path": "/"
    },
    {
      "name": "Authors",
      "path": "/authors"
    },
    {
      "name": "Favourites",
      "name2": "connection",
      "path": "/favourites"
    },
  ]

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
     setActiveLink(window.location.pathname.split('/').pop());
  }, []);

  return (
    <div className='w-full max-sm:w-screen h-[200px] gradientBottomBar fixed bottom-0 flex justify-center items-center text-white text-[14px] z-20'>
        <div className='w-1/3 px-6'>
          {activeLink == "" ? <div className='max-sm:hidden'><Filters/></div> :""}
        </div>
        <div className='w-1/3 flex justify-center'>
            <div className='w-fit  h-[60px] flex justify-center p-2 bg-[#fbfbfb27] rounded-full gap-2 backdrop-blur-lg shadow-lg'>
              <div className=' sm:hidden xsm:visible w-[60px]'><Filters/></div>
                {
                  links.map((link, key)=> {
                    return(
                      <Link key={key}
                      href={link.name == "Favourites" && !logged ? "/connection" : link.path} 
                      className={`${activeLink == link.name.toLowerCase() || link.name == "Home" && activeLink == "" ? "bg-[#f2f2f2] text-black" : "bg-[#101010] text-white hover:bg-[#454545]"} transition-all w-[130px] max-sm:w-[80px] flex justify-center items-center rounded-full`}
                      >{link.name}
                      </Link>
                    )
                  })
                }
            </div>
        </div>
        <div className='w-1/3'></div>
    </div>
  )
}