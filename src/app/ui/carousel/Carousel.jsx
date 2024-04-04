"use client"

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Carousel = ({Data}) => {

    const sliderRef = useRef(null)
    const dataLength = Data && Data.length;
    const [randomNbrs, setRandomNbrs] = useState([])
    //! returns an array of 5 different numbers
    const randomNbrsMaker = (dataLength, count) => {
        let numbers = [];
        let finalNumbers = []
        while (numbers.length < count) {
           const randomNumber = Math.floor(Math.random() * dataLength) + 1;
           if (!numbers.includes(randomNumber)) {
             numbers.push(randomNumber);
           }
        }
        finalNumbers = numbers
        finalNumbers.push(...numbers)

        setRandomNbrs(finalNumbers)
    }

    //! call randomNbrs Maker each time Data updates or is re-fetched
    useEffect(() => {
        if (Data && Data.length > 0) {
            randomNbrsMaker(Data.length, 5);
        }
    }, []);

    return (
        // <div></div>
        <div className='relative w-full max-sm:w-screen h-[300px] animate-slideUp max-sm:h-[200px]'>
            <div className='size-full border-y-[1px] border-[#2e1848] overflow-hidden'>
            <div className='absolute bg-yellow-400 text-black px-6 py-2 rounded-md text-[20px] font-bold top-4 left-6 z-20 shadow-lg max-sm:text-[15px]'>Suggestions</div>
                <div ref={sliderRef} className='w-full h-full flex flex-col flex-wrap p-6 gap-4 py-4 carousel'>
                    {
                        //! maps on Data and returns a book card only if its "id" key is matching a number in randomNbrs array
                        Data.map((book) => {
                            return(
                                randomNbrs.includes(book.id) ? 
                                <div className='w-1/3 max-sm:w-full h-full flex bg-[#111111] rounded-lg '>
                                    <div className='h-full aspect-[2/3] w-1/3 rounded-l-md overflow-hidden'>
                                        <img className='' src={book.image_url} alt="" />
                                    </div>
                                    <div className='p-4 h-full w-2/3 flex flex-col justify-between'>
                                        <div className='h-2/5'>
                                            <div className='font-bold text-[20px] whitespace-nowrap overflow-hidden text-ellipsis leading-0'>{book.title}</div>
                                            <div className='font-light opacity-50 whitespace-nowrap overflow-hidden text-ellipsis leading-0'>{book.authors}</div>
                                            <div className='font-bold text-[20px] text-violet-500'>{book.rating} / 5</div>
                                        </div>
                                        <div class=" w-full h-2/5 font-light opacity-50 truncate whitespace-normal">
                                          <div className='line-clamp-4 max-sm:hidden'> {book.description}</div> 
                                        </div>
                                        <div className='h-1/5 pt-2 w-fit flex items-end'>
                                            <Link href={`/shop/${book.id-1}`} className='bg-violet-500 px-3 py-1 w-full rounded-full transition-all hover:translate-x-1'>Read more</Link>
                                        </div>
                                    </div>
                                </div>
                                : null
                            )
                        })
                    }
                    {
                        //! maps on Data and returns a book card only if its "id" key is matching a number in randomNbrs array
                        Data.map((book) => {
                            return(
                                randomNbrs.includes(book.id) ? 
                                <div className='w-1/3 max-sm:w-full h-full flex bg-[#111111] rounded-lg '>
                                    <div className='h-full aspect-[2/3] w-1/3 rounded-l-md overflow-hidden'>
                                        <img className='' src={book.image_url} alt="" />
                                    </div>
                                    <div className='p-4 h-full w-2/3 flex flex-col justify-between'>
                                        <div className='h-2/5'>
                                            <div className='font-bold text-[20px] whitespace-nowrap overflow-hidden text-ellipsis leading-0'>{book.title}</div>
                                            <div className='font-light opacity-50 whitespace-nowrap overflow-hidden text-ellipsis leading-0'>{book.authors}</div>
                                            <div className='font-bold text-[20px] text-violet-500'>{book.rating} / 5</div>
                                        </div>
                                        <div class=" w-full h-2/5 font-light opacity-50 truncate whitespace-normal">
                                          <div className='line-clamp-4 max-sm:hidden'> {book.description}</div> 
                                        </div>
                                        <div className='h-1/5 pt-2 w-fit flex items-end'>
                                            <Link href={`/shop/${book.id-1}`} className='bg-violet-500 px-3 py-1 w-full rounded-full transition-all hover:translate-x-1'>Read more</Link>
                                        </div>
                                    </div>
                                </div>
                                : null
                            )
                        })
                    }
                   
                </div>
            </div>
        </div>
    );
}
export default Carousel;