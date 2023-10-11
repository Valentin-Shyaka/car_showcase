import React from 'react'

const CarCardSkeleton = () => {
  return (
    <div className="bg-primary-blue-100 h-fit mt-4 rounded-xl shadow-md w-80 p-4">
      <div className="w-32 h-5 bg-[#3333333a] rounded-xl animate-pulse">
        
      </div>

      <div className="w-12 mt-4 h-10 bg-[#3333333a] rounded-xl animate-pulse">
        
      </div>

      

      <div className=' bg-[#3333333a] w-full h-20 my-3 object-contain rounded-xl animate-pulse'>
        
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-wrap justify-center items-center gap-2'>
           <div className=' bg-[#3333333a] w-8 h-8 rounded-md animate-pulse'>

           </div>
           <div className=' bg-[#3333333a] w-8 h-8 rounded-md animate-pulse'>

           </div>
           <div className=' bg-[#3333333a] w-8 h-8 rounded-md animate-pulse'>

           </div>
          </div>
         
        </div>

        <div className=" bg-[#3333333a] w-full h-10 rounded-xl animate-pulse">
          
        </div>
      </div>
      <div className='mt-2 bg-[#3333333a] w-full h-10 rounded-3xl animate-pulse'>

      </div>

      
    </div>
  )
}

export default CarCardSkeleton