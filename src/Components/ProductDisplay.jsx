import React, { useContext } from 'react'
import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'
import { MdStar } from 'react-icons/md'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (product) => {

    const item = product.product
    const {addToCart} = useContext(ShopContext)
    //    console.log(addToCart)

    return (
        <section>
            <div className='flex flex-col justify-center items-center py-12 px-4 bg-slate-200'>
                <div className='pt-4 flex flex-col md:flex-row items-start justify-center gap-4 '>
                    <div className='flex h-[50%]  justify-center items-center'>
                        <div className='flex flex-col items-center gap-1 h-[25%] w-[25%]'>
                            <img className='w-[70%] md:w-[73%] h-[100%] ' src={product_rt_2} alt='' />
                            <img className='w-[70%] md:w-[73%] h-[100%] ' src={product_rt_3} alt='' />
                            <img className='w-[70%] md:w-[73%] h-[100%] ' src={product_rt_4} alt='' />
                            <img className='w-[70%] md:w-[73%] h-[100%] ' src={product_rt_1} alt='' />
                        </div>
                        <div className='h-[75%] w-[75%]'>
                            <img className='h-[100%] w-[100%]' src={item.image} alt='' />
                        </div>
                    </div>
                    <div className=' flex flex-col justify-center w-[100%]'>
                        <div className='font-semibold text-lg md:text-4xl pb-2 '>
                            {item.name}
                        </div>
                        <div className='flex py-1 text-secondary'>
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <p>(111)</p>
                        </div>
                        <div className='flex gap-2 py-2 text-2xl'>
                            <div> ₹ {item.new_price} </div>
                            <div className='text-secondary line-through'> ₹ {item.old_price} </div>
                        </div>
                        <div className='flex flex-col gap-1 font-semibold'>
                            <h1>select size :</h1>
                            <div className='flex gap-2'>
                                <div className='ring-1 h-10 w-10  hover:ring-secondary ring-slate-300 cursor-pointer flex justify-center  items-center'>S</div>
                                <div className='ring-1 h-10 w-10  hover:ring-secondary ring-slate-300 cursor-pointer flex justify-center  items-center'>M</div>
                                <div className='ring-1 h-10 w-10  hover:ring-secondary ring-slate-300 cursor-pointer flex justify-center  items-center'>X</div>
                                <div className='ring-1 h-10 w-10  hover:ring-secondary ring-slate-300 cursor-pointer flex justify-center  items-center'>XL</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 py-4 md:w-[60%]'>
                            <button onClick={()=> {addToCart(item.id)}} className='ring-1 ring-slate-500  py-2 px-4 uppercase font-medium text-black  hover:bg-tertiary hover:text-slate-100'> Add to cart</button>
                            <button className='ring-1 ring-slate-500  py-2 px-4 uppercase font-medium text-slate-50 bg-tertiary   hover:bg-black hover:text-slate-100'>Buy it now</button>
                        </div>
                        <div className='py-2'>
                            <p className='py-1'><span className='font-semibold text-black'>Category:</span> Women | Jacket | Winter</p>
                            <p className='py-1'><span className='font-semibold text-black'>Tags:</span> Women | Latest | Winter</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay