
import Image from 'next/image'


export default function Home() {
  
  return (
    <main className="overflow-hidden scroll-smooth ">
      <div className=' h-[70vh] w-screen bg-[#f2f4f8] relative'>
        <img
           src={'https://images.unsplash.com/photo-1646029642262-022158ff5794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
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
      <section className='w-full h-fit p-10'>
        yooooo
      </section>
     
    </main>
  )
}
