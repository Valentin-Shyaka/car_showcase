"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Login from './Login'
import { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links=[
        {
            name:'Home'
        },
        {
            name:'About us'
        },
        {
            name:'Testimonial'
        },
        {
            name:'Contact'
        },
    ]
  return (
    <div className='flex z-10  w-full p-4 items-center bg-white '>
        <h3 className='text-[#FF7A1A] font-extrabold text-4xl '>eTware</h3>
        <div className='flex font-bold gap-4 ml-20 max-sm:hidden '>
        {links.map(link=>(
            <p>{link.name}</p>
        ))

        }
        </div>
        <div className='flex float-right gap-4 ml-[45%] max-sm:ml-[20%]'>
            <CustomButton active={false} text={'Log In'} handleClick={() => setIsOpen(true)}/>
            <CustomButton active text={'Become a host'}/>
        </div>

        <Login isOpen={isOpen} closeModal={() => setIsOpen(false)}/>

    </div>
  )
}

export default NavBar