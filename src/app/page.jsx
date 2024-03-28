// import Home from './Home'

// async function getData() {
//   const res = await fetch('https:/example-data.draftbit.com/books')
//   if (!res.ok) {
//   }
//   return res.json()
// }

// export default async function Page() {
//   const data = await getData()
 
//   return <Home data={data}/>
// }

"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "./reduxLib/features/content/contentSlice"
import BottomBar from "./ui/bottomBar/BottomBar"

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

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
    <div className='text-white'>
      {Data && Data.map((book, key) => (
        <div key={key}>
          <div className="text-white">{book.authors}</div>
        </div>
      ))}
      <BottomBar/>
    </div>
  )
}