import React from 'react'
import FOOTER_LINKS from '../assets/footer_links'
import FOOTER_CONTACT_INFO from '../assets/footer_contact'
import SOCIALS from '../assets/socials'
import { Link } from 'react-router-dom'
import { PiCopyrightThin } from 'react-icons/pi'


const Footer = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex flex-wrap  justify-around items-start py-12 h-auto w-auto text-lg bg-pink-50 shadow-lg mb-1'>

                {/* <div className='flex justify-center items-center'>
                    <Link to={'/'} className='font-semibold text-black text-lg'>Shoppee</Link>
                </div> */}

                {
                    FOOTER_LINKS.map((col) => (
                        <div key={col.title} className='flex flex-col text-lg font-semibold'>
                            {col.title}
                            <ul className='flex flex-col font-normal  py-2  text-slate-500 text-sm'>
                                {col.links.map((link) => (
                                    <Link to={'/'} key={link}>{link}</Link>
                                ))}
                            </ul>
                        </div>
                    ))

                }

                {
                    FOOTER_CONTACT_INFO.map((info) => (
                        // console.log(info.id)
                        <div key={info.id} className='flex flex-col justify-center items-center font-semibold text-lg'>
                            {info.title}
                            <div className=' py-2'>
                                {
                                    info.links.map((link) => (
                                        <div key={link.value} className='font-normal text-slate-500 text-sm ' >
                                            {link.label}: {link.value}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }

                {
                    SOCIALS.map((apps) => (
                        // console.log(apps)
                        <div key={apps.title} className='flex flex-col font-semibold text-lg justify-center items-center'>
                            {apps.title}
                            <div className='flex py-2'>
                                {
                                    apps.links.map((link) => (
                                        // console.log(link)
                                        <div className='flex' key={link} >
                                            <Link className='h-8 w-8 flex' to={'/'}> <img src={link} alt="logo" /> </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className='flex gap-1 justify-center items-center text-sm bg-slate-100 h-40 w-full shadow-2xl text-slate-400' >
                <PiCopyrightThin size={20} /> 2024 Shoppee | All Rights Reserved.
            </div>
        </div>
    )
}


export default Footer


