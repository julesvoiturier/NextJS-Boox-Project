import React from 'react'

export default function Footer() {
  return (
    <div className='relative w-full h-[350px] bg-[#000000] backdrop-blur-lg flex flex-col  items-center p-16 border-t-[1px] border-[#3a3a3a] z-20 mt-[100px]'>
      <div className='flex justify-between max-sm:flex-col w-[100%]'>
        <div className='flex flex-col w-1/2 p-4 text-[12px]'>
          <a className='text-white flex whitespace-nowrap items-center gap-4 font-bold' href="">Molengeek Front-end Final Project</a>
          <div className='text-white w-2/3'>Website project. Get informations about your favourite books. Write reviews, rate, and discover new things. <br />2024 </div>
        </div>
        <div className='flex flex-col w-1/4 p-4 text-[12px]'>
          <a className='text-white flex whitespace-nowrap items-center gap-4 font-bold' href="">Tools/Languages</a>
          <a className='text-white' href="">Next JS</a>
          <a className='text-white' href="">React JS</a>
          <a className='text-white' href="">Redux Toolkit</a>
          <a className='text-white' href="">Javascript</a>
        </div>
        <div className='flex flex-col w-1/4 p-4 text-[12px]'>
        <a className='text-white flex whitespace-nowrap items-center gap-4 font-bold' href="">Socials:</a>
          <a className='text-white' href="">Instagram</a>
          <a className='text-white' href="">Twitter</a>
          <a className='text-white' href="">Linked In</a>
          <a className='text-white' href="">Facebook</a>
        </div>
        <div className='flex flex-col w-1/4 p-4 text-[12px]'>
          <a className='text-white flex whitespace-nowrap items-center gap-4 font-bold' href="">Contact us:</a>
          <a className='text-white' href="">Contact us</a>
          <a className='text-white' href="">Newsletter</a>
          <a className='text-white' href="">Link 3</a>
        </div>
        <div className='flex flex-col w-1/4 p-4 text-[12px]'>
          <a className='text-white flex whitespace-nowrap items-center gap-4 font-bold' href="">Contact us:</a>
          <a className='text-white' href="">boox@gmail.com</a>
          <a className='text-white' href="">Newsletter</a>
          <input className='mt-4 rounded-sm bg-transparent border-[1px] border-violet-500 focus:outline-none text-white w-2/3' type="text" />
        </div>
      </div>
  
      <div className='absolute bottom-0 h-[30px] w-full bg-[#131313] text-[#3c3c3c] text-[12px] flex justify-center items-center z-20'>
        © Jules Voiturier 2024 - Boox Co.
      </div>
    </div>
  )
}
