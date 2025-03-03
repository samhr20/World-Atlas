import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [searchQuerry, setSearchQuerry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchCountryData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data;
      setCountry(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  useEffect(() => {
    if (searchQuerry) {
      const filter = country.filter((data) =>
        data.name.common.toLowerCase().includes(searchQuerry.toLowerCase())
      );
      setFilteredCountries(filter);
    } else {
      setFilteredCountries(country);
    }
  }, [country, searchQuerry]);

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div className="bg-black text-white py-10 flex items-center justify-center flex-col gap-8 px-5 sm:px-10">
      <div className="w-full max-w-[1100px] mb-8">
        <input
          type="text"
          value={searchQuerry}
          onChange={(e) => setSearchQuerry(e.target.value)}
          placeholder="Search for a country..."
          className="w-full p-3 rounded-lg bg-[#202020] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1100px] w-full">
        {filteredCountries.map((data, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#202020] to-[#0b0b10] p-5 rounded-2xl w-full max-w-[280px] mx-auto h-[370px] flex flex-col items-center justify-between"
          >
            <img
              src={data.flags.png}
              alt={data.name.common}
              className="h-[120px] w-full object-contain rounded-lg"
            />
            <h3 className="text-[18px] font-bold text-center">{data.name.common}</h3>
            <div className="text-[12px] w-full px-2">
              <p className="mb-1">
                <span className="text-gray-500 font-semibold">Population: </span>
                {data.population.toLocaleString()}
              </p>
              <p className="mb-1">
                <span className="text-gray-500 font-semibold">Region: </span>
                {data.region}
              </p>
              <p className="mb-1">
                <span className="text-gray-500 font-semibold">Capital: </span>
                {data.capital}
              </p>
            </div>
            <Link
              to={`/country/${data.name.common}`}
              className="py-2 mt-2 text-[13px] px-5 flex justify-center items-center gap-2 bg-[#202020] border rounded-full cursor-pointer hover:bg-black transition-all"
            >
              Read more <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
