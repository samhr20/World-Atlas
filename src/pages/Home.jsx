import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import About from './About';
import Contact from './Contact';


const Home = () => {
    return (
        <>
            <div className='bg-black text-white flex justify-center items-center py-25 px-10 '>
                <div className='flex justify-between items-center max-w-[1100px] gap-2 w-full'>
                    <div className='w-[52%] '>
                        <h1 className='text-5xl font-bold '>Explore the world, One Country at a time.</h1>
                        <p className='text-[12px] my-5'>Discover the history , culture , and beauty of every nation . Sort , search and filter through countries to find the details you need.</p>
                        <button className='py-1 px-5 flex justify-center items-center gap-2.5 bg-[#202020] border rounded-full cursor-pointer hover:bg-black'><Link to={'/country'}>Start Exploring</Link> <FaArrowRight /> </button>
                    </div>
                    <div>
                        <img src="world.png" alt="WorldImage" height={600} width={600} />
                    </div>
                </div>
            </div>
            <About/>
            <Contact/>
        </>
    )
}

export default Home