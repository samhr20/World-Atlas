import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='bg-[#202020] text-white flex justify-center items-center py-5 px-10 '>
            <div className='max-w-[1100px] w-full flex justify-between items-center'>
                <h1 className='text-[28px]'><Link to={'/'}>World Atlas</Link></h1>

                <button
                    className='block sm:hidden p-2 focus:outline-none'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <RxHamburgerMenu size={25} />
                </button>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-[#202020] p-4 sm:static sm:flex sm:items-center  sm:w-auto rounded-b-3xl  sm:rounded-none z-10 `}>
                    <ul className=' flex sm:flex-row  flex-col items-end list-none sm:gap-10 gap-5 sm:px-0 px-4 text-[25px] sm:text-[20px] mt-2.5 sm:mt-0'>
                        <li className='hover:text-blue-400 hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/'}>Home</Link> </li>
                        <li className='hover:text-blue-400 hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/about'}>About</Link> </li>
                        <li className='hover:text-blue-400 hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/country'}>Country</Link> </li>
                        <li className='hover:text-blue-400 hover:underline' onClick={() => setIsMenuOpen(false)}><Link to={'/contact'}>Contact</Link>  </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
