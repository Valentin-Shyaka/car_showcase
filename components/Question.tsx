"use client"
import React from 'react'
import { useState } from 'react'



interface Props{
    qtitle: string;
    qtext: string;
   
    
}

const Question = ({qtitle,qtext}:Props) => {
    const [faqActive,setFaqActive]=useState(false)
  return (
    <div className='w-[45%] max-sm:w-full h-fit p-2 border-b border-slate-300 cursor-pointer  '>
        <div className='flex justify-between items-center'>
            <p className='font-semibold'>{qtitle}</p>
         {faqActive?<p onClick={()=>{setFaqActive(!faqActive)}} className='p-2 bg-[#FF7A1A] text-white font-bold rounded-lg '>close</p>:<p onClick={()=>{setFaqActive(!faqActive)}} className='p-2 bg-sky-600 text-white font-bold rounded-lg'>open</p>}
        </div>
        {faqActive?<div className='mt-2 text-sm text-slate-500 text-left'>
            <p>{qtext}</p>
        </div>:""}

    </div>
  )
}

export default Question