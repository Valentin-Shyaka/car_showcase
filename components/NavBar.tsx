"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Login from './Login'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const NavBar = () => {
   
    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false);
    const links=[
        {
            name:'Home',
            href:'/home'
        },
        {
            name:'Team',
            href:'/ourTeam'
        },
        {
            name:'booking',
            href:'/book'
        },
        {
            name:'Contact',
            href:'/contact'
        },
    ]
    const activeTopicStyle=' text-[#ff7a1a] border-b border-b-4 text-large border-b-[#ff7a1a]';
    const topicStyle=" text-blue "
  return (
    <div className='flex z-10  w-full p-4 items-center bg-white '>
        <h3 className='text-[#FF7A1A] font-extrabold text-4xl '>eTware</h3>
        <div className='flex font-bold gap-6 ml-20 max-sm:hidden '>
        {links.map(link=>(
            <Link href={`${link.href}`} key={link.name}>
            <p className={pathname=== link.href ? activeTopicStyle : topicStyle}>{link.name}</p>
            </Link>
        ))

        }
        </div>
        <div className='flex float-right gap-4 ml-[45%] max-sm:ml-[20%]'>
            <CustomButton btnType={undefined} active={false} text={'Log In'} handleClick={() => setIsOpen(true)}/>
            <CustomButton btnType={undefined} active text={'Become a host'}/>
        </div>

        <Login isOpen={isOpen} closeModal={() => setIsOpen(false)}/>

    </div>
  )
}

export default NavBar