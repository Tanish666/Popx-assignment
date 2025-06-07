'use client'
import React from 'react'
import {motion} from 'framer-motion'
import TextField from '@mui/material/TextField';
import { Rubik } from 'next/font/google';
import { imageOptimizer } from 'next/dist/server/image-optimizer';
import { useRouter } from 'next/navigation';

const rubik = Rubik({
  weight: ['400', '700'], // Specify weights
  subsets: ['latin'], // Include subsets
});

function Page() {

  const router = useRouter();
  const textFielData = [
    {label:"Email address",default:"Email-Address"},
    {label:"Password",default:"Password"}
]

  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
    <div className='relative h-full w-[375px] bg-[#F7F8F9]'>
     <div className={`absolute  -top-8 ${rubik.className} flex flex-col justify-center items-center py-8 w-full`}>
     <div className='py-3 pl-5 bg-[#FFFFFF] w-full'>  
    <h1 className={`${rubik.className} text-xl text-[#1D2226] `}>Account  Settings</h1>
    </div> 
  {/* profile pic */}
    <motion.div  initial={{filter:'blur(10px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} transition={{duration:1}} className='flex justify-center items-center gap-10 px-5 mt-5'>
     <span className='relative'>
    <img src="profile.png" alt="" className='relative object-cover size-20 -left-10'/>
    <span className='absolute right-10 top-14'>
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23">
  <g id="Group_1585" data-name="Group 1585" transform="translate(0.229 -0.182)">
    <ellipse id="Ellipse_115" data-name="Ellipse 115" cx="10.5" cy="11.5" rx="10.5" ry="11.5" transform="translate(-0.229 0.182)" fill="#6c25ff"/>
    <path id="noun-camera-5308825" d="M115.254,89.363h-2.169l-.572-1.346a.9.9,0,0,0-.291-.377.7.7,0,0,0-.415-.14h-2.571a.706.706,0,0,0-.4.146.9.9,0,0,0-.282.371l-.591,1.346h-2.169a.733.733,0,0,0-.558.273,1.024,1.024,0,0,0-.231.659v6.521a1.024,1.024,0,0,0,.231.659.733.733,0,0,0,.558.273h9.464a.733.733,0,0,0,.558-.273,1.024,1.024,0,0,0,.231-.659V90.295a1.024,1.024,0,0,0-.231-.659.733.733,0,0,0-.558-.273Zm-4.732,6.52a2.2,2.2,0,0,1-1.673-.818,3.164,3.164,0,0,1,0-3.952,2.119,2.119,0,0,1,3.346,0,3.164,3.164,0,0,1,0,3.952A2.2,2.2,0,0,1,110.522,95.884Zm1.577-2.795a2.046,2.046,0,0,1-.462,1.317,1.413,1.413,0,0,1-2.231,0,2.109,2.109,0,0,1,0-2.635,1.413,1.413,0,0,1,2.231,0A2.046,2.046,0,0,1,112.1,93.089Z" transform="translate(-100.248 -81.086)" fill="#fff"/>
  </g>
</svg>
</span>
    </span>

     <span className='relative text-black right-16'>
        <h1 className={`${rubik.className} font-bold opacity-80`}>Marry Doe</h1>
        <p className={`${rubik.className} opacity-[0.6]`}>Marry@Gmail.Com</p>
     </span>

    </motion.div>
    {/* profile pic */}
    <motion.p  initial={{filter:'blur(10px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} transition={{duration:1}} className={`${rubik.className} text-sm  px-3 mt-5 opacity-70`}> Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</motion.p> 
     </div>
    </div>
    </div>
  )
}

export default Page