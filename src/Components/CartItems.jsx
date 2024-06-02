import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FaTrash } from 'react-icons/fa';

const CartItems = () => {

    const { all_products, cartItems, deleteFromCart, getTotalCartAmount } = useContext(ShopContext);
    // console.log(cartItems)

    return (
        <div className='bg-slate-200 py-4'>
            <div className='hidden md:block'>
                <table className='w-[100%]' >
                    <thead>
                        <tr className='bg-slate-200 '>
                            <th className='p-2 py-4'>Products</th>
                            <th className='p-2 py-4'>Title</th>
                            <th className='p-2 py-4'>Price</th>
                            <th className='p-2 py-4'>Quantity</th>
                            <th className='p-2 py-4'>Total</th>
                            <th className='p-2 py-4'>Remove</th>
                        </tr>
                    </thead>
                    <tbody className='bg-slate-100'>
                        {all_products.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return <tr className='py-2 border-b-2' key={e.id}>
                                    <td className='w-[1%] p-2'> <img src={e.image} /> </td>
                                    <td className='p-2 text-center'> {e.name} </td>
                                    <td className='p-2 text-center'> ₹ {e.new_price} </td>
                                    <td className='p-2 text-center'> {cartItems[e.id]} </td>
                                    <td className='p-2 text-center'> ₹ {cartItems[e.id] * e.new_price} </td>
                                    <td className='p-2 cursor-pointer  flex justify-center items-center py-8'><FaTrash className='h-8 w-8 hover:fill-red-600' onClick={() => deleteFromCart(e.id)} /></td>
                                </tr>

                            }
                            return null;
                        })}

                    </tbody>
                </table>
            </div>
            <div className='md:hidden'>
                <div className='bg-slate-200'>
                    <p className=' text-2xl p-4  font-semibold text-black'>
                        Products
                    </p>
                </div>
                {all_products.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div key={e.id}>
                            <div className='flex gap-2 p-4 bg-slate-100 border-b-2'>
                                <div className='min-h-40 w-auto'>
                                    <img src={e.image} />
                                </div>
                                <div className='flex flex-col min-h-40 '>
                                    <div className='text-start px-4 py-1 overflow-hidden text-xs'> {e.name} </div>
                                    <div className='text-start px-4 py-1 font-bold'> <span >Price :</span> ₹ {e.new_price} </div>
                                    <div className='text-start px-4 py-1 font-bold'> <span className='font-bold'>Q :</span> {cartItems[e.id]} </div>
                                    <div className='text-start px-4 py-1 font-bold'> <span >Total :</span> ₹ {e.new_price * cartItems[e.id]} </div>
                                    <div className='flex justify-between  items-center rounded-lg hover:bg-red-600 gap-2 px-4 p-2 my-2 bg-slate-300'> Delete <FaTrash onClick={() => deleteFromCart(e.id)} size={15} /></div>
                                </div>
                            </div>


                        </div>
                    }
                    return null;
                })}

            </div>

            <div className='bg-white md:w-[50%] py-12 md:mx-auto rounded-xl mt-4'>

                <div className=' p-4'>
                    <div>
                        <p className='font-semibold text-black py-8 text-2xl'> Summary  </p>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <p className='font-semibold text-black text-lg'>Subtotal :</p>
                        <div className='font-semibold text-black text-2xl'> ₹ {getTotalCartAmount()} </div>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <p className='font-semibold text-black text-lg'>Shippind fee : </p>
                        <p>Free</p>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <p className='font-bold text-black text-2xl'> Total : </p>
                        <div className='font-bold text-black text-2xl'> ₹ {getTotalCartAmount()} </div>
                    </div>
                </div>
                <div className='px-4'>
                    <button className='bg-tertiary my-4 px-4 py-2 rounded-full text-slate-100 hover:text-white font-semibold '>
                        checkout
                    </button>
                </div>
                <div className='grid grid-cols-1 w-[70%] mx-4 py-4'>
                    <p className='p-2'>Coupon code if any ?</p>
                    <div className='ring-1  bg-slate-400 flex  justify-between rounded-full'>
                        <input className='rounded-full bg-transparent  py-2 w-full px-2 outline-none' type='text' name='coupon' />
                        <button className='bg-tertiary px-4 py-2 rounded-full font-semibold text-slate-100'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems