import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='bg-[#202020] text-white flex justify-center items-center py-5 px-4 sm:px-10'>
            <div className='max-w-[1100px] w-full flex justify-between items-center'>
                <div>
                    <h1 className='text-[28px]'>
                        <Link to={'/'}>World Atlas</Link>
                    </h1>
                </div>

                <button
                    className='block sm:hidden p-2 focus:outline-none'
                    onClick={toggleMenu}
                >
                    <RxHamburgerMenu size={25} />
                </button>

                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } sm:flex sm:items-center sm:gap-10 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#202020] sm:bg-transparent z-10`}
                >
                    <ul className='flex flex-col sm:flex-row list-none gap-4 sm:gap-10 p-4 sm:p-0'>
                        <li className='hover:text-blue-400 hover:underline'>
                            <Link to={'/'} onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li className='hover:text-blue-400 hover:underline'>
                            <Link to={'/about'} onClick={() => setIsMenuOpen(false)}>About</Link>
                        </li>
                        <li className='hover:text-blue-400 hover:underline'>
                            <Link to={'/country'} onClick={() => setIsMenuOpen(false)}>Country</Link>
                        </li>
                        <li className='hover:text-blue-400 hover:underline'>
                            <Link to={'/contact'} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;