import React from 'react'
interface DirectorProps{
    directorName: string;
    department: string;
}

const DirectorCard = ({directorName,department}:DirectorProps) => {
  return (
    <div>
        <h3 className='uppercase font-extrabold text-lg'>{directorName}</h3>
        <p className='mt-4 font-semibold'>{department}</p>
        <p className='mt-6 text-[#1b57fb] cursor-pointer'>Read bio</p>
    </div>
  )
}

export default DirectorCard