import React from 'react'
import all_products from '../assets/all_products'
import { Link } from 'react-router-dom'
import bannerwomens from '../assets/bannerwomens.png'

const Women = () => {

  const womencat = all_products.filter(cat => cat.category === 'women')
  console.log(womencat)

  return (

    <div className='mt-24'>
      <div className='w-[95%] mx-auto'>
        <img src={bannerwomens} />
      </div>
      <div className='w-[90%] mx-auto py-4'>
        <h1><span className='font-semibold'>Showing 1-12 </span> out of 36 products</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12 '>
        {
          womencat.map((women) => (
            <div key={women.id} className=' shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg'>
              <div className='flex justify-center items-center'>
                <Link to={`/product/${women.id}`}> <img className='  rounded-t-2xl' src={women.image} alt='' /> </Link>
              </div>
              <div className='h-16 flex justify-center items-center font-extralight p-4 m-4'>
                {women.name}
              </div>
              <div className='h-16 gap-4 flex justify-center items-center m-4  p-4'>
                ₹{women.new_price} <span className='line-through text-red-700'> ₹{women.old_price} </span>
              </div>
            </div>

          ))
        }
      </div>
    </div>

  )




}

export default Women