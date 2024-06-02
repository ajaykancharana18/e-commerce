import React from 'react'
import { FaHome } from 'react-icons/fa'
import { GiDress, GiFurShirt } from 'react-icons/gi'
import { IoShirtSharp } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ stylenav }) => {


    return (
        <nav>
            <ul className={`flex gap-6  ${stylenav}`} >

                <li><NavLink to={'/'}  className={({isActive})=> isActive?  'active_link' : ''} ><div className='flex items-center gap-1 '><FaHome /> Home </div></NavLink></li>
                <li><NavLink to={'/men'}  className={({isActive})=> isActive?  'active_link' : ''}><div className='flex items-center gap-1 '><IoShirtSharp /> Men </div></NavLink></li>
                <li><NavLink to={'/women'}  className={({isActive})=> isActive?  'active_link' : ''}><div className='flex items-center gap-1 '><GiDress /> Women </div></NavLink></li>
                <li><NavLink to={'/kids'} className={({isActive})=> isActive?  'active_link' : ''} ><div className='flex items-center gap-1 '><GiFurShirt /> Kids </div></NavLink></li>

            </ul>
        </nav>
    )
}
export default Navbar