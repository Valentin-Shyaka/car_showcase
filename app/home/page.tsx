'use client'
import CarDetailsCard from '@/components/CarDetailsCard'
import CustomButton from '@/components/CustomButton'
import React, { useState } from 'react'
import { availableCars } from '@/constants'


const LandingPage = () => {
 
 
  const filters=[
    {
      name:'Sort by'
    },
    {
      name:'Daily price'
    },  {
      name:'Book instantly'
    },

  ]
  return (
    <div className=' relative p-10 bg-[#f2f4f8]'> 
       <div className='p-4 bg-white flex w-[30%] border rounded-lg gap-8  top-0 '>
          {filters.map(filter=>(
            <button type='submit' className=" p-2 border border-slate-700 rounded-xl">{filter.name} </button>
          ))}
       </div>
       <div className='mt-8 '>
        <h3 className='text-2xl font-extrabold'>200+ cars available</h3>
        <p className='mt-2 text-sm text-slate-400 font-semibold'>These cars can be picked up in this city</p>
        <div className='mt-10 flex gap-20'>
          <div className='w-full overflow-auto h-[55vh]'>
            {availableCars.map(availablecar =>(
              <CarDetailsCard imageurl={availablecar.image} carName={availablecar.name} location={availablecar.venue} miles={availablecar.dist} price={availablecar.dollars}/>
            ))}
          </div>
         
          <div className='w-full h-55 rounded-xl border bg-white'>
             
          </div>
          
        </div>
       </div>
    </div>
  )
}

export default LandingPage