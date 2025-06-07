'use client'
import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import TextField from '@mui/material/TextField';
import { Rubik } from 'next/font/google';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const rubik = Rubik({
  weight: ['400', '700'], // Specify weights
  subsets: ['latin'], // Include subsets
});

function Page() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pass,setPass] = useState('');
  const [mail,setMail] = useState('');
  const router = useRouter();
  const textFielData = [
    {label:"Email address",default:"MarryDoe@gmail.com"},
]

useEffect(() => {
        const timer = setTimeout(() => {
            alert('Use any random digits of length atleast 4 for password');
        }, 1000);

        // Cleanup to prevent multiple timers if the component unmounts or re-renders
        return () => clearTimeout(timer);
    }, []); 

  

  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
    <div className='relative h-full w-[335px] bg-[#F7F8F9]'>
     <motion.div  initial={{filter:'blur(10px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} transition={{duration:1}} className={`absolute mx-4 text-white top-5 ${rubik.className}`}>
	<div className='flex flex-col gap-1'>
	<h1 className={`${rubik.className} text-xl text-[#1D2226] font-bold pr-[9rem]`}>Signin to your Popx account</h1>
	</div>
	<div className='flex flex-col gap-5 text-black mt-5'>
        {
        textFielData.map((e,idx)=>(
         <TextField
          onChange={(e) => setMail(e.target.value)}
          color='secondary'
          type='email'
          key={idx}
          id="outlined-required"
          label={e.label}
          defaultValue={e.default}
        />
            ))
        }
          <TextField
          onChange={(e) => setPass(e.target.value)}
           color='secondary'
           type='password'
          id="outlined-required"
          label={"Password"}
          
        />
	</div>
    <motion.button whileTap={{backgroundColor:'#36454F'}}  ref={btnRef}  onClick={()=>router.push("/profile")} style={{backgroundColor: pass.length > 4? "#6C25FF" : "#CBCBCB"}} whileHover={{backgroundColor:'#808080',color:'#ffffff'}} className={`w-full py-2 rounded-[6px]  text-[#ffffff] mt-5 `}>Login</motion.button>
	 </motion.div>
	</div>
	</div>
  )
}

export default Page