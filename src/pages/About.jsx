import React from 'react';
import CountryData from '../api/countryData.json';

const About = () => {
  return (
    <div className='dark:bg-black dark:text-white bg-[#F8F9FA] py-15 flex items-center justify-center flex-col gap-8 px-10'>
      <h3 className='text-center text-2xl font-bold'>Here are the interesting facts we're proud of</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-[1100px] w-full'>
        {CountryData.map((data) => (
          <div key={data.id} className=' bg-gray-200 dark:bg-gradient-to-br dark:from-[#202020] dark:to-[#0b0b10] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-xl font-bold mb-3'>{data.country}</h3>
            <p className='text-sm mb-2'><span className='dark:text-gray-400 font-semibold'>Capital:</span> {data.capital}</p>
            <p className='text-sm mb-2'><span className='dark:text-gray-400 font-semibold'>Population:</span> {data.population.toLocaleString()}</p>
            <p className='text-sm mb-2'><span className='dark:text-gray-400 font-semibold'>Interesting Fact:</span> {data.interesting_fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;