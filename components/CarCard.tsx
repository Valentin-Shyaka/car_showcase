'use client'
import React from 'react'
import Image from 'next/image'

interface Props{
    link: string;
    name:string;
}

const CarCard = ({link,name}: Props) => {
  return (
    <div className='bg-[#f2f4f8] h-80 w-60 rounded-xl text-center shadow-md'>
        <img
         src={link}
         alt='car image'
         className='w-full rounded-t-xl h-60'
        
        />
        <p className='mt-4 font-bold'>{name}</p>
    </div>
  )
}

export default CarCard