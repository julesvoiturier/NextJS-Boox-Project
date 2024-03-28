"use client"

import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setData } from "../reduxLib/features/content/contentSlice"
import BottomBar from "../ui/bottomBar/BottomBar"
import SearchBar from "../ui/searchbar/SearchBar"

export default function Home() {

    const Data = useSelector((state) => state.content.contents)
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
  
    if (isLoading) {
      return <div className="text-[100px] text-white">LOADING</div>
    }
  
    if (error) {
      return error
    }

  return (
    <div className="w-full text-white">
        <div className="text-white text-[14px] p-6 ">
            <div className="mt-6">
                <div className="px-6 text-[30px] font-bold">Section Title</div>
                {/* <div className="h-[1px] bg-slate-200 m-6"></div> */}
                <SearchBar/>
            </div>
            <div className="flex flex-wrap ">
                {Data && Data.map((book, key)=> {
                    return(
                        <div key={key} className="w-1/6 h-[550px] p-6 group">
                            <div className="w-full aspect-[2/3] bg-white overflow-hidden rounded-md flex justify-center items-center transition-all group-hover:translate-y-[-5px]">
                                <img className={`w-full rounded-md scale-[105%]`} src={book.image_url} alt="" />
                            </div>
                            <div className="border-t-[1px] border-[#f2f2f258] mt-6 transition-all group-hover:border-[#f2f2f2]">
                                <div className="pt-6 w-[70%] font-light">
                                    <div className="opacity-50">{book.authors} -</div>
                                    <div>{book.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <BottomBar/>
    </div>
  )
}