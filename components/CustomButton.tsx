import React from 'react'


const CustomButton = ({text,active}) => {
    
  return (
    <button className={active ?'p-4 border bg-[#FF7A1A] rounded-lg font-bold text-white':'p-4 border border-[#FF7A1A] rounded-lg font-bold'}>
        {text}
    </button>
  )
}

export default CustomButton