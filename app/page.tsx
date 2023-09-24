
import Image from 'next/image'


export default function Home() {
  
  return (
    <main className="overflow-hidden ">
      <div className=' h-[90vh] w-screen bg-[#f2f4f8]'>
        <img
           src={'https://images.unsplash.com/photo-1646029642262-022158ff5794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
           alt='home image'
           className='w-full '
           />
           <div className='absolute top-0 left-0 w-full h-[90vh] bg-[#f2f4f842] items-center'>
               <div className='w-[80%] h-20 bg-white rounded-lg '>
                  
               </div>
           </div>

        
        
      </div>
    </main>
  )
}
