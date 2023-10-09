import React from 'react'
interface MemberProps{
  profileUrl:string;
  memberName:string;
  position: string;
}

const TeamMemberCard = ({profileUrl,memberName,position}:MemberProps) => {
  return (
    <div className='bg-[#f2f4f8] h-80 w-60 rounded-xl text-center shadow-lg border hover:border cursor-pointer transition-all duration-300 hover:border-[#FF7A1A]'>
      <div className='w-full flex items-center justify-center align-middle'>
        <img
         src={profileUrl}
         alt='member image'
         className='w-[80%] rounded-full mt-4 h-56 object-cover'
        
        />
        </div>
        <p className='mt-4 font-bold'>{memberName}</p>
        <span className='text-slate-500 text-sm font-semibold'>{position}</span>
    </div>
  )
}

export default TeamMemberCard