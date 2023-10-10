"use client"
import React from 'react'
import { useState } from 'react'
import {BiSolidChevronDown, BiSolidChevronUp} from 'react-icons/bi'
import { NavProps } from '@/types'

const Question = ({qtitle,qtext}:NavProps) => {
    const [faqActive,setFaqActive]=useState(false)
  return (
    <div className='w-[45%] max-sm:w-full h-fit p-2 border-b border-slate-300 cursor-pointer  '>
        <div className='flex justify-between items-center'>
            <p className='font-semibold'>{qtitle}</p>
         {faqActive?<BiSolidChevronUp onClick={()=>{setFaqActive(!faqActive)}} className=' font-bold rounded-lg '/>:<BiSolidChevronDown onClick={()=>{setFaqActive(!faqActive)}} className=' font-bold rounded-lg '/>}
        </div>
        {faqActive?<div className='mt-2 text-sm text-slate-500 text-left'>
            <p>{qtext}</p>
        </div>:""}

    </div>
  )
}

export default Question