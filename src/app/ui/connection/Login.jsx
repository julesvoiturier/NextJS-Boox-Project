"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, createAccount, deleteAccount } from '../../reduxLib/features/connection/connectionSlice';
import Link from 'next/link';

export default function Page({loginOk, newAccountOk}) {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)

  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.connection.accounts);

  const [errorMessage, setErrorMessage] = useState("")
  
  const logAccount = () => {
    accounts && accounts.forEach((element) => {
      if (element.userName === userName) {
        if (element.password === password) {
          dispatch(logIn({
            "userName": element.userName,
            "password": element.password,
            "favourites": element.favourites,
          }));
        } else {
          setErrorMessage("Incorrect password.");
          passwordRef.current.value = "";
        }
      } else {
        setErrorMessage("Unknown username.");
        userNameRef.current.value = "";
        passwordRef.current.value = "";
      }
    });
  };

 return (
      <div className='w-[500px] max-sm:w-[90%] h-fit rounded-lg flex flex-col'>
        <div className='flex justify-start items-center rounded-t-lg px-8 pt-4 w-full'>
          {/* <div className='w-1/3 text-[20px] font-light text-left'>Log In</div> */}
          <div className='w-full flex justify-start text-[12px] h-[10px] text-red-500'>{errorMessage}</div>
        </div>
        <form className='w-full h-full flex flex-col items-center gap-4 p-4 pb-6 '>
          <input ref={userNameRef} onChange={(e)=> setUserName(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="text" placeholder='Username' />
          <input ref={passwordRef} onChange={(e)=> setPassword(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="password" placeholder='Password' />
          <div className='flex flex-col gap-5 items-center w-full mt-5 mb-1'>
            <button className={` bg-black text-violet-500 border-[1px] border-violet-500 w-fit px-4 py-2 rounded-full`} type='button' onClick={()=> logAccount()}>Log In</button>
          </div>
        </form>
      </div>
 );
}