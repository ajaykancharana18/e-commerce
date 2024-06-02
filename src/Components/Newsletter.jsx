import React from 'react'

const Newsletter = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col p-4 md:p-16 bg-slate-50 my-4 font-semibold'>
                <h1 className='text-lg  md:text-4xl capitalize py-2'>Get Exclusive offers on your email</h1>
                <h1 className=' text-xs md:text-lg uppercase py-2 mb-4'>Subscribe to our newsletter and stay upadated</h1>
                <div className=' flex justify-between rounded-full w-[90%] md:w-[50%] ring-1 ring-slate-400 bg-slate-300'>
                    <input className='outline-none bg-transparent w-full px-2 p-2' type='email' name='email' placeholder='Your email address' />
                    <button className='bg-tertiary text-white p-2 px-4 hover:bg-secondary rounded-full'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
