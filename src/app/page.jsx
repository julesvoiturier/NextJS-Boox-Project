"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent, setGenres } from "./reduxLib/features/content/contentSlice"
import { useEffect, useState , useRef} from "react"
import BottomBar from "./ui/bottomBar/BottomBar"
import SearchBar from "./ui/searchbar/SearchBar"
import Link from "next/link"
import { updateFavs } from "./reduxLib/features/connection/connectionSlice"
import Loading from "./loading"
import Carousel from "./ui/carousel/Carousel"
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos"
import "./../../node_modules/aos/dist/aos.css"
import themeSlice from "./reduxLib/features/theme/themeSlice"

export default function Page() {

    useEffect(() => {
        Aos.init({ duration: 1000  });
    }, []);

    //! Favourites array
    const [favourites, setFavourites] = useState([])
    const loggedAccount = useSelector((state) => state.connection.loggedAccount);
    const theme = useSelector((state) => state.theme.themeColor);

    //! Updates favourites array defining which ones to hilight in the map
    useEffect(() => {
        setFavourites(loggedAccount.favourites)
    }, [loggedAccount.favourites]);

    const filteredData = useSelector((state) => state.content.filteredData)
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
    const selected = useSelector((state) => state.content.selectedGenre)

    const Data = useSelector((state) => state.content.contents)
    const dispatch = useDispatch()

    useEffect(() => {dispatch(fetchContent())},[])
    useEffect(() => {dispatch(setGenres())},[Data]);


    if (isLoading) {return <Loading/>}
    if (error) {return error}

    return (
        <div className={`w-full text-white pt-[70px] animate-slideUp z-50 ${theme.bgColor1}`}>
            <div className="text-white text-[14px]">
                <div className={`${theme.textColor1} font-bold tracking-tight text-[100px] px-6 border-b-[1px] border-[#2e1848] flex leading-none max-sm:w-full max-sm:justify-between max-sm:text-[80px]`}>BOOX
                    <div className="text-[15px] tracking-normal pl-6 py-3 flex flex-col justify-between max-sm max-sm:text-right">Search <br />Review <br />Discover</div>
                </div>
                <Carousel Data={Data}/>
                <div className={`${theme.bgColor1} mt-6 sticky top-[70px] z-30 h-[70px] flex items-center`}>
                  <SearchBar/>
                  <div className="px-6 max-sm:pr-0 text-[18px] font-light text-violet-500 capitalize max-sm:text-[12px] max-sm:text-right">- {selected} {selected == "all" ? 'books': null}</div>
                </div>
                <div className="flex flex-wrap px-3 min-h-screen">   
                {/* map on filteredData (Data with applied filters) and returns a book card*/}
                    {filteredData && filteredData.map((book, key)=> {
                        return(
                            <div data-aos="fade-up" key={key} className={`${theme.textColor1} w-1/6 max-sm:w-1/2 max-md:w-1/3 h-[580px] max-sm:h-[450px] max-md:h-[500px] p-3 group`}>
                                <Link href={`/shop/${book.id-1}`} key={key} className="w-1/6 p-6 ">
                                    <div className="w-full aspect-[2/3] bg-white overflow-hidden rounded-md flex justify-center items-center transition-all group-hover:translate-y-[-5px] group">
                                        <img className={`w-full rounded-md scale-[105%] transition-all`} src={book.image_url} alt="" />
                                    </div>
                                    <hr className="mt-6 transition-all border-t-[1px] border-[#f2f2f258] group-hover:border-violet-500"/>
                                </Link>
                                <div className=" flex ">
                                    <Link href={`/shop/${book.id-1}`} className=" w-[70%] font-light">
                                        <div className="opacity-50 group-hover:text-violet-500 transition-all">{book.authors} -</div>
                                        <div className="group-hover:text-violet-500 transition-all">{book.title}</div>
                                    </Link>
                                    <div className="w-[30%] flex justify-end items-start ">
                                        {
                                            //! If someone is logged, display the 'favourites' button to add a movie to favourites                                           
                                            loggedAccount.userName &&
                                            <button onClick={() => {dispatch(updateFavs({"title": book.title, "authors": book.authors, "id": book.id, "image_url": book.image_url, "review" : "", "rate": null}));}}
                                            className={` active:scale-110 transition-all z-10 `}>
                                            <FontAwesomeIcon className={`${favourites && favourites.some(fav => fav.title === book.title) ? 'text-yellow-400 active:scale-110': 'text-[#272727] hover:text-[#444444]'} text-[30px] active:scale-110 transition-all z-10 `}  icon={faStar} />
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
            <BottomBar/>
        </div>
    )
}