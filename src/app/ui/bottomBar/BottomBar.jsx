"use client"

import React from 'react'
import Filters from '../filters/Filters'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function BottomBar() {

  const logged = useSelector((state) => state.connection.logged);

  //! Stocking all Links in an array
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
    <div className='w-full max-sm:w-full h-[200px] gradientBottomBar fixed bottom-0 flex justify-center max-md:items-end items-center text-white text-[14px] z-30'>
        <div className='w-1/3 px-2 max-md:visible max-md:fixed max-md:z-20 max-md:bottom-[80px] max-md:left-0'>
          {activeLink == "" ? <div className=''><Filters/></div> :""}
        </div>
        <div className='w-1/3 flex justify-center max-md:w-full'>
            <div className='w-fit max-md:w-full h-[60px] max-md:h-fit flex justify-center p-2 max-sm:py-4 bg-[#fbfbfb27] rounded-full max-md:rounded-none gap-2 backdrop-blur-lg shadow-lg'>
                {
                  //!Maps on links and return a Link tag leading to the link url
                  //! If current pathName ends with the link name, add a white background
                  links.map((link, key)=> {
                    return(
                      <Link key={key}
                      href={link.name == "Favourites" && !logged ? "/connection" : link.path} 
                      className={`${activeLink == link.name.toLowerCase() || link.name == "Home" && activeLink == "" ? "bg-[#f2f2f2] text-black" : "bg-[#101010] text-white hover:bg-[#454545]"} transition-all w-[130px] max-sm:md-1/3 max-md:h-fit max-md:py-3 flex justify-center items-center rounded-full`}
                      >{link.name}
                      </Link>
                    )
                  })
                }
            </div>
        </div>
        <div className='w-1/3 max-md:w-0'></div>
    </div>
  )
}