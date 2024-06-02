import React from 'react'
import { BiSolidOffer } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { HiShoppingBag } from 'react-icons/hi2'

const Hero = () => {
    return (
        <div className=' bg-hero bg-cover bg-no-repeat mt-16 -z-10  h-screen w-full px-8  justify-center items-center md:items-start flex flex-col'>
            <h1 className=' text-5xl text-wrap w-full h-[20%] py-4 sm:text-6xl font-bold mb-4 text-pink-500 hover:text-yellow-300 cursor-pointer  '>
                Digital Shopping Hub
            </h1>
            <p className='flex  md:w-[50%] flex-wrap mt-16 md:mt-4' >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi mollitia autem accusantium repellendus, id consectetur
                deleniti saepe, tempore explicabo quos earum odio? Quam expedita
                quo soluta voluptas, iste ea similique,Lorem ipsum dolor, sit amet
                consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit.
            </p>
            <div className='flex  py-4'>
            <FaStar className='fill-orange-500'/>
            <FaStar className='fill-orange-500' />
            <FaStar className='fill-orange-500' />
            <FaStar className='fill-orange-500' />
            <FaStar />
            <p className='ml-4'><span className='font-bold text-gray-90'>176k</span> Excellent Reviews</p>
            </div>
            <div className='flex py-8 gap-4'>
                <button className='bg-gray-90 text-white font-semibold p-2  w-32 md:w-44 rounded-full hover:bg-orange-500 flex justify-center items-center gap-2'><HiShoppingBag size={20} />Shop now</button>
                <button className='bg-gray-90 text-white font-semibold p-2  w-32 md:w-44 rounded-full hover:bg-orange-500 flex justify-center items-center gap-2'><BiSolidOffer size={20}/>Offers</button>
            </div>
        </div>
    )
}

export default Hero