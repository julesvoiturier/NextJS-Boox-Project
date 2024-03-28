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
import { fetchContent } from "./reduxLib/features/data/dataSlice"
import BottomBar from "./ui/bottomBar/BottomBar"

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector((state) => state.data.contents)
  const isLoading = useSelector((state) => state.data.isLoading)
  const error = useSelector((state) => state.data.error)

  if (isLoading) {
    console.log("loading");
    return 'loading...'
  }

  if (error) {
    return error
  }

  return (
    <div className=''>
      {contents.map((content, key) => (
        <div key={key}>
          <div className="text-white">{content.authors}</div>
        </div>
      ))}
      <BottomBar/>
    </div>
  )
}

export default Home