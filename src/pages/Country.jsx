import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Country = () => {
  const [country, setCountry] = useState([]);
  const [searchQuerry, setSearchQuerry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [loader, setLoader] = useState(true)

  const fetchCountryData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data;
      setCountry(data);
      setFilteredCountries(data)
    } catch (error) {
      console.error('Error fetching country data:', error);
    } finally {
      setLoader(false)
    }
  };

  useEffect(() => {
    if (searchQuerry) {
      const filter = country.filter((data) => data.name.common.toLowerCase().includes(searchQuerry.toLowerCase()))
      setFilteredCountries(filter);
    } else {
      setFilteredCountries(country);
    }

  }, [country, searchQuerry])


  useEffect(() => {
    fetchCountryData();
  }, []);

  return (

    <div className='dark:bg-black dark:text-white bg-[#F8F9FA] py-15 flex items-center justify-center flex-col gap-8 px-10'>
      <div className='w-full max-w-[1100px] mb-8'>
        <input
          type="text"
          value={searchQuerry}
          onChange={(e) => setSearchQuerry(e.target.value)}
          placeholder='Search for country'
          className='w-full p-3 rounded-lg dark:bg-[#202020] dark:text-white bg-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-2 dark:focus:ring-blue-500'
        />
      </div>

      {loader ? (
        <div className="flex justify-center items-center h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (

        <div className='flex flex-wrap justify-center items-center max-w-[1100px] gap-10 w-full'>
          {filteredCountries.map((data, index) => (
            <Link to={`/country/${data.name.common}`}>
              <div
                key={index}
                className='dark:bg-gradient-to-br dark:from-[#202020] dark:to-[#0b0b10] bg-gray-200 p-5 rounded-2xl w-[270px] sm:w-[230px] h-[350px] flex flex-col items-center justify-between'
              >
                <img
                  src={data.flags.png}
                  alt={data.name.common}
                  className='h-[120px] w-full object-cover rounded-lg'
                />
                <h3 className='text-[18px] font-bold text-center'>{data.name.common}</h3>
                <div className='text-[12px] w-full px-2'>
                  <p className='mb-1'>
                    <span className='dark:text-gray-500 font-semibold'>Population: </span>
                    {data.population.toLocaleString()}
                  </p>
                  <p className='mb-1'>
                    <span className='dark:text-gray-500 font-semibold'>Region: </span>
                    {data.region}
                  </p>
                  <p className='mb-1'>
                    <span className='dark:text-gray-500 font-semibold'>Capital: </span>
                    {data.capital}
                  </p>
                </div>
                <button className='py-1 mt-2 text-[13px] px-5 flex justify-center items-center gap-2 dark:bg-[#202020] border rounded-full cursor-pointer hover:text-white hover:bg-black'>
                  <Link to={`/country/${data.name.common}`}>Read more</Link> <FaArrowRight />
                </button>
              </div>
              </Link>
            ))}
            </div>
            
          )}
        </div>

      );
};

      export default Country;