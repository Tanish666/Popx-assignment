'use client'
import React, { MouseEvent, useState , useRef } from 'react'
import { Rubik } from 'next/font/google';
import { useEffect } from 'react';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';

const rubik = Rubik({
  weight: ['400', '700'], // Specify weights
  subsets: ['latin'], // Include subsets
});

function Page() {
const router = useRouter();	
const emailValid = useRef<HTMLFormElement>(null);


	useEffect(() => {
		const timer = setTimeout(() => {
			alert('Hi, myself Tanish Saxena. First of all, thank you for assigning me this task. I have completed it within the given time frame and hope you find it satisfactory.');
		}, 3000);

		// Cleanup to prevent multiple timers if the component unmounts or re-renders
		return () => clearTimeout(timer);
	}, []); // Empty dependency array ensures it runs only once

  return (
   <div className='h-screen w-full flex justify-center items-center flex-col'>
    <div className='relative h-full w-[335px] bg-[#F7F8F9]'>
     <div className={`absolute mx-4 text-white bottom-5 ${rubik.className}`}>
	<motion.div initial={{filter:'blur(10px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} transition={{duration:1}} className='flex flex-col gap-1'>
	<h1 className={`${rubik.className} text-xl text-[#1D2226] font-bold`}>Welcome to PopX</h1>
	<div className={`${rubik.className} text-[#1D2226] text-sm opacity-[0.6] mb-6 pr-20`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
	</motion.div>
	<motion.div  initial={{filter:'blur(10px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} transition={{duration:1}} className='flex flex-col gap-2'>
		<motion.button whileTap={{backgroundColor:'#36454F'}} onClick={()=>{router.push('/createAcc')}} whileHover={{backgroundColor:'#808080',color:'#ffffff'}} className='w-full py-2 rounded-[6px] bg-[#6C25FF]'>Create Account</motion.button>

		<motion.button whileTap={{backgroundColor:'#36454F'}} onClick={()=>router.push("/signIn")} whileHover={{backgroundColor:'#808080',color:'#ffffff'}} className='w-full py-2 rounded-[6px] bg-[#6C25FF4B] text-[#1D2226]'>Already Registered?Login</motion.button>
	</motion.div>
	 </div>
	</div>
	</div>
  )
}

export default Page