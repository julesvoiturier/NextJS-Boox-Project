"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, createAccount, deleteAccount } from '../reduxLib/features/connection/connectionSlice';
import Link from 'next/link';

export default function Page() {

 const userNameRef = useRef(null);
 const passwordRef = useRef(null);
 const confirmPasswordRef = useRef(null);
 const emailRef = useRef(null);

 const dispatch = useDispatch();
 const logged = useSelector((state) => state.connection.logged);
 const loggedAccount = useSelector((state) => state.connection.loggedAccount);
 const accounts = useSelector((state) => state.connection.accounts);

 useEffect(() => {
   //actions when logged or loggedAccount changes
 }, [logged, loggedAccount]);
 
 const [errorMessage, setErrorMessage] = useState("")
 const newAccount = () => {
  console.log("hello");
  //! Check if passwords match
  if (passwordRef.current.value !== confirmPasswordRef.current.value) {
     setErrorMessage("Passwords do not match.");
     return;
  }
  //! Check if username already exists
  const usernameExists = accounts.some(existingAccount => existingAccount.userName === userNameRef.current.value);
  if (usernameExists) {
     setErrorMessage("Username already exists.");
     return;
  }
  console.log("hello");
  //! If all checks pass, dispatch the action to create the account
  dispatch(createAccount({
     "userName": userNameRef.current.value,
     "password": passwordRef.current.value,
     "email": emailRef.current.value,
     "favourites": []
  }));
  //! Reset error message
  setErrorMessage("");
 };

 return (
    <div className='absolute bottom-0 right-0 top-0 left-0 bg-black text-white h-screen w-full flex justify-center items-center z-20'>
      <Link href="/" className='absolute top-6 left-6 bg-[#1b1b1b] px-4 py-2 rounded-full'>Go back</Link>
      <div className='w-[500px] h-fit bg-[#1b1b1b] rounded-lg flex flex-col'>
        <div className='flex justify-between items-center bg-[#393939] rounded-t-lg px-4 py-4'>
          <div className='text-[20px] font-bold'>Create account</div>
          <div className='text-[25px] font-bold size-[100px] rounded-full h-[50px] bg-black'></div>
        </div>
        <form className='w-full h-full flex flex-col items-center gap-2 p-4 pb-6 '>
          <input ref={userNameRef} className='h-[40px] rounded-md px-3 text-white font-light bg-black w-full outline-none border-[1px] border-black focus:border-violet-500' type="text" placeholder='Name' />
          <input ref={emailRef} className='h-[40px] rounded-md px-3 text-white font-light bg-black w-full outline-none border-[1px] border-black focus:border-violet-500' type="text" placeholder='Email' />
          <input ref={passwordRef} className='h-[40px] rounded-md px-3 text-white font-light bg-black w-full outline-none border-[1px] border-black focus:border-violet-500' type="password" placeholder='Password' />
          <input ref={confirmPasswordRef} className='h-[40px] rounded-md px-3 text-white font-light bg-black w-full outline-none border-[1px] border-black focus:border-violet-500' type="password" placeholder='Confirm Password' />
          <div className='flex justify-between w-full mt-5 mb-1'>
            <div className='text-[12px] px-4 text-red-500'>error message</div>
            <button className=' bg-black text-violet-500 w-fit px-4 py-2 rounded-lg' type='button' onClick={()=>newAccount()}>Create account</button>
          </div>
        </form>
      </div>
    </div>
 );
}