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
    <div className='bg-[#202020] text-white flex flex-col gap-5.5 justify-center items-center py-5 px-10'>
      <div className='flex justify-between items-center max-w-[1100px] gap-2 w-full'>
        {contactInfo.map((item) => (
          <div key={item.id} className='flex justify-center items-center gap-3.5'>
            <span>{item.icon}</span>
            <div>
              <h3 className='text-[17px] mb-1'>{item.title}</h3>
              <p className='text-xs text-gray-300'>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center max-w-[1100px]  w-full'>
          <p className='text-[12px] text-gray-400'>Copyright@2025 . All Rigths reserved </p>
          <ul className='flex justify-evenly items-center w-[20%]'>
            <li className='hover:text-blue-500 hover:underline'><Link to={'/'}>Home</Link></li>
            <li className='hover:text-blue-500 hover:underline'><a href="https://github.com/samhr20">Social</a></li>
            <li className='hover:text-blue-500 hover:underline'><Link to={'/contact'}>Conatct Us</Link></li>
          </ul>
      </div>
    </div>
  );
};

export default Footer;
