import React from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const contactInfo = [
  { id: 1, icon: <FaLocationDot fill='#489581' />, title: 'Find Us', detail: 'Hisar, Haryana' },
  { id: 2, icon: <FaPhone fill='#489581' />, title: 'Call Us', detail: '+91 8278568770' },
  { id: 3, icon: <IoMail fill='#489581' />, title: 'Mail Us', detail: 'shubhamsaini8965@gmail.com' }
];

const Footer = () => {
  return (
    <div className='bg-[#202020] text-white py-10 px-4 sm:px-10'>
      <div className='max-w-[1100px] mx-auto flex flex-col gap-8'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4'>
          {contactInfo.map((item) => (
            <div key={item.id} className='flex items-center gap-4'>
              <span className='text-2xl'>{item.icon}</span>
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm text-gray-300'>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10 sm:gap-10'>
          <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
            <li className='hover:text-blue-500 hover:underline'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='hover:text-blue-500 hover:underline'>
              <a href="https://github.com/samhr20" target='_blank' rel='noopener noreferrer'>Social</a>
            </li>
            <li className='hover:text-blue-500 hover:underline'>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
          </ul>
          <p className='text-sm text-gray-400'>
            Copyright © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;