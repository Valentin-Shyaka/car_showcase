import { notFound } from "next/navigation";

export default function NOtFound(){
  return(
    <div className="p-60 text-center font-extrabold bg-[#f2f4f8] ">
        <p className="text-5xl text-slate-500"><span className="text-6xl mr-2 text-[#FF7A1A]">404</span> Page not found</p>
    </div>
  )
}