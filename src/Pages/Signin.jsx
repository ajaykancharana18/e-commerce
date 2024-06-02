import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className='mt-16 bg-slate-100'>
            <div className=' w-[100%]  lg:w-[50%] mx-auto p-4'>
                <div className='bg-white rounded-2xl w-[100%] md:w-[80%] mx-auto'>
                    <div className='bg-white rounded-2xl pt-12 mt-4  w-[90%] mx-auto flex flex-col justify-center items-center'>

                        <h1 className='font-bold text-3xl py-4'>Signup</h1>

                        <div className='  bg-slate-100 w-[90%]  my-4 rounded-lg '>
                            <input className='py-3 rounded-lg focus:outline-secondary  px-2 w-full bg-transparent' type='text' name='phone' placeholder='phone' />
                        </div>

                        <div className='  bg-slate-100 w-[90%]  my-4 rounded-lg '>
                            <input className='py-3 rounded-lg focus:outline-secondary  px-2 w-full bg-transparent' type='email' name='email' placeholder='example@email.com' />
                        </div>
                        <div className='  bg-slate-100 w-[90%] my-4 rounded-lg'>
                            <input className='py-3 rounded-lg focus:outline-secondary px-2 w-full bg-transparent' type='password' name='password' placeholder='password' />
                        </div>
                        <button className='hover:bg-secondary hover:font-bold  hover:text-black bg-black text-white rounded-lg px-4 py-3 w-[90%] font-semibold my-2'>
                            Signup
                        </button>

                    </div>
                    <div className='flex items-center justify-start w-[80%] mx-auto py-4 gap-1'>
                        Alredy have an account? <Link to={'/login'} className='underline text-secondary'> Login </Link>
                    </div>
                    <div className='flex items-start md:items-center justify-center p-4 gap-1'>
                        <input type='checkbox' name='checkbox' />
                        <p className='text-xs lg:text-sm'>
                            By continuing, I agree to the terms of use and privacy policy.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signin
