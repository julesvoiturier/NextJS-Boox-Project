import React from 'react'
import { filterData, setDateFilter, setRateFilter } from '@/app/reduxLib/features/content/contentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from '@/app/reduxLib/features/filters/filterSlice'

export default function Filters() {

  const dispatch = useDispatch()
  const openFilter = useSelector((state) => state.filters.openFilter)
  
  const genres = useSelector((state) => state.content.genres)
  const selected = useSelector((state) => state.content.selectedGenre)
  const rateFilter = useSelector((state) => state.content.selectedRateFilter)
  const dateFilter = useSelector((state) => state.content.selectedDateFilter)

  const ratingFilterButtons = ["highest", "lowest", "all"]

  return (
    <div className={`relative w-fit h-[60px] flex flex-col bg-[#fbfbfb27]  rounded-full gap-2  shadow-lg font-light`}>
      <button
      onClick={()=> dispatch(toggleFilter())} className={`${openFilter ? 'bg-white text-black':'bg-[#101010] hover:bg-[#454545]'} transition-all  px-10 flex items-center justify-center rounded-full h-full m-2`}>Filters</button>
      <div className={`${openFilter ? 'visible' : 'hidden'} absolute top-[-400px] flex flex-col gap-2 rounded-lg transition-all bg-[#0f0f0faf] backdrop-blur-lg`}>
        <div className='text-white bg-[#0f0f0faf] border-[1px] border-[#f2f2f231] rounded-lg'>
        <div className='bg-black font-bold rounded-t-lg py-2 px-4 border-b-[1px] border-[#f2f2f231]'>Rating</div>
          <div className='flex w-full gap-2 text-left'>
            {ratingFilterButtons.map((element)=>{return( <button onClick={()=> dispatch(setRateFilter(element))} 
            className={`${rateFilter != element ? 'text-white' : 'text-violet-500'} transition-all w-1/3 my-2 capitalize`}>{element}</button> )})}
          </div>
        </div>
        <div className='max-h-[300px] overflow-scroll text-left bg-[#0f0f0faf] w-[300px] rounded-lg border-[1px] border-[#f2f2f231] font-light'>
          <div className='fixed w-[297px] bg-black px-4 py-2 text-white font-bold rounded-t-lg border-b-[1px] border-[#f2f2f231] flex justify-between'>
            <div className='text-white'>Genre <span className='font-light text-violet-500'> - ({selected})</span></div>
            <button onClick={(e)=> dispatch(filterData({"genre" : "all"}))} className={`${selected == "all" ? 'text-violet-500' : 'hover:text-slate-400'}  transition-all`}>All</button>
          </div>
          {genres && genres.map((genre)=> {
              return(
                <button onClick={(e)=> dispatch(filterData({"genre" : e.target.innerText}))}
                className={`${selected.toLowerCase() == genre.toLowerCase() ? "text-violet-500" : "hover:text-slate-400 hover:px-6 text-left"}  flex items-center justify-start px-4 py-2 w-full border-b-[1px] border-[#f2f2f231] transition-all `}>
                <div className={`${selected.toLowerCase() != genre.toLowerCase() ? 'w-[0px]' : 'w-[10px] mr-4'}  transition-all aspect-square rounded-full bg-violet-500`}></div>
                {genre} </button>
              )
          })}
        </div>
      </div>
    </div>
  )
}