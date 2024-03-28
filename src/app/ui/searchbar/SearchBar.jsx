import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

export default function SearchBar() {

  const Data = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)

  if (isLoading) {return <div className="text-white text-[100px]">isLoading</div>}
  if (error) {return error}

  const [search, setSearch] = useState("")

  return (
    <div className='relative w-[25%] flex flex-col gap-[16px] rounded-full text-white m-6 z-20 '>
        <input onChange={(e)=> setSearch(e.target.value)} className='focus:outline-none rounded-full h-[40px] border-[1px] focus:border-[#fbfbfb5d] border-[#fbfbfb27] bg-[#000000] px-4 py-1 text-[14px] w-full' type="text" placeholder='search' />
        <div className='absolute w-full top-[50px] flex flex-col max-h-[300px] overflow-y-scroll rounded-lg bg-[#0f0f0faf]  backdrop-blur-lg'>
            {Data && Data.map((book, key)=> {
                return(
                    book.authors.toLowerCase().includes(search.toLowerCase()) && search != "" ? 
                    <button className={`transition-all text-start px-4 py-2 text-[14px] h-[40px] border-b-[1px] border-[#fbfbfb27] hover:text-slate-400 hover:px-5`}>{book.authors}</button> 
                    : null
                )
            })}
        </div>
    </div>
  )
}
