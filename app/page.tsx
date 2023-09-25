
import CarCard from '@/components/CarCard'
import { cars } from '@/constants'
import Image from 'next/image'


export default function Home() {
  
  return (
    <main className="overflow-hidden scroll-smooth ">
      <div className=' h-[70vh] w-screen bg-[#f2f4f8] relative'>
        <img
           src={'https://images.unsplash.com/photo-1544218159-ee555140c5b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
           alt='home image'
           className='w-full h-[70vh]'
        />
        <div className='absolute flex top-0 left-0 w-full h-[70vh] bg-[#fdfdfd62] p-36 justify-center'>
            
            <div className='w-[90%] h-20 bg-white rounded-xl relative top-40  justify-center items-center flex p-4'>
                  <div className='w-full block border-r border-slate-400 h-full flex flex-col ml-2 '>
                    <label className='font-bold'>Location</label>
                    <input type="text" name="location" id="" placeholder='City, airport, address or hotel' className='outline-none'/>
                  </div>
                  <div className='w-full block border-r border-slate-400 h-full flex flex-col ml-2'>
                    <label htmlFor=""  className='font-bold'>From</label>
                    <input type="date" name="date" id=""  placeholder='date/time'  className='outline-none'/>

                  </div>
                  <div className='w-full block  h-full flex flex-col ml-2'>
                    <label htmlFor="" className='font-bold'>until</label>
                    <input type="date" name="date" id=""  placeholder='date/time'  className='outline-none'/>

                  </div>


               </div>
          </div>
      </div>
      <section className='w-full h-fit p-10 text-center'>
        <h1 className='text-4xl font-bold'>Find Your Drive</h1>
        <p className='text-2xl font-semibold text-slate-600 mt-4 underline decoration-[#FF7A1A] underline-offset-8 decoration-8'>Explore the world's upcoming car sharing marketplace</p>
        <div className='mt-8 text-left p-16'>
          <h3 className='font-extrabold text-2xl'>Browse by make</h3>
          <div className='flex justify-between  w-full mt-4 '>
          {cars.map(car=>(
            <CarCard link={car.imgUrl} name={car.carName} />
          ))}
          </div>
          
        </div>
      </section>
      <section className='w-full h-fit p-20 text-center bg-[#f2f4f8] flex gap-6 items-center'>
            <div className=' flex-col w-full text-left items-center'>
              <h3 className='font-extrabold text-4xl'>eTware is Carbon Neutral Certified</h3>
              <p className='font-semibold text-slate-500 text-semibold text-xl mt-4'>Drive and share cars knowing your carbon footprint is balanced out by greenhouse-gas-reduction projects. Carbon-neutral travel on Turo is now verified with a carbon neutral certification!
              </p>
              <button className='text-white bg-[#FF7A1A] font-bold p-4 mt-8'>Explore sustainability on eTware</button>
            </div>
            <div className='w-full h-[30vh] rounded-2xl'>
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
               alt=""
               className='object-cover h-full w-full rounded-2xl'
                />
            </div>

      </section>
      <section className='w-full p-20 h-fit flex gap-8'>

      </section>
     
    </main>
  )
}
