"use client"

import React from 'react'
import Filters from '../filters/Filters'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function BottomBar() {

  const links = [
    {
      "name": "Home",
      "path": "/"
    },
    {
      "name": "Shop",
      "path": "/shop"
    },
    {
      "name": "Authors",
      "path": "/authors"
    },
    {
      "name": "Favourites",
      "path": "/favourites"
    },
  ]

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
     setActiveLink(window.location.pathname.split('/').pop());
  }, []);

  return (
    <div className='w-full h-[200px] gradientBottomBar fixed bottom-0 flex justify-center items-center text-white text-[14px] z-20'>
        <div className='w-1/3 px-12'><Filters/></div>
        <div className='w-1/3'>
            <div className='w-fit h-[60px] flex p-2 bg-[#fbfbfb27] rounded-full gap-2 backdrop-blur-lg shadow-lg'>
                {
                  links.map((link, key)=> {
                    return(
                      <Link key={key}
                      href={link.path} 
                      className={`${activeLink == link.name.toLowerCase() || link.name == "Home" && activeLink == "" ? "bg-[#f2f2f2] text-black" : "bg-[#101010] text-white hover:bg-[#454545]"} transition-all w-[130px] flex justify-center items-center rounded-full`}
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