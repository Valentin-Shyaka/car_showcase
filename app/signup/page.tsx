import React from 'react'
import CustomButton from '@/components/CustomButton'

const page = () => {
  return (
    <section className='flex w-full h-screen items-center justify-end p-6 bg-slate-300'>
    <div className=' h-fit w-[40vw] flex flex-col gap-3 justify-center shadow-lg rounded-md p-6 bg-white'>
                  <h3 className="text-3xl font-extrabold ">SIGN  UP</h3>
                  <div className="mt-4 flex flex-col gap-4">
                    <div>
                        <label htmlFor="">Location /Country code </label>
                        <input type="text" name="code" id="" placeholder="+250 Rwanda" className="outline-none w-full h-12 indent-4 border border-slate-300 rounded-xl" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" name="code" id="" placeholder="example@company.com" className="outline-none w-full h-12 indent-4 border border-slate-300 rounded-xl" />
                    </div>
                    <div>
                        <label htmlFor="">ID no.</label>
                        <input type="text" name="code" id="" placeholder="xxxx-xxxx-xxxx-xxxx" className="outline-none w-full h-12 indent-4 border border-slate-300 rounded-xl" />
                    </div>
                    <div>
                        <label htmlFor="">password</label>
                        <input type="password" name="code" id="" placeholder="" className="outline-none w-full h-12 indent-4 border border-slate-300 rounded-xl" />
                    </div>
                    <div>
                        <label htmlFor="">Phone number</label>
                        <input type="text" name="code" id="" placeholder="phone number" className="outline-none w-full h-12 indent-4 border border-slate-300 rounded-xl" />
                        <p className="text-slate-500 text-sm">We'll text you a code to confirm your account</p>
                    </div>
                   
                    <CustomButton btnType="submit" text="Login" active/>
                  </div>
                  <span className="text-center text-slate-500">or</span>
                  <div className="flex flex-col gap-2">
                    <CustomButton btnType="submit" text="Continue with Email" active={false}/>
                    
                  </div>
                  <p className="text-center mt-2">Already have an account? <span className="font-semibold cursor-pointer">Signin</span></p>   
                  <footer className="text-sm text-center font-semibold">By signing in, you agree to eTware Inc.'s <span className="text-sky-900 text-sm cursor-pointer">terms of service and policy</span></footer>
          </div>
          </section>

  )
}

export default page