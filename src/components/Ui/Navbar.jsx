import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import ThemeBtn from './ThemeBtn';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
        <div className='dark:bg-[#202020] dark:text-white bg-[#F8F9FA] flex justify-center items-center py-5 px-10 '>
            <div className='max-w-[1100px] w-full flex justify-between items-center  '>
                <h1 className='text-[28px]  font-lilita-one font-semibold italic'><Link to={'/'}>World Atlas</Link></h1>

                <button
                    className='block md:hidden p-2 focus:outline-none'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <RxHamburgerMenu size={25} />
                </button>   

                <div className={`${isMenuOpen ? 'block shadow bg-white'  : 'hidden'} absolute top-16 left-0 w-full dark:bg-[#202020] p-4 md:static md:flex sm:items-center md:w-auto rounded-b-3xl  md:rounded-none z-10 `}>
                    <ul className=' flex md:flex-row  flex-col items-end list-none md:gap-8 gap-5 md:px-0 px-4 text-[25px] md:text-[20px] mt-2.5 md:mt-0'>
                        <li className='hover:text-[#0D6EFD] hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/'}>Home</Link> </li>
                        <li className='hover:text-[#0D6EFD] hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/about'}>About</Link> </li>
                        <li className='hover:text-[#0D6EFD] hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/country'}>Country</Link> </li>
                        <li className='hover:text-[#0D6EFD] hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/contact'}>Contact</Link>  </li>
                        <ThemeBtn/>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
