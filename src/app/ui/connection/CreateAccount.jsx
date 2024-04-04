"use client"

import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../reduxLib/features/connection/connectionSlice';
import Link from 'next/link';

export default function Page() {

 const [userName, setUserName] = useState("");
 const [password, setPassword] = useState("");
 const [password2, setPassword2] = useState("");
 const [email, setEmail] = useState("");
 const password2Ref = useRef(null);

 const dispatch = useDispatch();
 const accounts = useSelector((state) => state.connection.accounts);

 const [validEntry, setValidEntry] = useState(false);
 const [errorMessage, setErrorMessage] = useState("");

 useEffect(() => {
    let isValid = true;
    let errorMessage = "";

    accounts.forEach(element => {
      if (element.userName === userName) {
        isValid = false;
        errorMessage = "Username already exists.";
        return;
      }
    });

    if (userName !== "" && userName.length < 8) {
      isValid = false;
      errorMessage = "Username: minimum 8 characters.";
    }

    if (password !== "" && password.length < 8) {
      isValid = false;
      errorMessage = "Password: minimum 8 characters.";
    }

    if (password !== password2) {
      isValid = false;
      errorMessage = "Passwords do not match.";
    }

    if (userName && password.length >= 8 && password2.length >= 8 && email) {
      isValid = true;
      errorMessage = "";
    }

    setValidEntry(isValid);
    setErrorMessage(errorMessage);
 }, [userName, password, password2, email, accounts]);

 const newAccount = () => {
    if (password !== "" && password2 !== "" && password !== password2) {
      setErrorMessage("Passwords do not match.");
      password2Ref.current.value = "";
      return;
    }
    
    dispatch(createAccount({
      "userName": userName,
      "password": password,
      "email": email,
      "favourites": []
    }));
    setPassword("");
    setPassword2("");
    setUserName("");
    setErrorMessage("");
 };

 return (
    <div className='w-[500px] max-sm:w-[90%] h-fit rounded-lg flex flex-col'>
      <div className='flex justify-between items-center rounded-t-lg px-8 pt-4'>
        {/* <div className='w-1/3 text-[20px] font-light text-left'>Create account</div> */}
        <div className='w-full flex justify-start text-[12px] h-[10px] text-red-500'>{errorMessage}</div>
      </div>
      <form className='w-full h-full flex flex-col items-center gap-4 p-4 pb-6 '>
        <input onChange={(e) => setUserName(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="text" placeholder='Name' />
        <input onChange={(e) => setEmail(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="text" placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="password" placeholder='Password' />
        <input ref={password2Ref} onChange={(e) => setPassword2(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="password" placeholder='Confirm Password' />
        <div className='flex flex-col gap-5 items-center w-full mt-5 mb-1'>
          <button className={`${validEntry ? '' : 'pointer-events-none'} bg-black text-violet-500 border-[1px] border-violet-500 w-fit px-4 py-2 rounded-full`} type='button' onClick={() => validEntry ? newAccount() : null}>Create account</button>
        </div>
      </form>
    </div>
 );
}


// import { useRouter } from 'next/router';
// import React, { useState, useRef, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logIn, logOut, createAccount, deleteAccount } from '../../reduxLib/features/connection/connectionSlice';
// import Link from 'next/link';

// export default function Page() {

//   const [userName, setUserName] = useState("")
//   const [password, setPassword] = useState("")
//   const [password2, setPassword2] = useState("")
//   const [email, setEmail] = useState("")
//   const password2Ref = useRef(null)

//  const dispatch = useDispatch();
//  const accounts = useSelector((state) => state.connection.accounts);

//  const [validEntry, setValidEntry] = useState(false)
//  const [errorMessage, setErrorMessage] = useState("")

// //  useEffect(() => {

// //   // const usernameExists = userName && accounts.some(existingAccount => existingAccount.userName == userName);
// //   accounts.length > 0 && accounts.forEach(element => {
// //     alert(userName)
// //     if (element.userName == userName) {
// //       setValidEntry(false)
// //       setErrorMessage("Username already exists.");
// //       return;
// //     } else{
// //       setErrorMessage("")
// //       return;
// //     }
// //   });

// //   if (userName != "" && userName.slice(",").length < 8) {
// //     setErrorMessage("Username: minimum 8 characters.");
// //     return;
// //   } else{
// //     setErrorMessage("")
// //     return;
// //   }

// //   if ( password != "" && password.slice(",").length < 7) {
// //     setErrorMessage("Password: minimum 8 characters.");
// //     return;
// //   }

// //    if (userName && password.slice(",").length > 7 && password2.slice(",").length > 7 && email) {
// //     setErrorMessage("");
// //     setValidEntry(true)
// //    } else {setValidEntry(false)}

// //  }, [userName, password, password2, email]);

//   useEffect(() => {
//     let isValid = true;
//     let errorMessage = "";
  
//     accounts.forEach(element => {
//       if (element.userName === userName) {
//         isValid = false;
//         errorMessage = "Username already exists.";
//         return;
//       }
//     });
  
//     if (userName !== "" && userName.length < 8) {
//       isValid = false;
//       errorMessage = "Username: minimum 8 characters.";
//     }
  
//     if (password !== "" && password.length < 8) {
//       isValid = false;
//       errorMessage = "Password: minimum 8 characters.";
//     }
  
//     if (password !== password2) {
//       isValid = false;
//       errorMessage = "Passwords do not match.";
//     }
  
//     if (userName && password.length >= 8 && password2.length >= 8 && email) {
//       isValid = true;
//       errorMessage = "";
//     }
  
//     setValidEntry(isValid);
//     setErrorMessage(errorMessage);
//   }, [userName, password, password2, email, accounts]);
 
//   const newAccount = () => {

//     if (password != "" && password2 != "" && password !== password2) {
//       setErrorMessage("Passwords do not match.");
//       password2Ref.current.value = ""
//       return;
//     }
//     dispatch(createAccount({
//       "userName": userName,
//       "password": password,
//       "email": email,
//       "favourites": []
//     }));
//     password2Ref.current.value = ""
//     userName.current.value = ""
//     setErrorMessage("");
//   };

//  return (
//       <div className='w-[500px] h-fit rounded-lg flex flex-col'>
//         <div className='flex justify-between items-center rounded-t-lg px-8 py-4'>
//           <div className='w-1/3 text-[20px] font-light text-left'>Create account</div>
//           <div className='w-2/3 flex justify-end text-[12px] h-[20px] px-4 text-red-500'>{errorMessage}</div>
//         </div>
//         <form className='w-full h-full flex flex-col items-center gap-4 p-4 pb-6 '>
//           <input onChange={(e)=> setUserName(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="text" placeholder='Name' />
//           <input onChange={(e)=> setEmail(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="text" placeholder='Email' />
//           <input onChange={(e)=> setPassword(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="password" placeholder='Password' />
//           <input ref={password2Ref} onChange={(e)=> setPassword2(e.target.value)} className='h-[45px] rounded-full px-4 text-white font-light bg-black w-full outline-none border-[1px] border-[#323232] focus:border-violet-500' type="password" placeholder='Confirm Password' />
//           <div className='flex flex-col gap-5 items-center w-full mt-5 mb-1'>
//             <button className={`${validEntry ? '' : 'pointer-events-none'} bg-black text-violet-500 border-[1px] border-violet-500 w-fit px-4 py-2 rounded-full`} type='button' onClick={()=> validEntry ? newAccount() : null}>Create account</button>
//           </div>
//         </form>
//       </div>

//  );
// }