"use client"

import React, { useState, useRef, useEffect } from 'react';

const Carousel = () => {

    const sliderRef = useRef(null)
    const [images, setImages] = useState(["bg-green-500", "bg-yellow-400", "bg-blue-400", "bg-purple-500"])
    const [slideNbr, setSlideNbr] = useState(0)

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.5s ease-out';
            sliderRef.current.style.transform = `translateX(-${slideNbr*100}%)`;
        }
    }, [slideNbr]);

    return (
        <div className='relative w-[800px] h-[500px]'>
            <div className='size-full display overflow-hidden'>
                <div ref={sliderRef} className='w-auto h-full flex flex-col flex-wrap'>
                    {
                        images.map((image, key) => {
                            return(
                                <div className='w-full h-full flex'>
                                    <div className={`w-full h-full ${image}`}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <button className='absolute left-[-30px] top-0 bottom-0 m-auto size-[60px] bg-white border-[1px] border-black rounded-full'
            onClick={()=> {slideNbr > 0 ? setSlideNbr((slideNbr)=> slideNbr - 1):null}}
            >left</button>

            <button className='absolute right-[-30px] top-0 bottom-0 m-auto size-[60px] bg-white border-[1px] border-black rounded-full'
            onClick={()=> {slideNbr < images.length - 1 ? setSlideNbr((slideNbr)=> slideNbr + 1):null}}
            >right</button>

        </div>
    );
}
export default Carousel;