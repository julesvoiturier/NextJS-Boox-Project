
"use client"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContent } from '@/app/reduxLib/features/content/contentSlice';
import FromThisAuthor from '@/app/ui/fromThisAuthor/FromThisAuthor';

export default function Page({ params }) {

   const dispatch = useDispatch();
   const Data = useSelector((state) => state.content.contents);
   const bookDetails = Data[params.bookDetails];

  
   useEffect(() => {
      dispatch(fetchContent());
   }, [dispatch]);

   const author = bookDetails ? bookDetails.authors : null;
   const [authorsNbr, setAuthorsNbr] = useState(0);
   const [booksId, setBooksId] = useState([])

   useEffect(() => {
      const newAuthorsNbr = Data.reduce((count, book) => {
         return book.authors === author ? count + 1 : count;
      }, 0);
      const newBooksId = Data.filter(book => book.authors == author);
      setBooksId(newBooksId);
      setAuthorsNbr(newAuthorsNbr);
     }, [Data, author]);

 return (
    <div className='text-white pt-[140px] w-full p-6 flex flex-col justify-center items-center'>
      <div className='w-[80%] gap-8 p-6 flex'>
         <img className='w-1/3 rounded-lg' src={bookDetails.image_url} alt="" />
         <div className='w-2/3 flex flex-col gap-4'>
            <div>
               <p className='font-bold text-[30px] leading-[35px]'>{bookDetails.title}</p>
               <p className='font-light opacity-50 pt-4'>{bookDetails.authors}</p>
               <hr className='mt-4 opacity-10'/>
            </div>
            <div className=''>
               <p className='font-bold text-[20px] text-violet-500'>{bookDetails.rating} / 5 </p>
               <p className='font-light opacity-50 text-[12px]'>({bookDetails.rating_count} ratings)</p>
            </div>
            <div>
               <p className='font-bold text-[20px] pb-2'>Description:</p>
               <p className='font-light'>{bookDetails.description}</p>
               <hr className='mt-4 opacity-10'/>
            </div>
            <div>
               <p className='font-light text-[12px]'>{bookDetails.genres}</p>
               <hr className='opacity-10 mt-4'/>
            </div>
         </div>
      </div>
      <div className='w-[80%] p-6 mt-[70px]'>
         <div className='text-center bg-[#101010] p-8 rounded-lg'>
               <p className='font-bold text-[20px]'>Famous quotes:</p>
               <div className='flex flex-col gap-2 mt-4 font-light'>
                  <p className=''>{bookDetails.Quote1}</p>
                  <p className=''>{bookDetails.Quote2}</p>
                  <p className=''>{bookDetails.Quote3}</p>
               </div>
         </div>
         {
            authorsNbr > 1 && <FromThisAuthor booksId={booksId} Data={Data} currentBook={bookDetails.title}/>
         }
      </div>
    </div>
 );
}