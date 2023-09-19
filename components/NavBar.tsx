import React from 'react'
import CustomButton from './CustomButton'

const NavBar = () => {
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
    <div className='flex z-10 absolute top-0 w-full p-4 items-center '>
        <h3 className='text-[#FF7A1A] font-extrabold text-4xl '>FoodHUB</h3>
        <div className='flex font-bold gap-4 ml-20'>
        {links.map(link=>(
            <p>{link.name}</p>
        ))

        }
        </div>
        <div className='flex float-right gap-4 ml-[50%] md:hidden lg:flex'>
            <CustomButton active={false} text={'Log In'}/>
            <CustomButton active text={'Start free trial'}/>
        </div>

    </div>
  )
}

export default NavBar