"use client"
import CarCard from '@/components/CarCard'
import Question from '@/components/Question'
import { cars } from '@/constants'
import Image from 'next/image'
import {faqs} from '@/constants'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";


export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden scroll-smooth ">
      <div className=' h-[70vh] w-screen bg-[#f2f4f8] relative'>
        <img
           src={'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
           alt='home image'
           className='w-full h-[70vh] object-cover'
        />
        <div className='absolute flex top-0 left-0 w-full h-[70vh] bg-[#fdfdfd00] max-sm:p-20 p-36 justify-center'>
            
            <div className='w-[90%] h-20 max-sm:flex-wrap max-sm:w-full max-sm:h-44 bg-white rounded-xl relative top-30  justify-center items-center flex  gap-4 p-4'>
                  <div className='w-full block border-r border-slate-400 h-full max-sm:h-10 flex flex-col ml-2 mr-2 '>
                    <label className='font-bold'>Location</label>
                    <input type="text" name="location" id="" placeholder='City, airport, address or hotel' className='outline-none w-[90%] bg-none'/>
                  </div>
                  <div className='w-full block border-r border-slate-400 h-full max-sm:h-10 flex flex-col max-sm:ml-2 ml-4 mr-2 '>
                    <label htmlFor=""  className='font-bold'>From</label>
                    <input type="date" name="date" id=""  placeholder='date/time'  className='outline-none w-[90%] bg-none'/>

                  </div>
                  <div className='w-full block  h-full max-sm:h-10 flex flex-col max-sm:ml-2 max-sm:border-r max-sm:border-slate-400 ml-4 mr-2 '>
                    <label htmlFor="" className='font-bold'>until</label>
                    <input type="date" name="date" id=""  placeholder='date/time'  className='outline-none w-[90%] bg-none'/>

                  </div>
                  <div className='text-2xl font-bold rounded-full bg-[#f2f4f8] p-4 cursor-pointer'>
                      <AiOutlineSearch className='text-2xl font-bold'/>
                  </div>


               </div>
          </div>
      </div>
      <section className='w-full h-fit p-10 text-center'>
        <h1 className='text-4xl font-bold'>Find Your Drive</h1>
        <p className='text-2xl font-semibold text-slate-600 mt-4 underline decoration-[#FF7A1A] underline-offset-8 decoration-8'>Explore the world's upcoming car sharing marketplace</p>
        <div className='mt-8 text-left p-16'>
          <h3 className='font-extrabold text-2xl'>Browse by make</h3>
         { !isDataEmpty?(
         <div className='flex flex-wrap gap-4 justify-between w-full mt-4 home__cars-wrapper'>
          {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
          </div>
          ):(
            <div className='flex flex-wrap gap-6'>
              <div className='flex flex-wrap gap-4 items-center p-20 justify-between h-60 w-60 rounded-xl shadow-md  mt-4 border bg-slate-300 animate-pulse'>
                 <p className='font-bold'>Loading...</p>
              </div>
              <div className='flex flex-wrap gap-4 items-center p-20 justify-between h-60 w-60 rounded-xl shadow-md  mt-4 border bg-slate-300 animate-pulse'>
                 <p className='font-bold'>Loading...</p>
              </div>
              <div className='flex flex-wrap gap-4 items-center p-20 justify-between h-60 w-60 rounded-xl shadow-md  mt-4 border bg-slate-300 animate-pulse'>
                 <p className='font-bold'>Loading...</p>
              </div>
               <div className='flex flex-wrap gap-4 items-center p-20 justify-between h-60 w-60 rounded-xl shadow-md  mt-4 border bg-slate-300 animate-pulse'>
                 <p className='font-bold'>Loading...</p>
              </div>
               <div className='flex flex-wrap gap-4 items-center p-20 justify-between h-60 w-60 rounded-xl shadow-md  mt-4 border bg-slate-300 animate-pulse'>
                 <p className='font-bold'>Loading...</p>
              </div>
               <div className='flex flex-wrap gap-4 items-center p-20 justify-between h-60 w-60 rounded-xl shadow-md  mt-4 border bg-slate-300 animate-pulse'>
                 <p className='font-bold'>Loading...</p>
              </div>
            </div>
            )
          }
          
        </div>
      </section>
      <section className='w-full h-fit p-20 text-center bg-[#f2f4f8] flex gap-6 items-center'>
            <div className=' flex-col w-full text-left items-center'>
              <h3 className='font-extrabold text-4xl'>eTware is Carbon Neutral Certified</h3>
              <p className='font-semibold text-slate-500 text-semibold text-xl mt-4'>Drive and share cars knowing your carbon footprint is balanced out by greenhouse-gas-reduction projects. Carbon-neutral travel on Turo is now verified with a carbon neutral certification!
              </p>
              <button className='text-white bg-[#FF7A1A] font-bold p-4 mt-8'>Explore sustainability on eTware</button>
            </div>
            <div className='w-full h-[30vh] rounded-2xl max-sm:hidden'>
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
               alt=""
               className='object-cover h-full w-full rounded-2xl'
                />
            </div>

      </section>
      <section className='w-full p-20 h-fit gap-8 text-center '>
      <h3 className='text-4xl font-bold mt-4 underline  decoration-[#FF7A1A] underline-offset-8 decoration-8 mb-16'>Frequently Asked questions</h3>
      <div className='flex flex-wrap gap-8'>
        { faqs.map(faq=>(
          <Question qtitle={faq.title} qtext={faq.text}/>
          ))}
      </div>
      </section>
     
    </main>
  )
}
