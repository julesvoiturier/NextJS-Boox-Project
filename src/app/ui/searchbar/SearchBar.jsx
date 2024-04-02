import { newSearch, toggleFilter } from '@/app/reduxLib/features/filters/filterSlice';
import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function SearchBar() {

  const dispatch = useDispatch()
  const Data = useSelector((state) => state.content.contents)
  const filteredData = useSelector((state) => state.content.filteredData)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)
  const search = useSelector((state) => state.filters.search)
  const openFilter = useSelector((state) => state.filters.openFilter)

  if (isLoading) {return <div className="text-white text-[100px]">isLoading</div>}
  if (error) {return error}
  return (
    <div className='relative w-[25%] flex flex-col gap-[16px] rounded-full text-white m-6 z-10 '>
        <input onChange={(e)=> dispatch(newSearch(e.target.value))} onClick={()=> openFilter && dispatch(toggleFilter())} className='focus:outline-none font-light rounded-full h-[40px] border-[1px] focus:border-[#fbfbfb5d] border-[#fbfbfb27] bg-[#000000] px-4 py-1 text-[14px] w-full' type="text" placeholder='search' />
        <div className='absolute w-full top-[50px] flex flex-col max-h-[300px] overflow-y-scroll rounded-lg bg-[#0f0f0faf] backdrop-blur-lg'>
          
          {filteredData && filteredData.map((book, index) => {
              if (book.authors.toLowerCase().includes(search.toLowerCase()) && search !== "") {
                  return (
                    <Link 
                      href={`/authors/${index}`}
                      className={`font-light transition-all text-start px-4 py-2 text-[14px] h-fit border-b-[1px] border-[#fbfbfb27] hover:text-slate-400 hover:px-5`}
                    >{book.authors} <span className='opacity-30'> - Author</span>
                    </Link>
                  );
              } 
              if (book.title.toLowerCase().includes(search.toLowerCase()) && search !== "") {
                  return (
                    <Link 
                      href={`/shop/${index}`}
                      className={`font-light transition-all text-start px-4 py-2 text-[14px] h-fit border-b-[1px] border-[#fbfbfb27] hover:text-slate-400 hover:px-5`}
                      >{book.title} <span className='opacity-30'> - Book</span>
                    </Link>
                  );
              }
            })}
        </div>
    </div>
  )
}