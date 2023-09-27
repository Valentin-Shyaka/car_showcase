import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React, { MouseEventHandler } from 'react'
 interface Props{
  text:string;
  active:boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;

 }

const CustomButton = ({text,active,handleClick}:Props) => {
    
  return (
    <button className={active ?'p-4 border bg-[#FF7A1A] rounded-lg font-bold text-white max-sm:p-2':'p-4 border border-[#FF7A1A] rounded-lg font-bold max-sm:p-2'} onClick={handleClick}>
        
        <p>{text}</p>
    </button>
  )
}

export default CustomButton