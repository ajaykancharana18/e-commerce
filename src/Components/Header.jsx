import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import logout from '../assets/logout.svg'
import login from '../assets/user.svg'
import { FaShoppingCart } from 'react-icons/fa'
import { HiBars3 } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)


    }



    return (
        <>
            <header className={` flex justify-between fixed top-0  w-full z-50 bg-[#fff] items-center p-4 font-semibold shadow-md  `} >
                <div onClick={() => { setOpenMenu(false) }} >
                    <Link to={'/'}> <img src={logo} alt="" height={60} width={60} /></Link>
                </div>
                <div className='hidden md:block '>
                    <Navbar />
                </div>

                <div className='flex  justify-center items-center gap-6 relative'>
                    <Link onClick={() => { setOpenMenu(false) }} to={'/cart'}><FaShoppingCart size={30} /></Link>
                    <div onClick={() => { setOpenMenu(false) }} className='absolute right-32 md:right-28 -top-2   bg-orange-500 h-6 w-6  text-white  text-center rounded-full '>0</div>
                    <Link onClick={() => { setOpenMenu(false) }} to={'/login'} className=' bg-orange-400 rounded-full flex  px-4 py-2 gap-2'><img src={login} alt="" height={20} width={20} /><p className='text-white font-semibold hidden md:block'>Login</p></Link>

                    <div className={` ring-1 ring-gray-200 rounded-full md:hidden p-2 ${openMenu ? 'hidden' : ''}`}>
                        <HiBars3 size={25} onClick={toggleMenu} />
                    </div>
                    <div className={` ring-1 ring-gray-200 rounded-full md:hidden p-2 ${openMenu ? '' : 'hidden'}`}>
                        <RxCross2 size={25} onClick={toggleMenu} />
                    </div>
                </div>
            </header>

            {/* mobile */}

            <div onClick={toggleMenu} className={`md:hidden font-semibold z-40`} >
                <Navbar stylenav={` flex-col justify-center items-center   fixed  left-0 top-0 trasnition-all ease-linear duration-500 delay-0 w-[100%] bg-[#fff] ${openMenu ? 'top-[5%]' : '-top-[101%]'} rounded-lg shadow-lg ring-1 ring-gray-200 p-20  gap-12 `} />
            </div>

        </>
    )
}

export default Header