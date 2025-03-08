import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CountryDetails = () => {

  const { countryName } = useParams()
  const [country, setCountry] = useState(null)
  const [loader, setLoader] = useState(true)

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = response.data[0];
      setCountry(data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    } finally {
      setLoader(false)
    }

  };

  useEffect(() => {
    fetchCountryData();
  }, [countryName])


  return (
    <>
    <div className='min-h-[500px]  dark:bg-gradient-to-tl dark:from-black dark:to-zinc-800 bg-[#F8F9FA] dark:text-white '>
    {loader ? (
        <div className="flex justify-center items-center h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className=' flex sm:flex-row flex-col justify-center items-center gap-20 py-25 px-10 '>
          <img src={country.flags.png} alt={country.name.common} className='w-full rounded-lg max-w-[270px] max-h-[200px] object-cover' />          
          <div>
            <h1 className='text-6xl font-bold mb-7'>{country.name.common}</h1>
            <p className='text-[17px] mb-2'><span className='dark:text-gray-400 font-semibold'>Capital:</span> {country.capital}</p>
            <p className='text-[17px] mb-2'><span className='dark:text-gray-400 font-semibold'>Region:</span> {country.region}</p>
            <p className='text-[17px] mb-2'><span className='dark:text-gray-400 font-semibold'>Population:</span> {country.population}</p>
            <p className='text-[17px] mb-2'><span className='dark:text-gray-400 font-semibold'>Domain:</span> {country.tld[0]}</p>
            <p className='text-[17px] mb-2'><span className='dark:text-gray-400 font-semibold'>Timezone:</span> {country.timezones[0]}</p>
          </div>
        </div>
      )}
    </div>

    </>

  )
}

export default CountryDetails