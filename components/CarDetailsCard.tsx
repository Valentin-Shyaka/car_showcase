'use client'
import React from 'react'
import  CIcon  from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';
import {BiTrip} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {AiOutlineTag} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
interface CarDetailsProps{
  imageurl:string;
  carName:string;
  location:string;
  miles: number;
  price:number;
}


const CarDetailsCard = ({imageurl,carName,location,miles,price}:CarDetailsProps) => {
  return (
    <div className='h-30  rounded-xl border bg-white flex mb-4'>
        <div className='w-[30%]'>
            <img 
                src={imageurl}
                 alt="available car"
                 
                 className="object-cover rounded-l-xl" />
        </div>
        <div className='p-2 pl-4 relative'>
            <h3 className='font-extrabold text-2xl'>{carName}</h3>
            <p className='mt-2 font-semibold text-slate-600'>New Listing</p>
            <div className='flex items-center gap-2'>
                <BiTrip/>
                <p>{location}</p>
                <BsDot/>
                <p className='font-bold'>{miles} mi</p>
            </div>
            <div className='absolute p-1 text-green-400 bg-white border flex items-center gap-2 rounded-xl mt-2 hover:bg-green-100'>
              <AiOutlineTag/>
              <p className='text-[0.8rem]'>Save <span className='text-[0.8rem] font-semibold'>$13</span></p>


            </div>
            <AiOutlineHeart className='absolute top-5 left-96 text-3xl'/>

            <div className='absolute left-80 flex items-center gap-4'>
              <p className='line-through text-xl text-slate-700'>$84</p>
              <p className='font-bold text-xl'>${price}/day</p>
            </div>


        </div>
    </div>
  )
}

export default CarDetailsCard