"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "./reduxLib/features/content/contentSlice"
import { useEffect } from "react"
import BottomBar from "./ui/bottomBar/BottomBar"
import Carousel from "./ui/carousel/Carousel"

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const Data = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)

  if (isLoading) {return <div className="text-white text-[100px]">isLoading</div>}
  if (error) {return error}

  return (
    <div className=''>
      <Carousel Data={Data}/>
      {Data && Data.map((book, key) => (
        <div key={key}>
          <div className="text-white">{book.authors}</div>
        </div>
      ))}
      <BottomBar/>
    </div>
  )
}

export default App