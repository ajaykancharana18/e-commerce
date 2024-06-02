import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='mt-16 bg-slate-100'>
            <div className=' w-[100%]  lg:w-[50%] mx-auto p-4'>
                <div className='bg-white rounded-2xl w-[100%] md:w-[80%] mx-auto '>

                    <div className='bg-white rounded-2xl pt-12 mt-8 mb-4  w-[90%] md:w-[80%] mx-auto flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-3xl py-4'>login</h1>

                        <div className='  bg-slate-100 w-[90%]  my-4 rounded-lg '>
                            <input className='py-3 rounded-lg focus:outline-secondary  px-2 w-full bg-transparent' type='email' name='email' placeholder='example@email.com' />
                        </div>
                        <div className='  bg-slate-100 w-[90%] my-4 rounded-lg'>
                            <input className='py-3 rounded-lg focus:outline-secondary px-2 w-full bg-transparent' type='password' name='password' placeholder='password' />
                        </div>
                        <button className='hover:bg-secondary hover:font-bold  hover:text-black bg-black text-white rounded-lg px-4 py-3 w-[90%] font-semibold my-2'>
                            Login
                        </button>
                        <button className='flex items-center gap-2 justify-center hover:bg-secondary hover:text-black bg-black hover:font-bold text-white rounded-lg px-4 py-3 w-[90%] font-semibold my-2'>
                            Login with <FaGoogle size={15} />
                        </button>
                    </div>
                    <div className='flex items-center justify-start w-[70%] mx-auto pb-4 gap-1'>
                        <p> New user? <Link to={'/signin'} className='underline text-orange-300'> create account </Link></p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Login
