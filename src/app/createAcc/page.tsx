'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Rubik } from 'next/font/google';
import { useRouter } from 'next/navigation'

const rubik = Rubik({
  weight: ['400', '700'], // Specify weights
  subsets: ['latin'], // Include subsets
});

function Page() {

  const router = useRouter();
  const textFielData = [
    {label:"Full Name",default:"Marry Dow"},{label:"Phone Number",default:"Marry Doe"},
    {label:"Email address",default:"Marry Doe"},
    {label:"Password",default:"Marry Doe"}
]

    useEffect(() => {
        const timer = setTimeout(() => {
            alert('It was a UI-based assignment, so using forms and submissions was not necessary or relevant.');
        }, 4000);

        // Cleanup to prevent multiple timers if the component unmounts or re-renders
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures it runs only once


  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
    <div className='relative h-full w-[335px] bg-[#F7F8F9]'>
     <motion.div  initial={{filter:'blur(10px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} transition={{duration:1}} className={`absolute mx-4 text-white top-5 ${rubik.className}`}>
	<div className='flex flex-col gap-1'>
	<h1 className={`${rubik.className} text-xl text-[#1D2226] font-bold pr-[9rem]`}>Create your Popx account</h1>

	</div>
	<div className='flex flex-col gap-5 text-black mt-5'>
        {
            textFielData.map((e,idx)=>(
         <TextField
          color='secondary'
          key={idx}
          required
          id="outlined-required"
          label={e.label}
          defaultValue={e.default}
        />
            ))
        }
        <TextField
          color='secondary'
          id="outlined-required"
          label="Company name"
          defaultValue="Marry Doe"
        />
	</div>

    <div className='flex flex-col mt-2 gap-5'>
    <p className='text-black'>Are you an Agency?</p>
 <RadioGroup defaultValue="comfortable" className='flex  text-black '>
      <div className="flex items-center gap-3">
        <RadioGroupItem  color='#6C25FF' value="default" id="r1" />
        <Label htmlFor="r1">Yes</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">No</Label>
      </div>
    </RadioGroup>
    </div>
	 </motion.div>

   <motion.div  initial={{filter:'blur(10px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} transition={{duration:1}} className='absolute bottom-2 w-full px-4'>
   <motion.button whileTap={{backgroundColor:'#36454F'}} onClick={()=>router.push("/profile")} whileHover={{backgroundColor:'#808080',color:'#ffffff'}} className='w-full py-2 rounded-[6px] bg-[#6C25FF] text-[#ffffff] mt-5'>Create Account</motion.button>
   </motion.div>
	</div>
	</div>
  )
}

export default Page