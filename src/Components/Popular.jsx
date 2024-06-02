import React from 'react'
import POPULAR from '../assets/popular'
import { Link } from 'react-router-dom'

const Popular = () => {

    

  return (
    <div>
        <h3 className='font-bold text-4xl p-4 text-center text-tertiary '>Popular Products</h3>
        <hr className=''/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12 '>
            {
                POPULAR.map((popular)=>(
                    // console.log(popular)
                    <div key={popular.id} className=' shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg'>
                        <div className='flex justify-center items-center'>
                            <Link to={`product/${popular.id}`}  > <img onClick={window.scrollTo(0,0)}  src={popular.image} alt="" className='rounded-t-2xl' /> </Link>
                        </div>
                        <div className='h-16 m-4 flex justify-center items-center font-extralight p-4'>
                            {popular.name}
                        </div>
                        <div className='h-16 gap-4 flex justify-center items-center m-4  p-4'>
                             ₹{ popular.new_price } <span className='line-through text-red-700'> ₹{ popular.old_price } </span>
                        </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Popular