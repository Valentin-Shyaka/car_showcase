import React from 'react'

const TeamMemberCard = () => {
  return (
    <div className='bg-[#f2f4f8] h-80 w-60 rounded-xl text-center shadow-lg border hover:border cursor-pointer transition-all duration-300 hover:border-[#FF7A1A]'>
      <div className='w-full flex items-center justify-center align-middle'>
        <img
         src={"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}
         alt='member image'
         className='w-[80%] rounded-full mt-4 h-56 object-cover'
        
        />
        </div>
        <p className='mt-4 font-bold'>Carl Deuker</p>
        <span className='text-slate-500 font-semibold'>Chief Executive Officer</span>
    </div>
  )
}

export default TeamMemberCard