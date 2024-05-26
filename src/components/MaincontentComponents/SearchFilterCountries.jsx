import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const SearchFilterCountries = ({ filteredCountries }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5 px-0 m-auto">
      {filteredCountries.map((country) => (
        <article key={country.name.common} className="flex flex-col rounded-lg shadow-md overflow-hidden w-full ">
          <div className='px-3 cursor-pointer'>
            <img src={country.flags.svg} alt={`${country.name.common} Flag`} onClick={() => navigate(`country-details/${country.name.common}`)} className='w-full' />
          </div>
          <section className={(theme === "light" ? 'bg-lightGray text-deepDarkBlueTX px-5 pb-5' : 'bg-deepDarkBlueBG text-white px-5 pb-5')}>
            <h2 className='my-2 font-bold'>{country.name.common}</h2>
            <p><span className='font-semibold'>Population</span>: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0]}</p>
          </section>
        </article>
      ))}
    </section>
  );
}

export default SearchFilterCountries;