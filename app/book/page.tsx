import React from 'react'
import Form from './Form'
import MainLayout from '@/layouts/MainLayout'

const page = () => {
  return (
    <MainLayout>
    <div className=' bg-[#f2f4f8]'>
      <div className='relative h-[40vh] w-full '>
            <img
             src="https://images.unsplash.com/photo-1510227320292-0811fae44991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
             alt=""
             className='w-full h-[40vh] object-cover bg-scroll'
              />
              <div className='p-36 text-center w-full h-[40vh] bg-[#00000045] absolute top-0'>
                <h3 className='text-6xl text-white font-extrabold font-serif'>Book your Drive</h3>
                <p className='mt-4 text-white text-lg font-bold'>Get to know the people behind the wheel of the world's largest car sharing marketplace</p>
              </div>
        </div>
        <div className=' p-8 bg-[#f2f4f8] w-full h-[260vh]'>
          <div className='absolute top-96 w-[96%] bg-white p-20 rounded-xl shadow-md'>
          <Form/>
          </div>

        </div>
    </div>
    </MainLayout>
  )
}

export default page