import React from 'react'
import LATEST from '../assets/latest' 
import { Link } from 'react-router-dom'

const Newcollection = () => {
  return (
    <div>
        <h3 className='font-bold text-4xl p-4 text-center text-tertiary '>Latest Products</h3>
        <hr className=''/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12 '>
            {
                LATEST.map((latest)=>(
                    // console.log(latest.id)
                    <div key={latest.id} className=' shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg'>
                        <div className='flex justify-center items-center'>
                            <Link to={`product/${latest.id}`} > <img className='  rounded-t-2xl' src={latest.image} alt="" /> </Link>
                        </div>
                        <div className='h-16 flex justify-center items-center font-extralight p-4 m-4'>
                            {latest.name}
                        </div>
                        <div className='h-16 gap-4 flex justify-center items-center m-4  p-4'>
                             ₹{ latest.new_price } <span className='line-through text-red-700'> ₹{ latest.old_price } </span>
                        </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Newcollection