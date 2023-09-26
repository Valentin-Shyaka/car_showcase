import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import CustomButton from "./CustomButton";


interface LoginProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Login =({isOpen,closeModal}:LoginProps)=>(
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-[#FF7A1A] text-white font-bold rounded-lg '
                  onClick={closeModal}
                >
                  close
                </button>

                <div className='flex-1 flex flex-col gap-3 justify-center'>
                  <h3 className="text-3xl font-extrabold ">Log in</h3>
                  <div className="mt-4 flex flex-col gap-4">
                    <div>
                        <label htmlFor="">Country code</label>
                        <input type="text" name="code" id="" placeholder="+250 Rwanda" className="outline-none w-full h-12 indent-4 border border-slate-300 rounded-xl" />
                    </div>
                    <div>
                        <label htmlFor="">Phone number</label>
                        <input type="text" name="code" id="" placeholder="phone number" className="outline-none w-full h-12 indent-4 border border-slate-300 rounded-xl" />
                        <p className="text-slate-500 text-sm">We'll text you a code to confirm your number</p>
                    </div>
                    <label className="text-sm flex gap-2 text-slate-700">
                        <input type="checkbox" className="accent-[#FF7A1A]" /> Remember me
                    </label>
                    <CustomButton text="Login" active/>
                  </div>
                  <span className="text-center text-slate-500">or</span>
                  <div className="flex flex-col gap-2">
                    <CustomButton text="Continue with Email" active={false}/>
                    
                  </div>
                  <p className="text-center mt-2">Don't have an account? <span className="font-semibold cursor-pointer">Signup</span></p>   
                  <footer className="text-sm text-center font-semibold">By logging in, you agree to eTware Inc.'s <span className="text-sky-900 text-sm cursor-pointer">terms of service and policy</span></footer>
                </div>

                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
)

export default Login