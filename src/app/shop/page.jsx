"use client"

import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import BottomBar from "../ui/bottomBar/BottomBar"
import SearchBar from "../ui/searchbar/SearchBar"
import Link from "next/link"
import Filters from "../ui/filters/Filters"
import { updateFavs } from "../reduxLib/features/connection/connectionSlice"

export default function Page() {

    const [favourites, setFavourites] = useState(["The Hunger Games", "Twilight"])

    useEffect(() => {
        setFavourites(loggedAccount.favourites)
    }, [loggedAccount.favourites]);

    const Data = useSelector((state) => state.content.contents)
    const filteredData = useSelector((state) => state.content.filteredData)
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
    const loggedAccount = useSelector((state) => state.connection.loggedAccount);
    const selected = useSelector((state) => state.content.selectedGenre)

    const dispatch = useDispatch()
    if (isLoading) {return <div className="text-white text-[100px]">isLoading</div>}
    if (error) {return error}

  return (
    <div className="w-full text-white pt-[70px]">
        <div className="text-white text-[14px] p-6 ">
            <div className="mt-6">
                <div className="px-6 text-[30px] font-bold capitalize">{selected}</div>
                <SearchBar/>
            </div>
            <div className="flex flex-wrap ">
                {filteredData && filteredData.map((book, key)=> {
                    return(
                        <Link
                        href={`/shop/${book.id-1}`}
                        key={key} className="w-1/6 h-[550px] p-6 group">
                            <div className="w-full aspect-[2/3] bg-white overflow-hidden rounded-md flex justify-center items-center transition-all group-hover:translate-y-[-5px]">
                                <img className={`w-full rounded-md scale-[105%] transition-all`} src={book.image_url} alt="" />
                            </div>
                            <div className="border-t-[1px] border-[#f2f2f258] mt-6 transition-all group-hover:border-violet-500 flex">
                                <div className="pt-6 w-[70%] font-light">
                                    <div className="opacity-50 group-hover:text-violet-500 transition-all">{book.authors} -</div>
                                    <div className="group-hover:text-violet-500 transition-all">{book.title}</div>
                                </div>
                                <div className="w-[30%] flex justify-end items-start pt-6 ">
                                    <button onClick={() => {
                                        dispatch(updateFavs(book.title));
                                    }}
                                    className={`${favourites && favourites.includes(book.title) ? 'bg-violet-500': 'bg-[#272727]'} hover:bg-violet-700 transition-all z-10 size-[30px] rounded-full `}></button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
        <BottomBar/>
    </div>
  )
}