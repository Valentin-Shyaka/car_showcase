import CustomButton from '@/components/CustomButton'
import TeamMemberCard from '@/components/TeamMemberCard'
import React from 'react'
import DirectorCard from './DirectorCard'
import { teamMembers } from '@/constants'
import { directors } from '@/constants'
import MainLayout from '@/layouts/MainLayout'

const TeamPage = () => {
  return (
    <MainLayout>
    <div className='items-center bg-[#f2f4f8]'>
        <div className='relative h-[40vh] w-full '>
            <img
             src="https://images.unsplash.com/photo-1510227320292-0811fae44991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
             alt=""
             className='w-full h-[40vh] object-cover bg-scroll'
              />
              <div className='p-36 text-center w-full h-[40vh] bg-[#00000045] absolute top-0'>
                <h3 className='text-6xl text-white font-extrabold font-serif'>Meet the team</h3>
                <p className='mt-4 text-white text-lg font-bold'>Get to know the people behind the wheel of the world's largest car sharing marketplace</p>
              </div>
        </div>
        <div className='p-20'>
            <h3 className='text-4xl font-extrabold font-serif'>Leadership</h3>
            <div className='mt-6 w-full flex flex-wrap justify-center gap-6 '>
              {teamMembers.map(member =>(
                <TeamMemberCard profileUrl={member.profileUrl} memberName={member.memberName} position={member.position}/>
              ))}
            </div>
            
        </div>
        <div className='p-36'>
            <h3 className='text-4xl font-extrabold font-serif'>Board of Directors</h3>
            <div className='mt-6 w-full flex flex-wrap justify-center gap-8 p-10'>
              {directors.map(director =>(
                <DirectorCard directorName={director.directorName} department={director.department} />
              ))}
            </div>
            
        </div>
        <div className='flex w-full justify-center p-4'>
          <div className='flex w-[50%] align-middle  bg-[#cac9c9] p-20 rounded-md justify-between'>
              <div className=' text-center'>
                <h3 className='text-5xl font-extrabold font-serif'>Join the team</h3>
                <p className='mt-4 font-semibold'>Help put the Rwanda's 1.5 billion cars to better use</p>
              </div>
              <CustomButton text='See all positions' active={true} btnType={undefined}/>
          </div>

        </div>
    </div>
    </MainLayout>
  )
}

export default TeamPage